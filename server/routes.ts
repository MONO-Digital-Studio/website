import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post(
    "/api/contact",
    async (req, res) => {
      try {
        // Validate request body
        const validatedData = contactFormSchema.parse(req.body);
        
        // Here you would typically save the contact form data or send an email
        // For this example, we'll just return a success response
        
        // Add slight delay to simulate processing
        await new Promise(resolve => setTimeout(resolve, 500));
        
        res.status(200).json({ 
          success: true, 
          message: "Contact form submitted successfully" 
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ 
            success: false, 
            message: "Invalid form data", 
            errors: error.errors 
          });
        }
        
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong while processing your request" 
        });
      }
    }
  );

  const httpServer = createServer(app);

  return httpServer;
}
