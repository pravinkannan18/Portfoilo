import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Kathaipetti",
            role: "Software Developer",
            location: "Onsite (Chennai, Tamil Nadu)",
            duration: "May 2025 - Jul 2025",
            description: [
                "Developed and integrated AI-powered features for a children's storytelling platform, enhancing user experience and engagement.",
                "Built and optimized backend APIs, routing, and service integrations, including LLM-based pipelines for story summarization and puzzle generation.",
                "Implemented TTS models and reduced costs by integrating open-source alternatives.",
                "Created gamification APIs and visual prompt generation using LLaMA 3.3, Groq, and Hugging Face tools."
            ],
            techStack: ["Python", "FastAPI", "SQL", "RAG", "LLMs", "TTS", "Prompt Engineering"]
        },
        {
            company: "StarHome Enterprises",
            role: "AI Specialist",
            location: "Chennai, Tamil Nadu",
            duration: "Present",
            description: [
                "Contributed to building and scaling the company's digital and brand presence by applying generative AI, automation, and modern web technologies.",
                "Designed and produced high-quality advertising creatives, including AI-generated images and short-form videos.",
                "Developed and managed an AI-powered brand ambassador for faster content delivery and improved audience engagement.",
                "Led end-to-end website development focusing on modern UI/UX, performance optimization, and seamless workflow integration.",
                "Handled social media strategy and operations using AI-driven insights for content planning and creative generation."
            ],
            techStack: ["Nano Banana", "Pika", "Kling AI", "ChatGPT", "Grok", "Generative AI"]
        }
    ];

    return (
        <PageTransition>
            <section className="experience-page">
                <div className="container">
                    <SectionHeader
                        title="Experience"
                        subtitle="My professional journey through technology and innovation"
                    />

                    <div className="timeline-container">
                        {/* Timeline Line */}
                        <motion.div
                            className="timeline-line"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        />

                        {/* Experience Items */}
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                index={index}
                                company={exp.company}
                                role={exp.role}
                                location={exp.location}
                                duration={exp.duration}
                                description={exp.description}
                                techStack={exp.techStack}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Experience;
