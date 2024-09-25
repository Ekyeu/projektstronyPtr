import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>MedicalFunc</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <div>
          <button className="btn">Login</button>
          <button className="btn">Join Us</button>
        </div>
      </header>

      <section className="hero-section">
        <h1>Online Appointment</h1>
        <p>Medical Functional is most focused in helping you discover your most beautiful smile.</p>
        <div>
          <button className="btn">Get Consultation</button>
          <button className="btn">Learn More</button>
        </div>
        <img
          src="https://www.wellingtonregional.com/sites/wellingtonregional.com/files/doctors_visit_1200x900.jpg"
          className="doctor-img"
        />
      </section>

      <section className="activity-section">
        <h2>Our Activity</h2>
        <div className="activity-cards-handler">
          <div className="activity-cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/827/100/original/emergency-ambulance-car-medical-vehicle-illustration-png.png"
                  className="doctor-img"
                />
              </div>
              <h3>Emergency Case</h3>
              <p>The process of medical...</p>
            </div>
          </div>

          <div className="activity-cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/827/100/original/emergency-ambulance-car-medical-vehicle-illustration-png.png"
                  className="doctor-img"
                />
              </div>
              <h3>Health Queries</h3>
              <p>The process of medical...</p>
            </div>
          </div>

          <div className="activity-cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/827/100/original/emergency-ambulance-car-medical-vehicle-illustration-png.png"
                  className="doctor-img"
                />
              </div>
              <h3>Painless Procedures</h3>
              <p>The process of medical...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="medicine-section">
        <h2>Leading Medicine</h2>
        <img
          src="https://thumbs.dreamstime.com/z/zamkni%C4%99cie-strzykawki-w-afryka%C5%84skiej-ameryka%C5%84skiej-r%C4%99ce-lekarza-przy-u%C5%BCyciu-szczepionki-ameryka%C5%84skiego-178805577.jpg"
          alt="Syringe"
          className="medicine-img"
        />
        <p>Doctors apply a detailed research method to enhance medicine.</p>
        <button className="btn-primary">Learn More</button>
      </section>

      <section className="specialization-section">
        <h2>Our Doctors Specialize in You</h2>
        <div className="doctor-cards-handler">
          <div className="doctor-cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://media.gettyimages.com/id/1400102237/photo/african-american-female-doctor-with-arms-crossed-over-white-background.jpg?s=2048x2048&w=gi&k=20&c=NQEbLDcSL23wB_32OMppZBOB9stuE499VczeJtIPRA8="
                  className="doctor-img"
                />
              </div>
              <h3>Dr. John Doe</h3>
              <p>Surgery</p>
            </div>
          </div>

          <div className="doctor-cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://media.gettyimages.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=2048x2048&w=gi&k=20&c=AX4SjWTlnC6q5Pwq8n7KvxaiqngrhbkA_57J1SnBvn4="
                  className="doctor-img"
                />
              </div>
              <h3>Dr. Jane Smith</h3>
              <p>Cardiology</p>
            </div>
          </div>

          <div className="doctor-cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://media.gettyimages.com/id/925542218/photo/black-doctor-holding-hand-of-boy-in-hospital-bed.jpg?s=2048x2048&w=gi&k=20&c=HcpiWx-aeQSSlbhxAZegWdI33e3f0aCKdHV4AHTFXW4="
                  className="doctor-img"
                />
              </div>
              <h3>Dr. Albert Brooks</h3>
              <p>Neurology</p>
            </div>
          </div>
        </div>
      </section>


      <section className="pricing-section">
        <h2>Pricing</h2>
        <div className="pricing-cards-handler">
          <div className="pricing-cards">
            <div className="card">
              <h3>Free</h3>
              <p className="price">$0/mo</p>
              <ul>
                <li>Unlimited product updates</li>
                <li>Unlimited consultations</li>
              </ul>
              <button className="btn-primary">Choose Plan</button>
            </div>
          </div>

          <div className="pricing-cards">
            <div className="card">
              <h3>Basic</h3>
              <p className="price">$19/mo</p>
              <ul>
                <li>All Free features</li>
                <li>Priority support</li>
              </ul>
              <button className="btn-primary">Choose Plan</button>
            </div>
          </div>

          <div className="pricing-cards">
            <div className="card">
              <h3>Pro</h3>
              <p className="price">$49/mo</p>
              <ul>
                <li>All Basic features</li>
                <li>Dedicated support</li>
              </ul>
              <button className="btn-primary">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>


      <section className="testimonials-section">
        <h2>Each and Every Client is Important</h2>
        <div className="testimonial-cards">

          <div className="card">
            <img 
              src="https://media.gettyimages.com/id/2168895482/photo/in-home-healthcare-provider-consulting-with-senior-female-in-her-home.jpg?s=2048x2048&w=gi&k=20&c=Bt0Dif2B27F0oldzfPsPHLuk8zPyVV0EwuGwsTQ4eg8=" 
              className="testimonial-img" 
            />
            <p>"Amazing service!"</p>
            <h3>John Doe</h3>
          </div>

          <div className="card">
            <img 
              src="https://media.gettyimages.com/id/2160976187/photo/pre-adolesence-boy-in-a-diverse-group-of-friends-are-excited-to-receive-food.jpg?s=2048x2048&w=gi&k=20&c=uj5h3RP9lo3FWUxTsviY75IqdTDvrIL3AY_rcQaXghE=" 
              className="testimonial-img" 
            />
            <p>"Highly recommend!"</p>
            <h3>Jane Smith</h3>
          </div>

          <div className="card">
            <img 
              src="https://media.gettyimages.com/id/2163690757/photo/multi-generational-cowgirls-walking-in-front-of-barn.jpg?s=2048x2048&w=gi&k=20&c=uu9gnJDA_N7rp-PFnpVT-ov-bfWlIrVJqSxTyN2_6YQ=" 
              className="testimonial-img" 
            />
            <p>"Will come back again."</p>
            <h3>Albert Brooks</h3>
          </div>
        </div>
      </section>


      <section className="newsletter-section">
        <h2>Join Us</h2>
        <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <p>Made with Love by MedicalFunc | &copy; 2024 All Rights Reserved</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
