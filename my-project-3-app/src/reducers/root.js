import { CREATE_TASK, EDIT_TASK } from "../actions/types";

const initialState = [];

const tasks = (state = { tasks: initialState }, action) => {
    const { payload } = action;
    switch(action.type) {
        case EDIT_TASK : {
            return {
                tasks: state.tasks.map(task => {
                    if(task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task;
                }),
            };            
        }
        case CREATE_TASK : {
            return {
                tasks: state.tasks.concat(action.payload)
            };
        }

        default: 
            return state;
    }
};

export default tasks;