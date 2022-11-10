import {
    SiBootstrap,
    SiCss3,
    SiDjango, SiGit,
    SiHtml5,
    SiJavascript, SiJira, SiMysql,
    SiPostman,
    SiReact,
    SiSass,
    SiTailwindcss
} from "react-icons/si";
import kulinarcho from "./assets/project-images/kulinarcho.png"
import dashboard from "./assets/project-images/dashboard-admin.png"
import mealPlan from "./assets/project-images/meal-plan.png"
import eurotours from "./assets/project-images/eurotours1-min.png"
import python from "./assets/icons/python.png"
import figma from "./assets/icons/figma.png"
import webStorm from "./assets/icons/webStrom.png"
import pyCharm from "./assets/icons/pycharm.png"
import xd from "./assets/icons/xd.png"



export const skills = [
    <SiReact className={"text-[#61dafb] text-3xl"}/>,
    <SiJavascript className={"text-[#f7df1e] text-3xl"}/>,
    <SiHtml5 className={"text-[#e83c2c] text-3xl"}/>,
    <SiCss3 className={"text-[#006bc0] text-3xl"}/>,
    <SiTailwindcss className={"text-[#69bfb4] text-4xl"}/>,
    <SiSass className={"text-[#cd6799] text-3xl"}/>,
    <SiPostman className={"text-[#fd6c35] text-3xl"}/>,
    <SiGit className={"text-[#f05033] text-3xl"}/>,
    <img src={python} alt={"python"} className={"h-8"}/>,
    <SiDjango className={"text-[#2ba977] text-3xl"}/>,
    <SiMysql className={"text-[#00618a] text-3xl"}/>,
    <SiBootstrap className={"text-[#7111f5] text-3xl"}/>,
    <SiJira className={"text-[#227ffa] text-2xl"} />,
    <img src={webStorm} alt={"webStorm"} className={"h-7"}/>,
    <img src={pyCharm} alt={"pyCharm"} className={"h-7"}/>,
    <img src={figma} alt={"figma"} className={"h-7"}/>,
    <img src={xd} alt={"xd"} className={"h-8"}/>,
]


export const languages = [skills[1], skills[2], skills[3], skills[8], skills[10]]
export const frameworks = [skills[0], skills[4], skills[5], skills[9], skills[11]]
export const software = [skills[6], skills[7], skills[12], skills[13], skills[14], skills[15], skills[16]]

export const projects = [
    {image: dashboard,
        skills: [{t: "React", i:skills[0]}, {t: "Tailwind", i:skills[4]}, {t: "HTML", i:skills[2]}, {t: "CSS", i:skills[3]}],
        title: "Admin Dashboard", type: "WEBSITE", link: "https://github.com/Boyan67/admin-dashboard", num: 2, },
    {image: mealPlan,
        skills: [{t: "HTML", i:skills[2]}, {t: "CSS", i:skills[3]}, {t: "Bootstrap", i:skills[11]}, {t: "Python", i:skills[8]}, {t: "Django", i:skills[9]}, {t: "SQL", i:skills[10]}],
        title: "Meal Planer", type: "WEBSITE", link: "https://github.com/Boyan67/meal_plan", num: 3,},
    {image: kulinarcho,
        skills: [{t: "React Native", i:skills[0]}, {t: "JavaScript", i:skills[1]}, {t: "CSS", i:skills[3]}],
        title: "Kulinarcho",
        type: "MOBILE APP",
        link: "",
        num: 1,
    },
    {image: eurotours,
        skills: [{t: "HMTL", i:skills[2]}, {t: "CSS", i:skills[3]}, {t: "Bootstrap", i:skills[11]}, {t: "react", i:skills[4]}, {t: "Python", i:skills[8]}, {t: "Django", i:skills[9]}],
        title: "Eurotours", type: "WEBSITE", link: "https://www.eurotours-bg.com/", num: 4},
];

export const about = "A Computer Science graduate from the University of East Anglia, eager to learn and improve my skill set. " +
    "My passion lies in being a great front-end developer. Looking for a role where I can grow and learn from experienced team members, " +
    "while drawing on experience from projects I have successfully completed."

