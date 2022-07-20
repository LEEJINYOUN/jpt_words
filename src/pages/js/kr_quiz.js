/* eslint-disable */
import "../css/kr_quiz.css";
import React, { useEffect } from "react";

const kr_quiz = ({
  kr_seconds,
  setKr_seconds,
  kr_matchedData,
  kr_mismatchedData,
  kr_stop,
  setKr_stop,
  kr_modal,
  setKr_modal,
  Kr_question_modal,
  Kr_question_modal_tab,
  kr_modal_tab,
  setKr_modal_tab,
  kr_modal_tab_color,
  setKr_modal_tab_color,
  kr_questionData,
  kr_answers,
  kr_answer_style,
  setKr_answer_style,
  kr_settingRandom,
  kr_words_check_style,
  setKr_words_check_style,
  kr_answerO_1,
  setKr_answerO_1,
  kr_answerX_1,
  setKr_answerX_1,
  kr_answerO_2,
  setKr_answerO_2,
  kr_answerX_2,
  setKr_answerX_2,
  kr_answerO_3,
  setKr_answerO_3,
  kr_answerX_3,
  setKr_answerX_3,
  kr_answerO_4,
  setKr_answerO_4,
  kr_answerX_4,
  setKr_answerX_4,
  kr_Btns_disable,
  setKr_Btns_disable,
}) => {
  const doNotReload = (e) => {
    if (e.keyCode == 116 || e.keyCode == 82 || e.keyCode == 78) {
      kr_settingRandom();
    }
  };

  document.onkeyup = doNotReload;

  let kr_timer;

  useEffect(() => {
    kr_timer = setInterval(() => {
      setKr_seconds(kr_seconds - 1);
      if (kr_seconds === 0) {
        setKr_seconds(10);
      }
    }, 1000);

    if (kr_seconds === 0) {
      setKr_answer_style("flex");
      setKr_Btns_disable(true);
      setTimeout(() => {
        clearInterval(kr_timer);
        setKr_seconds(10);
        kr_settingRandom();
        setKr_answer_style("none");
        setKr_Btns_disable(false);
        kr_mismatchedData.push(kr_questionData);
      }, 1000);
    }
    return () => clearInterval(kr_timer);
  }, [kr_seconds]);

  const kr_pause = () => {
    setKr_stop((kr_stop) => !kr_stop);
    clearInterval(kr_timer);
    setKr_Btns_disable(true);
    setKr_words_check_style("flex");
  };

  const kr_restart = () => {
    setKr_stop((kr_stop) => !kr_stop);
    setKr_seconds(kr_seconds - 1);
    setKr_Btns_disable(false);
    setKr_words_check_style("none");
  };

  const kr_modalToggle = () => {
    setKr_modal((kr_modal) => !kr_modal);
  };

  const krWordsCheckStyle = {
    display: `${kr_words_check_style}`,
  };

  const kr_clickAnswer1 = (e) => {
    clearInterval(kr_timer);
    if (e.target.value == kr_questionData.id) {
      setKr_answerO_1(true);
      setKr_answerX_1(false);
      kr_matchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    } else {
      setKr_answerX_1(true);
      setKr_answerO_1(false);
      kr_mismatchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    }
    setTimeout(() => {
      setKr_seconds(10);
      kr_settingRandom();
      setKr_answerO_1(false);
      setKr_answerX_1(false);
      setKr_Btns_disable(false);
      setKr_answer_style("none");
    }, 1000);
  };

  const kr_clickAnswer2 = (e) => {
    clearInterval(kr_timer);
    if (e.target.value == kr_questionData.id) {
      setKr_answerO_2(true);
      setKr_answerX_2(false);
      kr_matchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    } else {
      setKr_answerX_2(true);
      setKr_answerO_2(false);
      kr_mismatchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    }
    setTimeout(() => {
      setKr_seconds(10);
      kr_settingRandom();
      setKr_answerO_2(false);
      setKr_answerX_2(false);
      setKr_Btns_disable(false);
      setKr_answer_style("none");
    }, 1000);
  };

  const kr_clickAnswer3 = (e) => {
    clearInterval(kr_timer);
    if (e.target.value == kr_questionData.id) {
      setKr_answerO_3(true);
      setKr_answerX_3(false);
      kr_matchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    } else {
      setKr_answerX_3(true);
      setKr_answerO_3(false);
      kr_mismatchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    }
    setTimeout(() => {
      setKr_seconds(10);
      kr_settingRandom();
      setKr_answerO_3(false);
      setKr_answerX_3(false);
      setKr_Btns_disable(false);
      setKr_answer_style("none");
    }, 1000);
  };

  const kr_clickAnswer4 = (e) => {
    clearInterval(kr_timer);
    if (e.target.value == kr_questionData.id) {
      setKr_answerO_4(true);
      setKr_answerX_4(false);
      kr_matchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    } else {
      setKr_answerX_4(true);
      setKr_answerO_4(false);
      kr_mismatchedData.push(kr_questionData);
      setKr_Btns_disable(true);
      setKr_answer_style("flex");
    }
    setTimeout(() => {
      setKr_seconds(10);
      kr_settingRandom();
      setKr_answerO_4(false);
      setKr_answerX_4(false);
      setKr_Btns_disable(false);
      setKr_answer_style("none");
    }, 1000);
  };

  const krAnswerDisplayStyle = {
    display: `${kr_answer_style}`,
  };

  const kr_BtnItem = [
    {
      id: 1,
      name_O: kr_answerO_1,
      name_X: kr_answerX_1,
      value: kr_answers[0].id,
      click: kr_clickAnswer1,
      text: kr_answers[0].korean,
    },
    {
      id: 2,
      name_O: kr_answerO_2,
      name_X: kr_answerX_2,
      value: kr_answers[1].id,
      click: kr_clickAnswer2,
      text: kr_answers[1].korean,
    },
    {
      id: 3,
      name_O: kr_answerO_3,
      name_X: kr_answerX_3,
      value: kr_answers[2].id,
      click: kr_clickAnswer3,
      text: kr_answers[2].korean,
    },
    {
      id: 4,
      name_O: kr_answerO_4,
      name_X: kr_answerX_4,
      value: kr_answers[3].id,
      click: kr_clickAnswer4,
      text: kr_answers[3].korean,
    },
  ];

  const kr_Btn = kr_BtnItem.map((val, key) => {
    return (
      <button
        className={
          val.name_O === true
            ? "kr_answer_Btn kr_answer_Btn_O_bg"
            : val.name_X === true
            ? "kr_answer_Btn kr_answer_Btn_X_bg"
            : "kr_answer_Btn"
        }
        value={val.value}
        onClick={val.click}
        key={key}
        disabled={kr_Btns_disable}
      >
        {val.id}. {val.text}
      </button>
    );
  });

  return (
    <section className="kr_quiz_page">
      <div className="kr_quiz_container">
        <div className="kr_quiz_top">
          {kr_stop == false ? (
            <span className="kr_remaining_time" onClick={kr_pause}>
              00 : {kr_seconds < 10 ? "0" + kr_seconds : kr_seconds}
            </span>
          ) : (
            <span className="kr_remaining_time" onClick={kr_restart}>
              일시정지
            </span>
          )}
          <button
            className="kr_words_check"
            style={krWordsCheckStyle}
            onClick={kr_modalToggle}
          >
            출제 단어
          </button>
        </div>
        <div className="kr_quiz_display">
          <div className="kr_question">{kr_questionData.Japanese}</div>
          <div className="kr_answer" style={krAnswerDisplayStyle}>
            정답: {kr_questionData.korean}
          </div>
        </div>
        <div className="kr_quiz_answers">{kr_Btn}</div>
      </div>
      {kr_modal == true ? (
        <Kr_question_modal
          kr_modalToggle={kr_modalToggle}
          kr_modal_tab={kr_modal_tab}
          setKr_modal_tab={setKr_modal_tab}
          Kr_question_modal_tab={Kr_question_modal_tab}
          kr_matchedData={kr_matchedData}
          kr_mismatchedData={kr_mismatchedData}
          kr_modal_tab_color={kr_modal_tab_color}
          setKr_modal_tab_color={setKr_modal_tab_color}
        />
      ) : null}
    </section>
  );
};

export default kr_quiz;
