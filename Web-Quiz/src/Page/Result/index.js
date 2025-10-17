import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getanswer } from "../../services/answers";
import { getquestion } from "../../services/questionService";
import "./main.scss";

function Result() {
    const prams = useParams();
    const [dataResult, setdataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getanswer(prams.id);
            const dataquestions = await getquestion(dataAnswers.
                topicID
            );
            // console.log(dataAnswers.answers);
            // console.log(dataquestions);
            // console.log(dataAnswers);
            let resultFinal = [];

            for (let i = 0; i < dataquestions.length; i++) {
                resultFinal.push({
                    ...dataquestions[i],
                    ...dataAnswers.answers.find(item => item.questionId === dataquestions[i].id)

                });
            }
            setdataResult(resultFinal);
        }
        fetchApi();
    })



    return (
        <>
            <h1>Kết quả của bài bạn làm là:</h1>
            <div className="answer-list">
                {dataResult.map((item, index) => {
                    return (

                        <div className="result-item" key={item.id}>
                            <p> Câu {index + 1}:{item.question}</p>
                            {[item.correctAnswer === item.answer ? (
                                <span className="result_tag
                                result_tag--true">Đúng</span>
                            ) : (
                                <span className="result_tag
                                result_tag--false">Sai</span>
                            )]}
                            {item.answers.map((itemAns, indexAns) => {

                                let className = "";
                                let checked = false;

                                if (item.answer === indexAns) {
                                    checked = true;
                                    className = "result_item--selected";
                                }

                                if (item.correctAnswer === index) {
                                    className += " result_item--result";
                                }
                                return (
                                    <div className="result-answer" key={indexAns}>
                                        <input
                                            type="radio"
                                            checked={checked} disabled
                                        />
                                        
                                        <label className={className} >{itemAns}</label>

                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    );
}
export default Result;
