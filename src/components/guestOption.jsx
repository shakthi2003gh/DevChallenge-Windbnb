import Count from "./count";

const GuestOption = ({ state, dispatch }) => {
  const handleCountChange = (type, count) => {
    dispatch({ type, count });
  };

  return (
    <div className="guests-option">
      <div className="adults">
        <div>
          <div className="label">adults</div>
          <div className="rules">Ages 13 or above</div>
        </div>

        <Count
          min={1}
          value={state.adults}
          onCount={(count) => handleCountChange("set-adults", count)}
        />
      </div>
      <div className="children">
        <div>
          <div className="label">children</div>
          <div className="rules">Ages 2-12</div>
        </div>

        <Count
          value={state.children}
          onCount={(count) => handleCountChange("set-children", count)}
        />
      </div>
    </div>
  );
};

export default GuestOption;
