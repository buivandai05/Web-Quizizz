
import { NavLink, Outlet } from "react-router-dom";
import "./layoutdefaut.scss";
import { getCookie } from "../../helpers/cookies";
import { useSelector } from "react-redux";
import loginReducer from "../../reducers/login";
// import Home from "../../Page/Home";
import logoimage from "../../image/logo.webp";

function LayoutDefautl() {
    const token = getCookie("token");
    const isLogin=useSelector(state=>state.loginReducer);
    console.log(isLogin);
    return (
        <>
            <div className="layout_defautl">
                <header className="layout_header">
                    <div className="layout_logo">
                        <img src={logoimage} alt="logo"></img>
                    </div>
                    <div className="layout_menu">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            {token && (<>
                                <li>
                                    <NavLink to="/Topic">Topic</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Answers">Answer</NavLink>
                                </li>
                            </>)}

                        </ul>
                    </div>
                    <div className="layout_account">
                        {token ? (<>
                            <NavLink to="/Logout"> Đăng xuất </NavLink>
                        </>) : (<>
                            <NavLink to="/Login">Login</NavLink>
                            <NavLink to="/Register"> Register </NavLink>
                        </>)}
                    </div>
                </header>
                <main className="layout_main">
                    <Outlet />
                </main>
                <footer className="layout_footer">
                    xin chao moi nguoi by buivandai
                </footer>
            </div>
        </>
    )
}
export default LayoutDefautl;