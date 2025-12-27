
import { useNavigate } from "react-router-dom";
function Jallikattu(porps){
 const navigate = useNavigate();
      return(
        porps.img && <div className="full">
            <div className='Bull'>
            <img src={porps.img} alt="" />
            <button className="bull-btn" onClick={()=>navigate("/details",{state:porps})}>{porps.BullName}</button>
            <h4>{porps.OwnerName}</h4>
            <h4>{porps.District}</h4>
            </div>
        </div>
      );
} 
export default Jallikattu;