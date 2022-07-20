/* eslint-disable */
import "../css/vocaAdd.css";
import React, { useRef, useEffect } from "react";
import { BsTrash } from "react-icons/bs";

const vocaAdd = ({
  vocaAdd_add_jp,
  setVocaAdd_add_jp,
  vocaAdd_add_yg,
  setVocaAdd_add_yg,
  vocaAdd_add_kr,
  setVocaAdd_add_kr,
  vocaAdd_add_list,
  setVocaAdd_add_list,
}) => {
  const jpInput = (e) => {
    setVocaAdd_add_jp(e.target.value);
  };

  const ygInput = (e) => {
    setVocaAdd_add_yg(e.target.value);
  };

  const krInput = (e) => {
    setVocaAdd_add_kr(e.target.value);
  };

  const vocaAdd_AddRef = useRef();

  const AddList = vocaAdd_add_list.concat([
    {
      id: vocaAdd_add_list.length,
      vocaAdd_add_jp,
      vocaAdd_add_yg,
      vocaAdd_add_kr,
    },
  ]);

  let AddListArray = [];

  const scrollRef = useRef();

  const vocaAdd_AddBtn = (e) => {
    e.preventDefault();
    if (
      vocaAdd_add_jp !== "" &&
      vocaAdd_add_yg !== "" &&
      vocaAdd_add_kr !== ""
    ) {
      AddListArray.push(AddList);
      localStorage.setItem("AddListItems", JSON.stringify(AddListArray));

      setVocaAdd_add_list(AddList);
      setVocaAdd_add_jp("");
      setVocaAdd_add_yg("");
      setVocaAdd_add_kr("");
      vocaAdd_AddRef.current.focus();
      if (AddList.length >= 6) {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      return null;
    }
  };

  useEffect(() => {}, [vocaAdd_add_list]);

  useEffect(() => {
    let LocalList = JSON.parse(localStorage.getItem("AddListItems"));
    if (LocalList) {
      setVocaAdd_add_list(LocalList[0]);
    }
  }, []);

  const vocaAdd_registOrderBtn = () => {
    let vocaAdd_registOrderArray = [...vocaAdd_add_list];
    let vocaAdd_registCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    vocaAdd_registOrderArray.sort(vocaAdd_registCompare("id"));
    setVocaAdd_add_list(vocaAdd_registOrderArray);
  };

  const vocaAdd_JapaneseOrderBtn = () => {
    let vocaAdd_JapaneseOrderArray = [...vocaAdd_add_list];
    let vocaAdd_JapaneseCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    vocaAdd_JapaneseOrderArray.sort(vocaAdd_JapaneseCompare("vocaAdd_add_jp"));
    setVocaAdd_add_list(vocaAdd_JapaneseOrderArray);
  };

  const vocaAdd_yomiganaOrderBtn = () => {
    let vocaAdd_yomiganaOrderArray = [...vocaAdd_add_list];
    let vocaAdd_yomiganaCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    vocaAdd_yomiganaOrderArray.sort(vocaAdd_yomiganaCompare("vocaAdd_add_yg"));
    setVocaAdd_add_list(vocaAdd_yomiganaOrderArray);
  };

  const vocaAdd_koreanOrderBtn = () => {
    let vocaAdd_koreanOrderArray = [...vocaAdd_add_list];
    let vocaAdd_koreanCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    vocaAdd_koreanOrderArray.sort(vocaAdd_koreanCompare("vocaAdd_add_kr"));
    setVocaAdd_add_list(vocaAdd_koreanOrderArray);
  };

  const removeBtn = (id) => {
    const RemoveList = vocaAdd_add_list.filter((item) => item.id !== id);
    AddListArray.push(RemoveList);
    localStorage.setItem("AddListItems", JSON.stringify(AddListArray));
    setVocaAdd_add_list(RemoveList);
  };

  const add_item = vocaAdd_add_list.map((val, key) => {
    return (
      <div className="vocaAdd_card" key={key} ref={scrollRef}>
        <div className="vocaAdd_JapaneseAndyomigana">
          {val.vocaAdd_add_jp} [ {val.vocaAdd_add_yg} ]
        </div>
        <div className="vocaAdd_korean">{val.vocaAdd_add_kr}</div>
        <div className="vocaAdd_remove">
          <BsTrash
            className="vocaAdd_trash"
            onClick={() => removeBtn(val.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <section className="vocaAdd_page">
      <div className="vocaAdd_container">
        <div className="vocaAdd_top_container">
          <form className="vocaAdd_add_box">
            <input
              type="text"
              className="Japanese_add"
              value={vocaAdd_add_jp}
              placeholder="일어 입력"
              onChange={jpInput}
              ref={vocaAdd_AddRef}
            />
            <input
              type="text"
              className="yomigana_add"
              value={vocaAdd_add_yg}
              placeholder="발음 입력"
              onChange={ygInput}
            />
            <input
              type="text"
              className="korean_add"
              value={vocaAdd_add_kr}
              placeholder="뜻 입력"
              onChange={krInput}
            />
            <button className="vocaAdd_add_Btn" onClick={vocaAdd_AddBtn}>
              +
            </button>
          </form>
          <div className="vocaAdd_select_box">
            <ul className="vocaAdd_orderSelect_menu">
              <li>
                <button
                  className="vocaAdd_registBtn"
                  onClick={vocaAdd_registOrderBtn}
                >
                  등록 순
                </button>
              </li>
              <li>
                <button
                  className="vocaAdd_JapaneseBtn"
                  onClick={vocaAdd_JapaneseOrderBtn}
                >
                  일어 순
                </button>
              </li>
              <li>
                <button
                  className="vocaAdd_yomiganaBtn"
                  onClick={vocaAdd_yomiganaOrderBtn}
                >
                  발음 순
                </button>
              </li>
              <li>
                <button
                  className="vocaAdd_koreanBtn"
                  onClick={vocaAdd_koreanOrderBtn}
                >
                  한글 순
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="vocaAdd_botton_container">{add_item}</div>
      </div>
    </section>
  );
};

export default vocaAdd;
