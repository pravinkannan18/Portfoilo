import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Solutions Architect Professional",
            issuer: "Amazon Web Services",
            icon: "☁️",
            color: "#FF9900"
        },
        {
            title: "Google Cloud Professional ML Engineer",
            issuer: "Google Cloud",
            icon: "🌈",
            color: "#4285F4"
        },
        {
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            icon: "🧠",
            color: "#FF6F00"
        },
        {
            title: "Kubernetes Administrator (CKA)",
            issuer: "CNCF",
            icon: "☸️",
            color: "#326CE5"
        },
        {
            title: "Azure AI Engineer Associate",
            issuer: "Microsoft",
            icon: "🔷",
            color: "#0089D6"
        },
        {
            title: "MongoDB Developer Certificate",
            issuer: "MongoDB University",
            icon: "🍃",
            color: "#47A248"
        },
        {
            title: "Docker Certified Associate",
            issuer: "Docker Inc.",
            icon: "🐳",
            color: "#2496ED"
        },
        {
            title: "Deep Learning Specialization",
            issuer: "DeepLearning.AI",
            icon: "📚",
            color: "#EE4C2C"
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
