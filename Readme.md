PLP Bookstore – MongoDB Project

This project demonstrates how to set up a MongoDB database and perform CRUD operations, advanced queries, aggregation pipelines, and indexing on a bookstore dataset.

⸻

⚙️ Setup Instructions

1. Install MongoDB

You can either:
	•	Local Setup: Download MongoDB Community Edition
	•	Cloud Setup: Create a free MongoDB Atlas cluster

Make sure you have mongosh (MongoDB Shell) installed.

⸻

2. Clone or Download the Project
bash: git clone https://github.com/your-username/plp_bookstore.git
cd plp_bookstore

3. Connect to MongoDB
Start the MongoDB server (if running locally):
bash; mongod

Connect via shell:
bash; mongosh

Switch to the bookstore database:
use plp_bookstore

4. Insert Books

Run the script to populate the books collection:
bash;load("insert_books.js")
This inserts at least 10 book documents into the collection.

⸻

5. Run Queries

Open the shell and load the queries:
bash;load("queries.js")

This file contains:
	•	Basic CRUD operations
	•	Advanced queries (filtering, projection, sorting, pagination)
	•	Aggregation pipelines (average price, most books by author, decade grouping)
	•	Index creation with performance check

⸻

📂 Project Structure
plp_bookstore/
│── insert_books.js   # Script to insert sample book documents
│── queries.js        # Script containing MongoDB queries
│── README.md         # Project instructions

🧪 Example Queries
	•	Find books in the “Fantasy” genre:
db.books.find({ genre: "Fantasy" })

•	Find books published after 2010:
db.books.find({ published_year: { $gt: 2010 } })

•	Aggregation example – average price by genre:
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])
✅ Expected Outcome
	•	A working plp_bookstore database with a books collection
	•	Ability to perform CRUD, sorting, pagination, and aggregations
	•	Indexed fields (title, author + published_year) for faster queries

