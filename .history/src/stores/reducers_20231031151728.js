const { ACTIONS } = require("./actions");

const reducers = (state, action) => {
    switch(action.type) {
        case ACTIONS.AUTH:{
            return {
                ...state, action.payload;
            }
        }
    }
}