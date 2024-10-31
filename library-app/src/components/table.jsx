function Table({ books, onEdit, onDelete  }) {
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div style={{ width: "90%", maxWidth: "1200px" }}>
                    <h1 className="text-center mb-4">List of Books</h1>
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Book Category</th>
                                    <th>Publication Year</th>
                                    <th>ISBN</th>
                                    <th>Edit Book</th>
                                    <th>Delete Book</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={index}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.bookCategory}</td>
                                        <td>{book.publicationYear}</td>
                                        <td>{book.isbn}</td>
                                        <td><button onClick={() => onEdit(index)} className="btn btn-primary"><i className="fas fa-pencil-alt"></i></button></td>
                                        <td><button onClick={() => onDelete(index)} className="btn btn-danger"> <i className="fas fa-trash-alt"></i></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table