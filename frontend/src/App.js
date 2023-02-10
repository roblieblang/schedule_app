import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";

import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";

function App() {
  const { isLoading, error } = useAuth0();

  if (!error && isLoading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Authentication Error!</p>
  } else {
    return (
      <Routes>
        {/* wern;aljksdnf;ljkasndf */}
        <Route path="/" exact element={<WelcomePage />} />
        <Route path="/profile" exact element={<ProfilePage/>} />
      </Routes>
    );
  }
}

export default App;
