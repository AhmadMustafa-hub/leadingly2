import { useRef, useState } from "react";

const useSwiper = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  return { prevEl, setPrevEl, nextEl, setNextEl, paginationRef };
};

export default useSwiper;
