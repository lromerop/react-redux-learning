export const peopleReducer = (state = [], action) => {

    switch (action.type) {
        case '@people/init':
            return action.payload;

        default:
            return state;
    }
}

export const initPeople = people => {
    return {
        type: '@people/init',
        payload: people
    }
}
