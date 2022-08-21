# Book Library 

Here you can manage your books.

### About the project

Here you can manage your books. You can create, edit and delete your own books. You can search your own books and you have a price filter. 

### Prerequisites

- [NodeJS](https://nodejs.org)
- [npm](https://www.npmjs.com)
- [MongoDB](https://www.mongodb.com) **locally**

### Install and run

-   If you want some data to play with, please go to `./server/run-first` and run the `populate.js` file. This creates a collection named 'books' with 45 documents in your DB.
-   `git clone https://github.com/hadjev/react-book-project.git`
-   **Install** the npm packages for the `server` and the `client` with `cd server && npm install` and `cd client && npm install`
-   **Start** the **client** and the **server** with `cd server && npm start` and  `cd client && npm start`



### Roadmap

- [x] Navigation
- [x] Show featured books
- [x] Subscribe to newsletter
- [x] Login / Logout
  - [ ] Each user has own books
- [x] Show all books
  - [x] Sorting functionality
  - [x] Search field
  - [x] Price filter
  - [x] Clear filters
  - [ ] Category filter / Tag filter
  - [ ] Pagination?
- [x] Add CRUD-operations
  - [x] Save to DB
  - [ ] Search for new books and save them
    - [ ] Find an API to search with
- [ ] Deploy to Netlify
