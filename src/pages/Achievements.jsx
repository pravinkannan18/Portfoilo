import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: "Best AI Innovation Award",
            organization: "Tech Excellence Summit 2023",
            description: "Recognized for developing an innovative AI-powered solution that revolutionized customer service automation.",
            icon: "🏆",
            highlight: true
        },
        {
            title: "Open Source Contributor",
            organization: "GitHub",
            description: "Top contributor to major open-source ML projects with 1000+ GitHub stars across repositories.",
            icon: "⭐",
            highlight: false
        },
        {
            title: "Hackathon Winner",
            organization: "HackTech 2022",
            description: "First place winner for building a real-time fraud detection system in 48 hours.",
            icon: "🥇",
            highlight: true
        },
        {
            title: "Patent Holder",
            organization: "US Patent Office",
            description: "Co-inventor of a patented algorithm for efficient neural network compression.",
            icon: "📜",
            highlight: false
        },
        {
            title: "Speaker at AI Conference",
            organization: "AI World Summit 2023",
            description: "Keynote speaker on 'The Future of Automation in Enterprise Systems'.",
            icon: "🎤",
            highlight: false
        },
        {
            title: "Team Excellence Award",
            organization: "Tech Innovations Inc.",
            description: "Led a team that delivered a critical ML infrastructure 2 months ahead of schedule.",
            icon: "👥",
            highlight: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <PageTransition>
            <section className="achievements-page">
                <div className="container">
                    <SectionHeader
                        title="Achievements"
                        subtitle="Recognition and milestones throughout my career"
                    />

                    <motion.div
                        className="achievements-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={achievement.highlight ? 'highlight-card' : ''}
                            >
                                <GlassCard
                                    className={`achievement-card ${achievement.highlight ? 'featured' : ''}`}
                                    glow={achievement.highlight}
                                >
                                    <div className="achievement-icon">
                                        {achievement.icon}
                                    </div>
                                    <div className="achievement-content">
                                        <h3 className="achievement-title">{achievement.title}</h3>
                                        <p className="achievement-org">{achievement.organization}</p>
                                        <p className="achievement-description">{achievement.description}</p>
                                    </div>
                                    {achievement.highlight && (
                                        <div className="achievement-badge">Featured</div>
                                    )}
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Achievements;
