import React, { useState } from "react";
import { userContext } from "./components/context/context";
import { AppRouter } from "./components/routers/AppRouter";
// import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function App() {
  const [userInfo, setUserInfo] = useState({
    login: "log out",
    username: "user123",
  });

  let user = {
    loginInfo: userInfo,
    setUser: setUserInfo,
  };

  return (
    <>
      <userContext.Provider value={user}>
        <AppRouter />
      </userContext.Provider>
    </>
  );
}

export default App;
