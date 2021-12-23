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
    default:
      return state;
  }
};

export default workerReducer;
