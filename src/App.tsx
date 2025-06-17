import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const [positionX, setPositionX] = useState(window.innerWidth - 50 - 330); // faqat X uchun
  const [height, setHeight] = useState(500); // default balandlik
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // const handleMouseMove = (e: MouseEvent) => {
    //   if (isDragging.current) {
    //     const newX = e.clientX - offset.current.x;
    //     const newY = e.clientY - offset.current.y;

    //     // X ni cheklash
    //     const boxWidth = 336;
    //     const minX = 0;
    //     const maxX = window.innerWidth - boxWidth;
    //     setPositionX(Math.max(minX, Math.min(newX, maxX)));

    //     // Y ga qarab height oshirish
    //     const deltaY = offset.current.y - e.clientY;
    //     const newHeight = height + deltaY;
    //     const minHeight = 200;
    //     const maxHeight = window.innerHeight * 0.8;
    //     setHeight(Math.max(minHeight, Math.min(newHeight, maxHeight)));

    //     // Update offset so that it feels continuous
    //     offset.current.y = e.clientY;
    //   }
    // };
    // const handleMouseMove = (e: MouseEvent) => {
    //   if (isDragging.current) {
    //     const newX = e.clientX - offset.current.x;
    //     const newY = e.clientY - offset.current.y;

    //     const boxWidth = 336;
    //     const boxHeight = window.innerHeight * 0.5; // 50vh
    //     const marginX = 30; // chap va o'ng chet uchun
    //     const minX = marginX;
    //     const maxX = window.innerWidth - boxWidth - marginX;

    //     const minY = 100;
    //     const maxY = window.innerHeight - boxHeight;

    //     setPosition({
    //       x: Math.max(minX, Math.min(newX, maxX)),
    //       y: Math.max(minY, Math.min(newY, maxY)),
    //     });
    //   }
    // };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const newX = e.clientX - offset.current.x;

        // ✅ 30px margin chap va o‘ngdan
        const boxWidth = 336;
        const marginX = 30;
        const minX = marginX;
        const maxX = window.innerWidth - boxWidth - marginX;

        setPositionX(Math.max(minX, Math.min(newX, maxX)));

        // ✅ Height o'zgarishi (faqat yuqoriga surilsa)
        const deltaY = offset.current.y - e.clientY;
        const newHeight = height + deltaY;
        const minHeight = 200;
        const maxHeight = window.innerHeight * 0.8;
        setHeight(Math.max(minHeight, Math.min(newHeight, maxHeight)));

        // 🎯 offset yangilab boriladi
        offset.current.y = e.clientY;
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
  }, [height]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    offset.current.x = e.clientX - positionX;
    offset.current.y = e.clientY;
  };

  return (
    <>
      {!isOpen && (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={{
            boxShadow: "rgb(182 182 182) 0px 7px 35px",
          }}
          className="fixed md:bottom-10 bottom-5 md:right-10 right-5 bg-[#44bb6e] w-[65px] h-[65px] rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={20}
            viewBox="0 0 25 20">
            <path
              fill="#fff"
              d="M22.5 5l-10 6.25L2.5 5V2.5l10 6.25 10-6.25V5zm0-5h-20A2.49 2.49 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h20a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 22.5 0z"
            />
          </svg>
        </div>
      )}

      {isOpen && (
        <div
          style={{
            left: positionX,
            bottom: 0,
          }}
          className="fixed">
          {/* Close Button */}
          <img
            onClick={() => {
              setIsOpen(false);
            }}
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(2%202)%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill%3D%22%23FFF%22%20opacity%3D%221%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212.75%22%20stroke%3D%22%23222D38%22%20stroke-width%3D%221.5%22%20opacity%3D%221%22%2F%3E%3Cg%20fill%3D%22%23222D38%22%20opacity%3D%221%22%20transform%3D%22translate(6%206)%22%3E%3Crect%20width%3D%221.611%22%20height%3D%2213.9%22%20x%3D%225.435%22%20y%3D%22-.941%22%20rx%3D%22.806%22%20transform%3D%22rotate(45%206.24%206.01)%22%2F%3E%3Crect%20width%3D%221.611%22%20height%3D%2213.9%22%20x%3D%225.435%22%20y%3D%22-.941%22%20rx%3D%22.806%22%20transform%3D%22scale(-1%201)%20rotate(45%200%20-9.058)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C/svg%3E"
            className="z-[9990] cursor-pointer w-[30px] bg-white absolute left-[-40px] rounded-full h-[30px]"
          />

          {/* Chat Box */}
          <div
            style={{
              height: `${height}px`,
              boxShadow: "0px 2px 16px #a0a0a07d",
            }}
            className="bg-[#fff] rounded-xl rounded-tr-[30px] overflow-hidden w-[336px]">
            {/* Draggable Header */}
            <div
              className="cursor-move header bg-[url(/header.svg)] flex gap-[8px] items-center px-5 bg-repeat-round bg-[#3d4360] w-full h-[65px]"
              onMouseDown={handleMouseDown}>
              <img
                src="/operator.png"
                className="w-[40px] object-contain rounded-full h-[40px] bg-white"
              />
              <div className="flex flex-col select-none">
                <h2 className="text-[18px] text-white font-[400] leading-[15px]">
                  Oysanam
                </h2>
                <p className="text-[14px] text-[#c7cac8f1] leading-[18px]">
                  online
                </p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="chatarea pt-2 px-2">
              <div className="flex rounded-[12px] text-[14px] p-2 bg-[#f1f0f0] w-[80%]">
                Assalomu aleykum hurmatli mijoz! Hozirda barcha operatorlarimiz
                offline holatida. Savol va takliflaringizni yozib qoldiring. Biz
                siz bilan aloqaga chiqamiz. Siz bilan bog'lanishimiz uchun
                telefon raqamlaringizni qoldirishni unutmang.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
