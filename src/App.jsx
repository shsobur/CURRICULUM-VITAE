// File path__
import "./App.css";
import Ref from "./Components/Ref/Ref";
import Exp from "./Components/Exp/Exp";
import Link from "./Components/Link/Link";
import Icons from "./Components/Icons/Icons";
import Skill from "./Components/Skill/Skill";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Education from "./Components/Education/Education";

const App = () => {
  return (
    <>
      <section id="main_page_section">
        {/* Header section */}
        <Header></Header>

        {/* Center section */}
        <div className="main_center_content_container">
          <ul>
            <li id="container_on-1">
              <Banner></Banner>
            </li>

            <li id="container_on-2">
              <Icons></Icons>
            </li>

            <li id="container_on-3">
              <Skill></Skill>
            </li>

            <li id="container_on-4">
              <Exp></Exp>
            </li>

            <li id="container_on-5">
              <Education></Education>
            </li>

            <li id="container_on-6">
              <Link></Link>
            </li>

            <li id="container_on-7">
              <Ref></Ref>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default App;