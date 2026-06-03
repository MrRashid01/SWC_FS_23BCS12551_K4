import { useState } from "react";
import TaskManager from "./components/TaskManager";
import AuthForm from "./components/AuthForm";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  const [activeTab, setActiveTab] = useState("task");

  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300",
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <button
          className={activeTab === "task" ? "active" : ""}
          onClick={() => setActiveTab("task")}
        >
          Task Manager
        </button>

        <button
          className={activeTab === "auth" ? "active" : ""}
          onClick={() => setActiveTab("auth")}
        >
          Auth Form
        </button>

        <button
          className={activeTab === "carousel" ? "active" : ""}
          onClick={() => setActiveTab("carousel")}
        >
          Image Carousel
        </button>
      </nav>

      {/* Content */}
      <div className="container">
        {activeTab === "task" && <TaskManager />}

        {activeTab === "auth" && <AuthForm />}

        {activeTab === "carousel" && (
          <ImageCarousel images={images} />
        )}
      </div>
    </div>
  );
}

export default App;