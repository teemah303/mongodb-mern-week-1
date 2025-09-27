// Find all books in a specific genre (e.g., Fantasy)
db.books.find({ genre: "Fantasy" })

// Find books published after a certain year (e.g., 2010)
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne({ title: "1984" }, { $set: { price: 12.50 } })

// Delete a book by its title
db.books.deleteOne({ title: "The Great Gatsby" })
