import { SwiperSlide as SliderItem } from "swiper/react";
import SlidersWrapper from "../SlidersWrapper";

const HomeMeetTheTeam = () => {
  return (
    <section className="pt--3  pb--5" id="team">
      <div className="align--center-center mb--2 md-mt-5">
        <h1
          style={{
            zIndex: 1,
            fontWeight: 600,
          }}
        >
          Meet the Team
        </h1>
      </div>
      <div className="swiper">
        <SlidersWrapper>
          {ART_PIECES.map((artpiece, index) => (
            <SliderItem
              key={index}
              className="cards cards--sm swiper-slide"
              style={{
                border: "1px solid #BABABA",
                borderRadius: "10px",
              }}
            >
              <img
                src={`/images/homepage/meet-the-team/${artpiece.img}`}
                alt=""
                style={{
                  height: "20rem",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <div className="card-body">
                <h3>{artpiece.name}</h3>
                <p>{artpiece.position}</p>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <a
                    style={{
                      background: "linear-gradient(90.09deg, #F858E3 -0.79%, #AE5CF5 99.92%)",
                      width: "11rem",
                      color: "white",
                      borderRadius: "5px",
                      padding: "1rem",
                      textAlign: "center",
                      marginTop: "1rem",
                      letterSpacing: "-0.0px",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                    href="https://meetings.hubspot.com/oliver294"
                    target="_blank"
                    rel="noreferrer"
                    className="cta-leadd"
                  >
                    BOOK A DEMO
                  </a>
                </div>
              </div>
            </SliderItem>
          ))}
        </SlidersWrapper>
      </div>
    </section>
  );
};

export default HomeMeetTheTeam;

const ART_PIECES = [
  {
    id: 1,
    img: "1.jpeg",
    name: "Alex Johannes",
    position: "Co-Founder",
  },
  {
    id: 2,
    img: "2.jpeg",
    name: "Alicia Hancock",
    position: "Campaign Manager",
  },
  {
    id: 3,
    img: "3.jpeg",
    name: "Gianna Patterson",
    position: "Sales Executive",
  },
  {
    id: 4,
    img: "4.jpeg",
    name: "Nicole Murlender",
    position: "Sales Executive",
  },
  {
    id: 5,
    img: "5.jpeg",
    name: "Jordan Sowell",
    position: "Campaign Manager",
  },
  {
    id: 6,
    img: "6.jpeg",
    name: "Amber Leach",
    position: "Account Manager",
  },
];
