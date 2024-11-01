import Table from '../components/table'
import Form from '../components/form'

function HomePage({books, onEdit, onDelete, addBook, updateBook, editingBook, categories, isFormOpen, setIsFormOpen}) {
  return (
    <>
      <Table books={books} onEdit={onEdit} onDelete={onDelete} />
      <Form addBook={addBook} updateBook={updateBook} editingBook={editingBook} categories={categories} isFormOpen={isFormOpen} setIsFormOpen ={setIsFormOpen} />
    </>
  )
}

export default HomePage;
