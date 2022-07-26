export const history = {
    navigate: <any>null,
    location: <any>null,
};


export const setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const getItem = (key: string): string | null => {
    return localStorage.getItem(key);
};

export const getItemAsBoolean = (key: string): boolean => {
    return localStorage.getItem(key) === "true" ? true : false;
};
