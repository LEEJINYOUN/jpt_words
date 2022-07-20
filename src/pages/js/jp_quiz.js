/* eslint-disable */
import "../css/jp_quiz.css";
import React, { useEffect } from "react";

const jp_quiz = ({
  jp_seconds,
  setJp_seconds,
  jp_matchedData,
  jp_mismatchedData,
  jp_stop,
  setJp_stop,
  jp_modal,
  setJp_modal,
  Jp_question_modal,
  Jp_question_modal_tab,
  jp_modal_tab,
  setJp_modal_tab,
  jp_modal_tab_color,
  setJp_modal_tab_color,
  jp_questionData,
  jp_answers,
  jp_answer_style,
  setJp_answer_style,
  jp_settingRandom,
  jp_words_check_style,
  setJp_words_check_style,
  jp_answerO_1,
  setJp_answerO_1,
  jp_answerX_1,
  setJp_answerX_1,
  jp_answerO_2,
  setJp_answerO_2,
  jp_answerX_2,
  setJp_answerX_2,
  jp_answerO_3,
  setJp_answerO_3,
  jp_answerX_3,
  setJp_answerX_3,
  jp_answerO_4,
  setJp_answerO_4,
  jp_answerX_4,
  setJp_answerX_4,
  jp_Btns_disable,
  setJp_Btns_disable,
}) => {
  const doNotReload = (e) => {
    if (e.keyCode == 116 || e.keyCode == 82 || e.keyCode == 78) {
      jp_settingRandom();
    }
  };

  document.onkeyup = doNotReload;

  let jp_timer;

  useEffect(() => {
    jp_timer = setInterval(() => {
      setJp_seconds(jp_seconds - 1);
      if (jp_seconds === 0) {
        setJp_seconds(10);
      }
    }, 1000);

    if (jp_seconds === 0) {
      setJp_answer_style("flex");
      setJp_Btns_disable(true);
      setTimeout(() => {
        clearInterval(jp_timer);
        setJp_seconds(10);
        jp_settingRandom();
        setJp_answer_style("none");
        setJp_Btns_disable(false);
        jp_mismatchedData.push(jp_questionData);
      }, 1000);
    }
    return () => clearInterval(jp_timer);
  }, [jp_seconds]);

  const jp_pause = () => {
    setJp_stop((jp_stop) => !jp_stop);
    clearInterval(jp_timer);
    setJp_Btns_disable(true);
    setJp_words_check_style("flex");
  };

  const jp_restart = () => {
    setJp_stop((jp_stop) => !jp_stop);
    setJp_seconds(jp_seconds - 1);
    setJp_Btns_disable(false);
    setJp_words_check_style("none");
  };

  const jp_modalToggle = () => {
    setJp_modal((jp_modal) => !jp_modal);
  };

  const JpWordsCheckStyle = {
    display: `${jp_words_check_style}`,
  };

  const jp_clickAnswer1 = (e) => {
    clearInterval(jp_timer);
    if (e.target.value == jp_questionData.id) {
      setJp_answerO_1(true);
      setJp_answerX_1(false);
      jp_matchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    } else {
      setJp_answerX_1(true);
      setJp_answerO_1(false);
      jp_mismatchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    }
    setTimeout(() => {
      setJp_seconds(10);
      jp_settingRandom();
      setJp_answerO_1(false);
      setJp_answerX_1(false);
      setJp_Btns_disable(false);
      setJp_answer_style("none");
    }, 1000);
  };

  const jp_clickAnswer2 = (e) => {
    clearInterval(jp_timer);
    if (e.target.value == jp_questionData.id) {
      setJp_answerO_2(true);
      setJp_answerX_2(false);
      jp_matchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    } else {
      setJp_answerX_2(true);
      setJp_answerO_2(false);
      jp_mismatchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    }
    setTimeout(() => {
      setJp_seconds(10);
      jp_settingRandom();
      setJp_answerO_2(false);
      setJp_answerX_2(false);
      setJp_Btns_disable(false);
      setJp_answer_style("none");
    }, 1000);
  };

  const jp_clickAnswer3 = (e) => {
    clearInterval(jp_timer);
    if (e.target.value == jp_questionData.id) {
      setJp_answerO_3(true);
      setJp_answerX_3(false);
      jp_matchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    } else {
      setJp_answerX_3(true);
      setJp_answerO_3(false);
      jp_mismatchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    }
    setTimeout(() => {
      setJp_seconds(10);
      jp_settingRandom();
      setJp_answerO_3(false);
      setJp_answerX_3(false);
      setJp_Btns_disable(false);
      setJp_answer_style("none");
    }, 1000);
  };

  const jp_clickAnswer4 = (e) => {
    clearInterval(jp_timer);
    if (e.target.value == jp_questionData.id) {
      setJp_answerO_4(true);
      setJp_answerX_4(false);
      jp_matchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    } else {
      setJp_answerX_4(true);
      setJp_answerO_4(false);
      jp_mismatchedData.push(jp_questionData);
      setJp_Btns_disable(true);
      setJp_answer_style("flex");
    }
    setTimeout(() => {
      setJp_seconds(10);
      jp_settingRandom();
      setJp_answerO_4(false);
      setJp_answerX_4(false);
      setJp_Btns_disable(false);
      setJp_answer_style("none");
    }, 1000);
  };

  const jpAnswerDisplayStyle = {
    display: `${jp_answer_style}`,
  };

  const jp_BtnItem = [
    {
      id: 1,
      name_O: jp_answerO_1,
      name_X: jp_answerX_1,
      value: jp_answers[0].id,
      click: jp_clickAnswer1,
      text: jp_answers[0].Japanese,
    },
    {
      id: 2,
      name_O: jp_answerO_2,
      name_X: jp_answerX_2,
      value: jp_answers[1].id,
      click: jp_clickAnswer2,
      text: jp_answers[1].Japanese,
    },
    {
      id: 3,
      name_O: jp_answerO_3,
      name_X: jp_answerX_3,
      value: jp_answers[2].id,
      click: jp_clickAnswer3,
      text: jp_answers[2].Japanese,
    },
    {
      id: 4,
      name_O: jp_answerO_4,
      name_X: jp_answerX_4,
      value: jp_answers[3].id,
      click: jp_clickAnswer4,
      text: jp_answers[3].Japanese,
    },
  ];

  const jp_Btn = jp_BtnItem.map((val, key) => {
    return (
      <button
        className={
          val.name_O === true
            ? "jp_answer_Btn jp_answer_Btn_O_bg"
            : val.name_X === true
            ? "jp_answer_Btn jp_answer_Btn_X_bg"
            : "jp_answer_Btn"
        }
        value={val.value}
        onClick={val.click}
        key={key}
        disabled={jp_Btns_disable}
      >
        {val.id}. {val.text}
      </button>
    );
  });

  return (
    <section className="jp_quiz_page">
      <div className="jp_quiz_container">
        <div className="jp_quiz_top">
          {jp_stop == false ? (
            <span className="jp_remaining_time" onClick={jp_pause}>
              00 : {jp_seconds < 10 ? "0" + jp_seconds : jp_seconds}
            </span>
          ) : (
            <span className="jp_remaining_time" onClick={jp_restart}>
              일시정지
            </span>
          )}
          <button
            className="jp_words_check"
            style={JpWordsCheckStyle}
            onClick={jp_modalToggle}
          >
            출제 단어
          </button>
        </div>
        <div className="jp_quiz_display">
          <div className="jp_question">{jp_questionData.korean}</div>
          <div className="jp_answer" style={jpAnswerDisplayStyle}>
            정답: {jp_questionData.Japanese}
          </div>
        </div>
        <div className="jp_quiz_answers">{jp_Btn}</div>
      </div>
      {jp_modal == true ? (
        <Jp_question_modal
          jp_modalToggle={jp_modalToggle}
          jp_modal_tab={jp_modal_tab}
          setJp_modal_tab={setJp_modal_tab}
          Jp_question_modal_tab={Jp_question_modal_tab}
          jp_matchedData={jp_matchedData}
          jp_mismatchedData={jp_mismatchedData}
          jp_modal_tab_color={jp_modal_tab_color}
          setJp_modal_tab_color={setJp_modal_tab_color}
        />
      ) : null}
    </section>
  );
};

export default jp_quiz;
