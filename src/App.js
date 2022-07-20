/* eslint-disable */
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/js/sidebar.js";
import Main from "./pages/js/main.js";
import Words from "./pages/js/words.js";
import Jpt_datas from "./data/jpt.json";
import Bookmark from "./pages/js/bookmark.js";
import VocaAdd from "./pages/js/vocaAdd.js";
import Quiz from "./pages/js/quiz.js";
import Jp_Quiz from "./pages/js/jp_quiz.js";
import Jp_question_modal from "./component/js/jp_question_modal.js";
import Jp_question_modal_tab from "./component/js/jp_question_modal_tab.js";
import Kr_Quiz from "./pages/js/kr_quiz.js";
import Kr_question_modal from "./component/js/kr_question_modal.js";
import Kr_question_modal_tab from "./component/js/kr_question_modal_tab.js";
import Login from "./pages/js/login.js";

const App = () => {
  const [sidebarClick, setSidebarClick] = useState(false);
  const [sidebarTransform, setSidebarTransform] = useState(75);

  const [words_search, setWords_search] = useState("");
  const [words_data, setWords_data] = useState(Jpt_datas);
  const [words_bookmark, setWords_bookmark] = useState(
    Array(Jpt_datas.length).fill(0)
  );
  const [words_bookmark_list, setWords_bookmark_list] = useState([]);

  const [bookmark_search, setBookmark_search] = useState("");

  const [vocaAdd_add_jp, setVocaAdd_add_jp] = useState("");
  const [vocaAdd_add_yg, setVocaAdd_add_yg] = useState("");
  const [vocaAdd_add_kr, setVocaAdd_add_kr] = useState("");
  const [vocaAdd_add_list, setVocaAdd_add_list] = useState([]);

  const [jp_seconds, setJp_seconds] = useState(10);
  const [jp_matchedData, setJp_matchedData] = useState([]);
  const [jp_mismatchedData, setJp_mismatchedData] = useState([]);
  const [jp_stop, setJp_stop] = useState(false);
  const [jp_modal, setJp_modal] = useState(false);
  const [jp_modal_tab, setJp_modal_tab] = useState(0);
  const [jp_modal_tab_color, setJp_modal_tab_color] = useState("curr");
  const [jp_questionData, setJp_questionData] = useState({
    id: "",
    Japanese: "",
    yomigana: "",
    korean: "",
  });
  const [jp_answer_style, setJp_answer_style] = useState("none");
  const [jp_answers, setJp_answers] = useState([0, 0, 0, 0]);
  const jp_settingRandom = () => {
    let RandomArray = [];

    for (let a = 0; a < 4; a++) {
      let random = Math.floor(Math.random() * words_data.length);
      if (RandomArray.includes(random)) {
        a--;
      } else {
        RandomArray.push(random);
      }
    }
    let randomnNumber = Math.floor(Math.random() * 4);

    let question = words_data[RandomArray[randomnNumber]];

    setJp_questionData({
      id: question.id,
      Japanese: question.Japanese,
      yomigana: question.yomigana,
      korean: question.korean,
    });

    setJp_answers([
      {
        id: words_data[RandomArray[0]].id,
        Japanese: words_data[RandomArray[0]].Japanese,
      },
      {
        id: words_data[RandomArray[1]].id,
        Japanese: words_data[RandomArray[1]].Japanese,
      },
      {
        id: words_data[RandomArray[2]].id,
        Japanese: words_data[RandomArray[2]].Japanese,
      },
      {
        id: words_data[RandomArray[3]].id,
        Japanese: words_data[RandomArray[3]].Japanese,
      },
    ]);
  };
  const [jp_words_check_style, setJp_words_check_style] = useState("none");
  const [jp_answerO_1, setJp_answerO_1] = useState(false);
  const [jp_answerX_1, setJp_answerX_1] = useState(false);
  const [jp_answerO_2, setJp_answerO_2] = useState(false);
  const [jp_answerX_2, setJp_answerX_2] = useState(false);
  const [jp_answerO_3, setJp_answerO_3] = useState(false);
  const [jp_answerX_3, setJp_answerX_3] = useState(false);
  const [jp_answerO_4, setJp_answerO_4] = useState(false);
  const [jp_answerX_4, setJp_answerX_4] = useState(false);
  const [jp_Btns_disable, setJp_Btns_disable] = useState(false);

  const [kr_seconds, setKr_seconds] = useState(10);
  const [kr_matchedData, setKr_matchedData] = useState([]);
  const [kr_mismatchedData, setKr_mismatchedData] = useState([]);
  const [kr_stop, setKr_stop] = useState(false);
  const [kr_modal, setKr_modal] = useState(false);
  const [kr_modal_tab, setKr_modal_tab] = useState(0);
  const [kr_modal_tab_color, setKr_modal_tab_color] = useState("curr");
  const [kr_questionData, setKr_questionData] = useState({
    id: "",
    Japanese: "",
    yomigana: "",
    korean: "",
  });
  const [kr_answer_style, setKr_answer_style] = useState("none");
  const [kr_answers, setKr_answers] = useState([0, 0, 0, 0]);
  const kr_settingRandom = () => {
    let RandomArray = [];

    for (let a = 0; a < 4; a++) {
      let random = Math.floor(Math.random() * words_data.length);
      if (RandomArray.includes(random)) {
        a--;
      } else {
        RandomArray.push(random);
      }
    }
    let randomnNumber = Math.floor(Math.random() * 4);

    let question = words_data[RandomArray[randomnNumber]];

    setKr_questionData({
      id: question.id,
      Japanese: question.Japanese,
      yomigana: question.yomigana,
      korean: question.korean,
    });

    setKr_answers([
      {
        id: words_data[RandomArray[0]].id,
        korean: words_data[RandomArray[0]].korean,
      },
      {
        id: words_data[RandomArray[1]].id,
        korean: words_data[RandomArray[1]].korean,
      },
      {
        id: words_data[RandomArray[2]].id,
        korean: words_data[RandomArray[2]].korean,
      },
      {
        id: words_data[RandomArray[3]].id,
        korean: words_data[RandomArray[3]].korean,
      },
    ]);
  };
  const [kr_words_check_style, setKr_words_check_style] = useState("none");
  const [kr_answerO_1, setKr_answerO_1] = useState(false);
  const [kr_answerX_1, setKr_answerX_1] = useState(false);
  const [kr_answerO_2, setKr_answerO_2] = useState(false);
  const [kr_answerX_2, setKr_answerX_2] = useState(false);
  const [kr_answerO_3, setKr_answerO_3] = useState(false);
  const [kr_answerX_3, setKr_answerX_3] = useState(false);
  const [kr_answerO_4, setKr_answerO_4] = useState(false);
  const [kr_answerX_4, setKr_answerX_4] = useState(false);
  const [kr_Btns_disable, setKr_Btns_disable] = useState(false);

  const login_user_info = {
    name: "이진영",
    email: "test@naver.com",
    password: "test123",
  };
  const [login_details, setLogin_details] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login_user, setLogin_user] = useState({ name: "", email: "" });
  const [login_error, setLogin_error] = useState("");
  const login_in = (login_details) => {
    if (
      login_details.email == login_user_info.email &&
      login_details.password == login_user_info.password
    ) {
      setLogin_user({
        name: login_details.name,
        email: login_details.email,
      });
    } else {
      setLogin_error("아이디 또는 비밀번호가 일치하지 않습니다");
    }
  };

  const login_out = () => {
    setLogin_user({
      name: "",
      email: "",
    });
    setLogin_details({
      name: "",
      email: "",
      password: "",
    });
    setLogin_error("");
  };

  return (
    <section className="App">
      <Sidebar
        sidebarClick={sidebarClick}
        setSidebarClick={setSidebarClick}
        sidebarTransform={sidebarTransform}
        setSidebarTransform={setSidebarTransform}
        login_out={login_out}
      />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/words"
          element={
            <Words
              words_data={words_data}
              setWords_data={setWords_data}
              words_search={words_search}
              setWords_search={setWords_search}
              words_bookmark={words_bookmark}
              setWords_bookmark={setWords_bookmark}
              words_bookmark_list={words_bookmark_list}
              setWords_bookmark_list={setWords_bookmark_list}
            />
          }
        />

        <Route
          path="/bookmark"
          element={
            <Bookmark
              bookmark_search={bookmark_search}
              setBookmark_search={setBookmark_search}
              words_bookmark={words_bookmark}
              setWords_bookmark={setWords_bookmark}
              words_bookmark_list={words_bookmark_list}
              setWords_bookmark_list={setWords_bookmark_list}
            />
          }
        />

        <Route
          path="/vocaAdd"
          element={
            <VocaAdd
              vocaAdd_add_jp={vocaAdd_add_jp}
              setVocaAdd_add_jp={setVocaAdd_add_jp}
              vocaAdd_add_yg={vocaAdd_add_yg}
              setVocaAdd_add_yg={setVocaAdd_add_yg}
              vocaAdd_add_kr={vocaAdd_add_kr}
              setVocaAdd_add_kr={setVocaAdd_add_kr}
              vocaAdd_add_list={vocaAdd_add_list}
              setVocaAdd_add_list={setVocaAdd_add_list}
            />
          }
        />

        <Route
          path="/quiz"
          element={
            <Quiz
              jp_settingRandom={jp_settingRandom}
              setJp_stop={setJp_stop}
              setJp_seconds={setJp_seconds}
              setJp_words_check_style={setJp_words_check_style}
              jp_matchedData={jp_matchedData}
              setJp_matchedData={setJp_matchedData}
              jp_mismatchedData={jp_mismatchedData}
              setJp_mismatchedData={setJp_mismatchedData}
              kr_settingRandom={kr_settingRandom}
              setKr_stop={setKr_stop}
              setKr_seconds={setKr_seconds}
              setKr_words_check_style={setKr_words_check_style}
              kr_matchedData={kr_matchedData}
              setKr_matchedData={setKr_matchedData}
              kr_mismatchedData={kr_mismatchedData}
              setKr_mismatchedData={setKr_mismatchedData}
            />
          }
        />

        <Route
          path="/quiz/jp_quiz"
          element={
            <Jp_Quiz
              jp_seconds={jp_seconds}
              setJp_seconds={setJp_seconds}
              jp_words_check_style={jp_words_check_style}
              setJp_words_check_style={setJp_words_check_style}
              jp_matchedData={jp_matchedData}
              jp_mismatchedData={jp_mismatchedData}
              jp_questionData={jp_questionData}
              Jp_question_modal={Jp_question_modal}
              Jp_question_modal_tab={Jp_question_modal_tab}
              jp_modal={jp_modal}
              setJp_modal={setJp_modal}
              jp_modal_tab={jp_modal_tab}
              setJp_modal_tab={setJp_modal_tab}
              jp_stop={jp_stop}
              setJp_stop={setJp_stop}
              jp_answer_style={jp_answer_style}
              setJp_answer_style={setJp_answer_style}
              jp_answers={jp_answers}
              jp_settingRandom={jp_settingRandom}
              jp_answerO_1={jp_answerO_1}
              setJp_answerO_1={setJp_answerO_1}
              jp_answerX_1={jp_answerX_1}
              setJp_answerX_1={setJp_answerX_1}
              jp_answerO_2={jp_answerO_2}
              setJp_answerO_2={setJp_answerO_2}
              jp_answerX_2={jp_answerX_2}
              setJp_answerX_2={setJp_answerX_2}
              jp_answerO_3={jp_answerO_3}
              setJp_answerO_3={setJp_answerO_3}
              jp_answerX_3={jp_answerX_3}
              setJp_answerX_3={setJp_answerX_3}
              jp_answerO_4={jp_answerO_4}
              setJp_answerO_4={setJp_answerO_4}
              jp_answerX_4={jp_answerX_4}
              setJp_answerX_4={setJp_answerX_4}
              jp_Btns_disable={jp_Btns_disable}
              setJp_Btns_disable={setJp_Btns_disable}
              jp_modal_tab_color={jp_modal_tab_color}
              setJp_modal_tab_color={setJp_modal_tab_color}
            />
          }
        />

        <Route
          path="/quiz/kr_quiz"
          element={
            <Kr_Quiz
              kr_seconds={kr_seconds}
              setKr_seconds={setKr_seconds}
              kr_words_check_style={kr_words_check_style}
              setKr_words_check_style={setKr_words_check_style}
              kr_matchedData={kr_matchedData}
              kr_mismatchedData={kr_mismatchedData}
              kr_questionData={kr_questionData}
              Kr_question_modal={Kr_question_modal}
              Kr_question_modal_tab={Kr_question_modal_tab}
              kr_modal={kr_modal}
              setKr_modal={setKr_modal}
              kr_modal_tab={kr_modal_tab}
              setKr_modal_tab={setKr_modal_tab}
              kr_stop={kr_stop}
              setKr_stop={setKr_stop}
              kr_answer_style={kr_answer_style}
              setKr_answer_style={setKr_answer_style}
              kr_answers={kr_answers}
              kr_settingRandom={kr_settingRandom}
              kr_answerO_1={kr_answerO_1}
              setKr_answerO_1={setKr_answerO_1}
              kr_answerX_1={kr_answerX_1}
              setKr_answerX_1={setKr_answerX_1}
              kr_answerO_2={kr_answerO_2}
              setKr_answerO_2={setKr_answerO_2}
              kr_answerX_2={kr_answerX_2}
              setKr_answerX_2={setKr_answerX_2}
              kr_answerO_3={kr_answerO_3}
              setKr_answerO_3={setKr_answerO_3}
              kr_answerX_3={kr_answerX_3}
              setKr_answerX_3={setKr_answerX_3}
              kr_answerO_4={kr_answerO_4}
              setKr_answerO_4={setKr_answerO_4}
              kr_answerX_4={kr_answerX_4}
              setKr_answerX_4={setKr_answerX_4}
              kr_Btns_disable={kr_Btns_disable}
              setKr_Btns_disable={setKr_Btns_disable}
              kr_modal_tab_color={kr_modal_tab_color}
              setKr_modal_tab_color={setKr_modal_tab_color}
            />
          }
        />

        <Route
          path="/jpt_words"
          element={
            <Login
              login_user={login_user}
              login_in={login_in}
              login_out={login_out}
              login_error={login_error}
              login_details={login_details}
              setLogin_details={setLogin_details}
              login_user_info={login_user_info}
            />
          }
        />
      </Routes>
    </section>
  );
};

export default App;
