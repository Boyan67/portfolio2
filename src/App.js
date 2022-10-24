import Navbar from "./components/Navbar";
import HomeAboutSection from "./components/HomeAboutSection";
import React, {useEffect} from 'react'
import {FaChevronCircleDown} from "react-icons/fa";
import SocialBanner from "./components/SocialBanner";
import ProjectCard from "./components/ProjectCard";
import {frameworks, languages, projects, skills, software} from "./data";
import AboutSection from "./components/AboutSection";
import {Popup} from "./components/PopUp";

export function navigateInPage (ele){
  let offsetTop  = document.getElementById(ele).offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

function App() {

  const [darkToggle, setDarkToggle] = React.useState(true)
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [link, setLink] = React.useState("");
  const [projectNum, setProjectNum] = React.useState(1);

  useEffect(() => {
    document.title = 'Boyan Yonkov';
  });

  function openPopup(title, info, link, projectNum) {
    setOpen(true)
    setTitle(title)
    setInfo(info)
    setLink(link)
    setProjectNum(projectNum)
  }

  return (
      <div className={`${darkToggle ? 'dark' : ''}`} id={"landing-page"}>
        <div className={"bg-gray-100 dark:bg-gradient-to-tl from-black to-[#303030] h-screen" +
            ""}>
          <Navbar darkMode={darkToggle} setDarkToggle={setDarkToggle}/>
          <div className={"absolute lg:left-[17%] left-[3%] top-1/4 z-10"}>
            <HomeAboutSection/>
          </div>
          <div className={"absolute bottom-0 right-0 -mr-32 -mb-28"}>
            <div style={{clipPath: 'inset(100px);'}}
                 className={"w-[200px] lg:h-[800px] lg:w-[800px] rounded-full " +
                     "bg-gradient-to-tl from-[transparent] to-main-45 "}/>
          </div>
          <button
              onClick={() => navigateInPage("projects")}
              className={"bottom-5 absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "}>
            <p className={"text-2xl font-semibold text-customGray"}>Work</p>
            <FaChevronCircleDown
                className={"text-6xl text-main-100 rounded-full drop-shadow-lg hover:scale-110 ease-in-out duration-300"}/>
          </button>

          <SocialBanner/>

        </div>

        <div id={"projects"}
             className={"bg-gray-100 dark:bg-gradient-to-tl from-gray-300 to-gray-50 flex flex-col"}>
          <div className={"flex flex-row text-4xl font-bold justify-center p-12 space-x-2"}>
            <p className={"text-main-100"}>//</p>
            <p className={"text-gray-800"}>PROJECTS</p>
            <p className={"text-main-100"}>//</p>
          </div>
          <div className={"flex flex-row flex-wrap justify-around w-[100%] lg:w-[75%] self-center "}>
            {projects.map((project) => (
                <div className={""}>
                  {open ? <Popup title={title} info={info} link={link} project={projectNum} closePopup={() => setOpen(false)} /> : null}
                  <button onClick={() => openPopup(project.title, project.type, project.link, project.num)}>
                    <img
                        src={project.image}
                        alt="Placeholder img"
                        className={"md:w-[600px] w-[66.5%] ml-24 hover:scale-[1.03] hover:shadow-xl ease-in-out duration-300 shadow"}/>
                  </button>
                  <ProjectCard
                      skills={project.skills}
                      title={project.title}
                      type={project.type}
                      link={project.link}
                  />
                </div>
            ))}
          </div>
        </div>

        <div
            id={"about"}
            className={"bg-gray-100 dark:bg-gradient-to-tl from-black to-[#303030] flex justify-center"}
        >
          <div className={"w-[100%] lg:w-[66%]"}>
            <div className={"flex flex-row text-4xl font-bold justify-center pt-10 space-x-2"}>
              <p className={"text-main-100"}>//</p>
              <p className={"text-gray-800 dark:text-gray-200"}>ABOUT</p>
              <p className={"text-main-100"}>//</p>
            </div>

            <AboutSection
                aboutText={"A Bulgarian front-end developer that graduated in the UK with a bachelors degree of " +
                    "Computer Science from the University of East Anglia. Very eager to learn and improve my skill set. " +
                    "My passion lies in being a great front-end developer. Looking for a role where I can grow and learn from experienced team members, while drawing on experience from projects I have successfully completed."}
                languages={languages}
                software={software}
                frameworks={frameworks}
            />
          </div>
        </div>
      </div>
  );
}

export default App;
