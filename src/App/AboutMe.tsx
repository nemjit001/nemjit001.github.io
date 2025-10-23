import './AboutMe.css'
import ProfilePic from '/profile_pic.jpg'
import GitHubIconWhite from '/github-mark-white.svg'
import GitHubIcon from '/github-mark.svg'
import LinkedInIconWhite from '/InBug-White.png'
import LinkedInIcon from '/InBug-Black.png'

function AboutMe() {
    return (
        <>
            <h2>Who am I and what do I do?</h2>
            <section>
                <img className='headshot-image' src={ProfilePic} />
                <p>
                    My name is Tijmen Verhoef, and I am a graphics programmer who specializes in ray tracing and rendering techniques
                    for real-time applications and video games.
                </p>
                <p>
                    In short this means that I make pretty pictures!
                </p>
            </section>
            <h2>My projects</h2>
            <section>
                <p>Very empty...</p>
            </section>
            <h2>Reach out to me on my socials!</h2>
            <section>
                <a href='https://github.com/nemjit001/' target='_blank'>
                    <picture className='social-blurb'>
                        <source srcSet={GitHubIcon} media='(prefers-color-scheme: light)'/>
                        <source srcSet={GitHubIconWhite} media='(prefers-color-scheme: dark)'/>
                        <img src={GitHubIcon}/>
                    </picture>
                </a>
                <a href='https://linkedin.com/in/tijmen-verhoef/' target='_blank'>
                    <picture className='social-blurb'>
                        <source srcSet={LinkedInIcon} media='(prefers-color-scheme: light)'/>
                        <source srcSet={LinkedInIconWhite} media='(prefers-color-scheme: dark)'/>
                        <img src={LinkedInIcon}/>
                    </picture>
                </a>
            </section>
        </>
    );
}

export default AboutMe;
