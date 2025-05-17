# Polaris Early Expo App

This is a minimal [Expo](https://expo.dev/) React Native project that uses [Supabase](https://supabase.com/) and displays **Hello World!** when the app starts. It targets **Expo SDK 53** so it can be opened with the Expo Go app on your iPhone.

## Setup

1. Install the Expo CLI if you don't have it:
   ```sh
   npm install -g expo-cli
   ```

2. Install project dependencies:
   ```sh
   npm install
   ```

3. Set your Supabase credentials in `supabaseClient.js`:
   ```js
   const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
   const supabaseAnonKey = 'YOUR-SUPABASE-ANON-KEY';
   ```

4. Start the Expo development server:
   ```sh
   npm start
   ```

Scan the QR code printed in the terminal with the Expo Go app on your iPhone to open the project.
