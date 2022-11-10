import React from 'react';
import SkillsIcon from "./SkillsIcon";

function ProjectCard({skills, title, type}) {
    return (
        <div className={"md:w-[600px] mb-10"} >

            <div className={"flex flex-row justify-center space-x-1.5 mt-2"}>
                {skills.map((skill) =>
                    <div className={"tooltip"}>
                        <SkillsIcon icon={skill.i}/>
                        <span className="toolTipText">{skill.t}</span>
                    </div>
                )}
            </div>
            <div className={"flex flex-col text-center mt-1.5"}>
                <p className={"text-gray-800 font-bold text-3xl -mt-1.5"}>{title}</p>
                <p className={"text-main-100 font-bold text-sm -mt-1.5"}>{type}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
