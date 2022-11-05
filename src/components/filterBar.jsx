const Filter = ({ props }) => {
  const { currentLocation, state, setCurrentOption } = props;

  const { adults, children } = state;

  return (
    <div className="filter">
      <div
        className="location"
        tabIndex={0}
        onFocus={() => setCurrentOption("location")}
      >
        <div className="label">loaction</div>
        <div className="current-location">{currentLocation}</div>
      </div>

      <div
        className="guests"
        tabIndex={0}
        onFocus={() => setCurrentOption("guests")}
      >
        <div className="label">guests</div>
        <div className="guests-count">
          {adults === 1 && children === 0 ? (
            <span style={{ color: "hsla(0, 0%, 74%, 1)" }}>Add guests</span>
          ) : (
            `${adults} adults, ${children} children`
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
