import { useState } from "react";
import { getAnswers } from "../../services/answers";
import { useEffect } from "react";
import getTopic from "../../services/topicService";
import { Link } from "react-router-dom";




function Answers() {
    const [dataAnswers, setdataAnswer] = useState([]);



    useEffect(() => {
        const fetchApi = async () => {
            const answerbyUser = await getAnswers();
            const topics = await getTopic();

            let result = answerbyUser.map(item => {
                const topic = topics.find(t => String(t.id) === String(item.topicID));
                return {
                    ...item,
                    topicName: topic?.Name || "không có tên"
                };
            });

            console.log("Kết quả sau khi merge:", result);
            setdataAnswer(result.reverse());
        };

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
                                            <td>{item.topicName}</td>
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
