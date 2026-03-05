import "./MementoCard.css";

type MementoCardProps = {
  image_url: string;
  marketplace_url: string;
  name: string;
  price_usd: number;
};

function MementoCard({ image_url, marketplace_url, name, price_usd }: MementoCardProps) {
  return (
    <a href={marketplace_url} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="memento-card">
        <img className="memento-card-image" src={image_url} alt={name} />
        <p className="memento-name">{name}</p>
        <p className="memento-price">${price_usd.toFixed(4)}</p>
      </div>
    </a>
  );
}

export default MementoCard;