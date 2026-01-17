import React, { useState } from 'react';

const BusinessModelCanvas = () => {
  const [activeTab, setActiveTab] = useState('revenue');

  const tabs = [
    { id: 'revenue', label: 'Revenue Streams', icon: '💰' },
    { id: 'value', label: 'Value Proposition', icon: '⭐' },
    { id: 'customers', label: 'Customer Segments', icon: '🏥' },
    { id: 'pricing', label: 'Pricing Tiers', icon: '💎' }
  ];

  return (
    <div className="business-model-canvas">
      <h2 className="bmc-title">📊 BloodLink Business Model Canvas</h2>
      <p className="bmc-subtitle">Technology Entrepreneurship Project - Revenue Strategy</p>

      <div className="bmc-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`bmc-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bmc-content">
        {activeTab === 'revenue' && (
          <div className="bmc-section">
            <h3>Revenue Streams</h3>
            <div className="revenue-grid">
              <div className="revenue-card primary">
                <div className="revenue-icon">🔄</div>
                <h4>Subscription Model (Primary)</h4>
                <p>Recurring monthly/annual subscriptions based on hospital size and request volume</p>
                <ul>
                  <li>Predictable recurring revenue</li>
                  <li>Tiered pricing structure</li>
                  <li>Annual contracts with discounts</li>
                </ul>
              </div>

              <div className="revenue-card">
                <div className="revenue-icon">⚡</div>
                <h4>Pay-Per-Request Model</h4>
                <p>Transaction fee for each urgent blood request posted</p>
                <ul>
                  <li>$5-15 per urgent request</li>
                  <li>No upfront commitment</li>
                  <li>Ideal for smaller facilities</li>
                </ul>
              </div>

              <div className="revenue-card">
                <div className="revenue-icon">📊</div>
                <h4>Premium Analytics</h4>
                <p>Advanced insights and predictive analytics add-on</p>
                <ul>
                  <li>Demand forecasting</li>
                  <li>Regional blood shortage predictions</li>
                  <li>Custom reporting dashboards</li>
                </ul>
              </div>

              <div className="revenue-card">
                <div className="revenue-icon">🤝</div>
                <h4>API Access Licensing</h4>
                <p>White-label API for healthcare systems integration</p>
                <ul>
                  <li>Integration with existing HMS/EHR</li>
                  <li>Custom enterprise solutions</li>
                  <li>Technical support packages</li>
                </ul>
              </div>

              <div className="revenue-card">
                <div className="revenue-icon">🎓</div>
                <h4>Training & Certification</h4>
                <p>Staff training programs for optimal platform usage</p>
                <ul>
                  <li>Onboarding workshops</li>
                  <li>Emergency response training</li>
                  <li>Certification programs</li>
                </ul>
              </div>

              <div className="revenue-card">
                <div className="revenue-icon">📱</div>
                <h4>Mobile App Premium</h4>
                <p>Advanced mobile features for on-call staff</p>
                <ul>
                  <li>Real-time push notifications</li>
                  <li>Offline mode capability</li>
                  <li>Multi-device sync</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'value' && (
          <div className="bmc-section">
            <h3>Value Proposition</h3>
            <div className="value-grid">
              <div className="value-card">
                <div className="value-number">1</div>
                <h4>Life-Saving Speed</h4>
                <p>AI-powered matching reduces response time from hours to minutes, directly preventing deaths from blood shortages</p>
              </div>
              <div className="value-card">
                <div className="value-number">2</div>
                <h4>Cost Efficiency</h4>
                <p>Eliminate expensive emergency courier services and reduce blood wastage through better inventory management</p>
              </div>
              <div className="value-card">
                <div className="value-number">3</div>
                <h4>Regulatory Compliance</h4>
                <p>Built-in compliance tracking for blood safety regulations and quality standards</p>
              </div>
              <div className="value-card">
                <div className="value-number">4</div>
                <h4>Network Effect</h4>
                <p>More hospitals = larger donor network = faster matching for everyone</p>
              </div>
              <div className="value-card">
                <div className="value-number">5</div>
                <h4>Data-Driven Insights</h4>
                <p>Predictive analytics help hospitals optimize inventory and reduce shortages</p>
              </div>
              <div className="value-card">
                <div className="value-number">6</div>
                <h4>24/7 Reliability</h4>
                <p>Cloud-based system with 99.9% uptime guarantee for critical healthcare operations</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="bmc-section">
            <h3>Customer Segments</h3>
            <div className="customer-grid">
              <div className="customer-card tier-enterprise">
                <div className="customer-badge">Enterprise</div>
                <h4>🏥 Large Hospital Networks</h4>
                <p className="customer-size">500+ beds, Multiple locations</p>
                <div className="customer-needs">
                  <strong>Needs:</strong>
                  <ul>
                    <li>System-wide integration</li>
                    <li>Custom SLAs & support</li>
                    <li>Dedicated account manager</li>
                    <li>Advanced analytics</li>
                  </ul>
                </div>
                <div className="customer-value">
                  <strong>Annual Value:</strong> $50,000 - $200,000
                </div>
              </div>

              <div className="customer-card tier-standard">
                <div className="customer-badge">Standard</div>
                <h4>🏥 Mid-Size Hospitals</h4>
                <p className="customer-size">100-500 beds, Regional centers</p>
                <div className="customer-needs">
                  <strong>Needs:</strong>
                  <ul>
                    <li>Core platform features</li>
                    <li>Standard support</li>
                    <li>Basic reporting</li>
                    <li>Multi-user access</li>
                  </ul>
                </div>
                <div className="customer-value">
                  <strong>Annual Value:</strong> $15,000 - $50,000
                </div>
              </div>

              <div className="customer-card tier-basic">
                <div className="customer-badge">Basic</div>
                <h4>🩺 Blood Banks & Clinics</h4>
                <p className="customer-size">Small facilities, Specialized centers</p>
                <div className="customer-needs">
                  <strong>Needs:</strong>
                  <ul>
                    <li>Essential matching features</li>
                    <li>Email support</li>
                    <li>Pay-per-use option</li>
                    <li>Simple interface</li>
                  </ul>
                </div>
                <div className="customer-value">
                  <strong>Annual Value:</strong> $5,000 - $15,000
                </div>
              </div>

              <div className="customer-card tier-government">
                <div className="customer-badge">Government</div>
                <h4>🏛️ Public Health Agencies</h4>
                <p className="customer-size">Regional/National coordination</p>
                <div className="customer-needs">
                  <strong>Needs:</strong>
                  <ul>
                    <li>Data aggregation</li>
                    <li>Policy compliance tools</li>
                    <li>Emergency response</li>
                    <li>Population-level insights</li>
                  </ul>
                </div>
                <div className="customer-value">
                  <strong>Annual Value:</strong> $100,000+
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="bmc-section">
            <h3>Subscription Pricing Tiers</h3>
            <div className="pricing-grid">
              <div className="pricing-card starter">
                <div className="pricing-header">
                  <h4>Starter</h4>
                  <div className="price">38,000 Pkr<span>/month</span></div>
                  {/* <p className="billing">Billed annually: $5,388 (10% savings)</p> */}
                </div>
                <div className="pricing-features">
                  <div className="feature-item included">✓ Up to 50 requests/month</div>
                  <div className="feature-item included">✓ AI-powered donor matching</div>
                  <div className="feature-item included">✓ Real-time notifications</div>
                  <div className="feature-item included">✓ 3 user accounts</div>
                  <div className="feature-item included">✓ Email support (24h response)</div>
                  <div className="feature-item included">✓ Basic analytics dashboard</div>
                  <div className="feature-item excluded">✗ API access</div>
                  <div className="feature-item excluded">✗ Custom integrations</div>
                </div>
                <div className="best-for">Best for: Small blood banks, clinics</div>
              </div>

              <div className="pricing-card professional popular">
                <div className="popular-badge">MOST POPULAR</div>
                <div className="pricing-header">
                  <h4>Professional</h4>
                  <div className="price">120,000 Pkr<span>/month</span></div>
                  {/* <p className="billing">Billed annually: $16,188 (10% savings)</p> */}
                </div>
                <div className="pricing-features">
                  <div className="feature-item included">✓ Up to 200 requests/month</div>
                  <div className="feature-item included">✓ Priority AI matching</div>
                  <div className="feature-item included">✓ SMS + Push notifications</div>
                  <div className="feature-item included">✓ 10 user accounts</div>
                  <div className="feature-item included">✓ Phone + Email support (4h response)</div>
                  <div className="feature-item included">✓ Advanced analytics & reports</div>
                  <div className="feature-item included">✓ Basic API access</div>
                  <div className="feature-item included">✓ Mobile app access</div>
                  <div className="feature-item excluded">✗ Dedicated account manager</div>
                </div>
                <div className="best-for">Best for: Mid-size hospitals (100-500 beds)</div>
              </div>

              <div className="pricing-card enterprise">
                <div className="pricing-header">
                  <h4>Enterprise</h4>
                  <div className="price">350,000 Pkr<span>/month</span></div>
                  {/* <p className="billing">Billed annually: $53,988 (10% savings)</p> */}
                </div>
                <div className="pricing-features">
                  <div className="feature-item included">✓ Unlimited requests</div>
                  <div className="feature-item included">✓ Premium AI + Manual override</div>
                  <div className="feature-item included">✓ Multi-channel notifications</div>
                  <div className="feature-item included">✓ Unlimited users</div>
                  <div className="feature-item included">✓ 24/7 priority support (1h response)</div>
                  <div className="feature-item included">✓ Custom analytics & BI integration</div>
                  <div className="feature-item included">✓ Full API access</div>
                  <div className="feature-item included">✓ White-label options</div>
                  <div className="feature-item included">✓ Dedicated account manager</div>
                  <div className="feature-item included">✓ Custom training & onboarding</div>
                  <div className="feature-item included">✓ SLA guarantee (99.9% uptime)</div>
                </div>
                <div className="best-for">Best for: Large hospital networks (500+ beds)</div>
              </div>
            </div>

            <div className="pricing-addons">
              <h4>Add-Ons & Extra Services</h4>
              <div className="addon-grid">
                <div className="addon-item">
                  <strong>Extra Requests:</strong> $10 per request beyond tier limit
                </div>
                <div className="addon-item">
                  <strong>Additional Users:</strong> $50/user/month
                </div>
                <div className="addon-item">
                  <strong>Custom Integration:</strong> $5,000 one-time setup
                </div>
                <div className="addon-item">
                  <strong>Advanced Training:</strong> $2,000 per session
                </div>
                <div className="addon-item">
                  <strong>Premium Support:</strong> $500/month (15-min response)
                </div>
                <div className="addon-item">
                  <strong>Data Export:</strong> $100/export for historical data
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bmc-footer">
        <div className="bmc-metrics">
          <div className="metric-item">
            <strong>Target:</strong> 500 hospitals in Year 1
          </div>
          <div className="metric-item">
            <strong>ARR Goal:</strong> $12M by end of Year 2
          </div>
          <div className="metric-item">
            <strong>CAC:</strong> $8,000 per hospital
          </div>
          <div className="metric-item">
            <strong>LTV:</strong> $150,000+ (avg 3-year retention)
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;