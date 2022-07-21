/* eslint-disable */
import "../css/quiz.css";
import React from "react";
import { Link } from "react-router-dom";

const quiz = ({
  jp_settingRandom,
  setJp_stop,
  setJp_seconds,
  setJp_words_check_style,
  jp_matchedData,
  setJp_matchedData,
  jp_mismatchedData,
  setJp_mismatchedData,

  kr_settingRandom,
  setKr_stop,
  setKr_seconds,
  setKr_words_check_style,
  kr_matchedData,
  setKr_matchedData,
  kr_mismatchedData,
  setKr_mismatchedData,
}) => {
  const jp_startOnclick = () => {
    jp_settingRandom();
    setJp_stop(false);
    setJp_seconds(10);
    setJp_words_check_style("none");

    while (jp_matchedData.length > 0 || jp_mismatchedData.length > 0) {
      jp_matchedData.pop();
      jp_mismatchedData.pop();
    }
    setJp_matchedData(jp_matchedData);
    setJp_mismatchedData(jp_mismatchedData);
  };

  const kr_startOnclick = () => {
    kr_settingRandom();
    setKr_stop(false);
    setKr_seconds(10);
    setKr_words_check_style("none");

    while (kr_matchedData.length > 0 || kr_mismatchedData.length > 0) {
      kr_matchedData.pop();
      kr_mismatchedData.pop();
    }
    setKr_matchedData(kr_matchedData);
    setKr_mismatchedData(kr_mismatchedData);
  };

  return (
    <section className="quiz_page">
      <div className="quiz_container">
        <div className="quiz_container_top">
          <h1 className="quiz_title">퀴즈</h1>
          <p className="quiz_text">
            복습은 퀴즈로!
            <br />
            퀴즈로 자기점검을 하며 부족한 부분을 채울 수 있습니다.
          </p>
        </div>
        <div className="quiz_container_botton">
          <ul className="quiz_select_boxs">
            <Link
              className="quiz_link"
              to="/quiz/kr_quiz"
              onClick={kr_startOnclick}
            >
              단어 보고 뜻 맞추기
            </Link>
            <Link
              className="quiz_link"
              to="/quiz/jp_quiz"
              onClick={jp_startOnclick}
            >
              뜻 보고 단어 맞추기
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default quiz;
