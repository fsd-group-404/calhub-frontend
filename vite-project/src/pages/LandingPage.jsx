import heroImage from "../assets/hero_image.png";
import logoImage from "../assets/logo.png";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    //set backgroundImage to be ./assets/hero_image.png
    <>
        
      <div
        className="hero min-h-screen static"
        style={{
          backgroundImage: "url(" + heroImage + ")",
        }}
      >
        <div className="w-24 rounded-full absolute top-0 left-0">
            <img src={logoImage} alt="logo" />
        </div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-l">
            <h1 className="mb-5 text-5xl font-bold">
              find your study buddies today
            </h1>
            <Link to="/sign-in"><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
