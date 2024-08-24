import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./HomePage.css";
import ServiceCard from "../../components/ServiceCard.js";
import TiresAndWheelsImg from "./tires-and-wheels.jpg";
import TechnicalRepairImg from "./technical-repairs.jpg";
import AutoDiagnosticsImg from "./autodiagnostics.jpg";
import ElectricalWorksImg from "./electrical-works.jpg";

function HomePage() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <nav className="navbar ">
        <img
          className="brand-logo"
          src="https://shremp.templines.org/wp-content/uploads/2018/02/newlogo04.png"
          alt=""
        />

        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Our Services</li>
          <li className="nav-item">About Us</li>
          <li
            className="nav-item"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </li>
          <li
            className="nav-item"
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Signup
          </li>
          <button
            type="button"
            class="btn btn-primary"
            style={{ listStyleType: "none" }}
            onClick={() => {
              localStorage.clear();
              setTimeout(() => {
                window.location.href = "/login";
              }, 1000);

              toast.success("Logged out successfully");
            }}
          >
            LOGOUT
          </button>
        </ul>
      </nav>

      <main className="main-container">
        <h1 className="headings">WE GIVE YOUR CAR</h1>
        <h1 className="headings">A FRESH LOOK</h1>

        <Link to="/add-service" className="btn btn-primary mt-3">
          CHOOSE A SERVICE
        </Link>
      </main>

      <services className="service-container d-flex justify-content-evenly">
        <ServiceCard
          className="service-card"
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
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Car Care Anywhere</h1>
          <p>Convenient and reliable car service right at your doorstep.</p>
          <Link to="/find-mechanics" className="btn btn-light btn-lg mt-3">
            Find Nearby Mechanics
          </Link>
        </div>
      </header>
      <Toaster />
    </>
  );
}

export default HomePage;
