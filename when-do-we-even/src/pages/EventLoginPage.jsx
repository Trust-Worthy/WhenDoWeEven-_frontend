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
    setRecommendations([]);
  };

  return (
    <div className="event-login-page">
      <div className="split-page">
        {/* Left Section: Your Calendar */}
        <div className="left-section">
          <Typography variant="h3" className="typography" align="center" gutterBottom>
            Your Calendar
          </Typography>
          <div className="calendar-container">
          <Paper elevation={3} className="calendar-view">
            <Typography variant="h5" className="typography" align="center" style={{ padding: '20px' }}>
            </Typography>
            <input
                accept=".ics"
                type="file"
                id="upload-calendar"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
            />
            <label htmlFor="upload-calendar">
            <Button
                variant="contained"
                component="span"
                sx={{
                backgroundColor: '#3B1C32',
                '&:hover': { backgroundColor: '#3B1C32' },
                }}
            >
                Upload Calendar (.ics)
            </Button>
            </label>
            {/* Divider with "or" */}
            <div className="divider">
                <span>or</span>
            </div>
            <Button
                variant="contained"
                component="span"
                sx={{
                backgroundColor: '#3B1C32',
                '&:hover': { backgroundColor: '#3B1C32' },
                }}
            >
                Make changes in calendar
            </Button>
            </Paper>
          </div>
        </div>
        {/* Right Section: Recommendations */}
        <div className="right-section">
        <Typography variant="h3" className="typography1" align="center" gutterBottom>
            Recommendations
        </Typography>
        <Paper elevation={3} className="recommendations-section">
            {recommendations.length === 0 ? (
            <Typography
                variant="body1"
                className="typography"
                align="center"
                style={{ padding: '20px', color: '#3B1C32' }}
            >
            </Typography>
            ) : (
            recommendations.map((rec, index) => (
                <Typography
                key={index}
                variant="body1"
                className="typography"
                style={{ padding: '10px' }}
                >
                {rec}
                </Typography>
            ))
            )}
        </Paper>
        </div>
      </div>
    </div>
  );
};

export default EventLoginPage;
