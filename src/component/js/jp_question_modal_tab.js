/* eslint-disable */
import "../css/jp_question_modal_tab.css";
import React from "react";

const jp_modal_tab = ({ jp_modal_tab, jp_matchedData, jp_mismatchedData }) => {
  const jp_matchedDataCopy = [...jp_matchedData];
  const jp_matchedmap = new Map();
  for (const character of jp_matchedDataCopy) {
    jp_matchedmap.set(JSON.stringify(character), character);
  }
  const jp_UniqueMatchedData = [...jp_matchedmap.values()];

  const jp_matchedDataItems = jp_UniqueMatchedData.map((val, key) => {
    return (
      <div className="jp_modal_card jp_O_bg" key={key}>
        <div className="jp_modal_JapaneseAndyomigana">
          {val.Japanese} [ {val.yomigana} ]
        </div>
        <div className="jp_modal_korean">{val.korean}</div>
      </div>
    );
  });

  const jp_mismatchedDataCopy = [...jp_mismatchedData];
  const jp_mismatchedmap = new Map();
  for (const character of jp_mismatchedDataCopy) {
    jp_mismatchedmap.set(JSON.stringify(character), character);
  }
  const jp_UniqueMisMatchedData = [...jp_mismatchedmap.values()];

  const jp_mismatchedDataItems = jp_UniqueMisMatchedData.map((val, key) => {
    return (
      <div className="jp_modal_card jp_X_bg" key={key}>
        <div className="jp_modal_JapaneseAndyomigana">
          {val.Japanese} [ {val.yomigana} ]
        </div>
        <div className="jp_modal_korean">{val.korean}</div>
      </div>
    );
  });

  return (
    <section className="jp_modal_tab_page">
      {
        [<> {jp_matchedDataItems}</>, <> {jp_mismatchedDataItems}</>][
          jp_modal_tab
        ]
      }
    </section>
  );
};

export default jp_modal_tab;
