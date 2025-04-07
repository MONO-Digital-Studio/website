import axios from 'axios';

// API ключ для Unisender
const UNISENDER_API_KEY = '63bq5nomq97fazoidmqxk3a3ftnn59fj5stgsxxy';

/**
 * Добавляет email в список рассылки Unisender
 */
export async function subscribeToNewsletter(email: string): Promise<boolean> {
  try {
    // Формируем параметры для API запроса к Unisender
    const apiParams = new URLSearchParams();
    apiParams.append('api_key', UNISENDER_API_KEY);
    apiParams.append('format', 'json');
    apiParams.append('list_ids', '1'); // ID списка по умолчанию
    apiParams.append('fields[email]', email);
    apiParams.append('double_optin', '0'); // Без двойного подтверждения
    apiParams.append('overwrite', '2'); // Обновить контакт, если он уже существует

    // Отправляем запрос на Unisender API
    const response = await axios.post(
      'https://api.unisender.com/ru/api/subscribe',
      apiParams.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    // Проверяем успешность запроса
    if (response.data.result) {
      console.log('Подписка успешно выполнена:', response.data);
      return true;
    } else {
      console.error('Ошибка при подписке на рассылку:', response.data.error);
      return false;
    }

  } catch (error) {
    console.error('Ошибка при подписке через Unisender:', error);
    return false;
  }
}

/**
 * Отправляет email через Unisender API
 */
export async function sendEmailViaUnisender(
  params: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
): Promise<boolean> {
  try {
    // Формируем содержимое письма в HTML формате
    const htmlBody = `
      <h2>Сообщение с сайта MONO Digital Studio</h2>
      <p><strong>Имя:</strong> ${params.name}</p>
      <p><strong>Email:</strong> ${params.email}</p>
      <p><strong>Тема:</strong> ${params.subject}</p>
      <p><strong>Сообщение:</strong></p>
      <p>${params.message.replace(/\n/g, '<br>')}</p>
    `;

    // Формируем параметры для API запроса к Unisender
    const apiParams = new URLSearchParams();
    apiParams.append('api_key', UNISENDER_API_KEY);
    apiParams.append('format', 'json');
    apiParams.append('email', 'monostud.io@yandex.ru');
    apiParams.append('sender_name', 'MONO Digital Studio Website');
    apiParams.append('sender_email', params.email);
    apiParams.append('subject', `Новое сообщение: ${params.subject}`);
    apiParams.append('body', htmlBody);
    apiParams.append('list_id', '1'); // Используем список по умолчанию

    // Отправляем запрос на Unisender API
    const response = await axios.post(
      'https://api.unisender.com/ru/api/sendEmail',
      apiParams.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    // Проверяем успешность запроса
    if (response.data.result) {
      console.log('Email успешно отправлен:', response.data);
      return true;
    } else {
      console.error('Ошибка при отправке email:', response.data.error);
      return false;
    }

  } catch (error) {
    console.error('Ошибка при отправке email через Unisender:', error);
    return false;
  }
}