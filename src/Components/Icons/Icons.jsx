// File path__
import "./Icons.css";

// Package(React icons)__
import { CiText } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import { RxCopy, RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineSquareFoot } from "react-icons/md";

const Icons = () => {
  return (
    <>
      <section id="icons_section">
        <div className="main_icons_container">
          <div className="icons_row_one">
            <div>{""}</div>
            <div>
              <RxCross2 fontSize={25} />
            </div>
          </div>

          <div className="icons_row_two_parent_container">
            <ul className="icons_row_two">
              <li>
                <GiArrowCursor fontSize={50} />
              </li>
              <li>
                <GiArrowCursor fontSize={50} color="#ffffff" />
              </li>
            </ul>

            <ul className="icons_row_three">
              <li>
                <FaPenNib fontSize={35} />
              </li>
              <li>
                <CiText fontSize={42} />
              </li>
            </ul>

            <ul className="icons_row_four">
              <li>
                <IoSearchOutline fontSize={42} />
              </li>
              <li>
                <MdOutlineSquareFoot fontSize={50} />
              </li>
            </ul>
          </div>

          <div className="icons_row_five">
            <RxCopy fontSize={42} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Icons;