import { createClient } from '@supabase/supabase-js';

// Проверяем наличие переменных окружения для Supabase
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Отсутствуют переменные окружения для Supabase. Некоторые функции могут быть недоступны.');
}

// Создаем клиент Supabase
export const supabase = createClient(
  SUPABASE_URL || '',
  SUPABASE_ANON_KEY || ''
);

/**
 * Сохраняет данные контактной формы в Supabase
 */
export async function saveContactToSupabase(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('Отсутствуют переменные окружения для Supabase');
      return false;
    }

    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Ошибка при сохранении данных в Supabase:', error);
      return false;
    }

    console.log('Данные успешно сохранены в Supabase');
    return true;
  } catch (error) {
    console.error('Ошибка при сохранении данных в Supabase:', error);
    return false;
  }
}