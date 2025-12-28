import { motion } from 'framer-motion';
import './TimelineItem.css';

const TimelineItem = ({
    company,
    role,
    location,
    duration,
    description,
    techStack = [],
    index = 0
}) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`timeline-item ${isEven ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="timeline-dot">
                <div className="dot-inner" />
                <div className="dot-glow" />
            </div>

            <div className="timeline-card">
                <div className="timeline-header">
                    <div className="timeline-meta">
                        <span className="timeline-duration">{duration}</span>
                        <span className="timeline-location">{location}</span>
                    </div>
                    <h3 className="timeline-company">{company}</h3>
                    <h4 className="timeline-role">{role}</h4>
                </div>

                <div className="timeline-content">
                    {Array.isArray(description) ? (
                        <ul className="timeline-list">
                            {description.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    ) : (
                        <p className="timeline-description">{description}</p>
                    )}
                </div>

                {techStack.length > 0 && (
                    <div className="timeline-tech">
                        {techStack.map((tech, i) => (
                            <motion.span
                                key={i}
                                className="tech-chip"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 * i }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default TimelineItem;
