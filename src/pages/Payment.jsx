import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const navigate = useNavigate();
    const [enrollData, setEnrollData] = useState({});
    const [copied, setCopied] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [isValid, setIsValid] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const UPI_ID = 'preet26.maahii@okhdfcbank';
    const UPI_NAME = 'PREETI RAWAT';

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('aerobicsYugEnroll') || '{}');
        setEnrollData(data);
    }, []);

    const upiLink = enrollData.amount ? `upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&am=${enrollData.amount}&cu=INR` : '#';

    const copyUPI = () => {
        navigator.clipboard.writeText(UPI_ID).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const copyAccountDetails = () => {
        const accountDetails = `Account Name: ${UPI_NAME}\nAccount Number: 04341000030412\nBank Name: HDFC Bank\nIFSC Code: HDFC0000434\nBranch: SECTOR 46 CHANDIGARH\nAccount Type: Saving Account`;
        navigator.clipboard.writeText(accountDetails).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const validateTransactionId = (value, method) => {
        if (!value.trim()) {
            setIsValid(null);
            setErrorMessage('');
            return false;
        }

        let valid = false;
        if (method === 'upi') {
            const upiRegex = /^\d{12,16}$/;
            valid = upiRegex.test(value);
        } else if (method === 'bank') {
            const bankRegex = /^[A-Za-z0-9]{12,22}$/;
            valid = bankRegex.test(value);
        }

        setIsValid(valid);
        if (!valid) {
            setErrorMessage('Please enter a valid Transaction ID');
        } else {
            setErrorMessage('');
        }
        return valid;
    };

    const handleTransactionIdChange = (e) => {
        const value = e.target.value;
        setTransactionId(value);
        validateTransactionId(value, paymentMethod);
    };

    const handleMethodChange = (e) => {
        const method = e.target.value;
        setPaymentMethod(method);
        setTransactionId('');
        setIsValid(null);
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateTransactionId(transactionId, paymentMethod)) {
            alert('Please enter a valid Transaction ID format.');
            return;
        }

        const updatedData = {
            ...enrollData,
            transactionId
        };

        localStorage.setItem('aerobicsYugEnroll', JSON.stringify(updatedData));

        // Generate WhatsApp Message
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
Batch/Time: ${enrollData.batch || '—'}
Amount Paid: INR ${enrollData.amount || '—'}

*Payment Information:*
Transaction ID: ${transactionId}
Date & Time: ${dateString} at ${timeString}

*Please attach your payment screenshot below*`;

        const phone = '919056114997'; // Maam's WhatsApp Number
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        navigate('/success');
    };

    return (
        <section className="payment-page section">
            <div className="container">
                {/* Header */}
                <div className="payment-header">
                    <h1>Complete Your <span className="text-gradient">Payment</span></h1>
                    <p>You're one step away from joining the Aerobics युग community!</p>
                </div>

                {/* Enrollee Info Bar */}
                <div className="enrollee-bar">
                    <div className="item"><i className="fas fa-user"></i> <strong>{enrollData.name || '—'}</strong></div>
                    <div className="item"><i className="fas fa-box"></i> <strong>{enrollData.programName || '—'}</strong></div>
                    <div className="item"><i className="fas fa-clock"></i> <strong>{enrollData.batch || '—'}</strong></div>
                    <div className="item"><i className="fas fa-rupee-sign"></i> <strong>{enrollData.amount ? `₹${enrollData.amount.toLocaleString('en-IN')}` : '—'}</strong></div>
                </div>

                <div className="payment-grid">
                    {/* LEFT: Payment Methods */}
                    <div className="glass-card payment-methods-card">
                        <h3>Payment Options</h3>
                        <p>Choose any method below to complete your payment</p>

                        {/* Amount Box */}
                        <div className="amount-box">
                            <div className="label">Total Amount</div>
                            <div className="amount">₹{enrollData.amount ? enrollData.amount.toLocaleString('en-IN') : '0'}</div>
                            <div className="program-name">{enrollData.programName || '—'}</div>
                        </div>

                        {/* Pay Now Button (UPI Deep Link) */}
                        <a href={upiLink} className="btn btn-primary pay-now-btn pulse-anim">
                            <i className="fas fa-wallet"></i> Pay Now via UPI
                        </a>

                        {/* UPI ID */}
                        <div className="upi-section">
                            <h4><i className="fas fa-copy" style={{ color: 'var(--primary-coral)', marginRight: '0.3rem' }}></i> Or pay using UPI ID:</h4>
                            <div className="upi-id-box">
                                <span>{UPI_ID}</span>
                                <button className="copy-btn" onClick={copyUPI}>
                                    {copied ? <><i className="fas fa-check"></i> Copied!</> : <><i className="fas fa-copy"></i> Copy</>}
                                </button>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="qr-section">
                            <h4 style={{ marginBottom: '1rem' }}>Scan QR Code</h4>
                            <div className="qr-placeholder">
                                {/* <i className="fas fa-qrcode"></i> */}
                                <img loading="lazy" src="https://res.cloudinary.com/dbvntoevg/image/upload/v1774030476/WhatsApp_Image_2026-03-14_at_14.17.17_zr5gx0_cgz32q.jpg" alt="" />
                            </div>
                        </div>

                        {/* account details` */}
                        <div className="payment-steps">
                            <h4>Account Details</h4>
                            <ul className="step-list">
                                <li>Account Name: <strong>{UPI_NAME}</strong></li>
                                <li>Account Number: <strong>04341000030412</strong></li>
                                <li>Bank Name: <strong>HDFC Bank</strong></li>
                                <li>IFSC Code: <strong>HDFC0000434</strong></li>
                                <li>Branch: <strong>SECTOR 46 CHANDIGARH</strong></li>
                                <li>Account Type: <strong>Saving Account</strong></li>
                            </ul>
                            <button className="copy-btn" onClick={copyAccountDetails}>
                                {copied ? <><i className="fas fa-check"></i> Copied!</> : <><i className="fas fa-copy"></i> Copy Account Details</>}
                            </button>
                        </div>

                        {/* Steps */}
                        <div className="payment-steps">
                            <h4>How to Pay</h4>
                            <ul className="step-list">
                                <li><span className="step-number">1</span> Click <strong>Pay Now</strong> or copy UPI ID / scan QR code</li>
                                <li><span className="step-number">2</span> Complete payment using your UPI app (GPay, PhonePe, Paytm, etc.)</li>
                                <li><span className="step-number">3</span> Copy your <strong>Transaction ID</strong> from the payment confirmation</li>
                                <li><span className="step-number">4</span> Return here and submit payment confirmation below</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: Confirmation Form */}
                    <div className="glass-card confirm-card">
                        <h3>Payment Confirmation</h3>
                        <p>After completing payment, fill in the details below</p>

                        <form className="confirm-form" onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.2rem' }}>
                                <label htmlFor="paymentMethod">Payment Method Used</label>
                                <select 
                                    id="paymentMethod"
                                    value={paymentMethod}
                                    onChange={handleMethodChange}
                                    className="method-select"
                                >
                                    <option value="upi">UPI</option>
                                    <option value="bank">Bank Transfer / NEFT / IMPS</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="transactionId">
                                    {paymentMethod === 'upi' ? 'UPI Transaction ID' : 'Bank Transaction ID'}
                                </label>
                                <div className="input-with-icon">
                                    <input
                                        type="text"
                                        id="transactionId"
                                        value={transactionId}
                                        onChange={handleTransactionIdChange}
                                        placeholder={paymentMethod === 'upi' ? "e.g. 123456789012345" : "e.g. SBIN0001234567890"}
                                        className={`tx-input ${isValid === true ? 'valid' : isValid === false ? 'invalid' : ''}`}
                                        required
                                    />
                                    {isValid === true && <i className="fas fa-check-circle valid-icon"></i>}
                                </div>
                                {isValid === false && <span className="error-message">{errorMessage}</span>}
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-4" disabled={!isValid}>
                                <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i> Submit Payment Confirmation
                            </button>
                        </form>

                        <div className="security-note">
                            <i className="fas fa-shield-alt"></i>
                            <span>Your payment details are secure and encrypted</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
