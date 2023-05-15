import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = (props) => {
  return (
    <>
      <Header />
      {props.children ? props.children : <Main />}
      <Footer />
    </>
  );
};

export default App;
