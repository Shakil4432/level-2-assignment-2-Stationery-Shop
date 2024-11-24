# **Stationery Store API**  

An API-based solution to manage a stationery store where admins can manage products and orders, customers can place orders, and the system calculates total revenue.

---

## **Live URL**  
- [Stationery Store API Live](https://example.com) *(Replace with your live URL)*

---

## **Table of Contents**  
1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup and Installation](#setup-and-installation)  
5. [Usage](#usage)  
6. [API Endpoints](#api-endpoints)  

---

## **About the Project**  
This project provides a backend API for managing stationery products, handling customer orders, and tracking revenue. It is built using MongoDB, Mongoose, Express.js, and Node.js to deliver a scalable and efficient solution for e-commerce businesses.

---

## **Features**  
1. Add, update, and delete stationery products.  
2. Place orders for products.
3. Calculate total revenue from all orders.
4. Built-in validations for product fields and order data.
5. Secure data storage with MongoDB.  

---

## **Technologies Used**  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  

---

## **Setup and Installation**  

### **Prerequisites**  
Before you begin, ensure you have the following installed:  
1. **Node.js** - [Download Node.js](https://nodejs.org/en/)  
2. **MongoDB** - Use either a local instance or MongoDB Atlas for cloud storage.
3. **Postman** - For testing API endpoints. [Download Postman](https://www.postman.com/)

### **Steps to Set Up**  
1. **Clone the repository**  
   In your terminal, run the following command to clone the project:  
   ```bash
   git clone https://github.com/your-username/stationery-store-api.git
   cd stationery-store-api
2.**Install dependencies:**
   Run the following command to install the required packages:

   ```bash
   npm install
   ```

3.**Set up the .env file**
   Create a .env file in the root directory and set up the following keys:
   ```bash
   MONGO_URI=<Your MongoDB URI>
   PORT=5000
   ```
4.**Start the development server**
   To start the server, run:

   ```bash
   npm start
   ```
### **Usage**
**Run Locally**
1.After starting the server, access the API at http://localhost:5000.
2.Use Postman to test the available endpoints.

### **API Endpoints**
1. /api/products
2. /api/orders
