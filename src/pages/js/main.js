/* eslint-disable */
import "../css/main.css";
import React from "react";

const main = () => {
  return (
    <section className="main_page">
      <div className="main_container">
        <h1>누구나 쉽게 외울 수 있는 JPT 단어 암기장!</h1>
        <div className="main_botton">
          <div className="main_box">
            <div className="main_box_title">단어장</div>
            <div className="main_box_text">
              JPT시험에 자주 출제되는
              <br />
              단어들로 구성!
            </div>
          </div>
          <div className="main_box">
            <div className="main_box_title">즐겨찾기</div>
            <div className="main_box_text">
              자주 봐야 하는 단어는
              <br />
              따로 저장하여 암기!
            </div>
          </div>
          <div className="main_box">
            <div className="main_box_title">나만의 단어장</div>
            <div className="main_box_text">
              직접 단어를 저장하여
              <br />
              나만의 단어장을 만들자!
            </div>
          </div>

          <div className="main_box">
            <div className="main_box_title">퀴즈</div>
            <div className="main_box_text">
              퀴즈를 풀며
              <br />
              외운 단어들을 복습!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default main;
