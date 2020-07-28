

## TO run this appplication:

[] clone the repository and cd into the directory nad run npm install to install the dependancies that are required

[] Then make sure mongodb is running on localhost and it has a database named test

[] Then on the project directory run npm start to start the appplication

## Books Routes 
 GET request: To get all the books ==> localhost:5000/api/books
 GET request: To get one book ==> localhost:5000/api/books/id
 POST request: To add a book a book ==> localhost:5000/api/books/add
 DELETE request: To delete a book ==> localhost:5000/api/books/id
 PATCH request: To update a  book ==> localhost:5000/api/books/update/id

 ## Cart Routes 
 GET request: To get all the carts ==> localhost:5000/api/cart
 GET request: To get one cart ==> localhost:5000/api/cart/id
 POST request: To add a  cart ==> localhost:5000/api/cart/add
 DELETE request: To delete a cart ==> localhost:5000/api/cart/id
 PATCH request: To update a cart ==> localhost:5000/api/cart/update/id

 ## Books Schema (Model)
  isbn: { type: String, required: true }
  title: { type: String, required: true }
  publisher: { type: String, required: true }
  authors: { type: String, required: true }
  pages: { type: Number, required: true }
  year: { type: Date, required: true }

## Cart Schema (Model)
  cartId: { type: String, required: true }
  sku: { type: String, required: true }
  nUnits: { type: Number, required: true }
