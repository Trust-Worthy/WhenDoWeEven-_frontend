import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './LandingCreateEventPage.css';

const LandingCreateEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [timezone, setTimezone] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateFieldType, setDateFieldType] = useState('text'); // Default to text for MM/DD/YYYY

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Event Created: ${eventName} on ${date}, ${timezone} from ${startTime} to ${endTime}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email}`);
  };

  return (
    <div className="landing-create-event-page">
      <div className="title-container">
        <h1 className="title">WhenDoWeEven</h1>
        <span className="ai-text">.ai</span>
    </div>
      <div className="card">
        <div className="left-side">
          <h2>Create your event</h2>
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Event Name" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={eventName} 
              onChange={(e) => setEventName(e.target.value)} 
              required 
            />
            
            {/* Calendar Date Picker with MM/DD/YYYY inside the field */}
            <TextField 
              label="Event Date" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              type={dateFieldType} 
              onFocus={() => setDateFieldType('date')} // Switch to date picker on focus
              onBlur={(e) => {
                if (!e.target.value) setDateFieldType('text'); // Reset to MM/DD/YYYY if empty
              }}
              placeholder="MM/DD/YYYY" // This works only when type="text"
            />
            
            {/* Time Zone Selection */}
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Timezone</InputLabel>
              <Select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                label="Timezone"
              >
                <MenuItem value="Eastern Time (ET)">Eastern Time (ET)</MenuItem>
                <MenuItem value="Central Time (CT)">Central Time (CT)</MenuItem>
                <MenuItem value="Mountain Time (MT)">Mountain Time (MT)</MenuItem>
                <MenuItem value="Pacific Time (PT)">Pacific Time (PT)</MenuItem>
              </Select>
            </FormControl>
            
            {/* Working Hours */}
            <TextField 
              label="Start Time" 
              type="time" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
            />
            <TextField 
              label="End Time" 
              type="time" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={endTime} 
              onChange={(e) => setEndTime(e.target.value)} 
            />
            
            <Button type="submit" variant="contained" color="white" fullWidth>Create Event</Button>
          </form>
        </div>
        <div className="vertical-line"></div>
        <div className="right-side">
          <h2>Log in to your account</h2>
          <form onSubmit={handleLogin}>
            <TextField 
              label="Email" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <TextField 
              label="Password" 
              type="password" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <Button type="submit" variant="contained" color="white" fullWidth>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingCreateEventPage;
