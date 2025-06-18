import './aboutGame.scss'
const AboutGame = () => {
  return (
    <section className="aboutmain" aria-labelledby="aboutmain-title">
      <div className="aboutmain__container">
        <div className="aboutmain__content">
          <h2 className="aboutmain__title">Blood Maiden</h2>
          <p>
            In the 18th century, a young mademoiselle was sacrificed. An unknown highborn man drained her blood as part of a ritual to restore his youth.
            <br />She was interned in an old crypt, her body pinned in place by a silver dagger.
            <br />A hundred years later, grave robbers remove the silver dagger from her chest, bringing her to life.
            <br />She returns as a restless spirit with not a drop of blood in her veins. She has no memories but is filled with dark energy.
            <br />
            <br />To rest in peace, she must recover her own blood. Drawn by its scent, she moves through the Victorian city — toward the one who stole her life.
            <br />Her restless soul cuts through crowds of demons, soldiers, and servants loyal to the aristocrat who still thrives,
            <br />young and flourishing, by draining the youth of others. <br />
            <br />As long as her body remains an empty vial, she can absorb the blood of other creatures and use it in combat or to leap through obstacles.
            <br />However, she has weaknesses: the less blood in her body, the slower she becomes.
            <br />
            <br />And since she is a dark creature sustained by stolen blood, the liquid inside her coagulates quickly, killing her.
            <br />Taking her rest when she feels safe, she retreats into the chambers of her mind, covered in flowing blood. This blood heals her amnesia, returning memories to her in the form of audiomores — sound-based memories. And the further she progresses through the levels, seeking her murderer, the more conscious she becomes — transforming, step by step, from a beast seeking blood into the avenger who approaches her killer. The king. Her father.
          </p>
        </div>
        <div className="aboutmain__image">
          <div className='aboutmain__border'>
            <img src="/sleepy-maiden.png" alt="" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutGame;