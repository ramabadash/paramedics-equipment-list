import { fullEquipmentList } from '../data/db';

export const primaryEquipmentState = {
  requiredEquipmentList: fullEquipmentList,
  shiftList: [],
};

const equipmentReducer = (state = primaryEquipmentState, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return primaryEquipmentState;
    default:
      return state;
  }
};

export default equipmentReducer;
