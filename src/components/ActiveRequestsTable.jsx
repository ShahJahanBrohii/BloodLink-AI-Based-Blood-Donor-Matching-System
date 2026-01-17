const ActiveRequestsTable = ({ requests }) => {
  const getStatusClass = (status) => {
    if (status.includes('En Route')) return 'status-enroute';
    if (status.includes('Pledged')) return 'status-pledged';
    return 'status-matching';
  };

  const getBloodTypeClass = (bloodType) => {
    return `blood-type blood-${bloodType.replace('+', 'pos').replace('-', 'neg')}`;
  };

  return (
    <div className="requests-table-container">
      <h2 className="table-title">Active Blood Requests</h2>
      <div className="table-wrapper">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Blood Type</th>
              <th>Units Needed</th>
              <th>Urgency</th>
              <th>Live Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td className="case-id">{request.id}</td>
                <td>
                  <span className={getBloodTypeClass(request.bloodType)}>
                    {request.bloodType}
                  </span>
                </td>
                <td>{request.units}</td>
                <td>
                  <span className={request.urgency === 'Immediate' ? 'urgency-high' : 'urgency-standard'}>
                    {request.urgency}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(request.status)}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveRequestsTable