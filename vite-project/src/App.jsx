
import './App.css'
import Image from './assets/man.png'
function App() {

  return (
      <div className="card-container">
        <div className="card-details">
          <img src={Image} alt="" />
        </div>
        <div className="head">
          <div className="name">
            <h2>Laura Smith</h2>
            <h5 className='front'>Frontend Developer</h5>
            <p ><small>laurasmith.website</small></p>
          </div>
          <button className='button1'><i class="fa-solid fa-envelope"></i> Email</button><button className='button2'><i class="fa-brands fa-linkedin"></i> Linkedin</button>
          <div className="content">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
          <div className="footer">
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-github"></i>
          </div>
        </div>
      </div>
  )
}

export default App
