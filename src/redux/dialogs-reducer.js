const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Vetal'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Mushket'},
        {id: 5, name: 'Muskin'},
        {id: 6, name: 'Nastish'},
        {id: 7, name: 'Nick K.'}
    ],
    messages: [
        {id: 1, message: "Hi, how your learning", myMessage: false},
        {id: 2, message: "Do you learn?", myMessage: false},
        {id: 3, message: "Yes! I learn everyday!", myMessage: true},
        {id: 4, message: "Ok, nice job!", myMessage: false}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case SEND_MESSAGE:{
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageBody,
                myMessage: true
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;