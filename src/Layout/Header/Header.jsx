/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import CardDetails from "../../Component/CardDetails/CardDetails";
import { MovieContext, ThemeContext } from "../../Context/Context";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    setShowCart(true);
  }
  return (
    <>
      <header>
        {showCart && <CardDetails onClose={() => setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCartShow}
              >
                <img src={ShoppingCart} width="24" height="24" alt="cart" />
                {state?.cartData?.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
