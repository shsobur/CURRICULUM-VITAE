// File path__
import "./Exp.css";

// Package(React icons)__
import { RxCross2 } from "react-icons/rx";
import { PiCopyBold } from "react-icons/pi";

const Exp = () => {
  return (
    <>
      <section id="exp_section">
        <div className="main_exp_container">
          <div className="exp_header_container">
            <h1>Experiences</h1>
            <ul>
              <li>_</li>
              <li>
                <PiCopyBold />
              </li>
              <li>
                <RxCross2 />
              </li>
            </ul>
          </div>

          <div className="exp_content_container">
            <div className="exp_info">
              <h2>Senior Graphic Designer</h2>
              <h3>Really Great Site Studio</h3>
              <h4>May 2020 – present</h4>
              <ul>
                <li className="exp_explanation">
                  Responsible for managing all design projects
                </li>
                <li className="exp_explanation">
                  Edits editorial photos for clients, magazines, and social
                  media posts
                </li>
              </ul>
            </div>

            <div className="exp_info">
              <h2>Junior Graphic Designer</h2>
              <h3>Really Great Site Studio</h3>
              <h4>May 2018 – May 2020</h4>
              <ul>
                <li className="exp_explanation">
                  Tasked to make graphics for online and offline layouts
                </li>
                <li className="exp_explanation">
                  Edited editorial photos for clients, magazines, and social
                  media posts media posts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exp;