import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Project Hub</h3>
          <p>
            Project Hub is a platform designed to help teams collaborate, manage tasks, and deliver projects efficiently.
            Our mission is to streamline your workflow and boost productivity.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/tasks">Tasks</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span>Email:</span> support@projecthub.com
            </li>
            <li>
              <span>Phone:</span> +1 (123) 456-7890
            </li>
            <li>
              <span>Address:</span> 123 Collaboration St, Tech City, USA
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com/projecthub" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/projecthub" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/projecthub" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ProjectHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;