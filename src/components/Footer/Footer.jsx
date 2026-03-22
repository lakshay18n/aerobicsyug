import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                            <span className="logo-en">Aerobics</span> <span className="logo-hi">युग</span>
                        </Link>
                        <p>Empowering women through home-based fitness and holistic health guided online.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <Link to="/#programs">Programs</Link>
                        <Link to="/about">About Coach</Link>
                        <Link to="/#contact">Contact Us</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Programs</h4>
                        <Link to="/enroll?program=demo">Demo Class</Link>
                        <Link to="/enroll?program=monthly">Monthly Program</Link>
                        <Link to="/enroll?program=6month">6 Month Transformation</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="footer-social-icons">
                            <a href="https://instagram.com/aerobics_yug" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: "20px", height: "20px" }} />
                            </a>
                            <a href="https://youtube.com/@aerobics5370?si=kezgKHdsR08OZVAQ" className="social-icon" style={{ color: "#FF0000", fontSize: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><FaYoutube /></a>
                            <a href="https://www.facebook.com/share/1AkVt5Xjuj/?mibextid=wwXIfr" className="social-icon" style={{ color: "#1877F2", fontSize: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><FaFacebook /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Aerobics युग. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
