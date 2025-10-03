import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getlistopic } from "../../services/topicService";
import { getquestion } from "../../services/questionService";

function Quiz() {
    const prams = useParams();
    const [datatopic, setdatatopic] = useState();
    const [dataquetion, setquetion] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getlistopic(prams.id);
            setdatatopic(response);
        }
        fetchApi();
    }, [])


    useEffect(() => {
        const fetchApi = async () => {
            const response = await getquestion(prams.id);
            setquetion(response);
            console.log(response);
        }
        fetchApi();
    }, [])

    console.log(dataquetion);
    return (
        <>
            <h2>Bai Quiz: chu de HTML:
                {datatopic && (<>{datatopic.Name}</>)}
            </h2>

            <div className="from-quiz">

                <form>

                    {dataquetion.map((item, index) => {
                        return (
                            <div className="quiz-item">
                                <p>Câu{index + 1}:{item.question}</p>
                                {item.answers.map((itemAnswer, indexAnswer) => {
                                    return (
                                        <>
                                            <div className="quiz-answer">
                                                <input type="radio" name={item.id} value={indexAnswer} id={`quiz-${item.id}- ${indexAnswer}`} />
                                            <label htmlFor={`quiz-${item.id}- ${indexAnswer}`}>{itemAnswer}</label>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}
                </form>
            </div>
        </>
    )
}

export default Quiz;
