import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginApi = async (userInfo) => {
    try {
      return await axios
        .post("https://www.mecallapi.com/api/login", userInfo)
        .then((res) => res.data);
    } catch {
      alert("Hatalı kullanıcı adı veya şifre");
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const resp = await loginApi({ username, password });
    console.log(resp);

    if (resp) {
      localStorage.setItem("token", resp["accessToken"]);
      localStorage.setItem("user", username);
      navigate("/home");
      alert(resp.message);
    }
  };

  return (
    <>
      <h1>Giriş Sayfası</h1>
      <form onSubmit={formSubmit}>
        <input
          placeholder="Kullanıcı adınızı girin..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          placeholder="Şifrenizi girin..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>
          {" "}
          <Link to="/">Kayıt ol </Link>
        </button>

        <button type="submit">Giriş Yap</button>
      </form>
    </>
  );
};

export default Login;
