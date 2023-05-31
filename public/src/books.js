function findAuthorById(authors, id) {
  // Find Array Method //
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  // Filter Array Method //
  const checkedOutBooks = books.filter((book) => book.borrows[0].returned === false)
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true)
  const totalList = [checkedOutBooks, returnedBooks]
  return totalList
}

function getBorrowersForBook(book, accounts) {
  const result = [];
  const borrows = book.borrows;
  
  for (let i = 0; i < borrows.length; i++) {
    const borrow = borrows[i];
    const account = accounts.find((acc) => acc.id === borrow.id);
    
    if (account) {
      result.push({
        id: account.id,
        returned: borrow.returned,
        picture: account.picture,
        age: account.age,
        name: account.name,
        company: account.company,
        email: account.email,
        registered: account.registered,
      });
    }
    
    if (result.length === 10) {
      break;
    }
  }
  
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
