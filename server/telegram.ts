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
      return false;
    }

    // Формируем текст сообщения в формате Markdown
    const messageText = `
*Новая заявка с сайта MONO Digital Studio*

*Имя:* ${params.name}
*Email:* ${params.email}
*Тема:* ${params.subject}

*Сообщение:*
${params.message}
`;

    // Отправляем сообщение через Telegram Bot API
    const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: messageText,
      parse_mode: 'Markdown'
    });

    // Проверяем успешность запроса
    if (response.data.ok) {
      console.log('Сообщение успешно отправлено в Telegram');
      return true;
    } else {
      console.error('Ошибка при отправке сообщения в Telegram:', response.data.description);
      return false;
    }

  } catch (error) {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
    return false;
  }
}