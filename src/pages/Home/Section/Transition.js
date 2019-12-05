import React from "react";
import { Transition } from "zyh";

export default function() {
  return (
    <section>
      <p>transition 组件</p>
      <Transition className="gap-right-5">
        {new Array(10).fill().map((tab, index) => (
          <span key={index}>{index}</span>
        ))}
      </Transition>
      <hr />
    </section>
  );
}
