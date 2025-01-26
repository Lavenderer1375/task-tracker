import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleTag);

    // Cleanup function to remove the style tag when the component is unmounted
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const spinnerStyle = {
    border: "8px solid #f3f3f3" /* Light grey */,
    borderTop: "8px solid #3498db" /* Blue */,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh" /* Full height */,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;
