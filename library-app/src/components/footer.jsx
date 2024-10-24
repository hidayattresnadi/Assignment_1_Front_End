
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <div className="container-fluid">
                <h5 className="mb-3">Library App</h5>
                <p>© {new Date().getFullYear()} Library. All rights reserved.</p>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 text-center mt-4">
                        <h6>Follow Us</h6>
                        <div className="mt-4">
                            <a href="#" className="text-white me-3" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white me-3" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center mt-4">
                        <h6>Contact Us</h6>
                        <p>Email: <a href="mailto:contact@librarycompany.com" className="text-white">contact@librarycompany.com</a></p>
                        <p>Phone: <a href="tel:+62234567890" className="text-white">+62 234 567 890</a></p>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                        <a href="#" className="text-white me-3" aria-label="Terms of Service">Terms of Service</a>
                        <a href="#" className="text-white" aria-label="Privacy Policy">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
