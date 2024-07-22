// src/components/BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm labels correctly', () => {
  // Mock the props that BookingForm expects
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
  
  // Check for each label
  const dateLabel = screen.getByLabelText(/Choose date/i);
  const timeLabel = screen.getByLabelText(/Choose time/i);
  const guestsLabel = screen.getByLabelText(/Number of guests/i);
  const occasionLabel = screen.getByLabelText(/Occasion/i);

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
});
