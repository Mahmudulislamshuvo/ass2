import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./components/Header";
import MainContent from "./Components/MainContent";

const App = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <Header />
      <Form />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
