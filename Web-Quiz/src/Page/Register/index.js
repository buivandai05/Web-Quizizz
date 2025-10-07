
import { useNavigate } from "react-router-dom";
import { checkExits, register } from "../../services/usersService";
import { generateToken } from "../../helpers/generateToken";
import "./main.scss";


function Register() {

    const navigate = useNavigate();
    // const dispatch=useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const checkExitsEmail = await checkExits("email", email);
        if (checkExitsEmail.length > 0) {
            alert("email da ton tai");
        }
        else {
            const options = {
                name: fullName,
                email: email,
                password: password,
                token: generateToken(),
            };
            const response = await register(options);
            if (response) {

                navigate("/Login");
                console.log(response);
            }
            else {
                alert("sai tai khoan hoat mat khau");
            }

        }

    }
    return (
        <>
            <div className="register-page">
                <div className="register-card">
                    <h2>Đăng ký ngay</h2>
                    <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="fullName" placeholder="nhap họ và tên" />
                </div>
                <div className="input-group">
                    <input type="email" placeholder="nhap email cua ban" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="nhập mật khẩu vào đây" />
                </div>
                <button className="register-button" type="submit">
                    Login
                </button>
                <div className="login-link">
                    Đã có tài khoản <a href="/Login">Đăng nhập ngay</a>
                </div>
            </form>
                </div>
            </div>
        </>
    )
}
export default Register;