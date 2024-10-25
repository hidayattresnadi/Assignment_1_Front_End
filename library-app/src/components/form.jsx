import { useState, useEffect } from "react";

const Form = ({ saveBook, books, index, isEditing }) => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        bookCategory: '',
        publicationYear: '',
        isbn: ''
    });

    useEffect(() => {
        if (index !== null) {
            const book = books[index];
            setFormData({
                id: book.id,
                title: book.title,
                author: book.author,
                bookCategory: book.bookCategory,
                publicationYear: book.publicationYear,
                isbn: book.isbn
            });
        }
        else {
            setFormData({
                id: '',
                title: '',
                author: '',
                bookCategory: '',
                publicationYear: '',
                isbn: ''
            });
        }
    }, [index, books]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isEditing) {
            const duplicateBooks = books.filter(book => book.id == formData.id);
            if (duplicateBooks.length > 0) {
                alert('ID already exists. Please enter a unique ID.');
                return;
            }
        }

        saveBook(formData);

        setFormData({
            id: '',
            title: '',
            author: '',
            bookCategory: '',
            publicationYear: '',
            isbn: ''
        });
        alert(isEditing ? 'Book updated successfully!' : 'Book added successfully!');
        isEditing = false;
    };
    return (
        <div className="min-vh-100 d-flex flex-column align-items-center" style={{ marginTop: '80px' }}>
            <div className="card" style={{ width: "90%", maxWidth: "600px" }}>
                <div className="card-header bg-dark text-white text-center">
                    <h1 className="mb-0">{isEditing ? 'Form to Update Book' : 'Form to Add Book'}</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Id</label>
                            <input type="text" className="form-control" id="id" aria-describedby="idHelp" onChange={handleInputChange} value={formData.id} />
                            <div id="idHelp" className="form-text">Please input Id with number</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" onChange={handleInputChange} value={formData.title} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" onChange={handleInputChange} value={formData.author} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="publicationYear" className="form-label">Publication Year</label>
                            <input type="text" className="form-control" id="publicationYear" onChange={handleInputChange} value={formData.publicationYear} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isbn" className="form-label">ISBN</label>
                            <input type="text" className="form-control" id="isbn" onChange={handleInputChange} value={formData.isbn} />
                        </div>
                        <label className="form-label">Book Category</label>
                        <select className="form-select mb-3" id="bookCategory" onChange={handleInputChange} value={formData.bookCategory}>
                            <option value="" disabled>Choose Book Category</option>
                            <option value="Comic">Comic</option>
                            <option value="Novel">Novel</option>
                            <option value="Biography">Biography</option>
                        </select>
                        <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;