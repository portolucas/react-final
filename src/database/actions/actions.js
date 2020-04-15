export const SET_CEP = 'SET_CEP';
export const SET_ANDRESS = 'SET_ANDRESS';
export const SET_WINDOW = 'SET_WINDOW';
export const SET_LOCAL_STORAGE = 'SET_LOCAL_STORAGE';

export const setThisCep = cep => ({
    type: SET_CEP,
    payload: cep
})

export const setAndress = andress => ({
    type: SET_ANDRESS,
    payload: andress
})

export const setWindow = window => ({
    type: SET_WINDOW,
    payload: window
})

export const setLocalStorage = data => ({
    type: SET_LOCAL_STORAGE,
    payload: data
})