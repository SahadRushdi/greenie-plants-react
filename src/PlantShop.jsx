import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCart } from 'lucide-react';
import Monstera from "./assets/Monstera.jpg"; // Import the image
import outdoorPlant from "./assets/outdoorPlant.png"; // Import the image
import indoorPlant from "./assets/indoorPlant.png"; // Import the image

const PlantShop = () => {
  return (
    <div className="min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <a className="navbar-brand text-success fw-bold fs-3" href="#">Greenie</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item ms-3 position-relative">
                <ShoppingCart size={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  0
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-4">
              Delivering <span className="text-success">Plants,</span><br />
              Delivering <span className="text-success">Happiness!</span>
            </h1>
            <p className="text-muted mb-4">
              Shop your favourite plants in your favorable factor, Veggies, Seeds,
              Citrus, Fruit Trees, Herbs and more..
            </p>
            <button className="btn btn-success btn-lg px-4">
              Shop Now
            </button>
          </div>
          <div className="col-md-6 position-relative">
            <img src={Monstera} alt="Monstera plant in white pot" className="img-fluid rounded" />

            <div className="position-absolute bottom-0 start-0 m-4 bg-white p-3 rounded shadow">
              <small className="text-muted">Next</small>
              <h6 className="mb-0">Plant Pleasure</h6>
              <small>Indoor Greenhouse</small>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Outdoor Plant */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-4">
              <div>
                <p className="text-success mb-2">Outdoors</p>
                <h3 className="h4 fw-bold mb-2">Lorem Plants Name</h3>
                <p className="text-muted mb-3">
                  Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus Lorem ipsum dolor.
                </p>
                <p className="text-success fw-bold fs-4">$30.00</p>
              </div>
              <img
                src={outdoorPlant}
                alt="Outdoor plant"
                className="img-fluid rounded"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Indoor Plant */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-4">
              <div>
                <p className="text-success mb-2">Indoors</p>
                <h3 className="h4 fw-bold mb-2">Lorem Plants Name</h3>
                <p className="text-muted mb-3">
                  Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus Lorem ipsum dolor.
                </p>
                <p className="text-success fw-bold fs-4">$20.00</p>
              </div>
              <img
                src= {indoorPlant}
                alt="Indoor plant"
                className="img-fluid rounded"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantShop;