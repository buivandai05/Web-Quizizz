import { get } from "../utils/request";

export const getquestion= async(topicID)=>{
    const result= await get(`questions?topicID=${topicID}`);
    return result;
}
