"use client";
import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function TermsModal({ isOpen, onClose, onAccept }: TermsModalProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    if (isAccepted) {
      onAccept();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold text-lg">Before downloading our app, please read and accept our terms:</p>
            
            <div className="space-y-3">
              <p><strong>1. Data Collection:</strong> We collect personal information to provide our services effectively.</p>
              <p><strong>2. Location Access:</strong> We need location permission to show nearby food deals.</p>
              <p><strong>3. Payment Processing:</strong> Your payment information is securely processed through trusted providers.</p>
              <p><strong>4. Notifications:</strong> We may send you notifications about deals and updates.</p>
              <p><strong>5. Account Responsibility:</strong> You are responsible for maintaining the security of your account.</p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> By downloading the app, you agree to our full Terms of Service and Privacy Policy. 
                You can read the complete documents by clicking the links below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                href="/terms" 
                className="text-blue-600 hover:text-blue-800 underline text-sm"
                target="_blank"
              >
                Read Full Terms of Service
              </Link>
              <Link 
                href="/privacy" 
                className="text-blue-600 hover:text-blue-800 underline text-sm"
                target="_blank"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => setIsAccepted(!isAccepted)}
              className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                isAccepted 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {isAccepted && <CheckCircle className="w-4 h-4" />}
            </button>
            <label className="text-sm text-gray-700 cursor-pointer">
              I have read and agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAccept}
              disabled={!isAccepted}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                isAccepted
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Accept & Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
