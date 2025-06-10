import { mediaIntroTexts } from "@/data/data";
import { ReactElement } from "react";
import './mediaIntroduction.scss'

const MediaIntroduction = ():ReactElement => {
    return (
        <div className='media__intro'>
            <h2 className='media__intro-header'>Time hunts you. Blood fuels you</h2>
            <div className="media__intro-text">
                {mediaIntroTexts.map((item:string, index:number) => <p key={index}>{item}</p>)}
            </div>
        </div>
    )
}

export default MediaIntroduction;