import { Navigate,Outlet } from "react-router-dom";


function PrivateRoutes(){
    const islogin=true;
    return(
        <>
        {islogin ?(<Outlet/>) :(<Navigate to="/login"/>)}

        </>
    )
}
export default PrivateRoutes;