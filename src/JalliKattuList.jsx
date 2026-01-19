
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
import { useState } from 'react'
function JallikattuLists(){

    const [JallikattLine, setJallikattLine]=useState([
           {Bullid:1 ,BullName:"கரூர் வெள்ளை", img:Vellaiyan ,OwnerName:"S.P குமார்", District:"கரூர் மாவட்டம்", vetri:"details"},
           {Bullid:2, BullName:"செவாலை", img:Sevalai, OwnerName:"ப.ராஜசேகர்", District:"மதுரை மாவட்டம்", vetri:"details" },
           {Bullid:3, BullName:"வெள்ளையன்", img:Khansai, OwnerName:"S.சுரேஷ் குமார்", District:"கான்சாபுரம்" , vetri:"details"},
           {Bullid:4, BullName:"பேட்டைக்காளி", img:Pettaikali, OwnerName:"செந்தில் தொண்டமான்", District:"இலங்கை" , vetri:"details"},
           {Bullid:5, BullName:"கொம்பன்", img:Komban, OwnerName:"சி.விஜயபாஸ்கர்", District:"புதுக்கோட்டை மாவட்டம்" , vetri:"details"},
           {Bullid:6, BullName:"அப்பு", img:Appu, OwnerName:"ப.ராஜசேகர்", District:"மதுரை மாவட்டம்" , vetri:"details"},
           {Bullid:7, BullName:"அசுரன்", img:Theni, OwnerName:"G.கார்த்தி", District:"தேனி மாவட்டம்" , vetri:"details"},
           {Bullid:8, BullName:"காரி", img:Kaari, OwnerName:"ப.ராஜசேகர்", District:"மதுரை மாவட்டம்" , vetri:"details"},
           {Bullid:9, BullName:"மருது", img:Maruthu, OwnerName:"டேவிட்", District:"புதுக்கோட்டை மாவட்டம்" , vetri:"details"},
           {Bullid:10,BullName:"வெற்றி", img:Veera, OwnerName:"S.சுரேஷ் குமார்(SSK)", District:"கான்சாபுரம்" , vetri:"details"}

    ])   

    function handleRemove(Bullid){
        const BUllDelete=JallikattLine.filter(bull => bull.Bullid !== Bullid)
        setJallikattLine(BUllDelete);
    }

    const BUllList=JallikattLine.map((bull)=>
        <Jallikattu Bullid={bull.Bullid} BullName={bull.BullName} img={bull.img} OwnerName={bull.OwnerName} District={bull.District} vetri={bull.vetri} remove={handleRemove} />
    )

 return(
        <>
        {BUllList}
        </>   
 );
}
export default JallikattuLists;