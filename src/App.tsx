import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 100, y: 0 }); // boshlang'ich pozitsiya
  const isDragging = useRef(false);
  const offset = useRef({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        setPosition((prev) => ({
          ...prev,
          x: e.clientX - offset.current.x, // faqat X o‘qi bo‘yicha suriladi
        }));
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    offset.current.x = e.clientX - position.x;
  };

  return (
    <>
      <div
        onMouseDown={handleMouseDown}
        style={{
          left: position.x,
          bottom: 0,
          position: "fixed",
          cursor: "grab",
        }}
        className="draggable-box">
        <div className="bg-[#302945] px-10 py-2 rounded-t-[12px]">
          <h2 className="text-white text-[18px] font-bold">
            Biz bilan bog'lanish
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
