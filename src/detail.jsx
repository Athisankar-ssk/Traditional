import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  if (!state) return <h2>No data found</h2>;

  return (
    <div className="details">
      <img src={state.img} alt="" />
      <h2>{state.BullName}</h2>
      <h3>Owner: {state.OwnerName}</h3>
      <h3>District: {state.District}</h3>
      <h3>Vetri:{state.vetri}</h3>
    </div>
  );
}

export default Details;
