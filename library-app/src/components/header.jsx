import '../header.css'

function Header() {
  const date = new Date();
  const fullDate = date.toLocaleDateString('en-En', { day: '2-digit', month: 'long', year: 'numeric' });
  const timeOfDay = new Date().getHours() < 12 ? 'morning' : 'evening';

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-header mb-5">
        <p className="text-white fs-1 fw-bold z-index-1">Library App</p>
        <p className="fs-1 fw-bold z-index-1" style={{ color: '#FFFF79' }}>{`Good ${timeOfDay}!`}</p>
        <p className="fs-1 fw-bold z-index-1" style={{ color: '#FFFF79' }}>{`Current date is: ${fullDate}!`}</p>
        <p className="fs-1 fw-bold z-index-1" style={{ color: '#FFFF79' }}>{`Welcome to our site.`}</p>
      </div>
    </>
  )
}

export default Header