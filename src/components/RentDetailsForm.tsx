import React from 'react';
import { RentDetails } from '../types';
import { ArrowLeft, RefreshCw, ChevronDown } from 'lucide-react';
import { format, startOfYear, endOfYear, setMonth, setDate } from 'date-fns';
import { TransactionIdInput } from './TransactionIdInput';

interface Props {
  details: RentDetails;
  onUpdate: (details: Partial<RentDetails>) => void;
  onBack: () => void;
  onNext: () => void;
}

export function RentDetailsForm({ details, onUpdate, onBack, onNext }: Props) {
  // Get current financial year dates
  const getCurrentFinancialYear = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    
    // If current month is January to March (0-2), use previous year as start
    const fiscalYearStart = currentMonth < 3 
      ? new Date(currentYear - 1, 3, 1)  // April 1st of previous year
      : new Date(currentYear, 3, 1);     // April 1st of current year
    
    const fiscalYearEnd = new Date(fiscalYearStart.getFullYear() + 1, 2, 31); // March 31st of next year

    return {
      start: fiscalYearStart,
      end: fiscalYearEnd
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleReset = () => {
    const { start, end } = getCurrentFinancialYear();
    onUpdate({
      rentFrom: start,
      rentTill: end,
      paymentMethod: 'UPI',
      transactionIds: {}
    });
  };

  const handleTransactionIdUpdate = (month: string, id: string) => {
    onUpdate({
      transactionIds: {
        ...details.transactionIds,
        [month]: id
      }
    });
  };

  // Set default dates when component mounts if not already set
  React.useEffect(() => {
    if (!details.rentFrom || !details.rentTill) {
      const { start, end } = getCurrentFinancialYear();
      onUpdate({
        rentFrom: start,
        rentTill: end
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rent from
          </label>
          <input
            type="date"
            required
            value={details.rentFrom ? format(details.rentFrom, 'yyyy-MM-dd') : ''}
            onChange={(e) => onUpdate({ rentFrom: new Date(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rent till
          </label>
          <input
            type="date"
            required
            value={details.rentTill ? format(details.rentTill, 'yyyy-MM-dd') : ''}
            onChange={(e) => onUpdate({ rentTill: new Date(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment method
          </label>
          <div className="relative">
            <select
              value={details.paymentMethod}
              onChange={(e) => onUpdate({
                paymentMethod: e.target.value as RentDetails['paymentMethod'],
                transactionIds: {}
              })}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500 appearance-none"
            >
              <option value="UPI">UPI</option>
              <option value="BANK_TRANSFER">Bank Transfer</option>
              <option value="CASH">Cash</option>
            </select>
            <ChevronDown className="absolute right-3 top-[50%] -translate-y-[50%] h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Receipt Type
          </label>
          <div className="relative">
            <select
              value={details.receiptType}
              onChange={(e) => onUpdate({
                receiptType: e.target.value as RentDetails['receiptType']
              })}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500 appearance-none"
            >
              <option value="MONTHLY">Monthly Receipts</option>
              <option value="CONSOLIDATED">Consolidated Receipt</option>
            </select>
            <ChevronDown className="absolute right-3 top-[50%] -translate-y-[50%] h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <TransactionIdInput
          rentFrom={details.rentFrom}
          rentTill={details.rentTill}
          transactionIds={details.transactionIds}
          includeTransactionIds={details.paymentMethod !== 'CASH' && details.includeTransactionIds}
          onUpdateTransactionId={(month, id) => {
            onUpdate({
              transactionIds: {
                ...details.transactionIds,
                [month]: id
              }
            });
          }}
          onToggleTransactionIds={(value) => {
            onUpdate({ includeTransactionIds: value });
          }}
          disabled={details.paymentMethod === 'CASH'}
        />
      </div>

      <div className="flex justify-between pt-4">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </button>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-coral-500 rounded-md hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
        >
          Preview
        </button>
      </div>
    </form>
  );
}