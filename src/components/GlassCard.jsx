import { motion } from 'framer-motion';
import './GlassCard.css';

const GlassCard = ({
    children,
    className = '',
    delay = 0,
    hover = true,
    glow = false,
    onClick = null
}) => {
    return (
        <motion.div
            className={`glass-card-component ${className} ${hover ? 'hoverable' : ''} ${glow ? 'glowing' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
            onClick={onClick}
        >
            {glow && <div className="glow-effect" />}
            <div className="card-content">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
