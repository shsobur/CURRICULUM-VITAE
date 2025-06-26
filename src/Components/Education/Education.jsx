// File path__
import "./Education.css";

// Package(React icons)__
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Education = () => {
  return (
    <>
      <section id="edu_section">
        <div className="main_edu_container">
          <div className="edu_header_container">
            <div>
              <HiOutlineChevronLeft fontSize={40} />
            </div>
            <h1>EDUCATION</h1>
            <div>
              <HiOutlineChevronRight fontSize={40} />
            </div>
          </div>

          <div className="edu_info_container">
            <ul className="edu_info_one">
              <p>Master of Design (2018)</p>
              <p>Really Great Institute (2018)</p>
            </ul>

            <ul className="edu_info_two">
              <p> Bachelor of Design (2016)</p>
              <p>Really Great University (2018)</p>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;