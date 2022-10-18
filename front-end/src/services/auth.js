export const TOKEN_KEY = "&app-token";
export const ID_USER= "&id-user";
export const NAME = "&nome";
export const USER_TYPE = "&tipo";

export const login = token => {
    console.log('token_key '+TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
}
export const logout = () => { localStorage.clear() };

export const setIdUser = id => localStorage.setItem(ID_USER, id);
export const getIdUser = () => localStorage.getItem(ID_USER);

export const setName = nome => localStorage.setItem(NAME, nome);
export const getName = () => localStorage.getItem(NAME);

export const setType = tipo => localStorage.setItem(USER_TYPE, tipo);
export const getType = () => localStorage.getItem(USER_TYPE);

export const getToken = () => localStorage.getItem(TOKEN_KEY)