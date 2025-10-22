import './AboutMe.css'
import ProfilePic from '/profile_pic.jpg'

function AboutMe() {
    return (
        <>
            <h2>Who am I and what do I do?</h2>
            <img className='headshot-image' src={ProfilePic} />
            <p>
                Something interesting here...
            </p>
            <p>
                I make cool stuff that has to do with rendering and video games!
            </p>
        </>
    );
}

export default AboutMe;
