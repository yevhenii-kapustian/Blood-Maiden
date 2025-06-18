import './mediaLevelsSection.scss'
import { Icon } from "@iconify/react";

const MediaLevelsSection = () => {
    return(
        <div className="media__levels">
            <div className="media__levels-title">
                <h2>Media</h2>
                <img src="iconTitle.png" alt="icon title" />
            </div>
            <div className="media__levels-itemsContainer">
                <div className='media__levels-itemsContainer__cards'>
                    <div className='media__levels-itemsContainer__cards-itemsLevel'>
                        <img src="levels1.png" alt="first level"/>
                        <div className='media__levels-itemsContainer__cards-itemsLevel__level'>
                            <h4>Level 1.</h4>
                            <a href="#0">Learn More</a>
                        </div>
                    </div>
                    <div className='media__levels-itemsContainer__cards-itemsLevel'>
                        <img src="levels2.png" alt="second level"/>
                        <div className='media__levels-itemsContainer__cards-itemsLevel__level'>
                            <h4>Level 2.</h4>
                            <a href="#1">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="media__levels-cardsMobile">
                    <a href="#0"> <span></span>Level 1. <span><Icon icon="material-symbols:arrow-forward-ios-rounded" width="24" height="24" /></span></a>
                    <a href="#1"><span></span>Level 2. <span><Icon icon="material-symbols:arrow-forward-ios-rounded" width="24" height="24" /></span></a>
                </div>
                <div className="media__levels-moreLinks">
                    {/* <a href="#assets"><span></span>Environmental<span><Icon icon="material-symbols:arrow-forward-ios-rounded" width="24" height="24" /></span></a> */}
                    <a href="#enemies"><span></span>ENEMIES AND OBSTACLES<span><Icon icon="material-symbols:arrow-forward-ios-rounded" width="24" height="24" /></span></a>
                </div>
            </div>
        </div>
    )
}

export default MediaLevelsSection