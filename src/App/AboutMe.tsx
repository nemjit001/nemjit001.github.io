import './AboutMe.css'
import ProfilePic from '/profile_pic.jpg'

function AboutMe() {
    return (
        <>
            <h2>Who am I and what do I do?</h2>
            <section>
                <img className='headshot-image' src={ProfilePic} alt='Profile picture showing me standing in a field' />
                <p>
                    My name is Tijmen Verhoef, and I am a graphics programmer who specializes in ray tracing and rendering techniques
                    for real-time applications and video games.
                </p>
                <p>
                    I have a Bsc. Computer Science, and am currently working towards my Msc. Game & Media Technology.
                </p>
                <p>
                    In short this means that I make pretty pictures!
                </p>
            </section>
        </>
    );
}

export default AboutMe;
