import "./style/Login.css";
function Login() {
    return (
        <div className="login-center">
            <div className="login-box">
                <img  className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-MxQMBxtjT4lTIt5NpIID2njAAk813g7Bw&s" alt="image"></img>
                <h1 className="Login">Login</h1>
                <input type="text" placeholder="Enter username" />
                <input type="password" placeholder="Enter password" />
                <input type="submit" value="Login" />
            </div>
        </div>
    );
}
export default Login;