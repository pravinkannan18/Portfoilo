import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { FileCheck2, Cpu, GraduationCap, Github, Code2 } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "IBM Certification in ML with Python",
            issuer: "IBM",
            icon: <Cpu />,
            color: "#054ADA"
        },
        {
            title: "ChatGPT Prompt Engineering",
            issuer: "DeepLearning.AI",
            icon: <GraduationCap />,
            color: "#10A37F"
        },
        {
            title: "Git and GitHub Certification",
            issuer: "GitHub",
            icon: <Github />,
            color: "#181717"
        },
        {
            title: "Python for Data Science",
            issuer: "NPTEL",
            icon: <Code2 />,
            color: "#2C3E50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <PageTransition>
            <section className="certifications-page">
                <div className="container">
                    <SectionHeader
                        title="Certifications"
                        subtitle="Professional certifications and credentials"
                    />

                    <motion.div
                        className="certifications-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <GlassCard className="cert-card">
                                    <div
                                        className="cert-icon"
                                        style={{
                                            boxShadow: `0 0 30px ${cert.color}20`,
                                            background: `${cert.color}15`
                                        }}
                                    >
                                        {cert.icon}
                                    </div>
                                    <div className="cert-content">
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                    </div>
                                    <motion.div
                                        className="cert-shine"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '200%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Certifications;
