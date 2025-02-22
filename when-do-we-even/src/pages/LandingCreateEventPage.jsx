import React, { useState } from "react";

const LandingPage = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [timezone, setTimezone] = useState("America/New_York");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Event Created: ${eventName} on ${date}, ${timezone} from ${startTime} to ${endTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <nav className="w-full bg-gray-800 shadow-md py-4 px-8 flex justify-center">
        <h1 className="text-3xl font-bold">Create Your Event</h1>
      </nav>

      {/* Main Container */}
      <div className="flex items-center justify-center w-full min-h-[80vh]">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div>
              <label className="block text-lg font-medium">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg mt-2 bg-gray-700 text-white text-center"
                placeholder="Enter event name"
                required
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-lg font-medium">Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg mt-2 bg-gray-700 text-white text-center"
                required
              />
            </div>

            {/* Time Zone */}
            <div>
              <label className="block text-lg font-medium">Time Zone</label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg mt-2 bg-gray-700 text-white text-center"
              >
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
              </select>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4 justify-center">
              <div>
                <label className="block text-lg font-medium">Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full p-3 border border-gray-600 rounded-lg mt-2 bg-gray-700 text-white text-center"
                />
              </div>
              <div>
                <label className="block text-lg font-medium">End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full p-3 border border-gray-600 rounded-lg mt-2 bg-gray-700 text-white text-center"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;