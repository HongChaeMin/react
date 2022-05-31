import React from "react";
import Hello from "./Jsx";

function App() {
  // 꼭 감싸져야하는 태그
  //두가 이상의 태그는 무조건 하나의 태그로 감싸져있어야한다
  return (
    // Fragment : 단순히 감싸기 용으로 태그를 이용해야 할 때 사용
    <>
      <Hello />
      <Hello />
      <Hello />
    </>
  );
}

export default App;
