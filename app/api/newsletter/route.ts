import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Newsletter subscription validation schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  interests: z.array(z.string()).optional().default([]),
});

// Welcome email template for new subscribers
const WelcomeEmailTemplate = ({ email, interests }: { email: string; interests: string[] }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Welcome to my newsletter!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);">
    <!-- Header -->
    <div style="padding: 40px 40px 20px 40px; text-align: center; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 8px 8px 0 0;">
      <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold;">Welcome to the Newsletter!</h1>
      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Thanks for subscribing!</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px; color: #e5e5e5;">
      <p style="margin: 0 0 20px 0; font-size: 18px; line-height: 1.6;">Hi there! 👋</p>
      
      <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
        Thank you for subscribing to my newsletter! I'm excited to share my journey in software engineering, 
        machine learning, and technology innovation with you.
      </p>
      
      <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-radius: 8px; border: 1px solid #333333;">
        <h3 style="margin: 0 0 15px 0; color: #10b981; font-size: 18px;">What to expect:</h3>
        <ul style="margin: 0; padding-left: 20px; color: #e5e5e5; line-height: 1.8;">
          <li>🚀 Latest project updates and technical insights</li>
          <li>📚 Learning resources and tutorials</li>
          <li>💡 Industry trends and emerging technologies</li>
          <li>🎯 Career tips and internship experiences</li>
          <li>🌍 Social impact technology initiatives</li>
        </ul>
      </div>
      
      ${interests.length > 0 ? `
      <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-radius: 8px; border-left: 4px solid #10b981;">
        <h3 style="margin: 0 0 15px 0; color: #10b981; font-size: 16px;">Your interests:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${interests.map(interest => `
            <span style="display: inline-block; padding: 4px 12px; background-color: #10b981; color: white; border-radius: 20px; font-size: 14px; font-weight: 500;">
              ${interest}
            </span>
          `).join('')}
        </div>
      </div>
      ` : ''}
      
      <p style="margin: 20px 0; font-size: 16px; line-height: 1.6;">
        I typically send updates every 2-3 weeks, and I promise to keep the content valuable and relevant. 
        You can unsubscribe at any time using the link at the bottom of any newsletter.
      </p>
      
      <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-radius: 8px; border-left: 4px solid #10b981;">
        <p style="margin: 0; font-size: 14px; color: #a3a3a3; font-style: italic;">
          "The best way to predict the future is to invent it." - Alan Kay
        </p>
      </div>
      
      <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
        Looking forward to connecting with you!<br>
        <strong style="color: #10b981;">Allah-u-Abha Rodrigues</strong><br>
        <span style="color: #a3a3a3; font-size: 14px;">Software Engineer & ML Researcher</span>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="padding: 20px 40px; background-color: #0a0a0a; text-align: center; border-radius: 0 0 8px 8px;">
      <p style="margin: 0 0 10px 0; font-size: 14px; color: #666666;">
        <a href="https://allah-rodrigues.vercel.app" style="color: #10b981; text-decoration: none;">Portfolio</a> • 
        <a href="https://linkedin.com/in/allah-u-abha-rodrigues" style="color: #10b981; text-decoration: none;">LinkedIn</a> • 
        <a href="https://github.com/allahu-rodrigues" style="color: #10b981; text-decoration: none;">GitHub</a>
      </p>
      <p style="margin: 0; font-size: 12px; color: #666666;">
        You're receiving this because you subscribed to updates from Allah-u-Abha Rodrigues.<br>
        <a href="mailto:allah-u-abha.rodrigues@yale.edu?subject=Unsubscribe" style="color: #666666; text-decoration: none;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

// Admin notification for new subscriber
const AdminNotificationTemplate = ({ email, interests }: { email: string; interests: string[] }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Newsletter Subscription</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);">
    <!-- Header -->
    <div style="padding: 40px 40px 20px 40px; text-align: center; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 8px 8px 0 0;">
      <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold;">New Newsletter Subscriber</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px; color: #e5e5e5;">
      <div style="margin-bottom: 30px; padding: 20px; background-color: #1a1a1a; border-radius: 8px; border: 1px solid #333333;">
        <h2 style="margin: 0 0 15px 0; color: #3b82f6; font-size: 18px;">Subscriber Details</h2>
        <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
        <p style="margin: 0; font-size: 14px; color: #a3a3a3;">Subscribed on: ${new Date().toLocaleString()}</p>
      </div>
      
      ${interests.length > 0 ? `
      <div style="margin-bottom: 30px; padding: 20px; background-color: #1a1a1a; border-radius: 8px; border: 1px solid #333333;">
        <h2 style="margin: 0 0 15px 0; color: #3b82f6; font-size: 18px;">Interests</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${interests.map(interest => `
            <span style="display: inline-block; padding: 4px 12px; background-color: #3b82f6; color: white; border-radius: 20px; font-size: 14px; font-weight: 500;">
              ${interest}
            </span>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </div>
    
    <!-- Footer -->
    <div style="padding: 20px 40px; background-color: #0a0a0a; text-align: center; border-radius: 0 0 8px 8px;">
      <p style="margin: 0; font-size: 14px; color: #666666;">
        Newsletter Subscription Notification
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
    const validatedData = newsletterSchema.parse(body);
    const { email, interests } = validatedData;

    // Send welcome email to the subscriber
    const welcomeEmailResponse = await resend.emails.send({
      from: 'Allah-u-Abha Rodrigues <newsletter@allahurodrigues.com>',
      to: [email],
      subject: 'Welcome to my newsletter! 🚀',
      html: WelcomeEmailTemplate({ email, interests }),
    });

    // Send notification to admin
    const adminEmailResponse = await resend.emails.send({
      from: 'Newsletter System <newsletter@allahurodrigues.com>',
      to: ['allah-u-abha.rodrigues@yale.edu'],
      subject: `New Newsletter Subscriber: ${email}`,
      html: AdminNotificationTemplate({ email, interests }),
    });

    // Check for errors in email sending
    if (welcomeEmailResponse.error || adminEmailResponse.error) {
      console.error('Newsletter email sending error:', {
        welcomeEmailError: welcomeEmailResponse.error,
        adminEmailError: adminEmailResponse.error,
      });
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to process subscription',
          details: {
            welcomeEmail: welcomeEmailResponse.error ? 'Failed' : 'Sent',
            adminEmail: adminEmailResponse.error ? 'Failed' : 'Sent',
          }
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for a welcome message.',
        emailIds: {
          welcomeEmail: welcomeEmailResponse.data?.id,
          adminEmail: adminEmailResponse.data?.id,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email address',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
} 