import { SwiperSlide as SliderItem } from "swiper/react";
import SlidersWrapperVideo from "../SlidersWrapperVideo";

const HomeMeetTheTeam = () => {
  return (
    <section className="pt--3 pt--5" id="testimonials">
      <div className="align--center-center mb--2 md-mt-5">
        <h1
          style={{
            zIndex: 1,
            fontWeight: 600,
          }}
        >
          Video Testimonials
        </h1>
      </div>
      <div className="swiper">
        <SlidersWrapperVideo>
          {ART_PIECES.map((artpiece, index) => (
            <SliderItem
              key={index}
              className="cards cards--sm swiper-slide"
              style={{
                position: "relative",
              }}
            >
              <iframe
                src={`https://youtube.com/embed/${artpiece.embed}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded youtube"
                style={{
                  height: "16rem",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  color: "white",
                }}
              >
                <h3>{artpiece.name}</h3>
                <p>{artpiece.position}</p>
                <div
                  style={{
                    display: "flex",
                  }}
                ></div>
              </div>
            </SliderItem>
          ))}
        </SlidersWrapperVideo>
      </div>
    </section>
  );
};

export default HomeMeetTheTeam;

const ART_PIECES = [
  {
    id: 1,
    embed: "D-DQNY8Y9M8",
    name: "Joshua",
    position: "Director of Business Metaverse+",
  },
  {
    id: 2,
    embed: "GiokM8JV_DM",
    name: "Max Giaco",
    position: "Professional Illusionist",
  },
  {
    id: 3,
    embed: "stkkui6gNTM",
    name: "Victor",
    position: "CEO of Worldwide Webworks",
  },
];