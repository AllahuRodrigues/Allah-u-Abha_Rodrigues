import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

// User confirmation email template
const UserEmailTemplate = ({ name, subject }: { name: string; subject: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for reaching out</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="background: linear-gradient(135deg, #8b5cf6, #3b82f6); padding: 20px; border-radius: 16px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: white;">Allah-u-Abha Rodrigues</h1>
        <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 16px;">Software Engineer & ML Researcher</p>
      </div>
    </div>

    <!-- Main Content -->
    <div style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
      <h2 style="margin: 0 0 20px 0; font-size: 24px; color: #ffffff;">Thank you for reaching out!</h2>
      
      <p style="margin: 0 0 16px 0; line-height: 1.6; color: rgba(255,255,255,0.9);">
        Hi ${name},
      </p>
      
      <p style="margin: 0 0 16px 0; line-height: 1.6; color: rgba(255,255,255,0.9);">
        Thank you for your message regarding "<strong style="color: #8b5cf6;">${subject}</strong>". I've received your inquiry and will get back to you within 24-48 hours.
      </p>
      
      <p style="margin: 0 0 16px 0; line-height: 1.6; color: rgba(255,255,255,0.9);">
        I'm excited to learn more about your project and explore how we can work together to create something amazing.
      </p>
      
      <div style="background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1)); border: 1px solid rgba(139,92,246,0.2); border-radius: 12px; padding: 20px; margin: 24px 0;">
        <p style="margin: 0; font-style: italic; color: rgba(255,255,255,0.8); text-align: center;">
          "Building the future through innovative software engineering, machine learning research, and scalable DevOps solutions."
        </p>
      </div>
    </div>

    <!-- Social Links -->
    <div style="text-align: center; margin-bottom: 32px;">
      <p style="margin: 0 0 16px 0; color: rgba(255,255,255,0.7);">Connect with me:</p>
      <div style="display: inline-block;">
        <a href="https://linkedin.com/in/allah-u-abha-rodrigues" style="display: inline-block; margin: 0 8px; padding: 8px 16px; background-color: rgba(255,255,255,0.1); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px;">LinkedIn</a>
        <a href="https://github.com/allahu-rodrigues" style="display: inline-block; margin: 0 8px; padding: 8px 16px; background-color: rgba(255,255,255,0.1); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px;">GitHub</a>
        <a href="https://allah-rodrigues.vercel.app" style="display: inline-block; margin: 0 8px; padding: 8px 16px; background-color: rgba(255,255,255,0.1); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px;">Portfolio</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.1);">
      <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 14px;">
        Best regards,<br>
        Allah-u-Abha Rodrigues<br>
        <span style="color: #8b5cf6;">allah-u-abha.rodrigues@yale.edu</span>
      </p>
    </div>
  </div>
</body>
</html>
`;

// Admin notification email template
const AdminEmailTemplate = ({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 20px; border-radius: 16px; margin-bottom: 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: bold; color: white;">New Contact Form Submission</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9);">Portfolio Website</p>
    </div>

    <!-- Contact Details -->
    <div style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px; margin-bottom: 24px;">
      <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #10b981;">Contact Information</h2>
      
      <div style="margin-bottom: 16px;">
        <strong style="color: #ffffff;">Name:</strong>
        <span style="color: rgba(255,255,255,0.9); margin-left: 8px;">${name}</span>
      </div>
      
      <div style="margin-bottom: 16px;">
        <strong style="color: #ffffff;">Email:</strong>
        <a href="mailto:${email}" style="color: #10b981; text-decoration: none; margin-left: 8px;">${email}</a>
      </div>
      
      <div style="margin-bottom: 20px;">
        <strong style="color: #ffffff;">Subject:</strong>
        <span style="color: rgba(255,255,255,0.9); margin-left: 8px;">${subject}</span>
      </div>
      
      <div>
        <strong style="color: #ffffff; display: block; margin-bottom: 8px;">Message:</strong>
        <div style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; line-height: 1.6; color: rgba(255,255,255,0.9);">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div style="text-align: center;">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 0 8px;">
        Reply Directly
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 32px;">
      <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 14px;">
        Sent from your portfolio contact form<br>
        <span style="color: #10b981;">allah-rodrigues.vercel.app</span>
      </p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    const { name, email, subject, message } = validatedData;

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Allah-u-Abha Rodrigues <noreply@resend.dev>',
      to: [email],
      subject: `Thank you for reaching out - ${subject}`,
      html: UserEmailTemplate({ name, subject }),
    });

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'Portfolio Contact Form <noreply@resend.dev>',
      to: ['allah-u-abha.rodrigues@yale.edu'],
      subject: `New Contact: ${subject} - from ${name}`,
      html: AdminEmailTemplate({ name, email, subject, message }),
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you within 24-48 hours.',
      userEmailId: userEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Please check your input and try again.',
        details: error.errors.map(err => `${err.path.join('.')}: ${err.message}`),
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Something went wrong. Please try again later.',
    }, { status: 500 });
  }
} 