import Header from '../components/header'
import Table from '../components/table'
import Form from '../components/form'
import Footer from '../components/footer';
import { successSwal } from '../helper';
import { useState } from 'react';

function HomePage() {
  const [books, setBooks] = useState([
    { id: 1, title: "Naruto", author: "Masashi Kishimoto", bookCategory: "Comic", publicationYear: 2020, isbn: "xxxiiixooo" },
    { id: 2, title: "One Piece", author: "Eiichiro Oda", bookCategory: "Comic", publicationYear: 2020, isbn: "yyyzzzooo" },
    { id: 3, title: "Dragonball", author: "Akira Toriyama", bookCategory: "Comic", publicationYear: 2020, isbn: "aaabbbooo" }
  ]);

  const categories = [
    { name: 'Comic' },
    { name: 'Novel' },
    { name: 'Biography' }
  ];

  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const editingBook = books[selectedBookIndex];

  const handleEditBook = (index) => {
    setSelectedBookIndex(index);
  };

  const updateBook = (book) => {
    const updatedBooks = [...books];
    updatedBooks[selectedBookIndex] = book;
    setBooks(updatedBooks);
    successSwal('Book Edited successfully')
    setSelectedBookIndex(null);
  };

  const addBook = (book) => {
    setBooks([...books, book]);
    successSwal('Book Added successfully')
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);

    if (selectedBookIndex === index) {
      setSelectedBookIndex(null);
    }

    successSwal('Book Deleted successfully')
  };

  return (
    <>
      <Header />
      <Table books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
      <Form addBook={addBook} updateBook={updateBook} editingBook={editingBook} categories={categories} />
      <Footer />
    </>
  )
}

export default HomePage;
