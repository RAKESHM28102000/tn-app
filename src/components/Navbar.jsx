import React from 'react';
// import { Link } from 'react-router-dom';


function Navbar() {

  return (<nav className="navbar navbar-expand-lg  bg-primay sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
            <div className="navbarbrand">
              {/* <img src="./images/IMG-20230314-WA0009.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top navbarBrandimage"/> */}
              <a className="navbar-brand" href="#home">TANPSYCON 2023</a>
            </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#purchased" role="button" data-bs-toggle="dropdown" >
                  Announcements
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#feed">Gallery</a></li>
                  <li><a className="dropdown-item" href="#news">News & Event</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#report">REPORT</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-secondary search" type="submit"><a href="https://cmccpt.ac.in/" target="blank"> Search</a></button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;


//return (<nav className="navbar navbar-expand-lg  bg-primay sticky-top" data-bs-theme="dark">
// <div className="container-fluid">
//     <div className="navbarbrand">
//       <img src="./images/IMG-20230314-WA0009.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top navbarBrandimage"/>
//       <Link to="/" className="navbar-brand">TANPSYCON 2023</Link>
//     </div>

//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <Link to="/home" className="nav-link active" >Home</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/about" className="nav-link" >About</Link>
//       </li>
//       <li className="nav-item dropdown">
//         <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >
//           Announcements
//         </Link>
//         <ul className="dropdown-menu">
//           <li><Link to="/feed" className="dropdown-item" >Gallery</Link></li>
//           <li><Link to="/feed"  className="dropdown-item">News & Event</Link></li>
//           <li><hr className="dropdown-divider"/></li>
//           <li><Link  to="/report" className="dropdown-item">REPORT</Link></li>
//         </ul>
//       </li>
//       <li className="nav-item">
//         <Link to="/contact" className="nav-link" >Contact Us</Link>
//       </li>
//     </ul>
//     <form className="d-flex" role="search">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//       <button className="btn btn-outline-secondary search" type="submit"><Link to="https://cmccpt.ac.in/" target="blank"> Search</Link></button>
//     </form>
//   </div>
// </div>
// </nav>
// )