import { RiArmchairLine } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import pica from "../assets/pica.webp"
import picb from "../assets/picb.webp"
import picc from "../assets/picc.webp"
import picd from "../assets/picd.webp"
import pice from "../assets/pice.webp"
import picf from "../assets/picf.webp"
import picg from "../assets/picg.webp"
import pich from "../assets/pich.webp"
import pc from "../assets/pc.png"
import pc2 from "../assets/pc2.png"
import pc3 from "../assets/pc3.webp"
import pc4 from "../assets/pc4.webp"
import pc5 from "../assets/pc5.webp"
import pc6 from "../assets/pc6.webp"
import pc7 from "../assets/pc7.png"
import pc8 from "..//assets/pc8.png"
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiWalletLight } from "react-icons/pi";
import { CgSupport } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import fotoo1 from "../assets/fotoo1.webp"
import fotoo2 from "../assets/fotoo2.webp"
import fotoo3 from "../assets/fotoo3.webp"
import fotoo4 from "../assets/fotoo4.webp"
import fotoo5 from "../assets/fotoo5.webp"
import fotoo6 from "../assets/fotoo6.webp"


function Home() {
    const pics = [
        { id: 1, image: pica, title: "Ana grey dinning chair", price: "$123" },
        { id: 1, image: picb, title: "Natular wood dining chair", price: "$168" },
        { id: 1, image: picc, title: "Paolo black wood dining chair", price: "$198" },
        { id: 1, image: picd, title: "curve black wood dining chair", price: "$187" },
        { id: 1, image: pice, title: "Pali black hard wood dining chair", price: "$435" },
        { id: 1, image: picf, title: "Paolo Natular wood dining chair", price: "$546" },
        { id: 1, image: picg, title: "Muirfield sculptural metal accent chair", price: "$342" },
        { id: 1, image: pich, title: "wells renew vegan leather chair", price: "$345" },

    ]
    const photo = [
        { id: 1, image: pc3, title: "Lounge Deep Chaise Lounge", price: "$299.99" },
        { id: 2, image: pc4, title: "Polly Sand Brown Accent Chair", price: "$439.99" },
        { id3: 3, image: pc5, title: "Axis2-seat sofa", price: "$239.99" },
        { id: 4, image: pc6, title: "Medoc Swivel Chair", price: "$299.99" },

    ]
    const fotoo = [
        { id: 1, image: fotoo1, },
        { id: 2, image: fotoo2 },
        { id: 3, image: fotoo3 },
        { id: 4, image: fotoo4 },
        { id: 5, image: fotoo5 },
        { id: 6, image: fotoo6 },


    ]




    return (
        <div>
            <div className="homea">
                <button className="home1" ><RiArmchairLine /></button>
                <div className="home2">
                    <span className="text" >Elevate Your life style</span><br /><span>with our Furniture</span><br />
                </div>

                <div className="home-a1">
                    <p className="text1">creation</p>
                    <button className="home3" >shop now</button>
                </div>

            </div>
            <img className="photo1" src="/photo1.webp" alt="" />
            <div className="home4a">

                <GoArrowLeft className="left" />
                <GoArrowRight className="home5" />
            </div>

            <div className="photoa">
                <div>
                    <img className="photo2" src="/photo2.png" alt="" />
                    <p className="living">living room</p>
                </div>
                <div>
                    <img className="photo3" src="/photo3.webp" alt="" />
                    <p className="beding">beding room</p>
                </div>

                <div className="photob">
                    <div>
                        <img className="photo4m" src="/photo4.webp" alt="" />
                        <p className="kitchen">kitchen</p>
                    </div>
                    <div>
                        <img className="photo5" src="/photo5.webp" alt="" />
                        <p className="kid">kid room</p>
                    </div>


                </div>
                <div>
                </div>

            </div>
            <div className="div1">you are in <span className="span1" > kitchen</span>< BiChevronDown />  </div>
            <div className="mns">
                {pics.map((item) => {
                    return (
                        <>
                            <div>
                                <img className="imagesection" src={item.image} alt="" />
                                <p className="ttt">{item.title}</p>
                                <p className="zxz">{item.price}</p>
                            </div>


                        </>
                    )
                })}
            </div>

            <div className="mtn">
                <img className="pc" src={pc} alt="" />
                <div className="mtn1">
                    <p className="bhyj">limited time only</p>
                    <h1 className="head">The living room event up to <br /> 30% off</h1>
                    <p className="p1">Use this text to share information about your brand with your customers. <br /> Describe a product, share announcements, or welcome customers to your <br /> store.</p>
                </div>
            </div>

            <img className="pc2" src={pc2} alt="" />

            <h1 className="head1">Top Sellers</h1>
            <div className="section2">
                {photo.map((item) => {
                    return (
                        <>
                            <div>
                                <img className="photosection" src={item.image} alt="" />
                                <p className="xxx">{item.title}</p>
                                <p className="zzz">{item.price}</p>
                            </div>


                        </>
                    )
                })}

            </div>
            <div className="image">
                <img className="pc7" src={pc7} alt="" />
                <img className="pc8" src={pc8} alt="" />
            </div>
            <div className="icna">
                <div className="yyy">
                    <LiaShippingFastSolid className="icn" />
                    <div className="jjj">
                        <h4 className="head4">Free Shipping</h4>
                        <p>Free Shipping for orders</p>
                    </div>
                </div>
                <div className="icnb">
                    <PiWalletLight className="icn1" />
                    <div className="jjj">
                        <h4 className="head1" >Money Guarantee</h4>
                        <p>Within 30 days</p>
                    </div>

                </div>
                <div className="icnc">
                    <CgSupport className="icn2" />
                    <div className="jjj">
                        <h4 className="head2" >Online Support</h4>
                        <p>24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div className="icnd">
                    <CiCreditCard1 className="icn3" />
                    <div className="jjj">
                        <h4 className="head3" >Flexible Payment</h4>
                        <p>Pay with Multiple Credit Cards</p>
                    </div>
                </div>
            </div>
            <div className="fotooa">
                <div className="column-section">
                    <h1>Instagram Shop</h1>
                    <p>Tag @miniture in your Instagram photos for <br />
                        a chance to be featured here.</p>
                    <button className="button-section1">Visit our Instagram</button>
                </div>
                <div className="images">
                    <div fotooaa>
                        <div>
                            <img className="fotou1" src={fotoo1} alt="" />
                            
                               <div className="Image-section-a">
                               <IoLogoInstagram className="Instergram-icon" />
                               </div>
                        </div>

                         <div>
                              <img className="fotoo2" src={fotoo2} alt="" />
                            
                               <div className="Image-section-a">
                               <IoLogoInstagram className="Instergram-icon" />
                               </div>
                        </div>
                       
                      
                    </div>
                    <div className="fotoob">
                        <div>
                              <img className="fotou3" src={fotoo3} alt="" />
                            
                               <div className="Image-section-a">
                               <IoLogoInstagram className="Instergram-icon" />
                               </div>
                        </div>

                          <div>
                               <img className="fotoo4" src={fotoo4} alt="" />
                            
                               <div className="Image-section-a">
                               <IoLogoInstagram className="Instergram-icon" />
                               </div>
                        </div>
                            
                        
                        
                       
                    </div>
                    <div className="fotooc">
                           <div>
                              <img className="fotoo5" src={fotoo5} alt="" />
                            
                               <div className="Image-section-a">
                               <IoLogoInstagram className="Instergram-icon" />
                               </div>
                        </div>

                         <div>
                               <img className="fotoo6" src={fotoo6} alt="" />
                            
                               <div className="Image-section-a">
                               <IoLogoInstagram className="Instergram-icon" />
                               </div>
                        </div>

                        
                       
                    </div>

                </div>



            </div>
        </div>
    )



}
            export default Home;
