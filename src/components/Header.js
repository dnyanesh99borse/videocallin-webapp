import React from 'react';
import '../App.css'; // Assuming you have a corresponding CSS file for custom styles

function Header() {
  return (
    <>
      
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Header</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
     
      <header className="header">
        <section className="flex">
          <a href="#home" className="logo">
            <img src=''></img>
            PASSLOG.
          </a>
          <nav className="navbar">
            <div className="dropdown">
              <a href="#">Explore</a>
              <div className="dropdown-content">
                <ul style={{ listStyle: 'none' }}>
                  <li>Mathematics Junior</li>
                  <li>Vedic Mathematics</li>
                  <li>Complete Basics of Mathematics</li>
                  <li>Higher Mathematics</li>
                  <li>Books Related to Mathematics</li>
                  <li>Calculus</li>
                  <li>Abstract Algebra</li>
                  <li>Number Theory</li>
                  <li>Higher Mathematics</li>
                  <li>Books Related to Mathematics</li>
                  <li>Calculus</li>
                  <li>Abstract Algebra</li>
                  <li>Number Theory</li>
                </ul>
              </div>
            </div>
            <a href="/html/index.html#home">Home</a>
            <a href="/html/index.html#about">About</a>
            <a href="/html/index.html#keys">Keys</a>
            <a href="/html/index.html#contact">Contact</a>
          </nav>

          {/* Download App Button Section Starts */}
          <div className="app">
            <button>
              <a
                href="https://www.youtube.com/watch?v=x26bQPxcFX4&list=PPSV"
                style={{ textDecoration: 'none' }}
              >
                Download App
              </a>
            </button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
