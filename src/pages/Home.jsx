import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedButton from '../components/AnimatedButton';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "AI Engineer • Backend Developer • Automation Specialist";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
        return () => clearInterval(typingInterval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
    };

    const stats = [
        { number: "2+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "5+", label: "AI Models Deployed" },
        { number: "100%", label: "Client Satisfaction" }
    ];

    const techStack = [
        { name: "Python", icon: "🐍" },
        { name: "FastAPI", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Docker", icon: "🐳" }
    ];

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="hero">
                <ParticleBackground particleCount={40} speed={0.5} />

                {/* Floating Stickers */}
                <motion.div
                    className="floating-sticker sticker-1"
                    animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="sticker sticker-blue">AI/ML</span>
                </motion.div>

                <motion.div
                    className="floating-sticker sticker-2"
                    animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="sticker sticker-pink">PYTHON</span>
                </motion.div>

                <motion.div
                    className="floating-sticker sticker-3"
                    animate={{ y: [-5, 15, -5], rotate: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="sticker">BACKEND</span>
                </motion.div>

                <motion.div
                    className="floating-sticker sticker-4"
                    animate={{ y: [15, -5, 15], rotate: [5, -5, 5] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="sticker sticker-blue">REACT</span>
                </motion.div>

                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Handwritten Greeting */}
                    <motion.p className="hero-greeting handwritten" variants={itemVariants}>
                        Hey there! I'm
                    </motion.p>

                    {/* Name without dot */}
                    <motion.h1 className="hero-name" variants={itemVariants}>
                        <span className="name-filled">Pra</span>
                        <span className="name-outline">vin</span>
                    </motion.h1>

                    {/* Typing Animation */}
                    <motion.div className="hero-tagline" variants={itemVariants}>
                        <span className="tagline-bracket">[</span>
                        <span className="tagline-text">{displayedText}</span>
                        <span className="typing-cursor">_</span>
                        <span className="tagline-bracket">]</span>
                    </motion.div>

                    {/* Description Card */}
                    <motion.div className="hero-description-card" variants={itemVariants}>
                        <div className="tape tape-top-left"></div>
                        <p className="hero-description">
                            Building intelligent systems, scalable backends, and automation solutions
                            that transform complex challenges into elegant solutions.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div className="hero-cta" variants={itemVariants}>
                        <AnimatedButton to="/experience" variant="primary" size="large">
                            View Experience →
                        </AnimatedButton>
                        <AnimatedButton href="https://github.com/" variant="secondary" size="large">
                            GitHub Profile
                        </AnimatedButton>
                    </motion.div>

                    {/* Arrow Annotation */}
                    <motion.div
                        className="scroll-hint handwritten"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <span>scroll down to explore! ↓</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <motion.div
                    className="stats-container"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* About Preview Section */}
            <section className="about-preview">
                <motion.div
                    className="about-preview-content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="section-label handwritten"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.span>
                    <motion.h2
                        className="about-preview-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Passionate about creating <span className="highlight">intelligent solutions</span>
                    </motion.h2>
                    <motion.p
                        className="about-preview-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        I'm a software developer with expertise in AI/ML, backend development, and automation.
                        I love building products that solve real-world problems and make a meaningful impact.
                        From designing robust APIs to training machine learning models, I bring ideas to life
                        with clean, efficient code.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <AnimatedButton to="/about" variant="secondary" size="medium">
                            Learn More About Me →
                        </AnimatedButton>
                    </motion.div>
                </motion.div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-stack-section">
                <motion.span
                    className="section-label handwritten"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Tech Stack
                </motion.span>
                <motion.h2
                    className="tech-stack-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technologies I Work With
                </motion.h2>
                <motion.div
                    className="tech-stack-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="tech-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                        >
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="cta-title">Let's Build Something Amazing Together</h2>
                    <p className="cta-text">
                        Have a project in mind? I'm always excited to collaborate on innovative ideas
                        and bring visions to reality.
                    </p>
                    <div className="cta-buttons">
                        <AnimatedButton to="/contact" variant="primary" size="large">
                            Get In Touch →
                        </AnimatedButton>
                        <AnimatedButton to="/projects" variant="secondary" size="large">
                            View Projects
                        </AnimatedButton>
                    </div>
                </motion.div>
            </section>
        </PageTransition>
    );
};

export default Home;
