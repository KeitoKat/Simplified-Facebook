//PATH-FINDER
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//FOLDERS-files
import LogIn from "./signin/login";
import SignUp from "./signin/signup";
import Feed from "./facebook/facebookFeed";
import Comment from "./facebook/comment";
import Post from "./facebook/postingForm";

export default function App() {
  const AllPaths = [
    {
      name: "Log In",
      path: "/login",
      component: LogIn
    },
    { name: "Sign Up", path: "/signup", component: SignUp },
    { name: "Feed", path: "/feed", component: Feed },
    { name: "Post", path: "/mainpage", component: Post },
    { name: "Comment", path: "/comment", component: Comment }
  ];

  return (
    <Router>
      {AllPaths.map((e) => (
        <Route path={e.path} component={e.component} />
      ))}

      <footer>
        <ol class="d-flex flex-row m-0" style={{ textDecoration: "none" }}>
          {AllPaths.map((e) => {
            return (
              <nav class="d-flex flex-row m-3">
                <Link
                  to={e.path}
                  style={{ textDecoration: "none", fontSize: "small" }}
                >
                  {e.name}
                </Link>
              </nav>
            );
          })}
        </ol>
      </footer>
    </Router>
  );
}
