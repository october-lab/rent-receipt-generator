import React, { useState } from 'react';
import { RentDetails, Step } from './types';
import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import { RentDetailsForm } from './components/RentDetailsForm';
import { RentReceipt } from './components/RentReceipt';
import { IndianRupeeIcon, Github } from 'lucide-react';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Link } from 'react-router-dom';
import { CookieBanner } from './components/CookieBanner';

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
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Free Rent Receipt Generator
            </h1>
            <p className="text-sm text-gray-600">
              Generate professional rent receipts for your HRA claims and tax documentation
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 md:p-8 mb-12">
            {renderStep()}
          </div>

          <div className="bg-white shadow rounded-lg p-6 md:p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">How to Use the Rent Receipt Generator</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Enter your details and landlord information</li>
                <li>Specify the rent amount and duration</li>
                <li>Add PAN and transaction details if available</li>
                <li>Preview and download your professional rent receipts</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with additional content */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Rent Receipts</h3>
              <p className="text-gray-600">
                Rent receipts are essential documents for claiming House Rent Allowance (HRA) benefits in India. 
                They serve as proof of rent payment and are required during tax filing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Notes</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Keep your rent receipts safe for tax filing</li>
                <li>Include PAN details for rent payments above ₹1 lakh per year</li>
                <li>Maintain proper transaction records for verification</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Rent Receipt Generator. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
                <Link to="/about" className="text-sm text-gray-500 hover:text-gray-900">
                  About
                </Link>
                <a href="mailto:support@rentreceiptgenerator.in" 
                   className="text-sm text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add the cookie banner */}
      <CookieBanner />
    </div>
  );
}

export default App;