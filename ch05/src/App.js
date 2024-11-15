import logo from "./logo.svg";
import "./App.css";
import Main from "./components/sub1/Main";
import { BrowserRouter } from "react-router-dom";
import OutletMain from "./components/sub2/OutletMain";
import ParamsMain from "./components/sub3/ParamsMain";
/*
  날짜 : 2024/11/13
  이름 : 이도영
  내용 : ch05.리액트 라우터 실습
*/
function App() {
  return (
    <div className="App">
      <h3>ch05.React Router</h3>

      <h4>Router 기본</h4>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <hr />

      <h4>Router Outlet</h4>
      <BrowserRouter>
        <OutletMain />
      </BrowserRouter>
      <hr />

      <h4>Router 데이터 전송</h4>
      <BrowserRouter>
        <ParamsMain />
      </BrowserRouter>
      <hr />

      <h4>사용자 정의 Router</h4>
    </div>
  );
}

export default App;
