import React from 'react';


function Services() {
  return (
    <div className="ServicesPage">
      <header className="ServicesPage-header">
        <h1>Our Services</h1>
        <nav>
          <ul>
            <li><a href="#">Weddings</a></li>
            <li><a href="#">Extra Touches</a></li>
            <li><a href="#">Music &amp; Entertainment</a></li>
            <li><a href="#">Other Services</a></li>
          </ul>
        </nav>
      </header>

      <main className="ServicesPage-main">
        {/* Left Section */}
        <div className="ServicesPage-left">
          <h2>Exclusive Services</h2>
          <p>
            We specialize in crafting dream weddings tailored to your unique love story.
            Our comprehensive wedding planning services encompass everything you need for
            your perfect day, from exquisite venue selection to stunning décor, gourmet
            catering, seamless coordination, and more.
          </p>
          <p>
            With our meticulous attention to detail and unwavering commitment to
            excellence, we’ll transform your vision into reality, creating an
            unforgettable celebration that reflects your style and personality. Let us
            handle the details while you focus on making cherished memories with your loved ones.
          </p>
        </div>

        {/* Right Section */}
        <div className="ServicesPage-right">
          <section className="ServicesPage-section">
            <h2>1. Weddings</h2>
            <ul>
              <li>Full Wedding Service (Blessing, Planning &amp; Renewal of Vows, Symbolic weddings)</li>
              <li>Legal Paperwork and Marriage License</li>
              <li>Venue Show Round</li>
              <li>Town Hall Weddings</li>
              <li>Church Weddings</li>
              <li>Yacht Weddings &amp; Elopements</li>
              <li>Exclusive Weddings</li>
              <li>Villa Weddings</li>
              <li>Beach Weddings</li>
              <li>Hotel Weddings</li>
              
            </ul>
          </section>

          <section className="ServicesPage-section">
            <h2>2. Extra Touches</h2>
            <ul>
              <li>Cakes</li>
              <li>Catering</li>
              <li>Wedding Equipment (Chairs, tables, tent, carpets, buffet table), flowers, hair, and makeup, photography and videography, decorations and personalised items</li>
            </ul>
          </section>

          <section className="ServicesPage-section">
            <h2>3. Music &amp; Entertainment</h2>
            <ul>
              <li>Greek Dancers Show</li>
              <li>Fire Show</li>
              <li>Live Band</li>
              <li>DJ</li>
              <li>Saxophone</li>
              <li>Dance Floor</li>
              <li>Photo Booth</li>
              <li>Fireworks</li>
            </ul>
          </section>

          <section className="ServicesPage-section">
            <h2>4. Other Services</h2>
            <ul>
              <li>Christenings</li>
              <li>Corporate Events</li>
              <li>Small &amp; Large Events</li>
              <li>Birthday Parties</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Services;