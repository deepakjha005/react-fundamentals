import { useState, useEffect } from "react";

const useCheckOnlineHook = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);
  return isOnline;
};
export default useCheckOnlineHook;
