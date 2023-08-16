import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handlOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handlOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handlOffline);
    };
  }, []);

  console.log(isOnline);

  return isOnline;
};
export default useOnline;
