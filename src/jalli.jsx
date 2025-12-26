
function Jallikattu(pors){
      return(
        <div className="full">
            <div className='Bull'>
            <img src={pors.img} alt="" />
            <h3>{pors.BullName}</h3>
            <h4>{pors.OwnerName}</h4>
            <h4>{pors.District}</h4>
            </div>
        </div>
      );
} 
export default Jallikattu;