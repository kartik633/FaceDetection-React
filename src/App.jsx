import "./app.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="newPostCard">
        <div className="addPost">
          <img
            src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
          <div className="postForm">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="postInput"
            />
            <label htmlFor="file">
              
            </label>
            <input id="file" style={{display:"none"}} type="file" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
