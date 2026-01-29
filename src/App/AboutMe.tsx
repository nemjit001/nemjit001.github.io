import './AboutMe.css'
import ProfilePic from '/profile_pic.jpg'

function AboutMe() {
    return (
        <>
            <h2>Who am I and what do I do?</h2>
            <section>
                <img className='headshot-image' src={ProfilePic} alt='Profile picture showing me standing in a field' />
                <p>
                    My name is Tijmen Verhoef, and I am a game devloper and graphics programmer who specializes in ray tracing and rendering techniques
                    for real-time applications and video games.
                </p>
                <p>
                    I have a <span className="education">Msc. Game and Media Technology</span> from
                    Utrecht University, and a <span className="education">Bsc. Computer Science</span> from the Vrije Univesiteit Amsterdam.
                </p>
                <p>
                    In short this means that I make pretty pictures!
                </p>
            </section>
            <h2>Current Employment</h2>
            <section>
                <p>I am currently self-employed as an indepentent game developer, working on a yet unannounced title.</p>
            </section>
        </>
    );
}

export default AboutMe;
