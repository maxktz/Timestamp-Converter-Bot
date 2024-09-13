## Timestamp Converter Bot

Timestamp Converter Bot is a Telegram bot that converts timestamps to human-readable dates and vice versa. It is built using the Telegraf library for Node.js.

## Features

- Convert Unix timestamps to various date formats.
- Convert human-readable dates to Unix timestamps.
- Commands to get the current time and convert timestamps or dates.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/maxktz/timestamp-converter-bot.git
    cd Timestamp-Converter-Bot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file based on the `.env.example`:
    ```sh
    cp .env.example .env
    ```

4. Add your Telegram bot token to the `.env` file:
    ```env
    TELEGRAM_BOT_TOKEN=your_telegram_bot_token
    ```

## Usage

### Running Locally

To start the bot locally, run:
```sh
npm start
```

### Running with Docker

Build and start the Docker container:
```sh
docker-compose up -d
```

The bot will be running inside the Docker container.

## Bot Commands

`/start` - Get instructions on how to use the bot.

`/now` - Get the current time.

`/ts <timestamp>` - Convert a Unix timestamp to various date formats.

`/date <date>` - Convert a human-readable date to a Unix timestamp.

## License

This project is licensed under the MIT License.
