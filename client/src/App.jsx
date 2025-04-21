import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Provider } from "react-redux"; // to "provide" access to our main redux store
import store from "./utils/appStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
