import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getanswer } from "../../services/answers";
import { getquestion } from "../../services/questionService";

function Result() {
    const prams = useParams();
    const [dataResult, setdataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnsers = await getanswer(prams.id);
            const dataQuestion = await getquestion(dataAnsers.topicID);
            console.log(dataAnsers.answers);

            let resultFinal = [];
            for (let i = 0; i < dataQuestion.length; i++) {
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnsers.answers.find(
                        (item) => item.questionId === dataQuestion[i].id
                    ),
                });
            }
            setdataResult(resultFinal);



        };
        fetchApi();
    }, [prams.id]);

    return (
        <>
            <h1>Kết quả:</h1>
            <div className="result_list">
                {dataResult.map((item, index) => (
                    <div className="result_item" key={item.id}>
                        <p>
                            Câu {index + 1}: {item.question}
                            {Number(item.correctAnswer) === Number(item.answer) ? (
                                <span className="result_tag result_tag--true"> :Đúng</span>
                            ) : (
                                <span className="result_tag result_tag--false"> :Sai</span>
                            )}
                        </p>

                        {item.answers.map((itemAns, indexAns) => {
                            let className = "";
                            let checked = false;

                            if (item.answer === indexAns) {
                                checked = true;
                                className = "result_item--selected";
                            }

                            if (item.correctAnswer === indexAns) {
                                className += " result_item--result";
                            }

                            return (
                                <div className={`result_answer ${className}`} key={indexAns}>
                                    <input
                                        type="radio"
                                        name={`question_${index}`}
                                        checked={checked}
                                        disabled
                                    />
                                    <label>{itemAns}</label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}
export default Result;
