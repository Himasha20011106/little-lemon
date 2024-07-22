// src/api.js

export const fetchAPI = (date) => {
    // Simulate fetching available times for a given date
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    return availableTimes;
  };
  
  export const submitAPI = (formData) => {
    // Simulate submitting the form data
    console.log('Form data submitted:', formData);
    return true;
  };
  