/* eslint-disable */
import "../css/words.css";
import React, { useRef, useEffect } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const Words = ({
  words_search,
  setWords_search,
  words_data,
  setWords_data,
  words_bookmark,
  setWords_bookmark,
  words_bookmark_list,
  setWords_bookmark_list,
}) => {
  const words_searchOnchange = (e) => {
    setWords_search(e.target.value);
  };

  const words_search_clear = () => {
    setWords_search("");
    words_input_Ref.current.focus();
  };

  const words_input_Ref = useRef();

  const words_registOrderBtn = () => {
    let words_registOrderArray = [...words_data];
    let words_registCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    words_registOrderArray.sort(words_registCompare("id"));
    setWords_data(words_registOrderArray);
  };

  const words_JapaneseOrderBtn = () => {
    let words_JapaneseOrderArray = [...words_data];
    let words_JapaneseCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    words_JapaneseOrderArray.sort(words_JapaneseCompare("Japanese"));
    setWords_data(words_JapaneseOrderArray);
  };

  const words_yomiganaOrderBtn = () => {
    let words_yomiganaOrderArray = [...words_data];
    let words_yomiganaCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    words_yomiganaOrderArray.sort(words_yomiganaCompare("yomigana"));
    setWords_data(words_yomiganaOrderArray);
  };

  const words_koreanOrderBtn = () => {
    let words_koreanOrderArray = [...words_data];
    let words_koreanCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    words_koreanOrderArray.sort(words_koreanCompare("korean"));
    setWords_data(words_koreanOrderArray);
  };

  const words_ordersSelect = (e) => {
    let words_seleced = e.target.value;
    if (words_seleced == "words_regist") {
      words_registOrderBtn();
    } else if (words_seleced == "words_Japanese") {
      words_JapaneseOrderBtn();
    } else if (words_seleced == "words_yomigana") {
      words_yomiganaOrderBtn();
    } else if (words_seleced == "words_korean") {
      words_koreanOrderBtn();
    }
  };

  const words_words = words_data
    .filter((val) => {
      if (words_search == "") {
        return val;
      } else if (
        val.Japanese.includes(words_search) ||
        val.yomigana.includes(words_search) ||
        val.korean.includes(words_search)
      ) {
        return val;
      }
    })
    .map((val, key) => {
      return (
        <div className="words_card" key={key}>
          <div className="words_card_bookmark">
            <BsFillBookmarkPlusFill
              className={
                words_bookmark[val.id] == 0
                  ? "words_bookmark_icon"
                  : "words_bookmark_icon words_bookmark_checked"
              }
              onClick={(id) => {
                const BookmarkList = {
                  id: val.id,
                  Japanese: val.Japanese,
                  yomigana: val.yomigana,
                  korean: val.korean,
                };
                let BookmarkCopy = [...words_bookmark];
                if (BookmarkCopy[val.id] == 0) {
                  BookmarkCopy[val.id] = BookmarkCopy[val.id] + 1;
                  setWords_bookmark(BookmarkCopy);
                  words_bookmark_list.push(BookmarkList);
                  localStorage.setItem(
                    "AddBookmarkList",
                    JSON.stringify(words_bookmark_list)
                  );
                } else if (BookmarkCopy[val.id] == 1) {
                  BookmarkCopy[val.id] = BookmarkCopy[val.id] - 1;
                  setWords_bookmark(BookmarkCopy);
                  BookmarkRemove(val.id);
                }
              }}
            ></BsFillBookmarkPlusFill>
          </div>
          <div className="words_JapaneseAndyomigana">
            {val.Japanese} [ {val.yomigana} ]
          </div>
          <div className="words_korean">{val.korean}</div>
        </div>
      );
    });

  // useEffect(() => {}, [words_bookmark_list]);

  // useEffect(() => {
  //   let LocalBookmarkList = JSON.parse(localStorage.getItem("AddBookmarkList"));
  //   if (LocalBookmarkList) {
  //     setWords_bookmark_list(LocalBookmarkList[0]);
  //   }
  // }, [words_bookmark_list]);

  const BookmarkRemove = (id) => {
    const filterArray = words_bookmark_list.filter((item) => item.id !== id);
    localStorage.setItem(
      "AddBookmarkList",
      JSON.stringify(words_bookmark_list)
    );
    setWords_bookmark_list(filterArray);
  };

  return (
    <section className="words_page">
      <div className="words_container">
        <div className="words_top_container">
          <div className="words_top_left">
            <div className="words_input_wrap">
              <input
                type="text"
                className="words_search"
                name="search"
                placeholder="검색할 단어"
                value={words_search}
                onChange={words_searchOnchange}
                ref={words_input_Ref}
              />
              <TiDelete
                className="words_delete_icon"
                onClick={words_search_clear}
              />
            </div>
          </div>
          <div className="words_top_right">
            <select className="words_orders" onChange={words_ordersSelect}>
              <option value="words_regist">등록 순</option>
              <option value="words_Japanese">일어 순</option>
              <option value="words_yomigana">발음 순</option>
              <option value="words_korean">한글 순</option>
            </select>
          </div>
        </div>
        <div className="words_botton_container">{words_words}</div>
      </div>
    </section>
  );
};

export default Words;
