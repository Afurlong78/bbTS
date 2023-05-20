import { useEffect, useState } from "react";

export function useNavScroll() {
  const [scrollDown, setScrollDown] = useState<boolean>(true);

  useEffect(() => {
    const scrollPos = { current: window.pageYOffset };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < scrollPos.current) {
        setScrollDown(true);
        scrollPos.current = currentScrollPos;
      } else {
        setScrollDown(false);
        scrollPos.current = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollDown };
}
