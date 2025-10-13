import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getlistopic } from "../../services/topicService";
import { getquestion } from "../../services/questionService";
import { getCookie } from "../../helpers/cookies";
import { createAnswer } from "../../services/quizService";

function Quiz() {
    const prams = useParams();
    const [datatopic, setdatatopic] = useState();
    const [dataquetion, setquetion] = useState([]);
    const navigate = useNavigate();

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

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        // console.log(e);

        let seletcedAnswers = [];

        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;

                seletcedAnswers.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)+1
                })
            }
        }
        // console.log(seletcedAnswers);

        let options = {
            userId: parseInt(getCookie("id")),
            topicID: parseInt(prams.id),
            answers: seletcedAnswers

        }

        const response = await createAnswer(options);
        console.log(response);
        if (response) {
            navigate(`/Result/${response.id}`);
        }
    }

    return (
        <>
            <h2>Chủ đề của bài Quiz là:
                {datatopic && (<>{datatopic.Name}</>)}
            </h2>

            <div className="from-quiz">

                <form onSubmit={hanldeSubmit}>

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
                    <button type="submit">nop bai</button>
                </form>
            </div>
        </>
    )
}

export default Quiz;