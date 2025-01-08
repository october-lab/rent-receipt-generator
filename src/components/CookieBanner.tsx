import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 z-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600 text-center md:text-left">
                    We use Google Analytics to improve your browsing experience.
                    By continuing to use this site, you agree to our use of analytics cookies.
                    <a
                        href="/privacy"
                        className="text-coral-600 hover:text-coral-700 ml-1 font-medium"
                    >
                        Learn more
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm font-medium text-white bg-coral-500 rounded-md hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 text-gray-400 hover:text-gray-500"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
} 