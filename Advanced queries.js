// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection (return only title, author, price)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price ascending
db.books.find().sort({ price: 1 })

// Sort by price descending
db.books.find().sort({ price: -1 })

// Pagination (5 per page, page 1)
db.books.find().skip(0).limit(5)

// Pagination (5 per page, page 2)
db.books.find().skip(5).limit(5)
