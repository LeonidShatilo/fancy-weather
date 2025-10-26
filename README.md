# fancy-weather

[![TASK](https://img.shields.io/badge/-TASK-green?style=flat)](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-0/fancy-weather.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4c519c57-9b27-4a7a-904e-e89b25167958/deploy-status)](https://app.netlify.com/projects/leonidshatilo-fancy-weather/deploys)
[![View App](https://img.shields.io/badge/View%20App-3498DB?style=flat&logo=netlify)](https://leonidshatilo-fancy-weather.netlify.app)


## 📋 Description

A weather forecast app. When the application is opened, all data on the page corresponds to the user's current city. The search is performed by city or ZIP code. The background image changes when the content is updated or when the background refresh button is clicked.

Additional features have been implemented: map language translation, detection of the user's precise location, and voice search.

## 🚀 Running Locally

To run the project locally with Netlify Functions, follow these steps:

1.  **Install dependencies**

    ```sh
    yarn install
    ```

2.  **Set up environment variables**
    Create a `.env` file in the project's root directory and add your API keys:

    ```env
    OPENCAGEDATA_API_KEY=your_key
    UNSPLASH_API_KEY=your_key
    IPINFO_API_KEY=your_key
    OPENWEATHERMAP_API_KEY=your_key
    ```

3.  **Start the development server**
    This command will start the Webpack dev server and the local Netlify environment for serverless functions.

    ```sh
    yarn netlify
    ```