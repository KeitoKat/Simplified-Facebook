import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Comment = () => {
  //USE STATE
  const [allComments, setAllComments] = useState([]);
  const [id, setId] = useState("Me");
  const [title, setTitle] = useState("reply");
  const [content, setContent] = useState("Agreed");
  const [comments, setComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  //HANDLER FUCNTION
  const inputHandler = (e) => {
    setComment(e.target.value);
  };
  const likeHandler = () => {
    if (isLiked === false) {
      setIsLiked(true);
      setLikes(likes + 1);
    } else {
      setIsLiked(false);
      if (likes <= 0);
      if (likes > 0) {
        setLikes(likes - 1);
      }
    }
  };

  //FUNCTIONS
  const storeComments = (user, ti, cont, com, li) => {
    if (com === "") {
    } else {
      var makeComments = [
        ...allComments,
        { id: user, title: ti, content: cont, comments: com, likes: li },
      ];
      setAllComments(makeComments);
    }
  };

  console.log(allComments);

  //MAIN CODE
  return (
    <Fragment>
      {/* DISPLAY COMMENTS */}
      <div class="m-4" style={{ color: "#3b5998" }}>
        {allComments.map((e) => {
          if (e.comments === "") {
          } else {
            return (
              <div class="rounded m-2 p-3 text-start">
                <div
                  class="rounded p-2 text-start"
                  style={{
                    backgroundColor: "#D4D8E8",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{e.id} </span>

                  <p>{e.comments}</p>
                </div>
                <span style={{ cursor: "pointer" }}>
                  <p onClick={() => likeHandler()}>
                    {isLiked ? (
                      <div style={{ color: "#3b5998" }}>
                        <span>liked</span>
                        <span class="p-1">{likes}</span>
                      </div>
                    ) : (
                      <div>
                        <span class="p-1">likes</span>
                        <span style={{}}>{likes}</span>
                      </div>
                    )}
                  </p>
                </span>
              </div>
            );
          }
        })}
      </div>

      {/* COMMENT BOX */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          storeComments(id, title, content, comments, likes);
        }}
      >
        <div class="m-3">
          <div class="form-floating m-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "10rem" }}
              onChange={(e) => inputHandler(e)}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
            <button class="btn btn-primary m-3" type="submit" value="Submit">
              Comment
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Comment;
