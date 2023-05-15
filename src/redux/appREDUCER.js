import { getAuthUserData } from "./authREDUCER";

const INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS';

let initialState = {
    initialised: false
};

const appREDUCER = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialised: true
            };
        default:
            return state;
    }

};

export const initialisedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initialiseApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());

        Promise.all([promise]).then(() => {
            dispatch(initialisedSuccess());
        });

        
    };
};


export default appREDUCER;