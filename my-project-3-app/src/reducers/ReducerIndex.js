const initialState = [
    {
        id: 1,
        todo: "Learn and understand ReactJS!",
        status: "Active"
    },
    {
        id: 2,
        todo: "Learn and understand Redux!",
        status: "Active"
    },
];

const tasks = (state = { tasks: initialState }, action) => {
    return state;
};

export default tasks;