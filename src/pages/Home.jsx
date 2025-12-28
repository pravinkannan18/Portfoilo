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

    return (
        <PageTransition>
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

                    {/* Name with Outline */}
                    <motion.h1 className="hero-name" variants={itemVariants}>
                        <span className="name-filled">Pra</span>
                        <span className="name-outline">vin</span>
                        <span className="name-dot">.</span>
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
        </PageTransition>
    );
};

export default Home;
