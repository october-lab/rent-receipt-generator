import React from 'react';
import { BlogPost } from '../../components/BlogPost';

export function HraGuide2024() {
    return (
        <BlogPost
            title="Complete Guide to HRA Exemption in India (2024)"
            date="2024-01-15"
            content={
                <>
                    <h2>Understanding HRA Exemption</h2>
                    <p>
                        House Rent Allowance (HRA) is a significant component of your salary structure that can help you save taxes...
                    </p>

                    <h2>Calculation of HRA Exemption</h2>
                    <p>
                        The HRA exemption is calculated as the minimum of:
                    </p>
                    <ul>
                        <li>Actual HRA received from employer</li>
                        <li>50% of basic salary for metro cities (40% for non-metros)</li>
                        <li>Actual rent paid minus 10% of basic salary</li>
                    </ul>

                    <h2>Required Documentation</h2>
                    <p>
                        To claim HRA exemption, you need to maintain proper documentation including:
                    </p>
                    <ul>
                        <li>Monthly rent receipts</li>
                        <li>Landlord&apos;s PAN (for rent exceeding ₹1 lakh per year)</li>
                        <li>Rental agreement (recommended)</li>
                    </ul>

                    <p>
                        Generate professional rent receipts instantly using our{' '}
                        <a href="https://rentreceiptgenerator.in" className="text-coral-600 hover:text-coral-700">
                            free rent receipt generator
                        </a>
                    </p>
                </>
            }
        />
    );
} 