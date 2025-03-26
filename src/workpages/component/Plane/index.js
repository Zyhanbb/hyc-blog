import React, { useState } from "react";
import "./PlaneBanner.css"; // 引入样式文件

const PlaneBanner = () => {
  const [animate, setAnimate] = useState(false);

  // 触发动画
  const handleClick = () => {
    setAnimate(false); // 先重置动画
    setTimeout(() => setAnimate(true), 10); // 重新触发动画
  };

  return (
    <div className="container">
      <button onClick={handleClick}>播放动画</button>

      <div className={`plane-container ${animate ? "animate" : ""}`}>
        
        <div className="banner">欢迎来到React世界！</div>
        <img
          src={`${process.env.PUBLIC_URL}/plane.png`} // 替换成你的飞机图片
          alt="飞机"
          className="plane"
        />
      </div>
    </div>
  );
};

export default PlaneBanner;
