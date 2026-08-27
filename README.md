# CineLog - Premium Movie CRUD Application

A elegant, responsive Movie CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. 

This version features a modern **Midnight & Gold (Premium Cinema)** UI design, presenting lists of cataloged titles with translucent glassmorphic components, smooth scaling animations, genre-specific tags, and file-upload poster previews.

---

## ✨ Features

- 🎬 **Browse Collection (`/view-movies`):** Beautifully displayed grid cards showing movie titles, genre badges, release years, and poster graphics, with hover overlays.
- ➕ **Add to Collection (`/`):** Form featuring styling for text inputs, customized file upload inputs, and JavaScript-based validation.
- ✏️ **Edit Records (`/edit-movie/:id`):** Prepopulated update form displaying existing movie details and a thumbnail of the currently uploaded poster.
- 🗑️ **Delete Titles (`/delete-movie/:id`):** Instantly deletes movie records and removes the associated poster image file from local storage automatically.
- 💾 **Robust Mongoose Schema:** Built on standard fields (`title`, `genre`, `releaseYear`, and `poster`).
- 📁 **Multer Integration:** Standard file uploading configuration storing files in the `/uploads` directory with timestamped unique names.
- 🎨 **Midnight & Gold Theme:** High-fidelity UI using Google Font 'Outfit', obsidian gradients, glassmorphism containers, and gold accents.

---

## 🛠️ Tech Stack & Dependencies

- **Runtime:** Node.js
- **Server Framework:** Express.js
- **Database Model:** Mongoose & MongoDB
- **Template Engine:** EJS (Embedded JavaScript Templates)
- **File Uploading:** Multer
- **Styling:** CSS3 & Bootstrap 5 (Responsive Layouts)

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) running locally, or a MongoDB Atlas database URI.

### 2. Installation
Clone this repository or move to the project directory, then install the dependencies:
```bash
npm install
```

### 3. Run the Database
Make sure your local MongoDB instance is running on port `27017`. If you are using a cloud database, define the environment variable:
```bash
# On Linux/macOS
export MONGODB_URI="your-mongodb-atlas-connection-string"

# On Windows (PowerShell)
$env:MONGODB_URI="your-mongodb-atlas-connection-string"
```

### 4. Run the Application
To start the application:
```bash
# Run server
npm start

# Run with nodemon for live-reload
npm run dev
```

The application will be running at [http://localhost:3000](http://localhost:3000).

---

## 📁 Directory Structure
```
movie-crud/
├── config/
│   └── db/
│       └── db.js          # MongoDB connection handler
├── controllers/
│   └── movieController.js # CRUD controller endpoints
├── middlewares/
│   └── multer.js          # Multer poster upload setup
├── models/
│   └── movie/
│       └── movieModel.js  # Mongoose Schema
├── public/
│   └── css/
│       └── style.css      # Midnight & Gold CSS styling
├── routes/
│   └── route.js           # Endpoint definitions
├── views/
│   ├── index.ejs          # Add Movie page
│   ├── view.ejs           # Collection grid
│   ├── edit.ejs           # Edit Movie page
│   └── err.ejs            # Generic Error page
├── index.js               # Express application initializer
└── package.json           # Node configuration and script run mappings
```
