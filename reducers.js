function todoListReducer(state = [], action) {
    switch (action.type) {
        case 'ADDTODOITEM':
            return [...state, { text: action.payload, done: false }]
        case 'DELETETODOITEM':
            return state.filter(item => item.text !== action.payload)
        case 'TODOITEMDONE':
            return state
                .map(item => {
                    if(item.text == action.payload) {
                        return Object.assign(item, { done: true });
                    }
                    return item; 
                })    
        default:
            return state
    }
}

export { todoListReducer };