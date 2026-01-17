import React from 'react';

const CoreTeamView = () => {
  const team = [
    { role: "Chief Executive Officer (CEO)", name: "Shah Jahan", focus: "Strategic Vision, Partnerships, Fundraising" },
    { role: "Chief Marketing Officer (CMO)", name: "Maqsood Ahmed", focus: "Digital Marketing, User Acquisition, Gamification" },
    { role: "Chief Technology Officer (CTO)", name: "Zubair Ahmed", focus: "AI/ML Development, System Architecture, Security" },
    { role: "Chief Operations Officer (COO)", name: "Abdul Razzaq", focus: "Hospital Onboarding, Compliance, Daily Operations" },
    { role: "Chief Financial Officer (CFO)", name: "Shafiq", focus: "Financial Planning, Revenue Modeling, Cost Control" },
  ];

  return (
    <div className="core-team-view">
      <h2 className="team-title">Our Core Leadership Team 🚀</h2>
      <p className="team-subtitle">The organizational structure powering the BloodLink platform.</p>
      
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className={`team-card team-card-${member.role.toLowerCase()}`}>
            <div className="team-role">{member.role}</div>
            <div className="team-name">{member.name}</div>
            <p className="team-focus">{member.focus}</p>
          </div>
        ))}
      </div>
      <div className="org-chart-note">
        This structure is supported by Advisory Board members and dedicated Tech/Sales teams.
      </div>
    </div>
  );
};

export default CoreTeamView;