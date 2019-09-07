export const loadCurrentUser = () => {
    try {
        const serializedState = localStorage.getItem('currentUser');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveCurrentUser = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('currentUser', serializedState);
    } catch (err) {
        console.log(err)
    }
};

export const loadUsersList = () => {
    try {
        const serializedState = localStorage.getItem('usersList');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveUsersList = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('usersList', serializedState);
    } catch (err) {
        console.log(err)
    }
};