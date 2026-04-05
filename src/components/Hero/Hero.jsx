import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(currentProgress);
    };

    const handleSeek = (e) => {
        if (!videoRef.current) return;
        const newTime = (e.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

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
                        <span>Trusted by 100k+ fitness enthusiasts on Instagram</span>
                    </div>
                    <h1 className="headline" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <span className="headline-top" style={{ fontFamily: "var(--font-en)", fontWeight: "800", color: "var(--text-dark)", fontSize: "0.75em", lineHeight: "1.2", textTransform: "none", letterSpacing: "normal" }}>
                            Transform Your Body With Online
                        </span>
                        <span className="headline-bottom" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.3em", letterSpacing: "3px", background: "linear-gradient(90deg, #0F2460 0%, #1B6CA8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: "1.1" }}>
                            Fitness Classes
                        </span>
                    </h1>
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
                                src="https://res.cloudinary.com/dbvntoevg/video/upload/v1774026891/aerobics_video_final_xksf2e.mp4"
                                poster="https://res.cloudinary.com/dbvntoevg/video/upload/so_2/aerobics_video_final_xksf2e.jpg"
                                muted={isMuted}
                                playsInline
                                preload="metadata"
                                controls={false}
                                onTimeUpdate={handleTimeUpdate}
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
                            <div className="custom-seekbar-container" onClick={(e) => e.stopPropagation()}>
                                <div className="seekbar-track">
                                    <div className="seekbar-fill" style={{ width: `${progress}%` }}></div>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={progress || 0}
                                    onChange={handleSeek}
                                    className="video-seekbar"
                                    aria-label="Seek video"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="trainer-badge glass-card float-anim">
                        <img src="https://res.cloudinary.com/dbvntoevg/image/upload/v1774026809/IMG_6263.JPG_gdefhl.jpg" alt="Trainer Profile" />
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
