import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import { BrainCircuit, Database, Code2, Box, LineChart, Cpu, Atom } from 'lucide-react';
import './TechStack.css';

const TechStack = () => {
    const techCategories = [
        {
            title: "Languages",
            items: [
                { name: "Python", icon: <Code2 />, color: "#3776AB" },
                { name: "Java", icon: <Code2 />, color: "#007396" },
                { name: "Kotlin", icon: <Code2 />, color: "#7F52FF" },
                { name: "SQL", icon: <Database />, color: "#336791" },
                { name: "HTML", icon: <Code2 />, color: "#E34F26" },
                { name: "CSS", icon: <Code2 />, color: "#1572B6" }
            ]
        },
        {
            title: "Frameworks & Web",
            items: [
                { name: "React", icon: <Atom />, color: "#61DAFB" },
                { name: "Node JS", icon: <Atom />, color: "#339933" },
                { name: "FastAPI", icon: <Cpu />, color: "#05998B" },
                { name: "Flask", icon: <Cpu />, color: "#000000" },
                { name: "Django", icon: <Database />, color: "#092E20" },
                { name: "Streamlit", icon: <LineChart />, color: "#FF4B4B" }
            ]
        },
        {
            title: "AI & Machine Learning",
            items: [
                { name: "TensorFlow", icon: <BrainCircuit />, color: "#FF6F00" },
                { name: "Scikit-learn", icon: <LineChart />, color: "#F7931E" },
                { name: "Hugging Face", icon: <Box />, color: "#FFD21E" },
                { name: "NLTK", icon: <BrainCircuit />, color: "#154161" },
                { name: "LangChain", icon: <BrainCircuit />, color: "#000000" },
                { name: "RAG", icon: <Box />, color: "#B76E79" }
            ]
        },
        {
            title: "Data & Automation",
            items: [
                { name: "Pandas", icon: <LineChart />, color: "#150458" },
                { name: "NumPy", icon: <LineChart />, color: "#013243" },
                { name: "Matplotlib", icon: <LineChart />, color: "#11557C" },
                { name: "Selenium", icon: <Cpu />, color: "#43B02A" },
                { name: "Playwright", icon: <Cpu />, color: "#2EAD33" },
                { name: "Docker", icon: <Box />, color: "#2496ED" }
            ]
        },
        {
            title: "Databases",
            items: [
                { name: "PostgreSQL", icon: <Database />, color: "#4169E1" },
                { name: "SQLite", icon: <Database />, color: "#003B57" },
                { name: "DB", icon: <Database />, color: "#555555" },
                { name: "DBeaver", icon: <Database />, color: "#382923" }
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
                                            boxShadow: `0 0 30px ${tech.color}40`,
                                            borderColor: tech.color
                                        }}
                                    >
                                        <span className="tech-icon" style={{ color: tech.color }}>{tech.icon}</span>
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
