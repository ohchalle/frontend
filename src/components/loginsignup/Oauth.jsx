import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const navigate = useNavigate;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_MOCKSPRING_SERVER_URL}/user/kakao/callback?code=${code}`
        );
        const access = res.headers.get("Access");
        const refresh = res.headers.get("Refresh");
        localStorage.setItem("Access", access);
        localStorage.setItem("Refresh", refresh);
        navigate("/");
      } catch (e) {
        console.error(e);
        navigate("/");
      }
    })();
  }, [code, navigate]);

  return <div>Oauth</div>;
};

export default Oauth;