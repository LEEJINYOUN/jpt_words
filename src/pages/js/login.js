/* eslint-disable */
import "../css/login.css";
import React from "react";
import { Link } from "react-router-dom";

const login = ({
  login_user,
  login_in,
  login_out,
  login_error,
  login_details,
  setLogin_details,
  login_user_info,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    login_in(login_details);
  };

  return (
    <>
      <section className="login_page">
        {login_user.email == "" ? (
          <div className="login_container">
            <h1 className="login_title">암기 콕콕!</h1>
            <form className="login_form" onSubmit={submitHandler}>
              <div className="text_field">
                <input
                  className="login_id"
                  type="email"
                  required="required"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    setLogin_details({
                      ...login_details,
                      email: e.target.value,
                    })
                  }
                  value={login_details.email}
                />
                <span className="text_field_span"></span>
                <label className="text_field_label">아이디</label>
              </div>
              <div className="text_field">
                <input
                  className="login_pw"
                  type="password"
                  required="required"
                  minLength={6}
                  id="password"
                  name="password"
                  onChange={(e) =>
                    setLogin_details({
                      ...login_details,
                      password: e.target.value,
                    })
                  }
                  value={login_details.password}
                />
                <span className="text_field_span"></span>
                <label className="text_field_label">비밀번호</label>
              </div>
              <input type="submit" className="login_submit" value="로그인" />
              {login_error != "" ? (
                <div className="login_error">{login_error}</div>
              ) : (
                ""
              )}
            </form>
          </div>
        ) : (
          <div className="login_container">
            <div className="login_welcome">
              {login_user_info.name} 님, 환영합니다
            </div>
            <div className="login_welcome_Btns">
              <Link className="login_ToMain_link" to="/">
                메인으로 가기
              </Link>
              <button className="login_Out_link" onClick={login_out}>
                로그아웃
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default login;
