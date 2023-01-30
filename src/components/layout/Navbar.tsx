import Link from "next/link";
import { useEffect, useState, createRef } from "react";
import { useRouter } from "next/router";
import NoScrollLink from "../NoScrollLink";

const NavbarMenuList = [
  {
    title: "Why Us?",
    href: "#why-us",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "ROI Calculator",
    href: "/roi-calculator",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Team",
    href: "#team",
  },
];

export const Navbar = ({ templateColor }: any) => {
  const router = useRouter();
  // mobile Nav states
  const [isNavOpen, setNavOpen] = useState(false);
  const navRef: React.RefObject<HTMLElement> = createRef();
  let y = 0;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const nav = navRef.current;
    if (window.innerWidth < 700 && isNavOpen) return;
    if (nav) {
      if (window.scrollY > y && window.scrollY > 10 && !nav.classList.contains("inactive")) {
        nav.classList.add("inactive");
        nav.classList.remove("over");
      }
      if (window.scrollY < y && nav.classList.contains("inactive")) {
        nav.classList.remove("inactive");
        nav.classList.add("over");
      }
      if (window.scrollY < 1) {
        nav.classList.remove("over");
        nav.classList.remove("inactive");
      }
    }

    y = window.scrollY;
  };

  const clickToBurger = (isNavOpen: boolean) => {
    document.body.classList.toggle("menu-is-open");
    setNavOpen(!isNavOpen);
  };

  const isActive = isNavOpen ? "is-active" : "";

  return (
    <nav
      ref={navRef}
      className="main-nav"
      style={{
        backgroundColor: "white",

        boxShadow:
          "0px 7.49576px 28.4839px rgba(0, 0, 0, 0.12), inset 0px 1.49915px 0px rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="main-nav__wrapper">
        <a
          className={`main-nav__burger ${isActive}`}
          href="#"
          data-router-disabled
          onClick={() => clickToBurger(isNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <Link href="/">
          <a className={`main-nav__logo ${isActive}`} title="lead template" />
        </Link>
        <ul className={`main-nav__menu ${isActive}`}>
          {NavbarMenuList.map((item) => {
            return item.href[0] === "/" ? (
              <Link passHref href={item.href} key={item.title}>
                <a
                  onClick={() => document.body.classList.toggle("menu-is-open")}
                  className={`main-nav-aa ${router.pathname == `${item.href}` ? "is-active" : ""}
                  ${
                    router.pathname == item.href
                      ? item.href === "/lead"
                        ? "is-active-alt"
                        : "is-active"
                      : ""
                  }
                  `}
                >
                  {item.title}
                </a>
              </Link>
            ) : (
              <NoScrollLink
                href={
                  (router.pathname == "/roi-calculator" || router.pathname == "/case-studies") &&
                  item.href[0] === "#"
                    ? `/${item.href}`
                    : item.href
                }
                key={item.title}
              >
                <a
                  onClick={() => document.body.classList.toggle("menu-is-open")}
                  className={`main-nav-aa ${router.pathname == `${item.href}` ? "is-active" : ""}
                    ${
                      router.pathname == item.href
                        ? item.href === "/lead"
                          ? "is-active-alt"
                          : "is-active"
                        : ""
                    }
                    ${item.href[0] === "#" ? "display-none" : ""}`}
                >
                  {item.title}
                </a>
              </NoScrollLink>
            );
          })}
        </ul>
        <div className="main-nav__socials">
          <a
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.7rem 1.5rem",
              borderRadius: "5px",
              fontWeight: "500",
            }}
            href="https://meetings.hubspot.com/oliver294"
            target="_blank"
            rel="noreferrer"
            className="cta-leadd"
          >
            Book a demo
          </a>
        </div>
      </div>
    </nav>
  );
};

//should have said that the reminder button wasn't clear
//
