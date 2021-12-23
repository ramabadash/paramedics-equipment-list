import { fullEquipmentList } from '../data/db';

export const primaryEquipmentState = {
  requiredEquipmentList: fullEquipmentList,
  shiftList: [],
};

const equipmentReducer = (state = primaryEquipmentState, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return primaryEquipmentState;
    case 'ADD_ITEM':
      const newItem = {
        name: payload.itemName,
        fullQuantity: payload.fullQuantity,
        deleteAble: true,
      };
      return {
        ...state,
        requiredEquipmentList: [...state.requiredEquipmentList, newItem],
      };
    default:
      return state;
  }
};

export default equipmentReducer;
