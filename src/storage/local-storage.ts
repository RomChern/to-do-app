export const setToLocaleStorage = (key: string, data: unknown) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getFromLocaleStorage = <T>(key: string) => {
    const data = localStorage.getItem(key)
    return data !== null ? JSON.parse(data) as T : null;
}

export const removeFromLocaleStorage = (key: string) => {
    localStorage.removeItem(key)
}