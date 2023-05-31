function getTotalBooksCount(books) {
  let sum = 0
 books.forEach((book) => sum = sum + 1)
 return sum
}

function getTotalAccountsCount(accounts) {
  let sum = 0
  accounts.forEach((account) => sum = sum + 1)
  return sum
}

function getBooksBorrowedCount(books) {
  let sum = 0
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      sum = sum +1
    }
  }
  return sum
}

function getMostCommonGenres(books) {
  const allGenres = books.map((book) => book.genre)
  // Reduce Array Method //
  const uniqueGenres = allGenres.reduce((acc, value) => {
    if(!acc.includes(value)){
      acc.push(value)
    }
    return acc;
  }, [])
  
  function getTotalGenreCount(books, genre){
    let sum = 0
    for (let i = 0; i < books.length; i++){
      if (books[i].genre === genre){
        sum = sum + 1
      }
    }
  return sum
  }
  const result = []
  for (let i = 0; i < uniqueGenres.length; i++){
    result.push({
      name: uniqueGenres[i],
      count: getTotalGenreCount(books, uniqueGenres[i])
    })
  }
  const allGenresandRatings = result
  // Ternary Operator //
  const sortedGenresandRatings = allGenresandRatings.sort((genA, genB) => genA.count > genB.count ? -1 : 1)
  return sortedGenresandRatings.slice(0,5)
}

function getMostPopularBooks(books) {
  const allTitles = books.map((book) => book.title)
  function getTotalBorrowsByBook(books, title){
    let sum = 0
    for (let i = 0; i < books.length; i++){
      if (books[i].title === title){
        sum = sum + books[i].borrows.length
      }
    }
  return sum
  }
  result = []
  for (let i = 0; i < allTitles.length; i++){
    result.push({
      name: allTitles[i],
      count: getTotalBorrowsByBook(books, allTitles[i])
    })
  }
  const allTitlesandBorrows = result
  const sortedTitlesandBorrows = allTitlesandBorrows.sort((titleA, titleB) => titleA.count > titleB.count ? -1 : 1)
  return sortedTitlesandBorrows.slice(0,5)

}

// Helper Function //
function countBorrowsByAuthor(books, id){
  let sum = 0
  for (let i = 0; i < books.length; i++){
    if (books[i].authorId === id){
      sum = sum + books[i].borrows.length
    }
  }
  return sum
}


function getMostPopularAuthors(books, authors) {
  // Map Array Method //
  const allAuthorIds = authors.map((author) => author.id)
  // Arrow Function //
  const getAuthorName = (authors, id) => {
    for (let i = 0; i < authors.length; i++){
      if (authors[i].id === id){
        return `${authors[i].name.first} ${authors[i].name.last}`
      } 
    }
  }
  let result = []
  for (let i = 0; i < allAuthorIds.length; i++){
    result.push({
      name: getAuthorName(authors, allAuthorIds[i]),
      count: countBorrowsByAuthor(books, allAuthorIds[i]),
    })
  }
const allAuthorIdsandCounts = result
const sortedAuthorIdsandCounts = allAuthorIdsandCounts.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
return sortedAuthorIdsandCounts.slice(0,5) 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
