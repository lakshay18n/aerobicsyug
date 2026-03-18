import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoClick = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <header id="home" className="hero-section section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="trust-badge">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="ig-icon" />
                        <span>Trusted by 90,000+ fitness enthusiasts on Instagram</span>
                    </div>
                    <h1 className="headline">Transform Your Body With Online <span className="text-gradient">Aerobics Classes</span></h1>
                    <p className="subheadline">Join thousands of women improving their health, confidence and energy through guided online fitness training.</p>
                    <div className="hero-buttons">
                        <Link to="/enroll?program=demo" className="btn btn-primary pulse-anim">Book Demo Class</Link>
                        <a href="#programs" className="btn btn-secondary">Explore Programs</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="glass-card vsl-card">
                        <div className="video-placeholder" onClick={handleVideoClick} style={{ cursor: 'pointer' }}>
                            <video 
                                ref={videoRef}
                                className="video-thumbnail"
                                src="https://res.cloudinary.com/da7ewmcje/video/upload/v1773836287/aerobics_video_final_rkh6au.mp4"
                                muted={isMuted}
                                playsInline
                                preload="metadata"
                                controls={false}
                            />
                            {!isPlaying && (
                                <button className="play-btn" onClick={(e) => { e.stopPropagation(); handlePlay(); }}>
                                    <i className="fas fa-play"></i>
                                </button>
                            )}
                            <button 
                                className="mute-btn" 
                                onClick={toggleMute}
                                aria-label={isMuted ? "Unmute video" : "Mute video"}
                            >
                                <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                            </button>
                        </div>
                    </div>
                    <div className="trainer-badge glass-card float-anim">
                        <img src="https://res.cloudinary.com/da7ewmcje/image/upload/v1773482590/IMG_6263.JPG_yycovw.jpg" alt="Trainer Profile" />
                        <div className="trainer-info">
                            <strong>Expert Coach</strong>
                            <span>Online Live</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
