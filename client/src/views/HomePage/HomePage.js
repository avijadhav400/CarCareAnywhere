import React from "react";
import "./HomePage.css";
import ServiceCard from "../../components/ServiceCard.js";
import TiresAndWheelsImg from "./tires-and-wheels.jpg";
import TechnicalRepairImg from "./technical-repairs.jpg";
import AutoDiagnosticsImg from "./autodiagnostics.jpg";
import ElectricalWorksImg from "./electrical-works.jpg";

function HomePage() {
  return (
    <>
      <nav className="navbar border">
        <img
          className="brand-logo"
          src="https://shremp.templines.org/wp-content/uploads/2018/02/newlogo04.png"
          alt=""
        />

        <ul>
          <li className="nav-item">HOME</li>
          <li className="nav-item">CONTACT</li>
          <li className="nav-item">OUR SERVICES</li>
          <li className="nav-item">ABOUT US</li>
        </ul>
      </nav>

      <main className="main-container">
        <h1 className="headings">WE GIVE YOUR CAR</h1>
        <h1 className="headings">A FRESH LOOK</h1>
        <button type="button" className="btn btn-primary mt-3">
          CHOOSE A SERVICE
        </button>
      </main>

      <services className="service-container d-flex justify-content-evenly">
        <ServiceCard className='service-card'
          title={"TIRES AND WHEELS"}
          description={
            "Sedut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ..."
          }
          image={TiresAndWheelsImg}
        />

        <ServiceCard
          title={"TECHNICAL REPAIRS"}
          description={
            "Sedut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ..."
          }
          image={TechnicalRepairImg}
        />

        <ServiceCard
          title={"AUTO DIAGNOSTICS"}
          description={
            "Sedut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ..."
          }
          image={AutoDiagnosticsImg}
        />

        <ServiceCard
          title={"ELECTRICAL WORKS"}
          description={
            "Sedut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ..."
          }
          image={ElectricalWorksImg}
        />
      </services>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
}

export default HomePage;
