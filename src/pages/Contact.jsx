import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import './Contact.css';

const Contact = () => {
    const socialLinks = [
        { name: "LinkedIn", url: "https://linkedin.com/in/pravin", color: "#0A66C2" },
        { name: "GitHub", url: "https://github.com/pravin", color: "#FFFFFF" }
    ];

    return (
        <PageTransition>
            <section className="contact-page">
                <div className="container">
                    <SectionHeader title="Let's Connect" subtitle="Open to new opportunities" />

                    <motion.div className="contact-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="email-section">
                            <p className="email-label">Reach out at</p>
                            <a href="mailto:pravin@example.com" className="email-link">pravin@example.com</a>
                        </div>

                        <motion.div className="contact-divider" initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} />

                        <div className="social-section">
                            <p className="social-label">Find me on</p>
                            <div className="social-links">
                                {socialLinks.map((link, i) => (
                                    <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link-card" whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${link.color}40` }}>
                                        <span className="social-name">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <footer className="site-footer">
                        <p className="footer-text">Designed & Built by <span className="footer-name">Pravin</span></p>
                        <p className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</p>
                    </footer>
                </div>
            </section>
        </PageTransition>
    );
};

export default Contact;
