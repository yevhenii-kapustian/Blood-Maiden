import { ReactElement } from "react";
import './mediaTrailerSection.scss'

const MediaTrailerSection = ():ReactElement => {
    return (
        <div className="media__container media__background ">
            <div className='trailer'>
                <div className="trailer__border">
                    <iframe className='trailer__video' src='https://www.youtube.com/embed/tgbNymZ7vqY?'></iframe>
                    <div className='trailer__frost' />
                    <img className='trailer__frame' src="bloodframe2.png" alt="bloodframe" />
                </div>
            </div>
        </div>
    )
}

export default MediaTrailerSection;