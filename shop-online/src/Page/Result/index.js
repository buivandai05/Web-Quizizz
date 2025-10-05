import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getanswer} from "../../services/answers";
import { getquestion } from "../../services/questionService";

function Result(){
    const prams=useParams();
    const [dataResult, setdataResult]=useState([]);

    useEffect(()=>{
        const fetchApi=async ()=>{
            const dataAnsers=await getanswer(prams.id);
            // console.log(dataAnsers);
            const dataQuestion=await getquestion(dataAnsers.topicID)
            // console.log(dataAnsers);
            // console.log(dataQuestion);

            let resultFinal=[];
            for(let i=0; i<dataQuestion.length; i++){
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnsers.answers.find(item=>item.questionId === dataQuestion[i].id)
                })
            }
            console.log(resultFinal);
        }
        fetchApi();

    },[])

    return(
        <>
        Result
        </>
    )
}
export default Result;
