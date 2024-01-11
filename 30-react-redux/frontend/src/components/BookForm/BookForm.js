import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
// import { addBook } from '../../redux/books/actionCreators';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleOnclickRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    const randomBookWithId = createBookWithID(randomBook, 'random');

    dispatch(addBook(randomBookWithId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = createBookWithID({ title, author }, 'manual');
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBookViaAPi = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book');

      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithID(res.data, 'API')));
      }
    } catch (error) {
      console.log('Error Feetching random book', error);
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleOnclickRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPi}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
