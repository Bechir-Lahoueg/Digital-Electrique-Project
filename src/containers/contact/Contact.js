import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, subject, message } = formData;

        const mailtoLink = `mailto:bichbichmen@gmail.com?subject=${encodeURIComponent(subject || 'Formulaire de contact')}&body=${encodeURIComponent(
            `Prénom: ${firstName}\nNom de famille: ${lastName}\nEmail: ${email}\nTéléphone: ${phone}\nSujet: ${subject}\nMessage: ${message}`
        )}`;

        window.open(mailtoLink, '_blank');

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    return (
        <section className="contact-section" id='contact'>
            <div className="contact-info">
                <h2>Contactez-nous</h2>
                <p>Nous sommes prêts à répondre à vos besoins. Remplissez le formulaire ci-dessous ou contactez-nous directement.</p>
                <p><strong>📍 Nabeul 8000, Tunisie</strong></p>
                <p><a href="mailto:digitalelectronique@gmail.com">digitalelectronique@gmail.com</a></p>
                <p>📞 22.830.811 | ☎️ 72.287.463</p>
            </div>

            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">Prénom *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Nom de famille *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Numéro de téléphone *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Sujet</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Votre message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
