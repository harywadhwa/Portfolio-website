// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
resend.apiKeys.create({ name: 'Production' });



const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {   
    const data = await resend.emails.send({
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`
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
