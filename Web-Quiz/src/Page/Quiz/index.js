import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getlistopic } from "../../services/topicService";
import { getquestion } from "../../services/questionService";
import { getCookie } from "../../helpers/cookies";
import { createAnswer } from "../../services/quizService";

function Quiz() {
    const prams = useParams();
    const [datatopic, setdatatopic] = useState();
    const [dataquestion, setdataquestion] = useState([]);
    const Navigate=useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getlistopic(prams.id);
            setdatatopic(response);
        }
        fetchApi(datatopic);
    }, [])


    useEffect(() => {
        const fetchApi = async () => {
            const response = await getquestion(prams.id);
            setdataquestion(response);

        }
        fetchApi(datatopic);
    }, [])

    const handlesubmit = async(e) => {
        e.preventDefault();
        console.log(e);

        let selectedAns = [];
        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;

                selectedAns.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)
                })
            }

        }
        // console.log(selectedAns);
        let options = {
            
            userId: parseInt(getCookie("id")),
            topicID:parseInt(prams.id),
            answers:selectedAns,
        }
       
        const response=await createAnswer(options);
        console.log(response);
        if(response){
            Navigate(`/Result/${response.id}`);
        }

    }

    return (
        <>
            <h2>Chủ đề của bài Quiz là:
                {datatopic && (<>{datatopic.Name}</>)}
            </h2>
            <div className="from-quiz">
                <form onSubmit={handlesubmit}>
                    {dataquestion.map((item, index) => {
                        return (
                            <div className="from-quiz-item" key={item.id}>
                                <p> Câu {index+1}:{item.question}</p>
                                {item.answers.map((itemAns, indexAns) => {
                                    return (
                                        <div className="from-quiz-answer" key={indexAns}>
                                            <input
                                                type="radio"
                                                name={item.id}
                                                value={indexAns}
                                                id={`Quiz-${item.id}-${indexAns}`}
                                            >

                                            </input>
                                            <label htmlFor={`Quiz-${item.id}-${indexAns}`}>{itemAns}</label>

                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Quiz;