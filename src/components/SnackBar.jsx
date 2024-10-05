import React, { useEffect, useState } from "react";

function SnackBar({ message, type }) {
  const [showSnackbar, setShowSnackbar] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowSnackbar(false);
    }, 2000); // Close the Snackbar after 2 seconds
  }, []);
  return (
    <div
      id="snackbar"
      class={`bg-gray-900 text-white p-4 rounded-md fixed bottom-4 right-4 flex justify-between items-center ${
        showSnackbar ? "" : "hidden"
      } ${type === "Success" ? "bg-green-700" : "bg-red-500"} `}
    >
      {message}
    </div>
  );
}

export default SnackBar;
