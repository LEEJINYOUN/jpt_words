/* eslint-disable */
import "../css/kr_question_modal.css";
import React from "react";

const kr_question_modal = ({
  kr_modalToggle,
  kr_modal_tab,
  setKr_modal_tab,
  Kr_question_modal_tab,
  kr_matchedData,
  kr_mismatchedData,
  kr_modal_tab_color,
  setKr_modal_tab_color,
}) => {
  return (
    <section className="kr_question_modal_page">
      <div className="kr_question_modal_container">
        <div className="kr_question_modal_top">
          <div className="kr_modal_top_left">
            <button
              className={`kr_modal_matched_btn ${
                kr_modal_tab_color === "curr" ? "active" : ""
              }`}
              onClick={() => {
                setKr_modal_tab(0);
                setKr_modal_tab_color("curr");
              }}
            >
              정답
            </button>
            <button
              className={`kr_modal_mismatched_btn ${
                kr_modal_tab_color === "prev" ? "active" : ""
              }`}
              onClick={() => {
                setKr_modal_tab(1);
                setKr_modal_tab_color("prev");
              }}
            >
              오답
            </button>
          </div>
          <div className="kr_modal_top_right">
            <button className="kr_modal_close" onClick={kr_modalToggle}>
              창 닫기
            </button>
          </div>
        </div>
        <div className="kr_question_modal_botton">
          <Kr_question_modal_tab
            kr_modal_tab={kr_modal_tab}
            kr_matchedData={kr_matchedData}
            kr_mismatchedData={kr_mismatchedData}
          />
        </div>
      </div>
    </section>
  );
};

export default kr_question_modal;
