export const primaryWorkerState = {
  fullName: 'Paramedic',
  date: new Date(),
  ambulanceNumber: 181,
  shift: 'morning',
  logged: false,
};

const workerReducer = (state = primaryWorkerState, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return primaryWorkerState;
    case 'WORKER_LOGIN':
      const { fullName, date, ambulanceNumber, shift } = payload;
      return { fullName, date, ambulanceNumber, shift, logged: true };
    default:
      return state;
  }
};

export default workerReducer;
