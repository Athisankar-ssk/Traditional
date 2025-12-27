
import Vellaiyan from './assets/Vellaiyan.jpg'
import Appu from './assets/Appu.jpg'
import Kaari from './assets/Kaari.jpg'
import Khansai from './assets/Khansai.jpeg'
import Komban from './assets/Komban.jpg'
import Maruthu from './assets/Maruthu.jpg'
import Pettaikali from './assets/Pettaikali.jpg'
import Sevalai from './assets/Sevalai.jpg'
import Theni from './assets/Theni.jpeg'
import Veera from './assets/Veera.jpeg'
import Jallikattu from './jalli'
function JallikattuLists(){

    const JallikattLine=[
           {BullName:"கரூர் வெள்ளை", img:Vellaiyan ,OwnerName:"எஸ்.பி குமார்", District:"கரூர் மாவட்டம்", vetri:"details"},
           {BullName:"செவாலை", img:Sevalai, OwnerName:"ப.ராஜசேகர்", District:"மதுரை மாவட்டம்", vetri:"details" },
           {BullName:"வெள்ளையன்", img:Khansai, OwnerName:"எஸ்.சுரேஷ் குமார்", District:"கான்சாபுரம்" , vetri:"details"},
           {BullName:"பேட்டைக்காளி", img:Pettaikali, OwnerName:"செந்தில் தொண்டமான்", District:"இலங்கை" , vetri:"details"},
           { BullName:"கொம்பன்", img:Komban, OwnerName:"சி.விஜயபாஸ்கர்", District:"புதுக்கோட்டை மாவட்டம்" , vetri:"details"},
           {BullName:"அப்பு", img:Appu, OwnerName:"ப.ராஜசேகர்", District:"மதுரை மாவட்டம்" , vetri:"details"},
           {BullName:"அசுரன்", img:Theni, OwnerName:"G கார்த்தி", District:"தேனி மாவட்டம்" , vetri:"details"},
           { BullName:"காரி", img:Kaari, OwnerName:"ப.ராஜசேகர்", District:"மதுரை மாவட்டம்" , vetri:"details"},
           {BullName:"மருது", img:Maruthu, OwnerName:"டேவிட்", District:"புதுக்கோட்டை மாவட்டம்" , vetri:"details"},
            {BullName:"வெற்றி", img:Veera, OwnerName:"எஸ்.சுரேஷ் குமார்", District:"கான்சாபுரம்" , vetri:"details"}

    ]   

    const BUllList=JallikattLine.map((bull , index)=>
        <Jallikattu key={index} BullName={bull.BullName} img={bull.img} OwnerName={bull.OwnerName} District={bull.District} vetri={bull.vetri} />
    )

 return(
        <>
        {BUllList}
        </>   
 );
}
export default JallikattuLists;