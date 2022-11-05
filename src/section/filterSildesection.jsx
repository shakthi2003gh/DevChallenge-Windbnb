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

const FilterSlider = () => {
  const [currentLocation, setCurrentLocation] = useState("Helsinki, Finland");
  const [currentOption, setCurrentOption] = useState("location");
  const [state, dispatch] = useReducer(reducer, { adults: 1, children: 0 });
  const locations = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];

  const FilterProps = { currentLocation, state, setCurrentOption };
  const locationProps = { locations, setCurrentLocation };

  return (
    <div className="filter-slider">
      <div className="header">
        <div className="title">Edit your search</div>

        <span className="material-symbols-outlined close">close</span>
      </div>

      <Filter props={FilterProps} />

      {currentOption === "location" && <LocationOption props={locationProps} />}

      {currentOption === "guests" && <GuestOption dispatch={dispatch} />}

      <Button />
    </div>
  );
};

export default FilterSlider;
