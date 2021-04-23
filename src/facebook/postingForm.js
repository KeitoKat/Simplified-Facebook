import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";

const Post = () => {
  //USESTATE
  const [data, setAllData] = useState([
    {
      id: "",
      title: "",
      content: "",
      comments: "",
      likes: ""
    }
  ]);
  const [userPost, setUserPost] = useState([{ title: "", main: "" }]);
  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");
  // const [isUploaded, setIsUploaded] = useState(false);
  //USE EFFECT
  useEffect(() => Fetch(), []);

  //AXIOS FUNCTIONS
  const Fetch = async () => {
    var info = await axios.get(
      "https://vew7u.sse.codesandbox.io/posts?fbclid=IwAR1lj47rLrAzzSq6otstDUrFVZfASrG7yPDPkMe0bUk-OUj00S0l3KhVNF4"
    );
    setAllData(info.data);
  };

  //HANDLER FUNCTION
  const InfoHandler = (e, setInfo) => {
    setInfo(e.target.value);
  };
  console.log(userPost);
  //FUNCTIONS
  const MakePost = (ti, ma) => {
    var makePost = [...userPost, { title: ti, main: ma }];
    setUserPost(makePost);
    // setIsUploaded(true);
    alert("posted");
  };

  //MAIN CODE
  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          MakePost(title, main);
        }}
      >
        {/* EMAIL */}
        <div class="m-3">
          <div class="form-floating m-3">
            <input
              class="form-control"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
              onChange={(e) => InfoHandler(e, setTitle)}
            />
            <label for="floatingTextarea2">Title</label>
          </div>
        </div>
        {/* MAINPOST */}
        <div class="m-3">
          <div class="form-floating m-3">
            <textarea
              class="form-control"
              placeholder="Add a new post"
              id="floatingTextarea2"
              style={{ height: "10rem" }}
              onChange={(e) => InfoHandler(e, setMain)}
            ></textarea>
            <label for="floatingTextarea2">Add a new post</label>
          </div>
          <button class="btn btn-primary m-3" type="submit" value="Submit">
            Post
          </button>
        </div>
        {/* DISPLAY POSTS */}
        <div class="m-4">
          {userPost.map((e) => {
            if (e.title === "") {
            } else {
              return (
                <div
                  class="rounded m-2 p-3 text-start text-white"
                  style={{
                    backgroundColor: "#3b5998"
                  }}
                >
                  <h1>{e.title}</h1>
                  <p>{e.main}</p>
                </div>
              );
            }
          })}
        </div>
        {/* REDIRECT */}
        {/* {isUploaded ? <Redirect to="/feed" /> : null} */}
      </form>
    </Fragment>
  );
};

export default Post;
