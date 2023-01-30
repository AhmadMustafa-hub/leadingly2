import Link from "next/link";
import { useState } from "react";

const HomeFuelGrowth = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section className="mb-5" id="pricing">
      <div className="align--center-center  mt--5">
        <h1
          style={{
            zIndex: 1,
            marginBottom: "2rem",
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Here’s how we help you <br /> fuel your growth
        </h1>
      </div>
      <div className="grid grid--full-width txt-center">
        <div className="grid__content"></div>
        <div
          style={{
            position: "relative",
            width: "fit-content",
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
            className="fuel-growth__step"
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
            className="fuel-growth__step"
          >
            SCALE
          </div>
          <div
            style={{
              display: "flex",

              borderRadius: "5px",
              color: activeStep === 0 ? "#000" : "#fff",
              background: activeStep === 0 ? "white" : "#7D0FCC",
              position: "relative",
              boxShadow:
                "0px 5.22026px 19.837px rgba(0, 0, 0, 0.12), inset 0px 1.04405px 0px rgba(255, 255, 255, 0.2)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                margin: "0 auto",
                justifyContent: "space-between",
              }}
              className="fuel-growth__content"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  gap: "2rem",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "left",
                      padding: "1rem",
                    }}
                  >
                    Services Include
                  </h4>
                  {activeStep === 0 &&
                    SERVICES.map((card, index) => (
                      <div
                        key={index}
                        title={card.title}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={"/images/homepage/fuel-growth/check.png"}
                          alt=""
                          style={{
                            marginBottom: "-1rem",
                          }}
                        />
                        <h5
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            marginBottom: "-1rem",
                            textAlign: "left",
                            letterSpacing: "0.7px",
                          }}
                        >
                          {card.title}
                        </h5>
                      </div>
                    ))}

                  {activeStep === 1 &&
                    SERVICES_SCALE.map((card, index) => (
                      <div
                        key={index}
                        title={card.title}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={"/images/homepage/fuel-growth/check-alt.png"}
                          alt=""
                          style={{
                            marginBottom: "-1rem",
                          }}
                        />
                        <h5
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            marginBottom: "-1rem",
                            textAlign: "left",
                            letterSpacing: "0.7px",
                          }}
                        >
                          {card.title}
                        </h5>
                      </div>
                    ))}
                </div>
                <div
                  style={{
                    gap: "3rem",
                    padding: "0rem",
                  }}
                  className="fuel-growth__content__buttons"
                >
                  <div>
                    <h4
                      style={{
                        fontSize: "0.8rem",
                        textAlign: "left",
                        letterSpacing: "-0.00em",
                      }}
                    >
                      Super Simple Pricing
                    </h4>
                    <div
                      style={{
                        marginBottom: "-1.5rem",
                      }}
                    >
                      <h1>
                        {activeStep === 0 ? "$2,450" : "$3,150"}
                        <span
                          style={{
                            fontSize: "1.2rem",
                          }}
                        >
                          /MONTH
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div
                    style={{
                      alignSelf: "flex-end",
                      fontWeight: 300,
                      fontSize: "0.8rem",
                      maxWidth: "200px",
                    }}
                  >
                    {activeStep === 0
                      ? "Get 10 pre-qualified appointments delivered to your inbox every week"
                      : "Get 50+ appointments booked per month"}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  justifyContent: "space-between",

                  marginRight: "2rem",
                }}
                className="fuel-growth__content__image"
              >
                <div>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "left",
                      padding: "1rem 1rem 1rem 0",
                    }}
                  >
                    Outcomes
                  </h4>
                  {OUTCOMES.map((card, index) => (
                    <div
                      key={index}
                      title={card.title}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      className="fuel-growth__content__outcomes"
                    >
                      <img
                        src={card.icon}
                        alt=""
                        style={{
                          padding: "0.8rem",
                          borderRadius: "50%",
                          background: "white",
                          boxShadow:
                            "0px 7.49576px 28.4839px rgba(0, 0, 0, 0.12), inset 0px 1.49915px 0px rgba(255, 255, 255, 0.2)",
                          marginBottom: "1rem",
                        }}
                      />
                      <h5
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          textAlign: "left",
                          letterSpacing: "0.7px",
                        }}
                      >
                        {activeStep === 0 ? card.title : card.titleScale}
                      </h5>
                    </div>
                  ))}
                </div>
                <div className="fuel-growth__content__buttons-sm">
                  {/*  */}
                  {/*  */}
                  <div
                    style={{
                      gap: "3rem",
                      padding: "0rem",
                    }}
                    className="fuel-growth__content__buttons-sm-1"
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: "0.8rem",
                          textAlign: "left",
                          letterSpacing: "-0.00em",
                        }}
                      >
                        Super Simple Pricing
                      </h4>
                      <div
                        style={{
                          marginBottom: "-1.5rem",
                        }}
                      >
                        <h1>
                          {activeStep === 0 ? "$2,450" : "$3,150"}
                          <span
                            style={{
                              fontSize: "1.2rem",
                            }}
                          >
                            /MONTH
                          </span>
                        </h1>
                      </div>
                    </div>

                    <div
                      style={{
                        alignSelf: "flex-end",
                        fontWeight: 300,
                        fontSize: "0.8rem",
                      }}
                    >
                      {activeStep === 0
                        ? "Get 10 pre-qualified appointments delivered to your inbox every week"
                        : "Get 50+ appointments booked per month"}
                    </div>
                  </div>
                  <Link href="/roi-calculator">
                    <a
                      style={{
                        background: activeStep === 1 ? "#fff" : "#000",
                        width: "18rem",
                        color: activeStep === 0 ? "white" : "#000",
                        borderRadius: "5px",
                        padding: "0.7rem",
                        margin: "2rem 2rem 0.5rem 0rem",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                      className="cta-leadd"
                    >
                      ROI CALCULATOR
                    </a>
                  </Link>

                  <a
                    style={{
                      background:
                        activeStep === 0
                          ? "linear-gradient(90.09deg, #F858E3 -0.79%, #AE5CF5 99.92%)"
                          : "#000",
                      width: "18rem",
                      color: "white",
                      borderRadius: "5px",
                      padding: "0.7rem",
                      margin: "0 2rem 0rem 0rem",
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
                  <a
                    style={{
                      background:
                        activeStep === 0
                          ? "linear-gradient(90.09deg, #F858E3 -0.79%, #AE5CF5 99.92%)"
                          : "#000",
                      width: "18rem",
                      color: "white",
                      borderRadius: "5px",
                      padding: "0.7rem",
                      margin: "0.5rem 2rem 0rem 0rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                    href={
                      activeStep === 0
                        ? "https://buy.stripe.com/9AQ3eM03Y4BxbNC7ss"
                        : "https://buy.stripe.com/14kbLicQK3xt18Y8wx"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="cta-leadd"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFuelGrowth;

const SERVICES = [
  { title: "Email infrastructure setup & anti-spam verification" },
  { title: "Copywriting services" },
  { title: "Lead Qualifying" },
  { title: "Template A/B Testing" },
  { title: "Dedicated Team (AM, Researcher, Email Specialist, Sales)" },
  { title: "3-5 touch points / prospect" },
  { title: "Weekly Support" },
  { title: "30+ meetings /mo" },
  { title: "White-labled Services" },
  { title: "Development Represenative - SDR" },
];
const SERVICES_SCALE = [
  { title: "Email infrastructure setup & anti-spam verification" },
  { title: "Copywriting services" },
  { title: "Lead Qualifying" },
  { title: "Template A/B Testing" },
  { title: "Dedicated Team (AM, Researcher, Email Specialist, Sales)" },
  { title: "3-5 touch points / prospect" },
  { title: "Weekly Support" },
  { title: "50+ meetings /mo" },
  { title: "White-labled Services" },
  { title: "Development Represenative - SDR" },
];

const OUTCOMES = [
  {
    title: "30+ appointments per month",
    titleScale: "50+ appointments booked",
    icon: "/images/homepage/fuel-growth/calculator.png",
  },
  {
    title: "35% approximate close rate",
    titleScale: "35% approximate close rate",
    icon: "/images/homepage/fuel-growth/rocket.png",
  },
  {
    title: "Increase in Revenues",
    titleScale: "Increase in Revenues",
    icon: "/images/homepage/fuel-growth/dollar.png",
  },
  {
    title: "Massive ROI",
    titleScale: "Massive ROI",
    icon: "/images/homepage/fuel-growth/discount.png",
  },
];
