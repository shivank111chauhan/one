import {ADDITION, DELETION} from './ActionType';

const initialDataInTODO = {
  todo: [],
};
// const initialState = {
//   counter: 0,
// };
// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// }
// const deleteFromTODO = (DATA, id) => {
//   let newArray = DATA.filter(function (el) {
//     if (el.id !== id) return el;
//   });
//   route.params.deleteid = null;
//   return newArray;
// };

// export const mainReducer = (State = initialDataInTODO, action) => {
//   switch (action.type) {
//     case ADDITION:
//       return {
//         ...State,
//         todo: [
//           ...State.todo,
//           {
//             id: nextTodoId(action.todo),
//             heading: action.payloadHeading,
//             content: action.payloadContent,
//           },
//         ],
//       };
//       break;
//     case DELETION:
//       return {
//         ...State,
//         todo: deleteFromTODO(action.todo, payloadId),
//       };
//   }
// };

// import {addition, subtarction} from './Action';
const initialState = {
  counter: 0,
};

export const mainReducer = (State = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...State, counter: State.counter + Number(action.payload)};
      break;
    default:
      return State;
      break;
  }
};
