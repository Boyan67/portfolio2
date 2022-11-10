import React from "react";
import "../index.css";
import SimpleImageSlider from "react-simple-image-slider";
import template from "../assets/project-images/template.png"
import kulinarcho from "../assets/project-images/cropped-kulinarcho.png"
import eurotours from "../assets/project-images/eurotours1-min.png"
import dashboard from "../assets/project-images/dashboard-admin.png"
import {
    dash2,
    dash3,
    dash4,
    dash5,
    euro2,
    euro3,
    euro4,
    kul1,
    kul2,
    kul3,
    kul4,
    meal2,
    meal3,
    meal4
} from '../assets/index'

import {AiFillCloseCircle} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";

const project1 = [
    {url: kulinarcho},
    {url: kul1},
    {url: kul2},
    {url: kul3},
    {url: kul4},
];
const project2 = [
    {url: dashboard},
    {url: dash2},
    {url: dash3},
    {url: dash4},
    {url: dash5},
];
const project3 = [
    {url: meal2},
    {url: meal3},
    {url: meal4},
];
const project4 = [
    {url: eurotours},
    {url: euro2},
    {url: euro3},
    {url: euro4},
];

export const Popup = ({title, info, link, project, closePopup}) => {

    function getImages() {
        switch (project) {
            case 1:
                return project1
            case 2:
                return project2
            case 3:
                return project3
            case 4:
                return project4
            default:
                return template
        }
    }

    return (
        <div className="popup-container">
            <div className="popup-body">
                <SimpleImageSlider
                    width={"100%"}
                    height={"70%"}
                    images={getImages()}
                    showBullets={true}
                    showNavs={true}
                    style={{zIndex: 0, flex: 1}}
                />
                <button onClick={closePopup} className={"text-4xl absolute top-[5px] right-[5px]"}>
                    <AiFillCloseCircle className={"text-gray-900"}/>
                </button>
                <div className={"flex-row flex items-center mt-4 mb-2 justify-center"}>
                    <h1 className={"text-3xl font-bold text-gray-800"}>{title}</h1>
                    {link ? <a href={link}><BiLinkExternal className={"text-3xl text-main-100 font-bold"}/></a> : ''}

                </div>
                <p className={"text-xl text-gray-800"}>{info}</p>
            </div>
        </div>
    );
};
