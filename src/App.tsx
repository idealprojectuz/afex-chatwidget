// import { useState, useRef, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [position, setPosition] = useState({ x: 100, y: 0 });
//   const isDragging = useRef(false);
//   const offset = useRef({ x: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (isDragging.current) {
//         const newX = e.clientX - offset.current.x;

//         // Ekran chetlariga urilmaslik uchun cheklov
//         const boxWidth = 300; // box width aniqlang, kerak bo‘lsa dinamik oling
//         const minX = 0;
//         const maxX = window.innerWidth - boxWidth;

//         setPosition((prev) => ({
//           ...prev,
//           x: Math.max(minX, Math.min(newX, maxX)), // chegaralangan x
//         }));
//       }
//     };

//     const handleMouseUp = () => {
//       isDragging.current = false;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     isDragging.current = true;
//     offset.current.x = e.clientX - position.x;
//   };

//   return (
//     <>
//       <div
//         // onMouseDown={handleMouseDown}
//         // style={{
//         //   left: position.x,
//         //   bottom: 0,
//         //   position: "fixed",
//         //   cursor: "grab",
//         //   width: 300, // bu width boxWidth bilan mos bo'lishi kerak
//         // }}
//         className="draggable-box">
//         <div className="bg-[#302945] px-10 py-2 rounded-t-[12px]">
//           <h2 className="text-white text-[18px] font-bold">
//             Biz bilan bog'lanish
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useRef, useEffect } from "react";
import "./App.css"; // Tailwind ishlatyapsiz deb taxmin qilaman

function App() {
  const [position, setPosition] = useState({ x: 100, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const isDragging = useRef(false);
  const offset = useRef({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const newX = e.clientX - offset.current.x;
        const boxWidth = 300;
        const minX = 0;
        const maxX = window.innerWidth - boxWidth;

        setPosition((prev) => ({
          ...prev,
          x: Math.max(minX, Math.min(newX, maxX)),
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
        onMouseDown={(e) => {
          if (isOpen) {
            handleMouseDown(e);
          }
        }}
        style={{
          left: position.x,
          bottom: 0,
          position: "fixed",
          cursor: "grab",
          width: 300,
          zIndex: 9999,
        }}
        className="draggable-box ">
        <div
          className="bg-[#302945] px-5 py-3 rounded-t-[12px] flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}>
          <h2 className="text-white text-[18px] font-bold">
            Biz bilan bog'lanish
          </h2>
          <span className="text-white cursor-pointer">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {isOpen && (
          <div className="bg-white h-[300px] p-4 border border-t-0 rounded-b-[12px] shadow-xl">
            <div className="h-[230px] overflow-y-auto space-y-2">
              {/* Example chat messages */}
              <div className="text-left">
                <p className="text-sm bg-gray-100 p-2 rounded">
                  Salom! Qanday yordam bera olaman?
                </p>
              </div>
              {/* User message could go here */}
            </div>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Xabar yozing..."
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
