// File path__
import "./Skill.css";

// Package(React icons)__
import { FaPenNib } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Skill = () => {
  return (
    <>
      <section id="skill_section">
        <div className="main_skill_container">
          <ul>
            <li>
              <span>Design Thinking</span>
              <span className="skill_circle_container">
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#ddc4ac" />
              </span>
            </li>

            <li>
              <span>Content Planning</span>
              <span className="skill_circle_container">
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
              </span>
            </li>

            <li>
              <span>Graphic Design</span>
              <span className="skill_circle_container">
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
              </span>
            </li>

            <li>
              <span>3D Design</span>
              <span className="skill_circle_container">
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#ddc4ac" />
              </span>
            </li>

            <li>
              <span>Video Editing</span>
              <span className="skill_circle_container">
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#ddc4ac" />
              </span>
            </li>

            <li>
              <span>Motion Graphic</span>
              <span className="skill_circle_container">
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#6cac91" />
                <GoDotFill fontSize={30} color="#ddc4ac" />
                <GoDotFill fontSize={30} color="#ddc4ac" />
              </span>
            </li>
          </ul>

          <div className="skill_edit_container">
            <button>SKILL</button>
            <button>
              <FaPenNib />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;