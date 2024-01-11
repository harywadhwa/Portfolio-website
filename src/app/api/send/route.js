// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend object first
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// Now create the API key if needed
resend.apiKeys.create({ name: 'myproductionkey' });

export async function POST() {
  try {   
    const data = await resend.emails.send({
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}` 
      },
      from: fromEmail,
      to: ['hwadhwa050@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <p>
            Email Body
          </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

