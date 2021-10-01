import './App.css';
import Postlist from "./API/Postlist";
import PostForm from "./API/PostForm";

function App() {
  return (
    <div className="App">
      <PostForm></PostForm>
      <Postlist></Postlist>
    </div>
  );
}

export default App;
