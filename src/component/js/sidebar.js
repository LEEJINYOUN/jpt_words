/* eslint-disable */
import "../css/sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { MdQuiz, MdLogin, MdOutlineBookmarkAdd } from "react-icons/md";

const sidebar = ({
  sidebarClick,
  setSidebarClick,
  sidebarTransform,
  setSidebarTransform,
  login_out,
}) => {
  const sidebartoggle = () => {
    setSidebarClick((sidebarClick) => !sidebarClick);
  };

  const menuToggleBtn = () => {
    sidebartoggle();
    if (sidebarClick == false) {
      setSidebarTransform(sidebarTransform + 175);
    } else {
      setSidebarTransform(sidebarTransform - 175);
    }
  };

  const menuLongBtn = () => {
    setSidebarClick(false);
  };

  // const sidebar_Items = [
  //   {
  //     id: 1,
  //     path: "/words",
  //     icon: <GoPencil className="sidebar_i" />,
  //     name: "단어장",
  //   },
  //   {
  //     id: 2,
  //     path: "/bookmark",
  //     icon: <MdOutlineBookmarkAdd className="sidebar_i" />,
  //     name: "즐겨찾기",
  //   },
  //   {
  //     id: 3,
  //     path: "/vocaAdd",
  //     icon: <AiFillPlusCircle className="sidebar_i" />,
  //     name: "나만의 단어장",
  //   },
  //   {
  //     id: 4,
  //     path: "/quiz",
  //     icon: <MdQuiz className="sidebar_i" />,
  //     name: "퀴즈",
  //   },
  //   {
  //     id: 5,
  //     path: "/login",
  //     icon: <MdLogin className="sidebar_i" />,
  //     name: "로그아웃",
  //   },
  // ];

  // const sidebar_lists = sidebar_Items.map((val, key) => {
  //   return (
  //     <li className="sidebar_list" key={key} onClick={menuLongBtn}>
  //       <Link className="sidebar_link" to={val.path}>
  //         <span className="sidebar_icon">{val.icon}</span>
  //         <span className="sidebar_title">{val.name}</span>
  //       </Link>
  //     </li>
  //   );
  // });

  return (
    <section
      className={
        sidebarClick == true
          ? "sidebar_container sidebar_active"
          : "sidebar_container"
      }
    >
      <ul className="sidebar_lists">
        <li className="sidebar_list">
          <Link className="sidebar_link" to="/">
            <span className="sidebar_icon">
              <AiFillHome className="sidebar_i" />
            </span>
            <span className="sidebar_title">암기콕콕!</span>
          </Link>
        </li>
        <li className="sidebar_list" onClick={menuLongBtn}>
          <Link className="sidebar_link" to="/words">
            <span className="sidebar_icon">
              <GoPencil className="sidebar_i" />
            </span>
            <span className="sidebar_title">단어장</span>
          </Link>
        </li>
        <li className="sidebar_list" onClick={menuLongBtn}>
          <Link className="sidebar_link" to="/bookmark">
            <span className="sidebar_icon">
              <MdOutlineBookmarkAdd className="sidebar_i" />
            </span>
            <span className="sidebar_title">즐겨찾기</span>
          </Link>
        </li>
        <li className="sidebar_list" onClick={menuLongBtn}>
          <Link className="sidebar_link" to="/vocaAdd">
            <span className="sidebar_icon">
              <AiFillPlusCircle className="sidebar_i" />
            </span>
            <span className="sidebar_title">나만의 단어장</span>
          </Link>
        </li>
        <li className="sidebar_list" onClick={menuLongBtn}>
          <Link className="sidebar_link" to="/quiz">
            <span className="sidebar_icon">
              <MdQuiz className="sidebar_i" />
            </span>
            <span className="sidebar_title">퀴즈</span>
          </Link>
        </li>
        <li className="sidebar_list" onClick={menuLongBtn}>
          <Link className="sidebar_link" to="/jpt_words" onClick={login_out}>
            <span className="sidebar_icon">
              <MdLogin className="sidebar_i" />
            </span>
            <span className="sidebar_title">로그아웃</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar_toggle" onClick={menuToggleBtn}></div>
    </section>
  );
};

export default sidebar;
