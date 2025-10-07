import { get, post } from "../utils/request";

const login = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
};
export default login;

export const register = async (options) => {
    const result = await post(`users`, options); // ✅ dùng post
    return result;
};

export const checkExits = async (key, value) => {
    const result = await post(`users?${key}=${value}`);
    return result;
};
