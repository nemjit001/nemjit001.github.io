import './SocialBlurbs.css'
import GitHubIconWhite from '/github-mark-white.svg'
import GitHubIcon from '/github-mark.svg'
import LinkedInIconWhite from '/InBug-White.png'
import LinkedInIcon from '/InBug-Black.png'

function SocialBlurbs() {
    return (
        <>
            <h2>Reach out to me on my socials!</h2>
            <section>
                <a href='https://github.com/nemjit001/' target='_blank'>
                    <picture className='social-blurb'>
                        <source srcSet={GitHubIcon} media='(prefers-color-scheme: light)'/>
                        <source srcSet={GitHubIconWhite} media='(prefers-color-scheme: dark)'/>
                        <img src={GitHubIcon} alt='GitHub icon that links to my GitHub profile'/>
                    </picture>
                </a>
                <a href='https://linkedin.com/in/tijmen-verhoef/' target='_blank'>
                    <picture className='social-blurb'>
                        <source srcSet={LinkedInIcon} media='(prefers-color-scheme: light)'/>
                        <source srcSet={LinkedInIconWhite} media='(prefers-color-scheme: dark)'/>
                        <img src={LinkedInIcon} alt='LinkedIn icon that links to my LinkedIn profile'/>
                    </picture>
                </a>
            </section>
        </>
    );
}

export default SocialBlurbs;
