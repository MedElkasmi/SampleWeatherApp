# Weather App

A simple React-based weather application that allows users to get current weather information by entering a city name.

## Features

- Fetch current weather data for any city.
- Display temperature, humidity, and weather conditions.
- Handle errors gracefully and display appropriate messages.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Get your OpenWeatherMap API key:
    - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
    - Go to the API keys section and copy your API key.

4. Replace `YOUR_API_KEY` in `src/App.jsx` with your actual API key:
    ```jsx
    const fetchWeather = async (city) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
        );
        // ... rest of the code
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
