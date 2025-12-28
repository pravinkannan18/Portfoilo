import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import './TechStack.css';

const TechStack = () => {
    const techCategories = [
        {
            title: "Languages",
            items: [
                { name: "Python", icon: "🐍" },
                { name: "JavaScript", icon: "📜" },
                { name: "TypeScript", icon: "📘" },
                { name: "Java", icon: "☕" },
                { name: "Go", icon: "🔵" },
                { name: "Rust", icon: "🦀" },
                { name: "SQL", icon: "🗃️" },
                { name: "Bash", icon: "💻" }
            ]
        },
        {
            title: "Frameworks",
            items: [
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "Node.js", icon: "🟢" },
                { name: "FastAPI", icon: "⚡" },
                { name: "Django", icon: "🎸" },
                { name: "Flask", icon: "🌶️" },
                { name: "Express", icon: "🚂" },
                { name: "Spring Boot", icon: "🍃" }
            ]
        },
        {
            title: "AI & ML Tools",
            items: [
                { name: "TensorFlow", icon: "🧠" },
                { name: "PyTorch", icon: "🔥" },
                { name: "Scikit-learn", icon: "📊" },
                { name: "Hugging Face", icon: "🤗" },
                { name: "OpenCV", icon: "👁️" },
                { name: "LangChain", icon: "🔗" },
                { name: "Keras", icon: "🔶" },
                { name: "MLflow", icon: "📈" }
            ]
        },
        {
            title: "Databases & Cloud",
            items: [
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Redis", icon: "🔴" },
                { name: "AWS", icon: "☁️" },
                { name: "GCP", icon: "🌈" },
                { name: "Docker", icon: "🐳" },
                { name: "Kubernetes", icon: "☸️" },
                { name: "Terraform", icon: "🏗️" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <PageTransition>
            <section className="techstack-page">
                <div className="container">
                    <SectionHeader
                        title="Tech Stack"
                        subtitle="The technologies I work with to build amazing products"
                    />

                    {techCategories.map((category, catIndex) => (
                        <div key={catIndex} className="tech-category">
                            <motion.h3
                                className="tech-category-title"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {category.title}
                            </motion.h3>

                            <motion.div
                                className="tech-grid"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {category.items.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="tech-tile"
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: '0 0 30px rgba(183, 110, 121, 0.3)'
                                        }}
                                    >
                                        <span className="tech-icon">{tech.icon}</span>
                                        <span className="tech-name">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
};

export default TechStack;
