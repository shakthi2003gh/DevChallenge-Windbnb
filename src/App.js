import { useState, useEffect } from "react";
import FilterGroup from "./components/roomFilterGroup";
import RoomCard from "./components/roomCard";
import FilterSlider from "./section/filterSildesection";

function App() {
  const [showSlider, setShowSlider] = useState(false);
  const [filterState, setFilterState] = useState({
    location: "Filter By Location",
    guest: { adults: 1, children: 0 },
  });
  const [rooms, setRooms] = useState([]);
  const [staysCount, setStaysCount] = useState(0);

  useEffect(() => {
    fetch("./stays.json")
      .then((res) => res.json())
      .then((data) => {
        const { adults, children } = filterState.guest;

        const filteredLocation = (location) =>
          filterState.location === "Filter By Location" ||
          location === filterState.location.split(",")[0];

        const filteredGuestCount = (guestCount) =>
          children / 2 + adults <= guestCount;

        setRooms(() =>
          data.filter(
            (d) => filteredLocation(d.city) && filteredGuestCount(d.maxGuests)
          )
        );
      });
  }, [filterState]);

  useEffect(() => {
    setStaysCount(rooms.length > 11 ? "+12" : rooms.length);
  }, [rooms]);

  const handleFilterState = (location, guest) => {
    setFilterState({ location, guest });
    setShowSlider(false);
  };

  return (
    <div className={showSlider ? "no-overflow" : ""}>
      <header>
        <img src="./logo.svg" alt="" />

        <FilterGroup state={filterState} onClick={() => setShowSlider(true)} />
      </header>

      <main>
        <div className="header">
          <h1>Stays in Finland</h1>

          <span>{staysCount} stays</span>
        </div>

        <div className="rooms">
          {staysCount ? (
            rooms.map((room, i) => <RoomCard key={i} room={room} />)
          ) : (
            <h2 className="no-stays">No Stays Found</h2>
          )}
        </div>

        {showSlider && (
          <>
            <FilterSlider
              filterState={filterState}
              onSearch={handleFilterState}
              onClose={() => setShowSlider(false)}
            />
            <div className="drop-shadow"></div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
