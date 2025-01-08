import React from 'react';

export function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8 text-center">
                    About <span className="text-coral-600">Rent Receipt</span> Generator
                </h1>

                <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Easy to Use</h3>
                        <p className="text-gray-600 leading-relaxed">Generate rent receipts in minutes with our simple form. Perfect for salaried employees claiming HRA benefits.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Professional Format</h3>
                        <p className="text-gray-600 leading-relaxed">Includes all necessary details like PAN, transaction IDs, and proper formatting accepted by tax authorities.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Instant Download</h3>
                        <p className="text-gray-600 leading-relaxed">Download your receipts instantly in PDF format. Generate monthly or consolidated receipts as needed.</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We aim to simplify the process of generating professional rent receipts for Indian taxpayers claiming HRA benefits.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
                        <ul className="space-y-3 text-gray-600">
                            {[
                                'Free and easy-to-use rent receipt generator',
                                'Professional format accepted by tax authorities',
                                'Support for PAN and transaction details',
                                'Monthly and consolidated receipt options',
                                'Automatic financial year calculations'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-coral-500 mr-2">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            For support or inquiries, reach out to us at:{' '}
                            <a
                                href="mailto:support@rentreceiptgenerator.in"
                                className="text-coral-600 hover:text-coral-700 font-medium"
                            >
                                support@rentreceiptgenerator.in
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
} 