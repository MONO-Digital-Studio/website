import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно быть не менее 2 символов" }),
  email: z.string().email({ message: "Пожалуйста, введите корректный email" }),
  subject: z.string().min(2, { message: "Тема должна быть не менее 2 символов" }),
  message: z.string().min(10, { message: "Сообщение должно быть не менее 10 символов" }),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
