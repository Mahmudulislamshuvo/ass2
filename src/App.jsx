import { useState } from "react";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./components/Header";
import MainContent from "./Components/MainContent";

const App = () => {
  const [formData, setFormData] = useState({
    websiteURL: "",
    faviconColor: "#3b82f6",
    catagory: "Select category",
    username: "",
    password: "",
  });

  return (
    <div className="bg-neutral-900 text-white">
      <Header />
      <Form setFormData={setFormData} data={formData} />
      <MainContent formData={formData} />
      <Footer />
    </div>
  );
};

export default App;
