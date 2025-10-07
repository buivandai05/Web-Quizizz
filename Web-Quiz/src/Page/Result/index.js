import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getanswer } from "../../services/answers";
import { getquestion } from "../../services/questionService";
import "./Result.css";

function Result() {
    const prams = useParams();
    const [dataResult, setdataResult] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const dataAnsers = await getanswer(prams.id);
            const dataQuestion = await getquestion(dataAnsers.topicID);

            const resultFinal = dataQuestion.map(q => {
                const ans = dataAnsers.answers.find(a => a.questionId === q.id);
                return {
                    ...q,
                    userAnswer: ans ? ans.answer : null
                };
            });

            console.log(resultFinal); // kiểm tra lại cho chắc
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
                        <div className="result_question">
                            <p>
                                Câu {index + 1}: {item.question}
                                {item.correctAnswer === item.userAnswer ? (
                                    <span className="result_tag result_tag--true"> : Đúng</span>
                                ) : (
                                    <span className="result_tag result_tag--false"> : Sai</span>
                                )}

                            </p>
                        </div>

                        <div className="result_answers">
                            {item.answers.map((ans, indexAns) => {
                                const checked = Number(item.answer) === indexAns;
                                const isCorrect = Number(item.correctAnswer) === indexAns;

                                let className = "result_answer";
                                if (checked) className += " result_answer--selected";
                                if (isCorrect) className += " result_answer--correct";

                                return (
                                    <div className={className} key={indexAns}>
                                        <input
                                            type="radio"
                                            name={`question_${index}`}
                                            checked={item.userAnswer === indexAns}
                                            readOnly
                                        />

                                        <label>{ans}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
export default Result;
