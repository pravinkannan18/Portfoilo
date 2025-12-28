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
                { name: "Java", icon: "☕" },
                { name: "Kotlin", icon: "📱" },
                { name: "SQL", icon: "🗃️" },
                { name: "HTML", icon: "🌐" },
                { name: "CSS", icon: "🎨" }
            ]
        },
        {
            title: "Frameworks & Web",
            items: [
                { name: "React", icon: "⚛️" },
                { name: "Node JS", icon: "🟢" },
                { name: "FastAPI", icon: "⚡" },
                { name: "Flask", icon: "🌶️" },
                { name: "Django", icon: "🎸" },
                { name: "Streamlit", icon: "🚀" }
            ]
        },
        {
            title: "AI & Machine Learning",
            items: [
                { name: "TensorFlow", icon: "🧠" },
                { name: "Scikit-learn", icon: "📊" },
                { name: "Hugging Face", icon: "🤗" },
                { name: "NLTK", icon: "✂️" },
                { name: "LangChain", icon: "🔗" },
                { name: "RAG", icon: "📚" }
            ]
        },
        {
            title: "Data & Automation",
            items: [
                { name: "Pandas", icon: "🐼" },
                { name: "NumPy", icon: "🔢" },
                { name: "Matplotlib", icon: "📈" },
                { name: "Selenium", icon: "🤖" },
                { name: "Playwright", icon: "🎭" },
                { name: "Docker", icon: "🐳" }
            ]
        },
        {
            title: "Databases",
            items: [
                { name: "PostgreSQL", icon: "🐘" },
                { name: "SQLite", icon: "🪶" },
                { name: "DB", icon: "📁" },
                { name: "DBeaver", icon: "🦫" }
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
