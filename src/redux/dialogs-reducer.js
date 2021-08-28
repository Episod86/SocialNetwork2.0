// const UPDATE_NEW_MESAGE_BODY = "UPDATE-NEW-MESAGE-BODY";
const SEND_MESAGE = "SEND-MESAGE";

const initialState = {
  dialogsData: [
    {
      id: "1",
      name: "Aleksey",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU",
    },
    {
      id: "2",
      name: "Ivan",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU",
    },
    {
      id: "3",
      name: "Elisey",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU",
    },
  ],

  messages: [
    { id: "1", message: "hi" },
    { id: "2", message: "hello" },
    { id: "3", message: "yo" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: "4", message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESAGE,
  newMessageBody,
});
