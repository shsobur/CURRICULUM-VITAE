// File path__
import "./Header.css";

// Package(React icons)__
import { BsCopy } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <section>
        <div className="main_header_container">
          <div className="header_first_container">
            <FiCircle />
            <FiCircle />
          </div>

          <div className="header_second_container">
            <h1>CURRICULUM VITAE</h1>
          </div>

          <div className="header_third_container">
            <span id="header_underscore">_</span>
            <BsCopy />
            <RxCross2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;