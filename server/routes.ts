import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { contactFormSchema } from "../shared/schema";
import { sendEmailViaUnisender, subscribeToNewsletter } from "./unisender";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post(
    "/api/contact",
    async (req, res) => {
      try {
        // Validate request body
        const validatedData = contactFormSchema.parse(req.body);
        
        // Отправляем email через Unisender API
        const success = await sendEmailViaUnisender(validatedData);
        
        // Возвращаем успешный ответ клиенту
        if (success) {
          res.status(200).json({ 
            success: true, 
            message: "Сообщение успешно отправлено",
            redirectToTelegram: false  // Не перенаправляем на Telegram
          });
        } else {
          res.status(500).json({ 
            success: false, 
            message: "Не удалось отправить сообщение" 
          });
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ 
            success: false, 
            message: "Некорректные данные формы", 
            errors: error.errors 
          });
        }
        
        console.error("Ошибка отправки контактной формы:", error);
        res.status(500).json({ 
          success: false, 
          message: "Произошла ошибка при обработке вашего запроса" 
        });
      }
    }
  );

  // Newsletter subscription endpoint
  app.post(
    "/api/subscribe",
    async (req, res) => {
      try {
        // Validate request body
        const emailSchema = z.object({
          email: z.string().email({ message: "Пожалуйста, введите корректный email" })
        });
        
        const { email } = emailSchema.parse(req.body);
        
        // Добавляем email в список рассылки через Unisender API
        const success = await subscribeToNewsletter(email);
        
        if (success) {
          res.status(200).json({ 
            success: true, 
            message: "Подписка успешно оформлена" 
          });
        } else {
          res.status(500).json({ 
            success: false, 
            message: "Не удалось оформить подписку" 
          });
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ 
            success: false, 
            message: "Некорректный email адрес", 
            errors: error.errors 
          });
        }
        
        console.error("Ошибка оформления подписки:", error);
        res.status(500).json({ 
          success: false, 
          message: "Произошла ошибка при обработке вашего запроса" 
        });
      }
    }
  );

  const httpServer = createServer(app);

  return httpServer;
}
