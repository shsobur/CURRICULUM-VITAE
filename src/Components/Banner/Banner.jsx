// File path__
import "./Banner.css";
import image from "../../assets/person.jpg";

// Package(React icons)__
import { IoCall } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaExpandAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section id="banner_section">
        <div className="main_banner_container">
          <div className="banner_header_container">
            <div>{""}</div>
            <div>PROFILE</div>
            <div>
              <FaExpandAlt />
            </div>
          </div>

          <div className="banner_person_info_container">
            <div className="person_info_content">
              <h1>Aminul Islam</h1>
              <h2>Graphic Designer</h2>
              <div className="person_address_container">
                <ul className="person_address_one">
                  <li>
                    <IoMdHome fontSize={35} />
                  </li>
                  <li>Right bank, kaptai, Bangladesh</li>
                </ul>

                <ul className="person_address_two">
                  <li>
                    <TfiEmail fontSize={26} />
                  </li>
                  <li>aminulvaiaremail@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="person_image_content">
              <img src={image} alt="Image" />
              <ul>
                <li>
                  <IoCall fontSize={30} />
                </li>
                <li>+123-456-7890</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;