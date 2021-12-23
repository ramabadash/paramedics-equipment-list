export const primaryWorkerState = {
  fullName: 'Paramedic',
  date: new Date(),
  ambulanceNumber: 181,
  shift: 'morning',
};

const workerReducer = (state = primaryWorkerState, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return primaryWorkerState;
    case 'WORKER_LOGIN':
      const { fullName, date, ambulanceNumber, shift } = payload;
      return { fullName, date, ambulanceNumber, shift };
    default:
      return state;
  }
};

export default workerReducer;
