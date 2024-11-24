Stationery Store API
An API-based solution to manage a stationery store where admins can manage products and orders, customers can place orders, and the system calculates total revenue.

Live URL
Stationery Store API Live

Table of Contents
1.About the Project
2.Features
3.Technologies Used
4.Setup and Installation
5.Usage
6.API Endpoints

About the Project
This project provides a backend API for managing stationery products, handling customer orders, and tracking revenue. It is built using the MongoDB, Mongoose, Express.js, Node.js to deliver a scalable and efficient solution for e-commerce businesses.

Features
1.Add, update, and delete stationery products.
2.Place orders for products.
3.Calculate total revenue from all orders.
4.Built-in validations for product fields and order data.
5.Secure data storage with MongoDB.

Technologies Used
1.Backend: Node.js, Express.js
2.Database: MongoDB

Setup and Installation

Prerequisites
1.Node.js installed on your system.
2.MongoDB server
3.Postman for testing APIs.

Steps to Set Up

1.Clone the repository:
git clone https://github.com/your-username/stationery-store-api.git
cd stationery-store-api

2.Install dependencies:
npm install

3.Set up the .env file with the following keys:
MONGO_URI=<Your MongoDB URI>
PORT=5000

4.Start the development server:
npm start

Usage

Run Locally
1.After starting the server, access the API at http://localhost:5000.
2.Use Postman to test the available endpoints.

API Endpoints
1.  /api/products
2.  /api/orders
