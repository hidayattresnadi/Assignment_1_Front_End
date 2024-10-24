import Header from '../components/header'
import Table from '../components/table'
import Form from '../components/form'
import Footer from '../components/footer';
import { useState } from 'react';

function HomePage() {
  const [books, setBooks] = useState([
    { id: 1, title: "Naruto", author: "Masashi Kishimoto", bookCategory: "Comic", publicationYear: 2020, isbn: "xxxiiixooo" },
    { id: 2, title: "One Piece", author: "Eiichiro Oda", bookCategory: "Comic", publicationYear: 2020, isbn: "yyyzzzooo" },
    { id: 3, title: "Dragonball", author: "Akira Toriyama", bookCategory: "Comic", publicationYear: 2020, isbn: "aaabbbooo" }
  ]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const handleEditBook = (index) => {
    setSelectedBookIndex(index);
    setIsEditing(true);
  };
  const [isEditing, setIsEditing] = useState(false);
  const saveBook = (book) => {
    if (isEditing && selectedBookIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[selectedBookIndex] = book;
      setBooks(updatedBooks);
      setIsEditing(false);
      setSelectedBookIndex(null);
    } else {
      setBooks([...books, book]);
    }
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);

    if (isEditing && selectedBookIndex === index) {
      setIsEditing(false);
      setSelectedBookIndex(null);
    }
  };
  return (
    <>
      <Header />
      <Table books={books} onEditBook={handleEditBook} onDeleteBook={handleDeleteBook}/>
      <Form saveBook={saveBook} books={books} index={selectedBookIndex} isEditing={isEditing} />
      <Footer />
    </>
  )
}

export default HomePage;
