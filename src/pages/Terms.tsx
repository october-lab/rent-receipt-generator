import React from 'react';

export function Terms() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8 text-center">
                    Terms of Service
                </h1>

                <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
                    {[
                        {
                            title: "Acceptance of Terms",
                            content: "By using our rent receipt generator, you agree to these terms of service."
                        },
                        {
                            title: "Use of Service",
                            content: "Our service is provided free of charge for generating rent receipts. You agree to:",
                            list: [
                                "Provide accurate information",
                                "Use the service for legitimate rent receipt purposes",
                                "Not attempt to misuse or exploit the service"
                            ]
                        },
                        {
                            title: "Disclaimer",
                            content: "The rent receipts generated are based on the information you provide. We are not responsible for:",
                            list: [
                                "Accuracy of the information you enter",
                                "Legal compliance of the receipts in your jurisdiction",
                                "Any tax-related issues or disputes"
                            ]
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