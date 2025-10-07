import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTopic from "../../services/topicService";
import "./main.scss";

function Topic() {

    const [Topic, setTopic] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic();
            setTopic(response);
        }
        fetchApi();
    }, [])

    // console.log(Topic);
    return (
        <>

            {Topic.length > 0 && (
                <>
                <div className="topic-page-container">
                    <h2>Đây là các chủ để bạn của bạn:</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Tên chủ đề</td>
                                <td>Start </td>
                            </tr>
                        </thead>
                        <tbody>
                            {Topic.map((item) => {
                                return (
                                    <>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.Name}</td>
                                            <td>
                                                <Link to={"/Quiz/" + item.id} >Làm bài</Link>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                </>
            )}
        </>
    )
}
export default Topic;
