const LocationOption = ({ props }) => {
  const { locations, setCurrentLocation } = props;

  return (
    <div className="location-option">
      {locations.map((location, i) => (
        <div
          key={i}
          className="option"
          onClick={() => setCurrentLocation(location)}
        >
          <span className="material-symbols-outlined">location_on</span>
          {location}
        </div>
      ))}
    </div>
  );
};

export default LocationOption;
