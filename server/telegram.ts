import axios from 'axios';

// Получаем токен бота и ID чата из переменных окружения
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Базовый URL для Telegram Bot API
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

/**
 * Отправляет сообщение в Telegram бот @MONOStudioCRM_Bot
 */
export async function sendMessageToTelegram(
  params: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
): Promise<boolean> {
  try {
    // Проверяем наличие необходимых переменных окружения
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Отсутствуют необходимые переменные окружения для Telegram');
      console.error('TELEGRAM_BOT_TOKEN присутствует:', !!TELEGRAM_BOT_TOKEN);
      console.error('TELEGRAM_CHAT_ID присутствует:', !!TELEGRAM_CHAT_ID);
      return false;
    }

    // Выводим первые несколько символов токена для отладки
    const tokenPreview = TELEGRAM_BOT_TOKEN ? 
      `${TELEGRAM_BOT_TOKEN.substring(0, 6)}...${TELEGRAM_BOT_TOKEN.substring(TELEGRAM_BOT_TOKEN.length - 4)}` : 
      'отсутствует';
    console.log('Используется токен бота:', tokenPreview);
    console.log('Используется CHAT_ID:', TELEGRAM_CHAT_ID);

    // Формируем текст сообщения в формате Markdown
    const messageText = `
*Новая заявка с сайта MONO Digital Studio*

*Имя:* ${params.name}
*Email:* ${params.email}
*Тема:* ${params.subject}

*Сообщение:*
${params.message}
`;

    console.log('Подготовлено сообщение для отправки:', messageText.substring(0, 50) + '...');
    console.log('URL для отправки:', `${TELEGRAM_API_URL}/sendMessage`);

    // Отправляем сообщение через Telegram Bot API
    const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: messageText,
      parse_mode: 'Markdown'
    });

    // Проверяем успешность запроса
    if (response.data.ok) {
      console.log('Сообщение успешно отправлено в Telegram');
      console.log('Ответ Telegram API:', JSON.stringify(response.data));
      return true;
    } else {
      console.error('Ошибка при отправке сообщения в Telegram:', response.data.description);
      return false;
    }

  } catch (error: any) {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
    if (error.response) {
      console.error('Статус ошибки:', error.response.status);
      console.error('Данные ошибки:', JSON.stringify(error.response.data));
    } else if (error.request) {
      console.error('Запрос был отправлен, но не получен ответ', error.request);
    } else {
      console.error('Ошибка при настройке запроса:', error.message);
    }
    return false;
  }
}