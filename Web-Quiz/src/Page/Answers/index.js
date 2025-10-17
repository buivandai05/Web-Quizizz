import { useState } from "react";
import { getAnswers, getAnswersbyUserId } from "../../services/answers";
import { useEffect } from "react";
import getTopic, { getlistopic } from "../../services/topicService";
import { Link } from "react-router-dom";




function Answers() {
    const [dataAnswers, setdataAnswer] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const AnswersbyUserId = await getAnswersbyUserId();
            const topics = await getTopic()

            let result = [];

            for (let i = 0; i < AnswersbyUserId.length; i++) {
                result.push({
                    ...topics.find(item => String(item.id) === String(AnswersbyUserId[i].topicID)),
                    ...AnswersbyUserId[i],
                })

            }
            setdataAnswer(result.reverse());

        }
        fetchApi();
    }, []);



    return (
        <>
            {dataAnswers.length > 0 && (
                <>
                    <h2>Ten chu de</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Ten chu de</td>
                                <td>bui dai</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataAnswers.map((item) => {
                                return (
                                    <>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.Name}</td>
                                            <td>
                                                <Link to={"/Result/" + item.id} >xim chi tiet</Link>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            )}

        </>
    )
}
export default Answers;
