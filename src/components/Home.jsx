import './Home.css'
import Logo from '/logo.png'

function Home() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="logo-text">
            <span className="logo-line1">Home</span>
            <span className="logo-line2">Nutritionist</span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home;
