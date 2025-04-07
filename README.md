# MONO Digital Studio - Официальный сайт

![MONO Digital Studio Logo](./mono-logo.png)

Официальный сайт-визитка для студии комплексных цифровых решений и ИИ-разработки "MONO Digital Studio".

## Описание

Современный веб-сайт с матричным дизайном и анимацией "цифрового дождя" в стиле фильма "Матрица". Сайт представляет услуги и преимущества компании, специализирующейся на ИИ-решениях и цифровой трансформации для прогрессивных предпринимателей. Дизайн оптимизирован для всех устройств, включая смартфоны с маленькими экранами.

## Технологии

- Фронтенд: React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- Бэкенд: Node.js, Express
- Интеграции: Telegram Bot API, Supabase
- Сборка: Vite
- Анимации: React с кастомными анимациями "цифрового дождя"

## Функциональность

- Одностраничный сайт с несколькими разделами
- Матрица-вдохновленный дизайн с анимацией "цифрового дождя"
- Контактная форма с отправкой данных в Telegram и Supabase
- Полностью адаптивный дизайн для всех устройств
- SEO-оптимизация

## Требования

- Node.js >= 18.x
- Переменные окружения:
  - TELEGRAM_BOT_TOKEN - токен для Telegram бота
  - TELEGRAM_CHAT_ID - ID чата для отправки сообщений
  - SUPABASE_URL - URL проекта Supabase
  - SUPABASE_ANON_KEY - Anon Key для Supabase

## Структура проекта

- /client - Фронтенд на React
  - /src/components - React компоненты
  - /src/pages - Страницы приложения
- /server - Бэкенд на Express
  - /routes.ts - API эндпоинты
  - /telegram.ts - Интеграция с Telegram
  - /supabase.ts - Интеграция с Supabase
- /shared - Общие типы и схемы данных

## Деплой на GitHub Pages

Для деплоя сайта на GitHub Pages с кастомным доменом выполните следующие шаги:

1. **Сборка статических файлов:**
   ```bash
   npm run build
   ```

2. **Настройка GitHub Pages:**
   - Создайте репозиторий на GitHub (например, https://github.com/AndreyShinkarenko/mono-digital-studio-website)
   - Загрузите код в репозиторий включая файл CNAME с доменом `monostudio.site`
   - В настройках репозитория (Settings) перейдите в раздел Pages
   - В разделе "Build and deployment" выберите "Deploy from a branch"
   - Выберите ветку "main" и директорию "/docs" или "/(root)"
   - Нажмите "Save"

3. **Настройка DNS для кастомного домена:**
   - В DNS-записях вашего домена monostudio.site добавьте следующие CNAME-записи:
     ```
     CNAME @ username.github.io
     CNAME www username.github.io
     ```
     где `username` - это ваше имя пользователя на GitHub
   - Подождите до 24 часов для полного обновления DNS-записей

4. **Проверка настройки HTTPS:**
   - В настройках GitHub Pages убедитесь, что опция "Enforce HTTPS" включена
   - GitHub автоматически выпустит SSL-сертификат для вашего домена

После успешного деплоя сайт будет доступен по адресу https://monostudio.site

## Разработано для MONO Digital Studio

© MONO Digital Studio, 2025
