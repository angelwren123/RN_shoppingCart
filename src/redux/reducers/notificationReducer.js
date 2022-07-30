const initialValue = []
export const notificationReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'SET_DATA_NOTIFICATION':
            const newData = [ action.payload,...state]

            return [...newData]
        case 'DELETE_DATA_NOTIFICATION':
            const nofi = [...state]
            nofi.forEach((item, idx) => {
                if (item.id === action.payload) {
                    nofi.splice(idx, 1);
                }
            })
            return [...nofi]
        default:
            return state
    }
}