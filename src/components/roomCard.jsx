const RoomCard = ({ room }) => {
  const {
    photo: img,
    beds,
    type,
    rating,
    title,
    superHost,
  } = room || { img: "", type: "", rating: 0, title: "" };

  return (
    <div className="room-card">
      <img className="room__img" src={img} alt="" />

      <div className="room__details">
        {superHost && <span className="badge">super host</span>}

        <div className="type">
          {type === "Entire apartment" ? type + ` . ${beds}beds` : type}
        </div>

        <div className="rating">
          <span className="material-symbols-rounded">star</span>{" "}
          {rating.toFixed(2)}
        </div>
      </div>

      <p className="room__title">{title}</p>
    </div>
  );
};

export default RoomCard;
