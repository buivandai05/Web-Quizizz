import { useDispatch } from "react-redux";
import { setCookie } from "../../helpers/cookies";
import login from "../../services/usersService";
import {useNavigate} from "react-router-dom";
import { checkLogin } from "../../actions/login";
import "./main.scss";

function Login(){

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit = async (e)=> {
    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    const response=await login(email,password);
    if(response.length > 0){
        setCookie("id",response[0].id,1);
        setCookie("fullName",response[0].name,1);
        setCookie("email",response[0].email,1);
        setCookie("password",response[0].password,1);
        setCookie("token",response[0].token,1);
        dispatch(checkLogin(true));
        navigate("/");
        console.log(response);
    }
    else{
        alert("sai tai khoan hoat mat khau");
    }
        
    }
    return(
        <>
        <div className="login-page">
            <div className="login-card">
                <h2>Login ngay</h2>
                <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="email" placeholder="nhập email của bạn "/>
            </div>
            <div className="input-group">
                <input type="password" placeholder="nhập mật khẩu của bạn" />
            </div>
            <button className="login-button" type="submit">
                Login
            </button>
            <div className="register-link">
                Chưa có tài khoản đăng ký ngay <a href="./Register">Đăng ký ngay</a>

            </div>
        </form>
            </div>
        </div>


        </>
    )
}
export default Login;
