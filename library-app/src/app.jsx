import { useState } from "react";
import HomePage from "./Pages/homePage"
import { successSwal } from "./helper";
import Header from "./components/header";
import Footer from "./components/footer";
import Swal from "sweetalert2";

function App() {
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

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedBookIndex, setSelectedBookIndex] = useState(null);
    const [editingBook, setEditingBook] = useState(null);

    const handleEditBook = (index) => {
        setIsFormOpen(false);
        setSelectedBookIndex(index);
        const bookToEdit = books[index];
        setEditingBook(bookToEdit);
        setTimeout(() => {
            setIsFormOpen(true);
        }, 100);
    };

    const updateBook = (book) => {
        const updatedBooks = [...books];
        updatedBooks[selectedBookIndex] = book;
        setBooks(updatedBooks);
        successSwal('Book Edited successfully')
        setSelectedBookIndex(null);
        setEditingBook(null);
    };

    const addBook = (book) => {
        setBooks([...books, book]);
        successSwal('Book Added successfully')
    };

    const handleDeleteBook = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedBooks = books.filter((_, i) => i !== index);
                setBooks(updatedBooks);
                setSelectedBookIndex(null);
                setEditingBook(null);
                successSwal('Book Deleted successfully')
            }
        });
    };
    return (
        <>
            <Header />
            <HomePage books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} addBook={addBook} updateBook={updateBook} editingBook={editingBook} categories={categories} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
            <Footer />
        </>
    )
}

export default App