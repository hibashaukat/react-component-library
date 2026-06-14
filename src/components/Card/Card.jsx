import './Card.css';

const Card = ({
  title,
  subtitle,
  description,
  image,
  badge,
  badgeColor = 'purple',
  footer,
  hoverable = true,
  variant = 'default',
  onClick,
}) => {
  return (
    <div
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {image && (
        <div className="card__image-wrap">
          <img src={image} alt={title} className="card__image" />
          {badge && <span className={`card__badge card__badge--${badgeColor}`}>{badge}</span>}
        </div>
      )}

      <div className="card__body">
        {!image && badge && (
          <span className={`card__badge card__badge--${badgeColor} card__badge--inline`}>{badge}</span>
        )}
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
