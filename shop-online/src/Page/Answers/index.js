import { useState } from "react";
import { getAnswers } from "../../services/answers";
import { useEffect } from "react";



function Answers(){
    const [dataAnswers,setdataAnswer]=useState();



    useEffect(() => {
            const fetchApi = async () => {
                const response = await getAnswers();
                setdataAnswer(response);
                console.log(response);
            }
            fetchApi();
        }, [])
    console.log(dataAnswers);
    return(
        <>

        <h2>Danh sach cac bai da lam</h2>
        </>
    )
}
export default Answers;
