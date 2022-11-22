import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  useEffect(
    function () {
      const observer = new IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );

  return [show, element];
}
