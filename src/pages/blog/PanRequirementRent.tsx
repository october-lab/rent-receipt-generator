import React from 'react';
import { BlogPost } from '../../components/BlogPost';

export function PanRequirementRent() {
    return (
        <BlogPost
            title="PAN Card Requirement in Rent Receipts"
            date="2024-01-05"
            content={
                <>
                    <h2>When is PAN Required in Rent Receipts?</h2>
                    <p>
                        According to Income Tax regulations, if your annual rent payments exceed ₹1 lakh,
                        you must collect your landlord's PAN (Permanent Account Number) details. This requirement
                        is crucial for tax compliance and verification purposes.
                    </p>

                    <h2>Legal Framework and Requirements</h2>
                    <p>
                        The requirement for PAN details is mandated under Section 139AA of the Income Tax Act.
                        This helps the tax department track high-value rental transactions and ensure proper tax compliance
                        from both tenants and landlords.
                    </p>

                    <h2>Calculating the ₹1 Lakh Threshold</h2>
                    <ul>
                        <li>Monthly rent of ₹8,334 or more</li>
                        <li>Quarterly rent of ₹25,000 or more</li>
                        <li>Half-yearly rent of ₹50,000 or more</li>
                        <li>Annual rent totaling ₹1,00,000 or more</li>
                    </ul>

                    <h2>What If Landlord Refuses to Share PAN?</h2>
                    <p>
                        If your landlord refuses to share their PAN, you should:
                    </p>
                    <ul>
                        <li>Get a written declaration from the landlord stating the reason</li>
                        <li>Consider alternative accommodation if possible</li>
                        <li>Maintain proper documentation of your attempts to obtain PAN</li>
                        <li>Consult a tax professional for guidance</li>
                    </ul>

                    <h2>Documentation Best Practices</h2>
                    <p>
                        To ensure smooth HRA claims:
                    </p>
                    <ul>
                        <li>Verify the PAN details provided by your landlord</li>
                        <li>Keep copies of rent receipts with PAN details</li>
                        <li>Maintain digital records of all communications</li>
                        <li>Use proper rent receipt formats including PAN information</li>
                    </ul>
                </>
            }
        />
    );
} 