import { useReducer, useState } from "react";
import Button from "../components/button";
import GuestOption from "../components/guestOption";
import LocationOption from "../components/locationOption";
import Filter from "../components/filterBar";

function reducer(state, action) {
  switch (action.type) {
    case "set-adults":
      return {
        ...state,
        adults: action.count,
      };

    case "set-children":
      return {
        ...state,
        children: action.count,
      };

    default:
      return state;
  }
}

const FilterSlider = ({ filterState, onSearch, onClose }) => {
  const [currentLocation, setCurrentLocation] = useState(filterState.location);
  const [currentOption, setCurrentOption] = useState("location");
  const [state, dispatch] = useReducer(reducer, filterState.guest);
  const locations = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];

  const FilterProps = {
    currentLocation,
    state,
    setCurrentOption,
    setCurrentLocation,
  };
  const locationProps = { locations, setCurrentLocation };

  return (
    <div className="filter-slider">
      <div className="header">
        <div className="title">Edit your search</div>

        <span className="material-symbols-outlined close" onClick={onClose}>
          close
        </span>
      </div>

      <Filter {...FilterProps} />

      {currentOption === "location" && <LocationOption props={locationProps} />}

      {currentOption === "guests" && (
        <GuestOption state={filterState.guest} dispatch={dispatch} />
      )}

      <Button onClick={() => onSearch(currentLocation, state)} />
    </div>
  );
};

export default FilterSlider;
