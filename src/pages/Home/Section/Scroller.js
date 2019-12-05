import React, { useState, useEffect } from "react";
import { ScrollView } from "zyh";
const { ReachBorder, PullDownRefresh } = ScrollView;

const fakeData = new Array(74).fill().map((x, i) => i);

export default function() {
  const [list, setList] = useState([]);
  const [state, setState] = useState("WAIT");
  const [pageSize] = useState(15);
  const [pageNo, setPageNo] = useState(0);

  function handleReachBottom() {
    updateData(pageNo + 1);
  }

  function updateData(page) {
    if (state !== "WAIT") return;
    setState("LOADING");
    loadData(page, newList => {
      if (newList.length < pageSize) {
        setState("EMPTY");
      } else {
        setState("WAIT");
      }
      setList(list.concat(newList));
      setPageNo(page);
    });
  }

  function loadData(page, callback) {
    if (state !== "WAIT") return;
    setTimeout(() => {
      const newList = fakeData.slice(pageNo * pageSize, page * pageSize);
      callback && callback(newList);
    }, 1e3);
  }

  useEffect(() => {
    handleReachBottom(pageNo + 1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section>
      <p>scroll-view 组件</p>
      <div className="scroller-wrap" style={{ height: "200px" }}>
        <ScrollView className="gap-right-5">
          <ReachBorder
            lowerThreshold={50}
            scrolltolower={handleReachBottom}
          >
            <PullDownRefresh>
              {list.fill().map((x, i) => (
                <div key={i}>{i}</div>
              ))}
              {state === "LOADING" && <p>loading...</p>}
              {state === "EMPTY" && <p>到底了</p>}
            </PullDownRefresh>
          </ReachBorder>
        </ScrollView>
      </div>
      <hr />
    </section>
  );
}
