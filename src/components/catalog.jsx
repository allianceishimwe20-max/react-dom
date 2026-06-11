import imagess1 from "../assets/imagess1.webp"
import { CgHome } from "react-icons/cg";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import phtt1 from "../assets/phtt1.webp"
import phtt2 from "../assets/phtt2.webp"
import phtt3 from "../assets/phtt3.webp"
import phtt4 from "../assets/phtt4.webp"
import phtt5 from "../assets/phtt5.webp"
import phtt6 from "../assets/phtt6.webp"
import phtt7 from "../assets/phtt7.webp"
import phtt8 from "../assets/phtt8.webp"
import phtt9 from "../assets/phtt9.webp"
import phtt10 from "../assets/phtt10.webp"
import phtt11 from "../assets/phtt11.webp"
import phtt12 from "../assets/phtt12.webp"

function Catalog() {
    return (
        <div>
         <div>    
            <img className="imagesss1" src={imagess1} alt="" />
            <div className="frist1">
                <h1>Products</h1>
                <div className="fgbgfsdfgf">
                    <CgHome />
                    <p>collection</p>
                    <p>Products</p>
                </div>

            </div>
            </div>
            <div className="fdsgfdtur">
                <PiSlidersHorizontalLight className="icon12"/>
                <button className="hfdxfg">filters</button>
            </div>
            <div className="phtto">
                <div>
                 <img className="phtt1" src={phtt1} alt="" />
                <p>An Grey Dining Chair</p>
                <p>  $299.99</p>
                </div>
               
               <div>
                <img className="phtt3" src={phtt2} alt="" />
                 <p>Axis 2-piece sectional sofs</p>
                 <p> $339.99</p>
               </div>
               
               <div>
                 <img className="phtt3" src={phtt3} alt="" />
                 <p>Axis 2-seat sofa</p>
                 <p> $239.99</p>
               </div>
               
               
            </div>
            <div className="phttt">
                <div>
                   <img className="phtt4" src={phtt4} alt="" />
                   <p>carved back Dining Chair</p>
                   <p>$129.99</p>
                   <p>$159.99</p>    
                </div>
                <div>
                 <img className="phtt5" src={phtt5} alt="" />
                 <p>Dot kids light Brown stool</p>
                 <p>$149.99</p>
                </div>
                 <div>
                  <img className="phtt6" src={phtt6} alt="" />
                  <p>Ever slipcovered striped nursery</p>
                  <p>$299.99</p>
                 </div>
            </div>
            <div className="phtt7a">
               <div >
                <img className="phtt7" src={phtt7} alt="" />
                <p>Fawn animal kids play chair</p>
                <p>$299.99</p>
               </div>
               <div>
                 <img className="phtt8" src={phtt8} alt="" />
                 <p>Gather sofa</p>
                 <p>$139.99</p>
                 <p>$339.99</p>
               </div>
               <div>
                 <img className="phtt9" src={phtt9} alt="" />
                 <p>Janod alphabet wooden baby puzzle </p>
                 <p>$29.99</p>
               </div>

            </div>
            <div className="phtt10a">
                <div>
                    <img className="phtt10" src={phtt10} alt="" />
                    <p>Janod rainbow turtle wooden baby pull toy</p>
                    <p>$299.99</p>
                </div>
                <div>
                    <img className="phtt11" src={phtt11} alt="" />
                    <p>Lounge Deep Chaise Lounge</p>
                    <p>$299.99</p>
                </div>
                <div>
                    <img className="phtt12" src={phtt12} alt="" />
                    <p>Medoc swivel chair</p>
                    <p>$299.99</p>
                </div>
            </div>

        </div>
    )
}
export default Catalog