import { useState, useEffect, useRef } from "react";

const Form = ({ addBook, updateBook, editingBook, categories, isFormOpen, setIsFormOpen }) => {
    const titleInputRef = useRef(null);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        bookCategory: '',
        publicationYear: '',
        isbn: ''
    });

    useEffect(() => {
        if (editingBook) {
            setFormData({
                title: editingBook.title,
                author: editingBook.author,
                bookCategory: editingBook.bookCategory,
                publicationYear: editingBook.publicationYear,
                isbn: editingBook.isbn
            });
        }
        else {
            setFormData({
                title: '',
                author: '',
                bookCategory: '',
                publicationYear: '',
                isbn: ''
            });
        }
    }, [editingBook]);

    useEffect(() => {
        if (isFormOpen && titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, [isFormOpen]); 

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingBook) {
            updateBook(formData)
        }
        else {
            addBook(formData)
        }

        setFormData({
            title: '',
            author: '',
            bookCategory: '',
            publicationYear: '',
            isbn: ''
        });
        setIsFormOpen(false);
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    return (
        <div className="min-vh-100 d-flex flex-column align-items-center" style={{ marginTop: '80px' }}>
            <div className="card" style={{ width: "90%", maxWidth: "600px" }}>
                <div className="card-header bg-dark text-white text-center">
                    <h1 className="mb-0">{editingBook ? 'Form to Update Book' : 'Form to Add Book'}</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" required ref={titleInputRef} className="form-control" id="title" onChange={handleInputChange} value={formData.title} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" required className="form-control" id="author" onChange={handleInputChange} value={formData.author} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="publicationYear" className="form-label">Publication Year</label>
                            <input type="text" placeholder="Example: 2023" pattern="\d*" required className="form-control" id="publicationYear" onChange={handleInputChange} value={formData.publicationYear} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isbn" className="form-label">ISBN</label>
                            <input type="text" required className="form-control" id="isbn" onChange={handleInputChange} value={formData.isbn} />
                        </div>
                        <label className="form-label">Book Category</label>
                        <select className="form-select mb-3" id="bookCategory" onChange={handleInputChange} required value={formData.bookCategory}>
                            <option value="" disabled>Choose Book Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={openForm} type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;