import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("user");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      {token ? (
        <>
          <Link onClick={logout} to="/">
            Çıkış Yap
          </Link>
          <h1>Home Page</h1>
          <p>Hoşgeldin {username}</p>
        </>
      ) : (
        "Bu sayfaya yetkiniz yok"
      )}
    </>
  );
};

export default Home;
