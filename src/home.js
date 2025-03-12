import './App.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/newPic2.jpg';
import image2 from './images/newPic1.jpg';
import image3 from './images/newPic3.jpg';
import image5 from './images/newPic7.jpg';
import image6 from './images/bg11.avif';
import image7 from './images/bg10.avif';

export default function Home() {
  let style = { color: '#9d75cf', textAlign: "center" };

  return (
    <>
      <div id="main-page" className="homeContent">
        <div id="cardDiv">
          <Card style={{
            borderRadius: "60px 20px 60px 20px",
            overflow: "hidden",
            animation: "moving 3s linear alternate",
            border: "none"
          }}>
            <Carousel >
              <Carousel.Item interval={500}>
                <img src={image3} className="d-block w-70 h-70" alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image1} className="d-block w-70 h-70" alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image2} className="d-block w-70 h-70" alt="Slide 3" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image5} className="d-block w-70 h-70" alt="Slide 4" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image7} className="d-block w-70 h-70" alt="Slide 5" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={image6} className="d-block w-70 h-70" alt="Slide 6" />
              </Carousel.Item>
            </Carousel>
          </Card>
        </div>

        <div id="words">
          <h1>Welcome to</h1>
          <h1>Bank Of React</h1>
          <h4>It's time to explore our bad bank initiative and tackle those distressed assets head-on.</h4>
          <button id="home-btn">Explore</button>
          
        </div>
      </div>
      <div className='about-div' style={{ textAlign: "center", marginTop: "100px", marginBottom: "100px" ,with: "100%"}}>
            <h2>About Us</h2>
            <p>Bank mahi of React is a bad bank initiative that helps you manage your distressed assets.<br/>
              Our mission is to help you take control of your finances and make informed decisions.<br/>
               We offer a range of services, including account creation, login, deposit, and withdrawal.<br/>
               Our platform is secure, user-friendly, and easy to navigate. 
               Join us today and start managing your finances like a pro!</p>
          </div>
    </>
  );
}
