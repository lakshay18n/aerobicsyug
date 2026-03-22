import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

const Success = () => {
    const [enrollData, setEnrollData] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('aerobicsYugEnroll') || '{}');
        setEnrollData(data);
    }, []);

    const getWhatsAppUrl = () => {
        if (!enrollData.amount) return '#';

        const now = new Date();
        const dateString = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', day: '2-digit', month: 'short', year: 'numeric' });
        const timeString = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true });

        const message = `*New Enrollment - Payment Confirmation*

*Student Details:*
Name: ${enrollData.name || '—'}
Phone: ${enrollData.phone || '—'}
Email: ${enrollData.email || '—'}
City: ${enrollData.city || '—'}

*Program Details:*
Program: ${enrollData.programName || '—'}
Amount Paid: INR ${enrollData.amount || '—'}

*Payment Information:*
Transaction ID: ${enrollData.transactionId || '—'}
Date & Time: ${dateString} at ${timeString}

*Please attach your payment screenshot below*`;

        const phone = '919056114997';
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="success-section section">
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="glass-card success-card">
                    <div className="success-icon">
                        <i className="fas fa-check"></i>
                    </div>

                    <h1>✅ Payment Details Sent!</h1>
                    <p className="message">
                        Your enrollment request has been forwarded to our team via WhatsApp.
                    </p>

                    <div className="enrollee-details-list">
                        <div className="detail-item"><span>👤 Name:</span> <strong>{enrollData.name || '—'}</strong></div>
                        <div className="detail-item"><span>💪 Program:</span> <strong>{enrollData.programName || '—'}</strong></div>
                        <div className="detail-item"><span>💰 Amount:</span> <strong>₹{(enrollData.amount || 0).toLocaleString('en-IN')}</strong></div>
                        <div className="detail-item"><span>🔖 Transaction ID:</span> <strong>{enrollData.transactionId || '—'}</strong></div>
                    </div>

                    <div className="important-note-box">
                        <span className="note-icon">📸</span>
                        <p>Don't forget to attach your <strong>payment screenshot</strong> in the WhatsApp chat!</p>
                    </div>

                    {/* <div className="next-steps">
                        <h4>📋 What Happens Next</h4>
                        <ul>
                            <li><i className="fas fa-check-circle"></i> Our team will verify your payment within 2-4 hours</li>
                            <li><i className="fas fa-check-circle"></i> You'll receive confirmation on WhatsApp</li>
                            <li><i className="fas fa-check-circle"></i> Class group link will be shared after verification</li>
                            <li><i className="fas fa-check-circle"></i> Start your fitness journey!</li>
                        </ul>
                    </div> */}

                    <div className="contact-support">
                        💬 Having issues? <a href="https://wa.me/919056114997" target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a>
                    </div>

                    <div className="success-actions mt-4">
                        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
                            <i className="fab fa-whatsapp"></i> Open WhatsApp Again
                        </a>
                        <Link to="/" className="btn btn-secondary">
                            <i className="fas fa-home"></i> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;
