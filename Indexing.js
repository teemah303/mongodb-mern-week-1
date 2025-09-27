// Index on title
db.books.createIndex({ title: 1 })

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Explain query before/after index
db.books.find({ title: "1984" }).explain("executionStats")
