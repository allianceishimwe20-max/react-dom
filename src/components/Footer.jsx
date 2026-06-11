import { BiChevronDown } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import { TbDatabase } from "react-icons/tb";

function Footer(){
    return(
        <div className="Footer-Header">
<div className="Footer-Contener">
    <div>
        <h1>our story</h1>
        <p>Miniture is one of the biggest international <br /> fashion companies, one of the world’s <br /> largest distribution groups.</p>
    </div>
    <div>
        <h1>Quick links</h1>
        <li>Accent chairs</li>
        <li>Dinning Chair</li>
        <li>Dining Room</li>
        <li>Kid's forniture</li>
    </div>
    <div>
        <h1>Information</h1>
        <li>Privacy policy</li>
        <li>Refund policy</li>
        <li>Shipping&return</li>
        <li>Teame&conditions</li>
    </div>
    <div>
        <h1>Let’s get in touch</h1>
        <input className="Footer-Input" type="text" placeholder="Enter your email"/>
        <GoArrowRight className="Footer-Icon1" />
    </div>
</div>
 <hr />
 <div >
   
    <div  className="Footer-Bottom1">
   
    <p className="Footer-Bottom2">© 2026 Miniture. Powered by Shopify</p>
       <div className="Footer-Section5">
        <div className="footer-bottom3">
     <PiGlobeHemisphereWest className="Footer-icon2" />
    <p>Engilsh</p>
    < BiChevronDown className="Footer-icon2" />
    </div>
    <div className="footer-bottom4">
    <TbDatabase className="Footer-icon2" />
    <p>Rwanda(USD&)</p>
</div>
       </div>
   
</div>


 </div>


</div>

            
    )

        

       
}
 export default Footer;












