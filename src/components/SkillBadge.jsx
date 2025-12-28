import { motion } from 'framer-motion';
import './SkillBadge.css';

const SkillBadge = ({
    name,
    icon = null,
    category = 'default',
    delay = 0,
    size = 'medium'
}) => {
    const categoryColors = {
        backend: { bg: 'rgba(183, 110, 121, 0.15)', border: 'rgba(183, 110, 121, 0.4)' },
        ai: { bg: 'rgba(212, 175, 55, 0.15)', border: 'rgba(212, 175, 55, 0.4)' },
        automation: { bg: 'rgba(229, 228, 226, 0.1)', border: 'rgba(229, 228, 226, 0.3)' },
        web: { bg: 'rgba(183, 110, 121, 0.1)', border: 'rgba(183, 110, 121, 0.3)' },
        default: { bg: 'rgba(168, 169, 173, 0.1)', border: 'rgba(168, 169, 173, 0.3)' }
    };

    const colors = categoryColors[category] || categoryColors.default;

    return (
        <motion.div
            className={`skill-badge skill-${size}`}
            style={{
                backgroundColor: colors.bg,
                borderColor: colors.border
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${colors.border}`
            }}
        >
            {icon && <span className="badge-icon">{icon}</span>}
            <span className="badge-name">{name}</span>
        </motion.div>
    );
};

export default SkillBadge;
