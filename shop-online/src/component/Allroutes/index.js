import { useRoutes } from "react-router-dom";
import { routesconfig } from '../../routes';

function Allroute() {
    const elements = useRoutes(routesconfig);
    return elements;
}

export default Allroute;
