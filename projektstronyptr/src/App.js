import './App.css';
import blackWomanDoctor from './zdjecia/blackWomandoctor.jpg';
import phoneIcon from './zdjecia/icons8-phone-50.png';
import ampule from './zdjecia/ampule.jpg';

function App() {
  return (
    <div className="App">
      {/* naglowek
      */}
      <header className="naglowek">
        <div className="naglowek-container">
          <div className="logo">MedicalFunc</div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <button className="login-btn">Login</button>
          <button className="join-btn">Join Us</button>
        </div>
      </header>


      <main>
        {/*Appointment */}
        <section className="main-content">
          <div className="text-content">
            <p className="blue">Welcome</p>
            <h1>Online <br/>Appointment</h1>
            <p>Medical Functional is most focused in helping you <br/>discover your most beautiful smile.</p>
            <div className="buttons">
              <button className="get-btn">Get Quote now</button>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
          <div className="image-placeholder"><img src={blackWomanDoctor} alt="Black Woman Doctor" /></div>
        </section>

        {/*Activity */}
        <section className="activity">
          <h2>Our Activity</h2>
          <p>Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics</p>
          <div className="activity-karty" >
            <div className="karty">
              <img src={phoneIcon} alt="Bicon" />
              <h3>Emergency Case</h3>
              <p>The critical and <br/>immediate care you need.</p>
            </div>
            <div className="karty">
              <img src={phoneIcon} alt="Blicon" />
              <h3>Health Queries</h3>
              <p>Quick answers to your<br/> pressing health concerns.</p>
            </div>
            <div className="karty">
              <img src={phoneIcon} alt="icon" />
              <h3>Painless Procedures</h3>
              <p>We ensure <br/>your comfort during treatments.</p>
            </div>
          </div>
        </section>

        {/*Medicine */}
        <section className="medicine">
          <h2>Leading Medicine</h2>
          <p>Problems trying to resolve the conflict between <br/>the two major realms of Classial physics Newtonian mechanics</p>
          <div className="medicine-content">
            <div className="medicine-text">
              <p className="blue">Learn more</p>
            </div>
            
            <img src={ampule} alt="ampule" />
          </div>
        </section>

        {/*Our Doctors */}
        <section className="doctors">
          <p className="blue">Learn more</p>
          <h2>Our Doctors Specialize in You</h2>
          <p>Problems trying to resolve the conflict between <br/>the two major realms of Classial physics Newtonian mechanics</p>
          <div className="doctors-karty">
            <div className="doctor-karty">
              <h3>Dental Department</h3>
              <p>Expert dental care to brighten your smile.</p>
            </div>
            <div className="doctor-karty">
              <h3>Surgical Department</h3>
              <p>Experienced surgeons for every procedure.</p>
            </div>
            <div className="doctor-karty">
              <h3>Optical Department</h3>
              <p>Ensuring your vision is our priority.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="pricing">
          <p className="blue">Practical advice</p>
          <h2>Pricing</h2>
          <div className="pricing-karty">
            <div className="price-karty">
              <h3>Free Plan</h3>
              <p>Organizer access and 4 reports for free.</p>
            </div>
            <div className="price-karty">
              <h3>Premium Plan</h3>
              <p>Access to 10 reports and advanced features.</p>
            </div>
            <div className="price-karty">
              <h3>Advanced Plan</h3>
              <p>Unlimited access to all features and support.</p>
            </div>
          </div>
        </section>

        {/*Testimonials */}
        <section className="testimonials">
          <p className="blue">Practical advice</p>
          <h2>Each and Every Client is Important</h2>
          <div className="testimonials-karty">
            <div className="testimonial-karty">
              <p>"Amazing service, highly recommended!"</p>
              <p>- Client A</p>
            </div>
            <div className="testimonial-karty">
              <p>"The doctors were friendly and professional."</p>
              <p>- Client B</p>
            </div>
            <div className="testimonial-karty">
              <p>"Best medical care I've ever received."</p>
              <p>- Client C</p>
            </div>
          </div>
        </section>
      </main>

      {/* STOPKA */}
      <footer>
        <div className="footer-content">
          <div className="footer-main">
            <h3>JOIN US</h3>
            <input type="email" placeholder="Your Email" />
            <button className="subskrypcja">Subscribe</button>
          </div>
          <div className="footer-linki">
            <a href="#">Company Info</a>
            <a href="#">Legal</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-contact">
            <p>Contact Us: +1-800-555-1234</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
