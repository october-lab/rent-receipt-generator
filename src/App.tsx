import React, { useState } from 'react';
import { RentDetails, Step } from './types';
import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import { RentDetailsForm } from './components/RentDetailsForm';
import { RentReceipt } from './components/RentReceipt';
import { IndianRupeeIcon, Github } from 'lucide-react';
import { GoogleAnalytics } from './components/GoogleAnalytics';

const initialDetails: RentDetails = {
  tenantName: '',
  landlordName: '',
  address: '',
  landlordPan: '',
  monthlyRent: 0,
  rentFrom: null,
  rentTill: null,
  paymentMethod: 'UPI',
  receiptType: 'MONTHLY',
  includeTransactionIds: false,
  transactionIds: {}
};

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('PERSONAL_DETAILS');
  const [details, setDetails] = useState<RentDetails>(initialDetails);

  const updateDetails = (newDetails: Partial<RentDetails>) => {
    setDetails((prev) => ({ ...prev, ...newDetails }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'PERSONAL_DETAILS':
        return (
          <PersonalDetailsForm
            details={details}
            onUpdate={updateDetails}
            onNext={() => setCurrentStep('RENT_DETAILS')}
          />
        );
      case 'RENT_DETAILS':
        return (
          <RentDetailsForm
            details={details}
            onUpdate={updateDetails}
            onBack={() => setCurrentStep('PERSONAL_DETAILS')}
            onNext={() => setCurrentStep('PREVIEW')}
          />
        );
      case 'PREVIEW':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentStep('RENT_DETAILS')}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
              >
                Back to Edit
              </button>
            </div>
            <div className="h-[800px]">
              <RentReceipt 
                details={details} 
                onBack={() => setCurrentStep('RENT_DETAILS')}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <GoogleAnalytics measurementId={import.meta.env.VITE_GA_MEASUREMENT_ID} />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <IndianRupeeIcon className="h-12 w-12 text-coral-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Rent Receipt Generator</h1>
            <p className="mt-2 text-sm text-gray-600">
              Generate professional rent receipts for your tax documentation
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 md:p-8">
            {renderStep()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Rent Receipt Generator. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;