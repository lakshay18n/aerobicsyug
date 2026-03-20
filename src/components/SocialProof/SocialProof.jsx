// import './SocialProof.css';

// const SocialProof = () => {
//     return (
//         <section className="section social-proof">
//             <div className="container">
//                 <h2>Loved by the Community</h2>
//                 <div className="proof-grid">
//                     {/* Reel Testimonials Container */}
//                     <div className="reel-container">
//                         <div className="reel-track">
//                             {/* Video Testimonial 1 */}
//                             <div className="glass-card testimonial-card reel-item" style={{ padding: '1rem' }}>
//                                 <div className="video-placeholder" style={{ aspectRatio: '9/16', borderRadius: '12px' }}>
//                                     <img loading="lazy" src="https://res.cloudinary.com/da7ewmcje/image/upload/f_auto,q_auto,w_auto/v1773151829/Screenshot_20260310_193049_Chrome.jpg_q1mzvz.jpg" alt="Video Testimonial 1" className="video-thumbnail" />
//                                     <button className="play-btn" style={{ width: '50px', height: '50px', fontSize: '1rem' }}><i className="fas fa-play"></i></button>
//                                 </div>
//                                 <div className="stars mt-3" style={{ marginBottom: '0.5rem' }}>
//                                     <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
//                                 </div>
//                                 <strong>- Priya S.</strong>
//                             </div>

//                             {/* Video Testimonial 2 */}
//                             <div className="glass-card testimonial-card reel-item" style={{ padding: '1rem' }}>
//                                 <div className="video-placeholder" style={{ aspectRatio: '9/16', borderRadius: '12px' }}>
//                                     <img loading="lazy" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Video Testimonial 2" className="video-thumbnail" />
//                                     <button className="play-btn" style={{ width: '50px', height: '50px', fontSize: '1rem' }}><i className="fas fa-play"></i></button>
//                                 </div>
//                                 <div className="stars mt-3" style={{ marginBottom: '0.5rem' }}>
//                                     <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
//                                 </div>
//                                 <strong>- Anjali R.</strong>
//                             </div>

//                             {/* Video Testimonial 3 */}
//                             <div className="glass-card testimonial-card reel-item" style={{ padding: '1rem' }}>
//                                 <div className="video-placeholder" style={{ aspectRatio: '9/16', borderRadius: '12px' }}>
//                                     <img loading="lazy" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Video Testimonial 3" className="video-thumbnail" />
//                                     <button className="play-btn" style={{ width: '50px', height: '50px', fontSize: '1rem' }}><i className="fas fa-play"></i></button>
//                                 </div>
//                                 <div className="stars mt-3" style={{ marginBottom: '0.5rem' }}>
//                                     <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
//                                 </div>
//                                 <strong>- Sneha M.</strong>
//                             </div>

//                             {/* Video Testimonial 4 */}
//                             <div className="glass-card testimonial-card reel-item" style={{ padding: '1rem' }}>
//                                 <div className="video-placeholder" style={{ aspectRatio: '9/16', borderRadius: '12px' }}>
//                                     <img loading="lazy" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Video Testimonial 4" className="video-thumbnail" />
//                                     <button className="play-btn" style={{ width: '50px', height: '50px', fontSize: '1rem' }}><i className="fas fa-play"></i></button>
//                                 </div>
//                                 <div className="stars mt-3" style={{ marginBottom: '0.5rem' }}>
//                                     <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
//                                 </div>
//                                 <strong>- Riya K.</strong>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SocialProof;


import './SocialProof.css';

const SocialProof = () => {
    const testimonials = [
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026819/Screenshot_20260310_193049_Chrome.jpg_phv8je.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026819/Screenshot_20260310_193407_Chrome.jpg_ncr9dl.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026815/Screenshot_20260310_193018_Chrome.jpg_omqfya.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026815/Screenshot_20260310_193030_Chrome.jpg_jnzqmi.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026814/Screenshot_20260310_193002_Chrome.jpg_uxs7if.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026814/Screenshot_20260310_192952_Chrome.jpg_zwajuz.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026813/Screenshot_20260310_193045_Chrome.jpg_o74oxf.jpg"
    ];

    // Duplicate for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="social-proof" className="section social-proof">
            <div className="container">
                <h2>Loved by the Community</h2>
                <div className="proof-grid">
                    <div className="reel-container">
                        <div className="reel-track">
                            {duplicatedTestimonials.map((image, index) => (
                                <div key={index} className="reel-item">
                                    <img
                                        src={image}
                                        alt={`Testimonial ${index + 1}`}
                                        className="testimonial-image"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;