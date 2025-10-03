import {getCookie} from "../helpers/cookies";
import { get } from "../utils/request";

export const getAnswers= async(topicID)=>{
    const userId=getCookie("id");
    const result= await get(`answers?userId=${userId}`);
    return result;
}
