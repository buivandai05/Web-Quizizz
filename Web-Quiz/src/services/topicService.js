import { get } from "../utils/request";

const getTopic = async () => {
    const result = await get(`topics`);
    return result;
};
export default getTopic;

 export const getlistopic=async(id)=>{
    const result=await get(`topics/${id}`);
    return result;
}
