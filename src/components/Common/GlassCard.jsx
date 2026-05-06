const GlassCard = ({ children, className = '', delay = 0, style = {} }) => {
  return (
    <div 
      className={`glass-card ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
