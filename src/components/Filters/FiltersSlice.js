const initState = {
    filters: {
        search: '',
        status: 'All',
        prioriry: []
    }
}

const filtersReducer = (state = initState, action) => {
    console.log({state,action});
    switch (action.type) {
            case 'filters/searchFilterChange':
                return {
                    ...state,                   
                    search: action.payload,              
                }
        default: return state;
    }
}

export default filtersReducer;