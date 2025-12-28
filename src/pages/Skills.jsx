import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import SkillBadge from '../components/SkillBadge';
import { Code2, BrainCircuit, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Development",
            icon: <Code2 />,
            category: "backend",
            skills: [
                "Software Development", "Backend Development",
                "Website Development", "Mobile Development",
                "Android Development"
            ]
        },
        {
            title: "Artificial Intelligence",
            icon: <BrainCircuit />,
            category: "ai",
            skills: [
                "Machine Learning", "Artificial Intelligence",
                "Deep Learning", "AI Agents",
                "Natural Language Processing"
            ]
        },
        {
            title: "Automation & Tools",
            icon: <Cpu />,
            category: "automation",
            skills: [
                "Automation", "Social Media Handling",
                "Prompt Engineering", "RAG", "LLM Pipelines"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <PageTransition>
            <section className="skills-page">
                <div className="container">
                    <SectionHeader
                        title="Skills"
                        subtitle="Technologies and expertise I've developed over the years"
                    />

                    <motion.div
                        className="skills-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <GlassCard className="skill-category-card" delay={0}>
                                    <div className="category-header">
                                        <span className="category-icon">{category.icon}</span>
                                        <h3 className="category-title">{category.title}</h3>
                                    </div>
                                    <div className="skills-list">
                                        {category.skills.map((skill, skillIndex) => (
                                            <SkillBadge
                                                key={skillIndex}
                                                name={skill}
                                                category={category.category}
                                                delay={0.05 * skillIndex}
                                                size="medium"
                                            />
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Skills;
