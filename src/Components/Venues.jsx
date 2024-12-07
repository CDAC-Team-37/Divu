import React from 'react';
import '../custom.css';


const Venues = () => {
  return (
    <div className="venues-page">
      
      <header className="venues-header text-center">
        <h1>Our Exclusive Venues</h1>
        <p>Discover breathtaking venues perfect for your dream wedding.</p>
      </header>
      <main className="container my-5">
        <div className="row">
          {/* Venue 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="venue1.jpg" className="card-img-top" alt="Venue 1" />
              <div className="card-body">
                <h5 className="card-title">Beachside Paradise</h5>
                <p className="card-text">
                  Enjoy a serene beach wedding with stunning ocean views.
                </p>
                <a href="#book" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          {/* Venue 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="venue2.jpg" className="card-img-top" alt="Venue 2" />
              <div className="card-body">
                <h5 className="card-title">Royal Palace</h5>
                <p className="card-text">
                  Experience the grandeur of a royal palace for your wedding.
                </p>
                <a href="#book" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          {/* Venue 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="venue3.jpg" className="card-img-top" alt="Venue 3" />
              <div className="card-body">
                <h5 className="card-title">Garden Elegance</h5>
                <p className="card-text">
                  Tie the knot in a beautifully landscaped garden.
                </p>
                <a href="#book" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
           {/* Venue 4 */}
           <div className="col-md-4 mb-4">
            <div className="card">
              <img src="venue3.jpg" className="card-img-top" alt="Venue 3" />
              <div className="card-body">
                <h5 className="card-title">Garden Elegance</h5>
                <p className="card-text">
                  Tie the knot in a beautifully landscaped garden.
                </p>
                <a href="#book" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
           {/* Venue 5 */}
           <div className="col-md-4 mb-4">
            <div className="card">
              <img src="venue3.jpg" className="card-img-top" alt="Venue 3" />
              <div className="card-body">
                <h5 className="card-title">Garden Elegance</h5>
                <p className="card-text">
                  Tie the knot in a beautifully landscaped garden.
                </p>
                <a href="#book" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
           {/* Venue 6 */}
           <div className="col-md-4 mb-4">
            <div className="card">
              <img src="venue3.jpg" className="card-img-top" alt="Venue 3" />
              <div className="card-body">
                <h5 className="card-title">Garden Elegance</h5>
                <p className="card-text">
                  Tie the knot in a beautifully landscaped garden.
                </p>
                <a href="#book" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Venues;