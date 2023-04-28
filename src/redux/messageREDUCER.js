const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialStateMess = {
    dialogData: [{
            id: 1,
            name: 'Oleksandr'
        },
        {
            id: 2,
            name: 'Bohdan'
        },
        {
            id: 3,
            name: 'Juliya'
        }
    ],

    messageData: [{
            id: 1,
            message: 'Hi, how are you?'
        },
        {
            id: 2,
            message: 'Hello, when you will come to me?'
        },
        {
            id: 3,
            message: 'Hi, what time is it now?'
        }
    ]
};



const messageREDUCER = (state = initialStateMess, action) => {

    switch (action.type) {

        case ADD_NEW_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                    messageData: [...state.messageData, {
                        id: 4,

                        message: body
                    }]
            };

        default:
            return state;
    }
};

export const addNewMesageActionCreator = (newMessageBody) => {
    return {
        type: ADD_NEW_MESSAGE,
        newMessageBody
    };
};

export default messageREDUCER;