import { useState } from "react";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./components/Header";
import MainContent from "./Components/MainContent";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const [formData, setFormData] = useState({
    websiteURL: "",
    faviconColor: "#3b82f6",
    catagory: "Select category",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // checking for empty fields
    if (!formData.websiteURL) {
      alert("Please enter a website URL");
      return;
    }
    if (formData.catagory === "Select category") {
      alert("Please Select a category");
      return;
    }
    // saving data in bookmarks array
    setBookmarks((previousData) => [...previousData, formData]);
    // reset form data fileds
    // setFormData({
    //   websiteURL: "",
    //   faviconColor: "#3b82f6",
    //   catagory: "Select category",
    //   username: "",
    //   password: "",
    // });
  };

  return (
    <div className="bg-neutral-900 text-white">
      <Header />
      <Form
        handleFormSubmit={handleSubmit}
        setFormData={setFormData}
        data={formData}
      />
      <MainContent bookmarks={bookmarks} />
      <Footer />
    </div>
  );
};

export default App;
