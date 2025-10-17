import {getCookie} from "../helpers/cookies";
import { get } from "../utils/request";

export const getAnswersbyUserId= async(topicID)=>{
    const userId=getCookie("id");
    const result= await get(`answers?userId=${userId}`);
    return result;
}

export const getanswer=async(id)=>{
    const result=await get(`answers/${id}`);
    return result;
}

