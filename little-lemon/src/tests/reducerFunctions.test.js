// src/tests/reducerFunctions.test.js
import { fetchAPI } from '../api'; 
import Main from '../components/Main.js';

// Mock fetchAPI to control its output
jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should return the expected value from fetchAPI', () => {
    const mockTimes = ['12:00', '13:00', '14:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = Main.initializeTimes();
    expect(result).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  it('should call fetchAPI with the action date and return its result', () => {
    const mockDate = '2024-07-23';
    const mockTimes = ['12:00', '13:00', '14:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = Main.updateTimes([], { date: mockDate });
    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(result).toEqual(mockTimes);
  });
});
