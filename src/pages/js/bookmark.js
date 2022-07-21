/* eslint-disable */
import "../css/bookmark.css";
import React, { useRef } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const bookmark = ({
  bookmark_search,
  setBookmark_search,
  words_bookmark,
  setWords_bookmark,
  words_bookmark_list,
  setWords_bookmark_list,
}) => {
  const bookmark_searchOnchange = (e) => {
    setBookmark_search(e.target.value);
  };

  const bookmark_search_clear = () => {
    setBookmark_search("");
    bookmark_input_Ref.current.focus();
  };

  const bookmark_input_Ref = useRef();

  const bookmark_registOrderBtn = () => {
    let bookmark_registOrderArray = [...words_bookmark_list];
    let bookmark_registCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    bookmark_registOrderArray.sort(bookmark_registCompare("id"));
    setWords_bookmark_list(bookmark_registOrderArray);
  };

  const bookmark_JapaneseOrderBtn = () => {
    let bookmark_JapaneseOrderArray = [...words_bookmark_list];
    let bookmark_JapaneseCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    bookmark_JapaneseOrderArray.sort(bookmark_JapaneseCompare("Japanese"));
    setWords_bookmark_list(bookmark_JapaneseOrderArray);
  };

  const bookmark_yomiganaOrderBtn = () => {
    let bookmark_yomiganaOrderArray = [...words_bookmark_list];
    let bookmark_yomiganaCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    bookmark_yomiganaOrderArray.sort(bookmark_yomiganaCompare("yomigana"));
    setWords_bookmark_list(bookmark_yomiganaOrderArray);
  };

  const bookmark_koreanOrderBtn = () => {
    let bookmark_koreanOrderArray = [...words_bookmark_list];
    let bookmark_koreanCompare = (key) => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    bookmark_koreanOrderArray.sort(bookmark_koreanCompare("korean"));
    setWords_bookmark_list(bookmark_koreanOrderArray);
  };

  const bookmark_ordersSelect = (e) => {
    let bookmark_seleced = e.target.value;
    if (bookmark_seleced == "bookmark_regist") {
      bookmark_registOrderBtn();
    } else if (bookmark_seleced == "bookmark_Japanese") {
      bookmark_JapaneseOrderBtn();
    } else if (bookmark_seleced == "bookmark_yomigana") {
      bookmark_yomiganaOrderBtn();
    } else if (bookmark_seleced == "bookmark_korean") {
      bookmark_koreanOrderBtn();
    }
  };

  const bookmarkItem = words_bookmark_list
    .filter((val) => {
      if (bookmark_search == "") {
        return val;
      } else if (
        val.Japanese.includes(bookmark_search) ||
        val.yomigana.includes(bookmark_search) ||
        val.korean.includes(bookmark_search)
      ) {
        return val;
      }
    })
    .map((val, key) => {
      return (
        <div className="bookmark_card" key={key}>
          <div className="bookmark_card_bookmark">
            <BsFillBookmarkPlusFill
              className={
                words_bookmark[val.id] == 0
                  ? "bookmark_bookmark_icon"
                  : "bookmark_bookmark_icon bookmark_bookmark_checked"
              }
              onClick={() => {
                const BookmarkList = words_bookmark_list.concat([
                  {
                    id: words_bookmark_list.length,
                    Japanese: val.Japanese,
                    yomigana: val.yomigana,
                    korean: val.korean,
                  },
                ]);
                let AddBookmarkListArray = [];

                const BookmarkRemove = (id) => {
                  const BookmarkRemoveList = words_bookmark_list.filter(
                    (item) => item.id !== id
                  );
                  AddBookmarkListArray.push(BookmarkRemoveList);
                  setWords_bookmark_list(BookmarkRemoveList);
                };

                let BookmarkCopy = [...words_bookmark];
                if (BookmarkCopy[val.id] == 0) {
                  BookmarkCopy[val.id] = BookmarkCopy[val.id] + 1;
                  setWords_bookmark(BookmarkCopy);

                  setWords_bookmark_list(BookmarkList);
                } else if (BookmarkCopy[val.id] == 1) {
                  BookmarkCopy[val.id] = BookmarkCopy[val.id] - 1;
                  setWords_bookmark(BookmarkCopy);
                  BookmarkRemove(val.id);
                }
              }}
            ></BsFillBookmarkPlusFill>
          </div>

          <div className="bookmark_JapaneseAndyomigana">
            {val.Japanese} [ {val.yomigana} ]
          </div>
          <div className="bookmark_korean">{val.korean}</div>
        </div>
      );
    });

  return (
    <section className="bookmark_page">
      <div className="bookmark_container">
        <div className="bookmark_top_container">
          <div className="bookmark_top_left">
            <div className="bookmark_input_wrap">
              <input
                type="text"
                className="bookmark_search"
                name="search"
                placeholder="검색할 단어"
                value={bookmark_search}
                onChange={bookmark_searchOnchange}
                ref={bookmark_input_Ref}
              />
              <TiDelete
                className="bookmark_delete_icon"
                onClick={bookmark_search_clear}
              />
            </div>
          </div>
          <div className="bookmark_top_right">
            <select
              className="bookmark_orders"
              onChange={bookmark_ordersSelect}
            >
              <option value="bookmark_regist">등록 순</option>
              <option value="bookmark_Japanese">일어 순</option>
              <option value="bookmark_yomigana">발음 순</option>
              <option value="bookmark_korean">한글 순</option>
            </select>
          </div>
        </div>
        <div className="bookmark_botton_container">{bookmarkItem}</div>
      </div>
    </section>
  );
};

export default bookmark;
