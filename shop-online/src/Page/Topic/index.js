import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTopic from "../../services/topicService";

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
                            {Topic.map((item) => {
                                return (
                                    <>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.Name}</td>
                                            <td>
                                                <Link to={"/Quiz/" + item.id} >Lam bai</Link>
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
export default Topic;
