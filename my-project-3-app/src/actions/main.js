import { CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "./types";
import { v4 as uuidv4 } from "uuid";

export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params,
        }
    };
};

export const createTask = ({todo}) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: uuidv4(),
            todo,
            status: "Active"
        }
    };
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    };
};