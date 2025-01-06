import React from 'react';
import { RentDetails } from '../types';
import { RefreshCw } from 'lucide-react';

interface Props {
  details: RentDetails;
  onUpdate: (details: Partial<RentDetails>) => void;
  onNext: () => void;
}

export function PersonalDetailsForm({ details, onUpdate, onNext }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleReset = () => {
    onUpdate({
      tenantName: '',
      landlordName: '',
      address: '',
      landlordPan: '',
      monthlyRent: 0
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            required
            value={details.tenantName}
            onChange={(e) => onUpdate({ tenantName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landlord's name
          </label>
          <input
            type="text"
            required
            value={details.landlordName}
            onChange={(e) => onUpdate({ landlordName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
            placeholder="Enter landlord's name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            House address
          </label>
          <textarea
            required
            value={details.address}
            onChange={(e) => onUpdate({ address: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
            placeholder="Enter complete address"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Owner's PAN (Optional)
          </label>
          <input
            type="text"
            value={details.landlordPan}
            onChange={(e) => onUpdate({ landlordPan: e.target.value.toUpperCase() })}
            placeholder="ABCDE1234F"
            maxLength={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly rent
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">₹</span>
            <input
              type="number"
              required
              value={details.monthlyRent || ''}
              onChange={(e) => onUpdate({ monthlyRent: Number(e.target.value) })}
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="Enter monthly rent amount"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset
        </button>
        <button
          type="submit"
          className="px-6 py-2 text-sm font-medium text-white bg-coral-500 rounded-md hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
        >
          Next
        </button>
      </div>
    </form>
  );
}