import delay from './delay';

const authors = [
  {
    id: 'Active',
    status: 'Active'
  },
  {
    id: 'Inactive',
    status: 'Inactive'
  }
];

const generateId = (author) => {
  return author.status.toLowerCase();
};

class AuthorApi {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }

  static saveAuthor(author) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
          authors.splice(existingAuthorIndex, 1, author);
        } else {
          author.id = generateId(author);
          authors.push(author);
        }

        resolve(Object.assign({}, author));
      }, delay);
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.authorId == authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
