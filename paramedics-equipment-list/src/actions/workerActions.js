// Reset to initial state
const reset = () => {
  return {
    type: 'RESET',
  };
};

// Get all worker and shift details and save to state
const workerLogin = (fullName, date, ambulanceNumber, shift) => {
  return {
    type: 'WORKER_LOGIN',
    payload: { fullName, date, ambulanceNumber, shift },
  };
};

export { reset, workerLogin };
