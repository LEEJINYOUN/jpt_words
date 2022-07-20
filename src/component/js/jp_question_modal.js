/* eslint-disable */
import "../css/jp_question_modal.css";
import React from "react";

const jp_question_modal = ({
  jp_modalToggle,
  jp_modal_tab,
  setJp_modal_tab,
  Jp_question_modal_tab,
  jp_matchedData,
  jp_mismatchedData,
  jp_modal_tab_color,
  setJp_modal_tab_color,
}) => {
  return (
    <section className="jp_question_modal_page">
      <div className="jp_question_modal_container">
        <div className="jp_question_modal_top">
          <div className="jp_modal_top_left">
            <button
              className={`jp_modal_matched_btn ${
                jp_modal_tab_color === "curr" ? "active" : ""
              }`}
              onClick={() => {
                setJp_modal_tab(0);
                setJp_modal_tab_color("curr");
              }}
            >
              정답
            </button>
            <button
              className={`jp_modal_mismatched_btn ${
                jp_modal_tab_color === "prev" ? "active" : ""
              }`}
              onClick={() => {
                setJp_modal_tab(1);
                setJp_modal_tab_color("prev");
              }}
            >
              오답
            </button>
          </div>
          <div className="jp_modal_top_right">
            <button className="jp_modal_close" onClick={jp_modalToggle}>
              창 닫기
            </button>
          </div>
        </div>
        <div className="jp_question_modal_botton">
          <Jp_question_modal_tab
            jp_modal_tab={jp_modal_tab}
            jp_matchedData={jp_matchedData}
            jp_mismatchedData={jp_mismatchedData}
          />
        </div>
      </div>
    </section>
  );
};

export default jp_question_modal;
