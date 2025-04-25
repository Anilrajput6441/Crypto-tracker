🔥Crypto Tracker

LIVE--: https://crypto-tracker-silk-alpha.vercel.app/

https://github.com/user-attachments/assets/262d5f3c-8aba-472e-93a9-9e41d562f2a1




A real-time cryptocurrency tracker built with React, Redux, and WebSockets, utilizing the Binance API. This application provides up-to-date market data for major cryptocurrencies, including price, volume, and market cap, all presented in a responsive and user-friendly interface.

🚀 Features
--Live Market Data: Real-time updates using Binance WebSocket streams.
--Comprehensive Metrics: Displays Logo, Name, Symbol, Price, 1h %, 24h %, 7d %, Market Cap, 24h Volume, Circulating Supply, Max Supply, and a 7D Chart.
--Responsive Design: Optimized for both desktop and mobile devices.
--Interactive UI: On mobile, tap on a cryptocurrency to view detailed information.
--State Management: Efficient state handling with Redux for seamless data updates.

🛠️ Tech Stack
Frontend: React, JavaScript

State Management: Redux

Styling: Tailwind CSS

Data Streaming: Binance WebSocket API

📦 Installation
Clone the repository:

        1. git clone https://github.com/Anilrajput6441/Crypto-tracker.git
        2. cd Crypto-tracker
        
Install dependencies:

        3. npm install
        4. Start the development server:

If local (dev mode)

        5. npm run dev or npm start

The application will run at 

       ---   http://localhost:3000.

📁 Project Structure

      src/

      components/: Reusable UI components like PercentageChange and Chart.

      redux/: Redux slices and store configuration.

      data/: Sample data and constants.

      App.jsx: Main application component.

      index.jsx: Entry point of the React application.

📊 Data Sources
Binance API: Real-time cryptocurrency data is fetched using Binance's WebSocket streams.

📱 Responsive Design
Desktop View: Displays all cryptocurrency metrics in a tabular format.

Mobile View: Shows essential information (Logo, Price, 24h Volume). Tap on a cryptocurrency to view additional details.

🙌 Acknowledgements
Binance API for providing real-time market data.
