import "./AxieCard.css";
import { formatValue } from "../../widgets/formatValue";

type AxieCardProps = {
  axieId: string;
  current_price: number;
  level: number;
  min: number;
  max: number;
  avg: number;
  breed: number;
  marketplace_url: string;
};

const formatWithDollar = (val: string | number) =>
    typeof val === "number" ? `$${formatValue(val)}` : formatValue(val);

function AxieCard({ axieId, current_price, level, min, max, avg, breed, marketplace_url }: AxieCardProps) {

  const imgUrl = `https://axiecdn.axieinfinity.com/axies/${axieId}/axie/axie-full-transparent.png`;

  return (
    <a href={marketplace_url} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="card">
        <div className="card-image-container">
          <img className="card-image" src={imgUrl} alt="Axie" />
        </div>
        <div className="description-background">
          <TitleDescription titleText={"Price"} descriptionText={`${formatWithDollar(current_price)}`} />
          <TitleDescription titleText={"Level"} descriptionText={`${level}`} />
          <TitleDescription titleText={"Breed"} descriptionText={`${breed}/7`} />
          <Triple classDescription={"title"} leftOne={"Min"} middleOne={"Avg"} rightOne={"Max"} />
          <Triple classDescription={"description"} leftOne={min} middleOne={avg} rightOne={max} formatFn={formatWithDollar} />
        </div>
      </div>
    </a>
  );
}

type TitleDescriptionProps = {
  titleText: string;
  descriptionText: string | number;
};

function TitleDescription({ titleText, descriptionText }: TitleDescriptionProps) {
  return (
    <div className="title-description title-description-separates">
      <h2 className="title">{titleText}</h2>
      <p className="description">{formatValue(descriptionText)}</p>
    </div>
  );
}

type TripleProps = {
  classDescription: string;
  leftOne: string | number;
  middleOne: string | number;
  rightOne: string | number;
  formatFn?: (val: string | number) => string; // 👈 nueva prop opcional
};

function Triple({ classDescription, leftOne, middleOne, rightOne, formatFn }: TripleProps) {
  const middleClass =
    typeof middleOne === "number"
      ? middleOne > 0
        ? "positive"
        : middleOne < 0
        ? "negative"
        : ""
      : "";

  // Si se pasa formatFn, la usamos; si no, usamos formatValue
  const format = formatFn ?? formatValue;

  return (
    <div className="title-description">
      <h2 className={classDescription}>{format(leftOne)}</h2>
      <h2 className={`${classDescription} ${middleClass}`}>{format(middleOne)}</h2>
      <h2 className={classDescription}>{format(rightOne)}</h2>
    </div>
  );
}


export default AxieCard;