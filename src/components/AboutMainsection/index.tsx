import './aboutmainsection.scss'
const AboutMainsection = () => {
    return(
         <section className="aboutmain" aria-labelledby="aboutmain-title">
      <div className="aboutmain__container">
        <div className="aboutmain__content">
      <h2 className="aboutmain__title">Blood Maiden</h2>
            <p>They buried her in silence, hoping the grave would forget. But the
            blood remembered. <br /> 
            They say she rose from a grave that never should've been found. Pale
            as ash. Eyes like dying stars. <br /> <br />

            A maiden carved from sorrow and vengeance-driven by blood that is
            not her own. <br /> She walks the shadows of a broken London, where
            monstrous things roam the fog-
            abominations <br /> born of alchemy and bone, magic and madness.
             <br /> <br />
            Soldiers and beasts each one more grotesque than the last. She does
            not eat. She does not sleep. <br /> <br />
            By night, she moves with terrifying grace-absorbing the blood of
            what she slays. <br /> <br />
             By day, the blood within her turns against her, a
            ticking curse she must outwit. The sun is her executioner. <br /> <br />
            She does not hunt to live. She hunts to end it. <br />
            Not just the beasts. Not just the curse. <br />
            She's searching for the one who created them all. 
            The king. <br />
            Her father.</p>
        </div>
        <div className="aboutmain__image">
            <div className='aboutmain__border'>
            <img src="/sleepy-maiden.png" alt="" />
            </div>
        </div>
      </div>
    </section>
    )
}

export default AboutMainsection