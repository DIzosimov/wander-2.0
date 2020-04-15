const sessionStorage = window.sessionStorage

export const get = key => sessionStorage.getItem(key)
export const set = (key, value) => sessionStorage.setItem(key, value)
export const remove = key => sessionStorage.removeItem(key)
export const clear = () => sessionStorage.clear()