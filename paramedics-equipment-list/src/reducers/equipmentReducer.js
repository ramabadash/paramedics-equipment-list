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
    case 'DELETE_ITEM':
      const filteredArr = [
        ...state.requiredEquipmentList.filter(
          (item, index) => index !== payload.index
        ),
      ];
      return {
        ...state,
        requiredEquipmentList: filteredArr,
      };
    default:
      return state;
  }
};

export default equipmentReducer;
