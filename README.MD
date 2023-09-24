# ReactCart and ShopReact Web Apps

This repository contains two web applications built using React: ReactCart and ShopReact. ReactCart fetches data from a Node.js service and renders it, while ShopReact is a MERN stack application that performs CRUD operations on data with MongoDB.

## ReactCart

ReactCart is a simple web app that retrieves data from a Node.js service and displays it in a user-friendly manner.

### Prerequisites
- Node.js installed on your machine

### Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/Moxi3231/Stella
   ```

2. Navigate to the `ReactCart` directory:

   ```shell
   cd ReactCart
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Start the Node.js service:

   ```shell
   node server.js
   ```

5. Start the React app:

   ```shell
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the ReactCart app.

## ShopReact

ShopReact is a full-fledged MERN stack web app that allows you to perform CRUD operations on data. It uses MongoDB as the database, so you need to have MongoDB running on `localhost:27017`. You can configure the MongoDB connection in the `env.local` file.

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running

### Getting Started

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the `ShopReact` directory:

   ```shell
   cd ShopReact
   ```



3. Install dependencies:

   ```shell
   npm install
   ```

4. Start the React app:

   ```shell
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to access the ShopReact app.

### ShopReact Features

- **Insert**: You can add new items to the database by filling out the form.
- **View**: The app displays a list of items retrieved from the MongoDB database.
