import axios from 'axios';
import { EmailContent } from './contact-form';

const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;

export const sendEmail = async (emailContent: EmailContent) => {
    const { name, email, phone, preferredContact, quickbooks, revenue, service, taxFiling } = emailContent;
    const htmlContent = `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
        <p><strong>QuickBooks:</strong> ${quickbooks}</p>
        <p><strong>Revenue:</strong> ${revenue}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Tax Filing:</strong> ${taxFiling}</p>
    `;
    try {
        const response = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
                sender: {
                    name: 'Tanner Helms',
                    email: 'tannerhelms01@gmail.com'
                },
                to: [
                    {
                        name: 'Tanner Helms',
                        email: 'tanner.helms@tarifflo.com'
                    },
                    {
                        name: 'Superior Cloud Accounting',
                        email: 'superior.cloud.acctg@gmail.com'
                    }
                ],
                subject: 'Superior - New Contact Form Submission',
                htmlContent: htmlContent,
            },
            {
                headers: {
                    'accept': 'application/json',
                    'api-key': apiKey,
                    'content-type': 'application/json'
                }
            }
        );
        return 'success'
    } catch (error) {
        return 'error'
    }
};