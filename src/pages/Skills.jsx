import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import SkillBadge from '../components/SkillBadge';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Software & Backend",
            icon: "⚙️",
            category: "backend",
            skills: [
                "Python", "Java", "Node.js", "Go", "Rust",
                "REST APIs", "GraphQL", "Microservices",
                "System Design", "Database Design"
            ]
        },
        {
            title: "AI & Machine Learning",
            icon: "🧠",
            category: "ai",
            skills: [
                "TensorFlow", "PyTorch", "Scikit-learn",
                "Natural Language Processing", "Computer Vision",
                "Deep Learning", "Neural Networks",
                "Model Optimization", "MLOps"
            ]
        },
        {
            title: "Automation",
            icon: "🤖",
            category: "automation",
            skills: [
                "CI/CD Pipelines", "Jenkins", "GitHub Actions",
                "Ansible", "Terraform", "Docker",
                "Kubernetes", "RPA", "Scripting"
            ]
        },
        {
            title: "Web & Mobile",
            icon: "🌐",
            category: "web",
            skills: [
                "React", "Next.js", "Vue.js",
                "TypeScript", "HTML5", "CSS3",
                "React Native", "Flutter",
                "Progressive Web Apps"
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
