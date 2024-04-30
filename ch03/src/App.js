import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import ParentComponent from "./components/ParentComponent";
import PropsComponent from "./components/PropsComponent";
import ChildComponent from "./components/ChildComponent";
import ChildrenComponent from "./components/ChildrenComponent";

function App() {
  return (
    <div className="App">
      <h3>ch03.React component</h3>
      <ClassComponent />
      <FunctionComponent />
      <ParentComponent />
      <PropsComponent subject="props 컴포넌트" message="속성을 갖는 컴포넌트" />
      <ChildrenComponent>
        <p>ChildrenComponent 내용입니다.</p>
      </ChildrenComponent>
    </div>
  );
}

export default App;
