import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger button for mobile view */}
        <button
          className="hamburger-button"
          type="button"
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="hamburger-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible navigation container */}
        <div className="collapsible-nav" id="navbarSupportedContent1">
          {/* Logo and Website Name */}
          <a className="logo-link" href="#">
            <span className="website-name">ProjectHub</span>
          </a>

          {/* Left navigation links */}
          <ul className="nav-links">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Right elements */}
        <div className="right-elements">
          {/* Sign In and Sign Up buttons */}
          <a href="/signin" className="auth-button signin-button">
            Sign In
          </a>
          <a href="/signup" className="auth-button signup-button">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;