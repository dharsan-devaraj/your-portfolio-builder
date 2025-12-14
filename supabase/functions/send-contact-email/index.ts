import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    console.log("Received contact form submission:", { name, email });

    // Send notification email to DHARSAN
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["dharsand2006@gmail.com"],
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: 'JetBrains Mono', monospace; background-color: #0d0d0d; color: #e5e5e5; padding: 40px; max-width: 600px;">
            <h1 style="color: #ffffff; font-size: 24px; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px;">
              New Contact Form Submission
            </h1>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #808080; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">From</p>
              <p style="font-size: 16px; margin: 0;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #808080; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">Email</p>
              <p style="font-size: 16px; margin: 0;"><a href="mailto:${email}" style="color: #e5e5e5;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #808080; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">Message</p>
              <div style="background-color: #1a1a1a; padding: 20px; border-left: 2px solid #808080;">
                <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              This message was sent from your portfolio website.
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email response:", notificationData);

    // Send confirmation email to the sender
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DHARSAN D <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family: 'Space Grotesk', sans-serif; background-color: #0d0d0d; color: #e5e5e5; padding: 40px; max-width: 600px;">
            <h1 style="color: #ffffff; font-size: 32px; margin-bottom: 20px;">
              Hey ${name}!
            </h1>
            
            <p style="font-size: 16px; line-height: 1.8; color: #b3b3b3;">
              Thanks for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #b3b3b3;">
              In the meantime, feel free to connect with me on LinkedIn.
            </p>
            
            <a href="https://www.linkedin.com/in/dharsand0678" 
               style="display: inline-block; margin-top: 20px; padding: 12px 24px; background-color: transparent; border: 1px solid #e5e5e5; color: #e5e5e5; text-decoration: none; font-size: 14px; letter-spacing: 1px;">
              Connect on LinkedIn →
            </a>
            
            <p style="color: #666; font-size: 12px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
              Best regards,<br>
              DHARSAN D<br>
              Full Stack Developer
            </p>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();
    console.log("Confirmation email response:", confirmationData);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
