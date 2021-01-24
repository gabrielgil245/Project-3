import { EDIT_TASK } from "../actions/types";

const initialState = [
    {
        id: 1,
        todo: "Learn and understand ReactJS!",
        status: "Completed"
    },
    {
        id: 2,
        todo: "Learn and understand Redux!",
        status: "All"
    },
    {
        id: 3,
        todo: "Remember to complete About & Contact pages!",
        status: "Active"
    }
];

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
        default: 
            return state;
    }
};

export default tasks;