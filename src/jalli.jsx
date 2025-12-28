import { useNavigate } from "react-router-dom";

function Jallikattu(props) {
  const navigate = useNavigate();

  return (
    props.img && (
      <div className="full">
        <div className="Bull">
          <img src={props.img} alt={props.BullName} />
         
          <button className="bull-btn"
            onClick={() =>
              navigate("/details", {
                state: {
                  Bullid: props.Bullid,
                  BullName: props.BullName,
                  img: props.img,
                  OwnerName: props.OwnerName,
                  District: props.District,
                  vetri:props.vetri
                }
              })
            }
          > {props.BullName} </button>

          <h4>{props.OwnerName}</h4>
          <h4>{props.District}</h4>
          <button className="remove-btn" onClick={() => props.remove(props.Bullid)}>Remove</button>
        </div>
      </div>
    )
  );
}

export default Jallikattu;
