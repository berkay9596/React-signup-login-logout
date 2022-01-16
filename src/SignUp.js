import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const createUser = async (user) => {
    return await axios
      .post("https://www.mecallapi.com/api/users/create", user)
      .then((resp) => resp.data);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const resp = await createUser({
      fname: "",
      lname: "",
      username: username,
      email: "",
      avatar: "",
    });
    if (resp) {
      localStorage.setItem("user", resp.user["username"]);
      alert(`${resp.message}  username is: ${username}`);
      navigate("/login");
    }
  };
  return (
    <div>
      <h1>Üyelik Oluşturma Sayfası</h1>
      <form onSubmit={formSubmit}>
        <input
          placeholder="Kullanıcı adınız..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Şifreniz : <span style={{fontWeight:"bold"}}>mecallapi</span></label>
        <br/>
        <button>
          <Link style={{ textDecoration: "none" }} to="/login">
            Zaten bir hesabınız var mı ?{" "}
          </Link>
        </button>

        <br />
        <button>Üye ol</button>
      </form>
    </div>
  );
}

export default SignUp;
