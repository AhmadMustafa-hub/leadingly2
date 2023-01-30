import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }
}

const HomeSeenOn = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="grid grid--full-width "
      style={{
        maxWidth: "1440px",
        zIndex: 5,
      }}
    >
      <p
        style={{
          zIndex: 5,
          letterSpacing: "0.0px",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        Seen on
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {BRANDS.map((brand, index) => {
          return (
            <div key={index}>
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  width: index === 0 ? "100px" : "4rem",
                  maxHeight: "4rem",
                  borderRadius: index < 4 ? "0px" : "50%",

                  marginTop: "1.8rem",
                  marginRight: "1.2rem",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSeenOn;
const BRANDS = [
  {
    name: "Google",
    logo: "/images/seen-on/benzinga.webp",
  },
  {
    name: "Microsoft",
    logo: "/images/seen-on/nbc.png",
  },
  {
    name: "Spotify",
    logo: "/images/seen-on/fox-news.png",
  },
  {
    name: "Mailchimp",
    logo: "/images/seen-on/cbs.jpg",
  },

  {
    name: "Uber",
    logo: "/images/seen-on/usa-today.png",
  },
  {
    name: "Uber",
    logo: "/images/seen-on/abc-logo.png",
  },
  {
    name: "Airbnb",
    logo: "/images/seen-on/dj.jpg",
  },
];
