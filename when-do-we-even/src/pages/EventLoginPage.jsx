import React, { useState } from 'react';
import { Button, Typography, Paper } from '@mui/material';
import './EventLoginPage.css';

const EventLoginPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [calendarFile, setCalendarFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setCalendarFile(file);
    // Simulate updating recommendations after a file upload.
    setRecommendations(["Suggestion 1", "Suggestion 2"]);
  };

  const handleMakeChanges = () => {
    // Simulate making manual changes in the calendar that update the recommendations.
    setRecommendations(["Updated Suggestion 1", "Updated Suggestion 2", "Updated Suggestion 3"]);
  };

  return (
    <div className="event-login-page">
      <Typography variant="h3" className="title" align="center" gutterBottom>
        Your Calendar
      </Typography>
      <div className="calendar-container">
        <Paper elevation={3} className="calendar-view">
          <Typography variant="h5" align="center" style={{ padding: '20px' }}>
            Calendar View Placeholder
          </Typography>
          <input
            accept=".ics"
            type="file"
            id="upload-calendar"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          <label htmlFor="upload-calendar">
            <Button variant="contained" color="primary" component="span">
              Upload Calendar (.ics)
            </Button>
          </label>
          <Button onClick={handleMakeChanges} variant="outlined" color="primary" style={{ marginTop: '10px' }}>
            Make Changes in Calendar
          </Button>
        </Paper>
      </div>
      
      <Typography variant="h4" align="center" style={{ marginTop: '40px' }}>
        Recommendations
      </Typography>
      <Paper elevation={3} className="recommendations-section">
        {recommendations.length === 0 ? (
          <Typography variant="body1" align="center" style={{ padding: '20px' }}>
            No recommendations yet.
          </Typography>
        ) : (
          recommendations.map((rec, index) => (
            <Typography key={index} variant="body1" style={{ padding: '10px' }}>
              {rec}
            </Typography>
          ))
        )}
      </Paper>
    </div>
  );
};

export default EventLoginPage;
