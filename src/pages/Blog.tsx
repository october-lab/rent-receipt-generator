import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

const blogPosts = [
    {
        id: 'hra-guide-2024',
        title: 'Complete Guide to HRA Exemption in India (2024)',
        excerpt: 'Learn everything about House Rent Allowance (HRA) exemption, calculations, and documentation requirements for the financial year 2024.',
        date: '2024-01-15',
        readTime: '6 min read'
    },
    {
        id: 'rent-receipts-importance',
        title: 'Why Rent Receipts are Crucial for Tax Saving',
        excerpt: 'Understand the importance of maintaining proper rent receipts and how they can help you save taxes through HRA claims.',
        date: '2024-01-10',
        readTime: '4 min read'
    },
    {
        id: 'pan-requirement-rent',
        title: 'PAN Card Requirement in Rent Receipts',
        excerpt: 'Detailed explanation of when and why PAN details are required in rent receipts, and the implications for tax filing.',
        date: '2024-01-05',
        readTime: '5 min read'
    },
    {
        id: 'hra-documentation',
        title: 'HRA Tax Exemption: Essential Documents',
        excerpt: 'Learn about the mandatory documents needed for HRA claims, including when you need rent agreements and receipts for tax purposes.',
        date: '2024-01-20',
        readTime: '6 min read'
    }
];

export function Blog() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            
            <div className="flex-grow">
                <div className="max-w-screen-md mx-auto py-12 px-4">
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
                        Latest Articles
                    </h1>

                    <div className="space-y-12">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className="block group"
                            >
                                <article className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-coral-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-8 h-8 rounded-full bg-coral-100 flex items-center justify-center">
                                            <span className="text-coral-600 text-sm font-medium">RR</span>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <span>Rent Receipt Generator</span>
                                            <span>·</span>
                                            <time>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                            <span>·</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 