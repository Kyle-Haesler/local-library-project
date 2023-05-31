function findAccountById(accounts, id) {
  // Find Array Method //
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  // Object Destructuring // 
  const {id} = account
  const accountId = id
  let sum = 0
  for (let i = 0; i < books.length; i++){
    const borrows = books[i].borrows
    for (let j = 0; j < borrows.length; j++){
    if (borrows[j].id === accountId){
      sum = sum + 1
    }
  }
}
  return sum
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id
  const result = []
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
      if (accountId === books[i].borrows[j].id && books[i].borrows[j].returned === false){
        result.push({
          id: books[i].id,
          title: books[i].title,
          genre: books[i].genre,
          authorId: books[i].authorId,
          author: authors.find((author) => author.id === books[i].authorId),
          borrows: [
            {id: accountId,
            returned: false,}
          ]
        }
          )
      }
    }
  } 
return result


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
