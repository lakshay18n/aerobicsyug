import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const galleryImages = [
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026804/IMG_2771_prsqma.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026821/IMG_3903_cxthhg.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026802/WhatsApp_Image_2026-03-13_at_22.00.32_2_bsu4ne.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026811/IMG_1135_mpk6cj.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026802/WhatsApp_Image_2026-03-13_at_22.00.32_n5wood.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026812/IMG_5481_gykiyf.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026805/IMG_6757.JPG_fbaleb.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026802/WhatsApp_Image_2026-03-13_at_22.00.32_1_dgsgaj.jpg" },
        { src: "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026811/IMG_2990.JPG_ggi18y.jpg" }
    ];

    // Duplicate for seamless infinite scroll
    const duplicatedGallery = [...galleryImages, ...galleryImages, ...galleryImages];
    return (
        <>
            {/* ABOUT HERO */}
            <section className="about-hero section">
                <div className="container">
                    <h1>Meet Your <span className="text-gradient">Coach</span></h1>
                    <p>Dedicated to empowering women through fitness, yoga, and holistic wellness — from the comfort of home.</p>
                </div>
            </section>

            {/* TRAINER INTRODUCTION */}
            <section className="section">
                <div className="container">
                    <div className="trainer-intro-grid">
                        <div className="glass-card trainer-photo-main" style={{ padding: '1rem' }}>
                            <img loading="lazy" src="https://res.cloudinary.com/dbvntoevg/image/upload/v1774029062/Preeti_RAWAT_20260320_232012_0000.jpg_e71myp.jpg" alt="Coach" />
                        </div>
                        <div className="trainer-intro-content">
                            <h2>About the Trainer</h2>
                            <ul className="intro-text custom-bullet-list">
                                <li><strong>5+ Years Experience</strong> in fitness training and yoga, transforming women's lives via online classes.</li>
                                <li>Certified with an <strong>International Yoga Certification</strong> for authentic, reliable instruction.</li>
                                <li>Specialized expertise in <strong>aerobics and functional fitness</strong> tailored specifically for women.</li>
                                <li>Focuses on making fitness <strong>accessible, enjoyable, and sustainable</strong> from the comfort of your home.</li>
                                <li>Proud leader of a dedicated community of <strong>94K+ women on Instagram</strong> achieving real results.</li>
                            </ul>

                            <div className="trainer-highlights">
                                <div className="glass-card highlight-item">
                                    <div className="highlight-icon"><i className="fas fa-certificate"></i></div>
                                    <div>
                                        <h4>Certified Yoga Trainer</h4>
                                        <p>International Certification</p>
                                    </div>
                                </div>
                                <div className="glass-card highlight-item">
                                    <div className="highlight-icon"><i className="fas fa-star"></i></div>
                                    <div>
                                        <h4>5+ Years Experience</h4>
                                        <p>Professional Training</p>
                                    </div>
                                </div>
                                <div className="glass-card highlight-item">
                                    <div className="highlight-icon"><i className="fas fa-users"></i></div>
                                    <div>
                                        <h4>94K+ Community</h4>
                                        <p>Active Instagram Followers</p>
                                    </div>
                                </div>
                                <div className="glass-card highlight-item">
                                    <div className="highlight-icon"><i className="fas fa-heart"></i></div>
                                    <div>
                                        <h4>1000+ Lives Changed</h4>
                                        <p>Fitness Transformations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE TIMELINE */}
            <section className="section">
                <div className="container">
                    <h2>Journey & Experience</h2>
                    <div className="experience-timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-year">2017</div>
                                <h4>Started Yoga Practice</h4>
                                <p>Began her personal journey into yoga, meditation, and holistic wellness.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-year">2019</div>
                                <h4>International Yoga Certification</h4>
                                <p>Completed 200-hour Yoga Teacher Training (YTT) with international accreditation.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-year">2020</div>
                                <h4>Launched Online Classes</h4>
                                <p>Started Aerobics युग to bring fitness home during the pandemic. Grew to 10K followers in 6 months.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-year">2022</div>
                                <h4>Advanced Aerobics & Functional Training</h4>
                                <p>Completed specialized certifications in Aerobics & Functional Fitness for women.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-year">2024</div>
                                <h4>94K+ Instagram Community</h4>
                                <p>Built one of India's largest women-only online fitness communities with real results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHOTO GALLERY */}
            <section id="gallery" className="section gallery-section">
                <div className="container">
                    <h2>Gallery</h2>
                    <div className="gallery-reel-container">
                        <div className="gallery-reel-track">
                            {duplicatedGallery.map((item, index) => (
                                <div key={index} className="glass-card gallery-item" style={{ padding: 0 }}>
                                    <img src={item.src} alt={item.caption} loading="lazy" />
                                    <div className="gallery-caption">{item.caption}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section text-center">
                <div className="container">
                    <div className="glass-card" style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem' }}>
                        <h2>Ready to Start Your Fitness Journey?</h2>
                        <p className="mb-4" style={{ color: 'var(--text-light)' }}>Join our community and transform your health, one class at a time.</p>
                        <Link to="/#programs" className="btn btn-primary">Explore Programs</Link>
                        <Link to="/#contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Get In Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
