import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AnimatedButton.css';

const AnimatedButton = ({
    children,
    to = null,
    href = null,
    variant = 'primary', // primary, secondary, ghost
    size = 'medium', // small, medium, large
    icon = null,
    iconPosition = 'left',
    onClick = null,
    disabled = false,
    fullWidth = false,
    className = ''
}) => {
    const buttonClasses = `
    animated-btn 
    btn-${variant} 
    btn-${size} 
    ${fullWidth ? 'full-width' : ''} 
    ${disabled ? 'disabled' : ''}
    ${className}
  `.trim();

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
            <div className="btn-glow" />
        </>
    );

    const motionProps = {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.98 },
        transition: { type: 'spring', stiffness: 400, damping: 25 }
    };

    if (to) {
        return (
            <Link to={to} className={buttonClasses}>
                <motion.span className="btn-inner" {...motionProps}>
                    {content}
                </motion.span>
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
                <motion.span className="btn-inner" {...motionProps}>
                    {content}
                </motion.span>
            </a>
        );
    }

    return (
        <motion.button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...motionProps}
        >
            {content}
        </motion.button>
    );
};

export default AnimatedButton;
