import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { contactFormSchema } from "../shared/schema";
import { sendMessageToTelegram } from "./telegram";
import { saveContactToSupabase } from "./supabase";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post(
    "/api/contact",
    async (req, res) => {
      try {
        // Validate request body
        const validatedData = contactFormSchema.parse(req.body);
        
        // Отправляем сообщение в Telegram
        const telegramSuccess = await sendMessageToTelegram(validatedData);
        
        // Сохраняем данные в Supabase
        const supabaseSuccess = await saveContactToSupabase(validatedData);
        
        // Возвращаем ответ клиенту в зависимости от успеха отправки
        if (telegramSuccess || supabaseSuccess) {
          res.status(200).json({ 
            success: true, 
            message: "Сообщение успешно отправлено",
            telegramSent: telegramSuccess,
            supabaseSaved: supabaseSuccess
          });
          
          // Логируем результат отправки
          console.log('Сообщение отправлено в Telegram:', telegramSuccess);
          console.log('Данные сохранены в Supabase:', supabaseSuccess);
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



  const httpServer = createServer(app);

  return httpServer;
}
