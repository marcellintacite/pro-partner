import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Accueil from "./Pages/Accueil/Accueil";
import { useEffect, useState } from "react";
import Protected from "./Components/Protected";
import MailVerification from "./Pages/MailVerification/MailVerification";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [Cuser, setUser] = useState(undefined);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      setIsSignedIn(false);
    } else {
      setIsSignedIn(true);
      setUser(user);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} />} />
        <Route path="/login" element={<Login isSignedIn={isSignedIn} />} />
        <Route
          path="/verification"
          element={<MailVerification isSignedIn={isSignedIn} user={Cuser} />}
        />
        <Route
          path="/accueil"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Accueil user={Cuser} />
            </Protected>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
