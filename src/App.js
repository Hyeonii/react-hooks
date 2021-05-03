import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // 리액트 라이프사이클을 이해하면 함수 호출 타이밍을 잘 정할 수 있다
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  // 함수를 호출하는 방법이 참 다양하군
  const titleUpdater = useTitle("Loading...");
  // setTimeout을 사용하여 함수를 실행시킬 시간을 정할 수 있다.
  setTimeout(() => titleUpdater("Home"), 3000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>s
  );
};

export default App;
