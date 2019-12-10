import React, { useState } from "react";
import { Tabs } from "components/ZYH";
const { TabPane } = Tabs;

export default function() {
  const [tabs, setTabs] = useState(new Array(30).fill().map((x, i) => i));

  const addTab = () => {
    const newTabs = tabs.concat(tabs.length);
    setTabs(newTabs);
  };

  return (
    <section>
      <p>tabs 组件</p>
      <Tabs active="1">
        <TabPane tab="tab 1" name="1">
          1111111111111
        </TabPane>
        <TabPane tab="tab 2" name="2">
          2222222222222222222222
        </TabPane>
      </Tabs>
      <Tabs active={0} sider={<button onClick={addTab}>添加</button>}>
        {tabs.map(tab => (
          <TabPane tab={tab} name={tab} key={tab}>
            当前 tab 为 {tab}
          </TabPane>
        ))}
      </Tabs>
      <hr />
    </section>
  );
}
