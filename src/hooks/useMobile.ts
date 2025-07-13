import { useEffect, useState } from "react";

export function useMobile(): boolean {
	const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    
    const userAgent = window.navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
    
    return mobileRegex.test(userAgent);
  });

  useEffect(() => {
    const handleResize = () => {
      const userAgent = window.navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
      
      setIsMobile(mobileRegex.test(userAgent));
    };

    // Listen for resize events in case the user agent changes (unlikely but possible)
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
} 