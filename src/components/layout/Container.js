import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      style={{ width: "75%", margin: "0 auto", maxWidth: 1920 }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Container;
