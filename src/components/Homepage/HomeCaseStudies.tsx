import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const HomeCaseStudies = () => {
  return (
    <section>
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
          Case Studies
        </h1>
      </div>
      <div className="grid grid--full-width txt-center">
        <div className="grid__content"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
            gap: "3rem",
            zIndex: 1,
          }}
        >
          {CASE_STUDIES.map((caseStudy, index) => {
            return (
              <Link key={index} href="/case-studies">
                <div className="case-study" style={{}}>
                  <div className="case-study-head">
                    <img
                      src={caseStudy.image}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* title & industry */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <h4
                        style={{
                          textAlign: "left",
                          letterSpacing: "0.7px",
                        }}
                      >
                        {caseStudy.title}
                      </h4>
                      <div
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "20px",
                          backgroundColor: "#EBEBEB",
                          width: "fit-content",
                          fontSize: "0.7rem",
                        }}
                      >
                        {caseStudy.industry}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "3rem",
                    }}
                  >
                    {/* appointments */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h1>{caseStudy.appointments}</h1>
                      <div
                        style={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {caseStudy.industry}
                      </div>
                    </div>
                    {/* revenue OR average deal size */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h1>{caseStudy.revenue ? caseStudy.revenue : caseStudy.averageDealSize}</h1>
                      <div
                        style={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {caseStudy.revenue ? "Revenue" : "Average Deal Size"}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#EBEBEB",
                      justifyContent: "center",
                      
                    }}
                    className="case-study-button-2"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightLong as IconProp}
                      width={36}
                      id="arrow"
                      className="case-study-icon"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="grid__content">
        <div className="align--center-center ">
          <Link href={"/case-studies"}>
            <h4
              style={{
                zIndex: 1,
                padding: "1rem 5rem",
                backgroundColor: "white",
                borderRadius: "5px",
                lineHeight: "1rem",
                fontSize: "1rem",
                margin: "2rem 0",
                alignSelf: "center",
              }}
              className="view-more"
            >
              VIEW MORE
            </h4>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;

const CASE_STUDIES = [
  {
    title: "Leadingly Helps Born & Bred Achieve a 297% Year-Over-Year Growth",
    appointments: "+70%",
    revenue: "$250K",
    image: "/images/homepage/case-studies/1.png",
    industry: "Advertising & Marketing",
  },
  {
    title: "Solid Outbound Strategy Helped Leadingly Land 10 Appointments a Week...",
    appointments: "150+",
    averageDealSize: "$270K",
    image: "/images/homepage/case-studies/2.png",
    industry: "Healthcare & Pharmaceutical",
  },
];
