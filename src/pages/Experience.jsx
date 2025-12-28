import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Tech Innovations Inc.",
            role: "Senior AI Engineer",
            location: "San Francisco, CA",
            duration: "2022 - Present",
            description: [
                "Led development of ML-powered recommendation engine serving 10M+ users",
                "Architected scalable microservices infrastructure on AWS/GCP",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Mentored team of 5 junior engineers on AI/ML best practices"
            ],
            techStack: ["Python", "TensorFlow", "PyTorch", "AWS", "Kubernetes", "Docker"]
        },
        {
            company: "DataFlow Systems",
            role: "Backend Developer",
            location: "New York, NY",
            duration: "2020 - 2022",
            description: [
                "Built RESTful APIs handling 100K+ requests per minute",
                "Designed and optimized PostgreSQL database schemas",
                "Developed real-time data processing pipelines with Apache Kafka",
                "Reduced API response time by 40% through caching strategies"
            ],
            techStack: ["Node.js", "Python", "PostgreSQL", "Redis", "Kafka", "GraphQL"]
        },
        {
            company: "AutomateX Solutions",
            role: "Automation Engineer",
            location: "Austin, TX",
            duration: "2018 - 2020",
            description: [
                "Created automated testing frameworks reducing QA time by 70%",
                "Developed RPA solutions for enterprise workflow automation",
                "Built custom monitoring dashboards with real-time analytics",
                "Integrated third-party APIs for seamless data synchronization"
            ],
            techStack: ["Python", "Selenium", "Jenkins", "Ansible", "Grafana", "Prometheus"]
        },
        {
            company: "StartupHub",
            role: "Full Stack Developer",
            location: "Remote",
            duration: "2016 - 2018",
            description: [
                "Developed responsive web applications using React and Node.js",
                "Implemented user authentication and authorization systems",
                "Built RESTful APIs and integrated with frontend applications",
                "Collaborated with UX team to improve user experience"
            ],
            techStack: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS"]
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
