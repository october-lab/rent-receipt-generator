import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

interface BlogPostProps {
    title: string;
    date: string;
    content: React.ReactNode;
}

export function BlogPost({ title, date, content }: BlogPostProps) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            
            <div className="flex-grow">
                {/* Article Header */}
                <header className="border-b border-gray-200">
                    <div className="max-w-screen-md mx-auto py-12 px-4">
                        <div className="mb-8">
                            <time className="text-sm text-gray-500">
                                {new Date(date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                            {title}
                        </h1>
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center">
                                <span className="text-coral-600 font-medium">RR</span>
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Rent Receipt Generator</div>
                                <div className="text-sm text-gray-500">5 min read</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <main className="max-w-screen-md mx-auto px-4 py-12">
                    <article className="prose prose-lg max-w-none">
                        <div className="prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 
                                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-8
                                      prose-a:text-coral-600 prose-a:no-underline hover:prose-a:text-coral-700
                                      prose-li:text-gray-700 prose-li:leading-relaxed
                                      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6">
                            {content}
                        </div>
                    </article>

                    {/* Call to Action */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="bg-coral-50 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Generate Your Rent Receipts Now
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Create professional rent receipts instantly with our free tool. Perfect for HRA claims and tax documentation.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-coral-600 rounded-lg hover:bg-coral-700 transition-colors"
                            >
                                Try Free Generator
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Related Articles */}
                <div className="bg-gray-50 py-16 mt-16">
                    <div className="max-w-screen-md mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Link to="/blog/rent-receipts-importance" className="block">
                                <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-bold text-gray-900 mb-2">Why Rent Receipts are Crucial for Tax Saving</h3>
                                    <p className="text-gray-600 text-sm">Understanding the importance of proper rent receipt documentation...</p>
                                </article>
                            </Link>
                            <Link to="/blog/pan-requirement-rent" className="block">
                                <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-bold text-gray-900 mb-2">PAN Card Requirement in Rent Receipts</h3>
                                    <p className="text-gray-600 text-sm">Learn when and why you need to include PAN details in your rent receipts...</p>
                                </article>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 