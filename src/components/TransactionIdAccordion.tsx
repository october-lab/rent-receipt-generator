import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { format, eachMonthOfInterval } from 'date-fns';

interface Props {
  rentFrom: Date | null;
  rentTill: Date | null;
  transactionIds: { [key: string]: string };
  onUpdateTransactionId: (month: string, id: string) => void;
}

export function TransactionIdAccordion({ rentFrom, rentTill, transactionIds, onUpdateTransactionId }: Props) {
  const [openMonth, setOpenMonth] = React.useState<string | null>(null);

  if (!rentFrom || !rentTill) return null;

  const months = eachMonthOfInterval({
    start: rentFrom,
    end: rentTill
  });

  return (
    <div className="space-y-2">
      {months.map((month) => {
        const monthKey = format(month, 'yyyy-MM');
        const isOpen = openMonth === monthKey;

        return (
          <div key={monthKey} className="border rounded-md">
            <button
              type="button"
              className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenMonth(isOpen ? null : monthKey)}
            >
              <span className="font-medium">{format(month, 'MMMM yyyy')}</span>
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
              <div className="px-4 py-3 border-t">
                <input
                  type="text"
                  value={transactionIds[monthKey] || ''}
                  onChange={(e) => onUpdateTransactionId(monthKey, e.target.value)}
                  placeholder="Enter transaction ID"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}