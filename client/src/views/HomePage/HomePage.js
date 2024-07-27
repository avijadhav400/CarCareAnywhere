import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import OilChangeImg from './oil-change.jpeg'
import TyreRepairImg from './tyre-repair.png'
import BatteryReplacementImg from './battery-replacement.png'

function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 text-black fw-bold">Car Service at Your Place</h1>
          <p className="lead text-black fw-bold">Convenient and reliable car service right at your doorstep.</p>
          <a href="#services" className="btn btn-light btn-lg mt-3 bg-black text-white border-0">Explore Services</a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={OilChangeImg} className="card-img-top" alt="Oil Change" />
                <div className="card-body">
                  <h5 className="card-title">Oil Change</h5>
                  <p className="card-text">Keep your engine running smoothly with our quick and efficient oil change service.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={TyreRepairImg} className="card-img-top" alt="Tire Repair" />
                <div className="card-body">
                  <h5 className="card-title">Tire Repair</h5>
                  <p className="card-text">Get back on the road safely with our expert tire repair and replacement services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={BatteryReplacementImg} className="card-img-top" alt="Battery Replacement" />
                <div className="card-body">
                  <h5 className="card-title">Battery Replacement</h5>
                  <p className="card-text">Reliable battery replacement service to ensure your car starts every time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; 2024 Car Care Anywhere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
