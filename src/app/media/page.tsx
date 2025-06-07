import './media.scss'

const Media = () => {
    return (
        <>
            <div className="media">
            
                <div className="media__container media__background ">
                    <div className='trailer'>
                        <div className="trailer__border">
                            <iframe className='trailer__video' src='https://www.youtube.com/embed/tgbNymZ7vqY?'></iframe>
                            <img className='trailer__frame' src="bloodframe2.png" alt="bloodframe" />
                        </div>
                        {/* <img src='bloodframe.webp' className='blood-pic' /> */}
                    </div>

                </div>
                <div className='media__intro'>
                    <h2 className='media__intro-header'>Time hunts you. Blood fuels you</h2>
                    <div className="media__intro-text">
                        <p>Play as a resurrected maiden in a </p>
                        <p>cursed world-dashing, slashing, and bleeding</p>
                        <p>through haunted ruins to face the immortal king.</p>
                        <p>You won't win. Not yet.</p>
                        <p> But you'll die trying.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media;