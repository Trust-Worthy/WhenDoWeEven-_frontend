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

  // Mock suggestions to display when there are no recommendations
  const mockSuggestions = [
    { day: "Monday", time: "10:00 AM" },
    { day: "Wednesday", time: "2:00 PM" },
    { day: "Friday", time: "4:00 PM" },
  ];

  // Use recommendations if available; otherwise, fallback to mockSuggestions.
  const suggestionsToShow = recommendations.length === 0 ? mockSuggestions : recommendations;

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
                    color: '#ffffff', // Force white text
                }}
                >
                Upload Calendar
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
                color: '#ffffff', // Force white text
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
            {/* Container for horizontal layout */}
            <div className="recommendations-buttons">
            {suggestionsToShow.map((suggestion, index) => (
                <Button
                key={index}
                variant="contained"
                sx={{
                    backgroundColor: '#96E9C6',  // Updated to #96E9C6
                    color: 'white',
                    fontSize: '1.3em',
                    fontWeight: 700,
                    borderRadius: '50px',
                    padding: '16px 24px',
                    textTransform: 'none',
                }}
                >
                {suggestion.day
                    ? `${suggestion.day} - ${suggestion.time}`
                    : suggestion}
                </Button>
            ))}
        </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default EventLoginPage;
