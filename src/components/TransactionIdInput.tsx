import React from 'react';
import { format, eachMonthOfInterval } from 'date-fns';

interface Props {
  rentFrom: Date | null;
  rentTill: Date | null;
  transactionIds: { [key: string]: string };
  includeTransactionIds: boolean;
  onUpdateTransactionId: (month: string, id: string) => void;
  onToggleTransactionIds: (value: boolean) => void;
  disabled?: boolean;
}

export function TransactionIdInput({
  rentFrom,
  rentTill,
  transactionIds,
  includeTransactionIds,
  onUpdateTransactionId,
  onToggleTransactionIds,
  disabled = false
}: Props) {
  if (!rentFrom || !rentTill) return null;

  const months = eachMonthOfInterval({
    start: rentFrom,
    end: rentTill
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={includeTransactionIds}
            onChange={(e) => onToggleTransactionIds(e.target.checked)}
            disabled={disabled}
          />
          <div className={`w-11 h-6 ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 peer-focus:ring-4 peer-focus:ring-coral-300 cursor-pointer'} rounded-full peer 
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute 
            after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 
            after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
            peer-checked:bg-coral-500`}
          ></div>
        </label>
        <span className={`text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          Include Transaction IDs
          {disabled && <span className="ml-2 text-xs">(Not available for cash payments)</span>}
        </span>
      </div>

      {includeTransactionIds && !disabled && (
        <div className="space-y-4 mt-4">
          {months.map((month) => {
            const monthKey = format(month, 'yyyy-MM');
            return (
              <div key={monthKey} className="flex items-center gap-4">
                <span className="w-32 text-sm font-medium text-gray-700">
                  {format(month, 'MMMM yyyy')}:
                </span>
                <input
                  type="text"
                  value={transactionIds[monthKey] || ''}
                  onChange={(e) => onUpdateTransactionId(monthKey, e.target.value)}
                  placeholder="Enter transaction ID"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}