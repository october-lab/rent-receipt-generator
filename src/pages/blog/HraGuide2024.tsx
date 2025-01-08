import React, { useEffect } from 'react';
import { BlogPost } from '../../components/BlogPost';
import { trackEvent } from '../../utils/analytics';
import { useNavigate } from 'react-router-dom';

export function HraGuide2024() {
    const navigate = useNavigate();

    useEffect(() => {
        trackEvent('blog_post_view', {
            post_id: 'hra-guide-2024',
            post_title: 'Complete Guide to HRA Exemption in India (2024)'
        });
    }, []);

    const handleGeneratorClick = (e: React.MouseEvent) => {
        e.preventDefault();
        trackEvent('generator_cta_click', {
            post_id: 'hra-guide-2024',
            post_title: 'Complete Guide to HRA Exemption in India (2024)',
            source: 'inline_link'
        });
        navigate('/');
        window.scrollTo(0, 0);
    };

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
                        <a
                            href="/"
                            onClick={handleGeneratorClick}
                            className="text-coral-600 hover:text-coral-700"
                        >
                            free rent receipt generator
                        </a>
                    </p>
                </>
            }
        />
    );
} 