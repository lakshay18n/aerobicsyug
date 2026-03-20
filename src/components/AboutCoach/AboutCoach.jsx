import { Link } from 'react-router-dom';
import './AboutCoach.css';

const AboutCoach = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-image">
                    <div className="image-wrapper glass-effect">
                        <img loading="lazy" src="https://res.cloudinary.com/dbvntoevg/image/upload/v1774029062/Preeti_RAWAT_20260320_232012_0000.jpg_e71myp.jpg" alt="Coach Profile" />
                    </div>
                    <div className="glass-card floating-badge">
                        <i className="fas fa-certificate text-gradient"></i>
                        <span>Certified Expert</span>
                    </div>
                </div>
                <div className="about-content">
                    <h2>Meet Your Coach</h2>
                    <p>Welcome to a new era of fitness. I'm dedicated to helping women discover their strength from the comfort of their homes.</p>

                    <ul className="coach-stats">
                        <li><i className="fas fa-check-circle"></i> International Yoga Certification</li>
                        <li><i className="fas fa-check-circle"></i> Online Live Classes since 2020</li>
                        <li><i className="fas fa-check-circle"></i> 94K+ Strong Instagram Community</li>
                        <li><i className="fas fa-check-circle"></i> Helping 1000s of women stay fit</li>
                    </ul>

                    <a href="#contact" className="btn btn-secondary mt-4">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default AboutCoach;
