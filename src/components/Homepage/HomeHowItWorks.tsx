import { useState } from "react";
import Card from "../Card";

const HomeHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section id="how-it-works">
      <div className="align--center-center  pt--5">
        <h1
          style={{
            zIndex: 1,
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          How it works
        </h1>
      </div>
      <div className="grid grid--full-width txt-center">
        <div className="grid__content"></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              padding: "1rem 2rem 2rem 2rem",
              top: "-3rem",
              color: activeStep === 0 ? "#000" : "#fff",
              left: "0rem",
              background: activeStep === 0 ? "white" : "#BABABA",
              fontSize: "1.2rem",
              borderRadius: "5px",
              zIndex: 2,
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => setActiveStep(0)}
          >
            GROWTH
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              padding: "1rem 2rem 2rem 2rem",
              top: "-3rem",
              left: "8rem",
              color: "white",
              fontSize: "1.2rem",
              borderRadius: "5px",
              fontWeight: 600,
              background: activeStep === 1 ? "#7D0FCC" : "#BABABA",
              zIndex: activeStep === 1 ? 2 : 1,
              cursor: "pointer",
            }}
            onClick={() => setActiveStep(1)}
          >
            SCALE
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
              color: activeStep === 0 ? "#000" : "#fff",
              background: activeStep === 0 ? "white" : "#7D0FCC",
              position: "relative",
              boxShadow:
                "0px 5.22026px 19.837px rgba(0, 0, 0, 0.12), inset 0px 1.04405px 0px rgba(255, 255, 255, 0.2)",
              zIndex: 2,
            }}
          >
            {CARDS.map((card, index) => (
              <Card key={index} {...card} activeStep={activeStep} />
            ))}
            <a
              style={{
                background:
                  activeStep === 0
                    ? "linear-gradient(90.09deg, #F858E3 -0.79%, #AE5CF5 99.92%)"
                    : "#000",
                width: "18rem",
                color: "white",
                borderRadius: "5px",
                padding: "1rem",
                margin: "0 2rem 2rem 2rem",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
              href="https://meetings.hubspot.com/oliver294"
              target="_blank"
              rel="noreferrer"
              className="cta-leadd"
            >
              BOOK A FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;

const CARDS = [
  {
    id: "01",
    title: "Campaign Outline",
    description:
      "Meet the team of experts who will dig deep into your business and develop a customized outreach. We create professional marketing campaigns based on your ICP, unique value proposition, and market research.",
  },
  {
    id: "02",
    title: "Audience Building",
    description:
      "Our Data Mining experts will help you define the crucial criteria to qualify the right appointments who perfectly match your ICP. We conduct thorough audience research and access hundreds of data sources to maximize your ROI.",
  },
  {
    id: "03",
    title: "Target Outreach",
    description:
      "Our experts design customized templates to win the hearts of your ideal prospects and set up more appointments as a result. The 100% email delivery and 0% spam rate mission is more than possible for Leadingly team.",
  },
  {
    id: "04",
    titleScale: "APPOINTMENT SETTING",
    title: "APPOINTMENT SETTING",
    descriptionScale:
      "50+ pre-qualified meetings booked every month. Our B2B appointment setting services include filling your calendar with meetings that are likely to convert into sales. Our SDRs always make sure that the appointments confirm the appointments and reschedule the calls beforehand if needed.",
    description:
      "30+ pre-qualified meetings booked every month. Our B2B appointment setting services include filling your calendar with meetings that are likely to convert into sales. Our SDRs always make sure that the appointments confirm the appointments and reschedule the calls beforehand if needed.",
  },
];
