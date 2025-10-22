import './AboutMe.css'
import ProfilePic from '/profile_pic.jpg'

function AboutMe() {
    return (
        <>
            <h2>Who am I and what do I do?</h2>
            <section>
                <img className='headshot-image' src={ProfilePic} />
                <p>
                    I make cool stuff that has to do with rendering and video games!
                </p>
            </section>
            <h2>My projects</h2>
            <section>
                <p>Very empty...</p>
            </section>
            <h2>Contact me</h2>
            <section>
                <p>Some links to socials...</p>
            </section>
        </>
    );
}

export default AboutMe;
