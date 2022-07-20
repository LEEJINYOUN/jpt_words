/* eslint-disable */
import "../css/kr_question_modal_tab.css";
import React from "react";

const kr_modal_tab = ({ kr_modal_tab, kr_matchedData, kr_mismatchedData }) => {
  const kr_matchedDataCopy = [...kr_matchedData];
  const kr_matchedmap = new Map();
  for (const character of kr_matchedDataCopy) {
    kr_matchedmap.set(JSON.stringify(character), character);
  }
  const kr_UniqueMatchedData = [...kr_matchedmap.values()];

  const kr_matchedDataItems = kr_UniqueMatchedData.map((val, key) => {
    return (
      <div className="kr_modal_card kr_O_bg" key={key}>
        <div className="kr_modal_JapaneseAndyomigana">
          {val.Japanese}[{val.yomigana}]
        </div>
        <div className="kr_modal_korean">{val.korean}</div>
      </div>
    );
  });

  const kr_mismatchedDataCopy = [...kr_mismatchedData];
  const kr_mismatchedmap = new Map();
  for (const character of kr_mismatchedDataCopy) {
    kr_mismatchedmap.set(JSON.stringify(character), character);
  }
  const kr_UniqueMisMatchedData = [...kr_mismatchedmap.values()];

  const kr_mismatchedDataItems = kr_UniqueMisMatchedData.map((val, key) => {
    return (
      <div className="kr_modal_card kr_X_bg" key={key}>
        <div className="kr_modal_JapaneseAndyomigana">
          {val.Japanese}[{val.yomigana}]
        </div>
        <div className="kr_modal_korean">{val.korean}</div>
      </div>
    );
  });

  return (
    <section className="kr_modal_tab_page">
      {
        [<> {kr_matchedDataItems}</>, <> {kr_mismatchedDataItems}</>][
          kr_modal_tab
        ]
      }
    </section>
  );
};

export default kr_modal_tab;
