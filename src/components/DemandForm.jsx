import { useState } from "react";
const DemandForm = ({ onSubmit }) => {
  const [bloodType, setBloodType] = useState('A+');
  const [volume, setVolume] = useState(1);
  const [caseId, setCaseId] = useState('');
  const [urgency, setUrgency] = useState('immediate');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caseId.trim() === '') {
      alert('Please enter a Patient/Case ID');
      return;
    }
    
    onSubmit({
      id: caseId,
      bloodType,
      units: volume,
      urgency: urgency === 'immediate' ? 'Immediate' : 'Standard',
      status: 'Matching Donors...',
      timestamp: new Date().toISOString()
    });

    // Reset form
    setCaseId('');
    setVolume(1);
  };

  return (
    <form className="demand-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Post Urgent Blood Request</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="bloodType">Blood Type Needed</label>
          <select 
            id="bloodType"
            value={bloodType} 
            onChange={(e) => setBloodType(e.target.value)}
            className="form-input"
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="volume">Volume Required (Units)</label>
          <input 
            id="volume"
            type="number" 
            min="1" 
            value={volume} 
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="caseId">Patient/Case ID</label>
          <input 
            id="caseId"
            type="text" 
            placeholder="e.g., EMG-4321" 
            value={caseId} 
            onChange={(e) => setCaseId(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Urgency Level</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                value="immediate" 
                checked={urgency === 'immediate'}
                onChange={(e) => setUrgency(e.target.value)}
              />
              <span>Immediate (High Priority)</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                value="standard" 
                checked={urgency === 'standard'}
                onChange={(e) => setUrgency(e.target.value)}
              />
              <span>Standard (Routine Stock)</span>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">
        POST URGENT DONOR REQUEST
      </button>
    </form>
  );
};


export default DemandForm;