import './ClotheCard.scss';

const ClotheCard = ({ clothe }) => (
  <div className="card" key={clothe.pk}>
    <div className="card__img">
      <img src={clothe.images[0].url} alt="img" />
    </div>

    <div className="card__info">
      <p>{clothe.name}</p>
      <small>{clothe.price.value} USD</small>
    </div>
  </div>
);

export default ClotheCard;
