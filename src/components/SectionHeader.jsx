import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({
    title,
    subtitle = null,
    align = 'center',
    accent = true
}) => {
    return (
        <motion.div
            className={`section-header align-${align}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {accent && (
                <motion.div
                    className="section-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            )}
            <h2 className="section-title">
                {title}
            </h2>
            {subtitle && (
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
