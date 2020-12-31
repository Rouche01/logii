export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('logiiState');
        if(!serializedState) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
};


export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('logiiState', serializedState);
    } catch(err) {
        console.log(err);
    }
};