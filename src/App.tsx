import './App.css'
import AboutMe from './App/AboutMe'
import Projects from './App/Projects'
import SocialBlurbs from './App/SocialBlurbs'

function App() {
  return (
    <>
      <header className='header'>
        <h1>Welcome to my Portfolio!</h1>
      </header>
      <main className='content'>
        <AboutMe />
        <Projects />
        <SocialBlurbs />
      </main>
    </>
  )
}

export default App
