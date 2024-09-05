import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [newlyCreatedBookId, setNewlyCreatedBookId] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        const sortedBooks = response.data.data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setBooks(sortedBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    if (books.length > 0) {
      setNewlyCreatedBookId(books[books.length - 1]._id);
    }
  }, [books]);

  return (
    <div className="relative min-h-screen pt-16 pb-16">
      <Header setShowType={setShowType} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className='flex-grow'></div>
          <h1 className="text-3xl my-8 text-center flex-grow">Books List</h1>
          <div className="flex-grow flex justify-end">
            <Link to='/books/create'>
              <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} newlyCreatedBookId={newlyCreatedBookId} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
