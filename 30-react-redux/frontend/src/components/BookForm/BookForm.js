import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import createBookWithID from '../../utils/createBookWithID';
// import { addBook } from '../../redux/books/actionCreators';
import {
  addBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const isLoadingViaAPi = useSelector(selectIsLoadingViaAPI);
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
    } else {
      dispatch(setError('You must fill title and author'));
    }
  };

  const handleAddRandomBookViaAPi = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
    // try {
    //   setIsLoading(true);
    //   await dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
    // } catch (error) {
    // } finally {
    //   setIsLoading(false);
    // }
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

        <button
          type="button"
          onClick={handleAddRandomBookViaAPi}
          disabled={isLoadingViaAPi}>
          {isLoadingViaAPi ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
