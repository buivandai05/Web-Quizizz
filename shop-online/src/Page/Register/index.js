
import { useNavigate } from "react-router-dom";
import { checkExits, register } from "../../services/usersService";
import { generateToken } from "../../helpers/generateToken";



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
            <form onSubmit={handleSubmit}>
                <h2>Đăng ký ngay</h2>
                <div>
                    <input type="fullName" placeholder="nhap họ và tên" />
                </div>
                <div>
                    <input type="email" placeholder="nhap email cua ban" />
                </div>
                <div>
                    <input type="password" placeholder="nhập mật khẩu vào đây" />
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </>
    )
}
export default Register;