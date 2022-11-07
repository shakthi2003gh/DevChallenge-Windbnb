const FilterGroup = ({ state, ...rest }) => {
  const { adults, children } = state.guest;

  return (
    <div className="filter-group" {...rest}>
      <div className="location">{state.location}</div>

      <div className="guests">
        {adults === 1 && children === 0 ? (
          <span style={{ color: "hsla(0, 0%, 74%, 1)" }}>Add guests</span>
        ) : (
          <span>{`${adults} adults, ${children} children`}</span>
        )}
      </div>

      <span className="material-symbols-outlined">search</span>
    </div>
  );
};

export default FilterGroup;
