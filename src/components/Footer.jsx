import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h4 className="brand-name">BloodLink Tech Entrepreneurship</h4>
          <p className="mission-tag">
            Transforming blood donation with AI, powered by a future-forward team.
          </p>
        </div>

       

        <div className="footer-section footer-contact">
          <h5>Contact & Support</h5>
          <p>Email: <a href="mailto:support@bloodlink.com">support@bloodlink.com</a></p>
          <p>Technical Inquiries: <a href="mailto:cto@bloodlink.com">cto@bloodlink.com</a></p>
          <p className="copyright">&copy; {new Date().getFullYear()} BloodLink Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;