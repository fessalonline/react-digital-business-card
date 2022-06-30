import './App.css'

function App() {
  return (
    <div className="card">

      <img className="card-hero-image" src="./assets/laurasmith.png" alt="twitter"/>

      <div className="body">
        <h1 className="title">Laura Smith</h1>
        <p className="designation">Frontend Developer</p>
        <p className="weblink">laurasmith.website</p>

        <button className="button-left" href=""><img src="./assets/email.svg" />Email</button>
        <button className="button-right"><img src="./assets/linkedin.svg" />LinkedIn</button>
        
        <h2 className="text-heading text-heading-1">About</h2>
        <p className="text text-1">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className="text-heading text-heading-2">Interests</h2>
        <p className="text text-2">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>

      <footer className="footer">
          <img className="footer-icons" src="./assets/twitter.svg" alt="twitter"/>
          <img className="footer-icons" src="./assets/facebook.svg" alt="facebook"/>
          <img className="footer-icons" src="./assets/instagram.svg" alt="instagram"/>
          <img className="footer-icons" src="./assets/github.svg" alt="github"/>
      </footer>

    </div>
  )
}

export default App