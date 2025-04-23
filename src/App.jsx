import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/ui/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
          <Navbar user={user} onLogout={handleLogout} />
          <AppRoutes user={user} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
