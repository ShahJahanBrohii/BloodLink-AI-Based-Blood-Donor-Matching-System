const PortalHeader = ({ userName, userRole, hospital }) => {
  return (
    <header className="portal-header">
      <div className="logo-section">
        <span className="blood-icon">🩸</span>
        <h1>BloodLink Hospital Portal</h1>
      </div>
      <div className="user-info">
        <span className="user-name">{userName}, {userRole}</span>
        <span className="hospital-name">{hospital}</span>
      </div>
    </header>
  );
};

export default PortalHeader