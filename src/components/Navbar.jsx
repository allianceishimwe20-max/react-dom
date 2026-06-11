import { BiChevronDown } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [dropDown, setDropDrown] = useState(null)
  const HomeLinks = [
    { name: "Home v1 — Modern Elegance", path: "/" },
    { name: "Home v2 — Rustic Comfort", path: "/Home-v2" },
    { name: "Home v3 — Minimalist Chic", path: "/Home-v3" },
    { name: "Home v4 — Industrial Vibes", path: "/Home-v4" },
    { name: "Home v5 — Vintage Revival", path: "/Home-v5" },
    { name: "Home v6 — Kid’s Playland", path: "/Home-v6" }
  ]
  const PagesLinks = [
    { name: <Link to="/aboutUs">About Us</Link>, path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" }
  ]
  return (
    <div>
      <div class="nav1">
        <h1>Minuture</h1>
        <div className="sub-nav" onMouseLeave={() => setDropDrown(null)}>


          <a href="./" onMouseEnter={() => setDropDrown(0)}><span>Home</span>< BiChevronDown />
            {dropDown === 0 && (
              <>
                <div className="overlay"></div>

                <div className="Home-real-dropdown1">
                  {HomeLinks.map((links) => (
                    <Link
                      key={links.path}
                      to={links.path}
                      className="-navLinks"
                    >
                      {links.name}
                    </Link>
                  ))}
                </div>
              </>
            )}


          </a>
          <Link to="/catalog">Catalog</Link>< BiChevronDown />

          <a href="./" onMouseEnter={() => setDropDrown(1)}><span>Page</span>< BiChevronDown />
            {dropDown === 1 && (
              <>
                <div className="overlay"></div>

                <div className="pages-real-dropdown">
                  {PagesLinks.map((links) => (
                    <Link
                      key={links.path}
                      to={links.path}
                      className="pages-navLinks"
                    >
                      {links.name}
                    </Link>
                  ))}
                </div>
              </>
            )}


          </a>

          <a href="./"><span><Link to="/Blog">Blog</Link></span></a>
          <a href="./"><span>Contact</span></a>

        </div>

        <div class="nav2">
          <IoSearchOutline />
          <IoPersonOutline />
          <AiOutlineShopping />

        </div>
      </div>


    </div>



  )
}

export default Navbar;