import './mediaLevelsSection.scss'

const MediaLevelsSection = () => {
    return(
        <div className="media__levels">
            <div className="media__levels-title">
                <h2>Media</h2>
                <img src="iconTitle.png" alt="icon title" />
            </div>
            <div className="media__levels-itemsContainer">
                <div className='media__levels-itemsContainer__itemsCards'>
                    <img src="levels1.png" alt="first level"/>
                    <img src="levels2.png" alt="second level"/>
                </div>
                <div className="media__levels-moreLinks">
                    <a href="">Environmental Assets</a>
                    <a href="">Monsters Codex</a>
                </div>
            </div>
        </div>
    )
}

export default MediaLevelsSection