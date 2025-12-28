import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: "IIT Madras Shaastra",
            organization: "AI/ML Challenge 2",
            description: "Secured first place in the prestigious AI/ML challenge organized by IIT Madras, demonstrating advanced technical skills and problem-solving.",
            icon: "🏆",
            highlight: true
        },
        {
            title: "Poster Designing",
            organization: "National Level Competition",
            description: "Winner of the national level poster designing competition, showcasing creativity and strong visual communication skills.",
            icon: "🎨",
            highlight: false
        },
        {
            title: "Club Activity",
            organization: "University Excellence",
            description: "Awarded winner for outstanding contribution and leadership in university club activities and events.",
            icon: "🌟",
            highlight: false
        },
        {
            title: "Techalthon",
            organization: "IIITM",
            description: "Finalist in the Techalthon competition by IIITM, competing with top talents in rapid product development and innovation.",
            icon: "🚀",
            highlight: true
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
