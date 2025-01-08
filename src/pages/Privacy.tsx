import React from 'react';

export function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8 text-center">
                    Privacy Policy
                </h1>

                <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
                    {[
                        {
                            title: "Information We Collect",
                            content: "We do not store any of the information you enter to generate rent receipts. All processing is done in your browser."
                        },
                        {
                            title: "Google Analytics",
                            content: "We use Google Analytics to understand how our website is being used. This service may collect:",
                            list: [
                                "Pages visited and time spent",
                                "Device and browser information",
                                "Geographic location (country/city level)"
                            ]
                        },
                        {
                            title: "Cookies",
                            content: "We use essential cookies for analytics purposes only. No personal information is stored in cookies."
                        },
                        {
                            title: "Data Security",
                            content: "Your rent receipt data is processed entirely in your browser and is not transmitted to or stored on our servers."
                        }
                    ].map((section, index) => (
                        <section key={index} className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                            {section.list && (
                                <ul className="space-y-2 text-gray-600 ml-6">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-coral-500 mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
} 