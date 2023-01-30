import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import CASE_STUDIES from "../../src/utils/case-studies";
import Layout from "../../src/components/layout/Layout";

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState(CASE_STUDIES);
  const [industry, setIndustry] = useState(0);

  const handleIndustry = (index: any) => {
    setIndustry(index);
    if (index === 0) {
      setCaseStudies(CASE_STUDIES);
    } else {
      const filteredCaseStudies = CASE_STUDIES.filter(
        (caseStudy) => caseStudy.industry === INDUSTRIES[index].title
      );
      setCaseStudies(filteredCaseStudies);
    }
  };

  return (
    <Layout templateColor={"home"} dataColor="#008081">
      <main
        style={{
          paddingBottom: "10rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
          className="grid case-studies-page"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   margin: "0 2rem 0 4rem",
              zIndex: 1,
            }}
            //columna izquierda
          >
            <h3>Industry</h3>
            <ul
              style={{
                listStyle: "none",
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
              className="industry-list"
            >
              {INDUSTRIES.map((ind) => (
                <li
                  key={ind.id}
                  onClick={() => handleIndustry(ind.id)}
                  className="case-study-industries"
                >
                  {industry === ind.id ? (
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#8e13e7",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ind.title}
                    </p>
                  ) : (
                    <p className="case-study-p">{ind.title}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
            }}
            //columna derecha
            className="case-studies-ul-list"
          >
            {caseStudies.map((caseStudy, index) => (
              <Link href={`/case-studies/${caseStudy.slug}`} key={index}>
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    padding: "4rem",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  className="case-study-card"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    //fila de arriba
                  >
                    <div
                      style={{}}
                      className="case-study-head-a"
                      //imagen y titulo
                    >
                      <img
                        src={caseStudy.image}
                        alt=""
                        style={{
                          width: "auto",
                          height: "3.5rem",
                        }}
                      />
                      <div
                        style={{
                          padding: "0.7rem 1.2rem",
                          backgroundColor: "#EBEBEB",
                          borderRadius: "20px",

                          height: "fit-content",
                        }}
                        className="case-study-head-b"
                      >
                        <span
                          style={{
                            fontSize: "0.8rem",
                          }}
                        >
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>
                    <Link href={"/"}>
                      <FontAwesomeIcon
                        icon={faArrowRightLong as IconProp}
                        width={24}
                        id="arrow"
                        className="case-study-icon"
                      />
                    </Link>
                  </div>
                  <h2>{caseStudy.title}</h2>
                  <div
                    style={{
                      display: "flex",
                    }}
                    className="case-study-box-content"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#8E13E7",
                      }}
                    >
                      <div
                        //appointment box
                        style={{
                          borderRadius: "5px",
                          border: "1px solid #8E13E7",
                          width: "16rem",
                          margin: "0 0 1rem 0",
                          height: "8rem",
                          padding: "1rem 2rem",
                        }}
                      >
                        <h1>{caseStudy.boxOneNumb}</h1>
                        <span>{caseStudy.boxOneText}</span>
                      </div>
                      <div
                        //avg open rate box
                        style={{
                          borderRadius: "5px",
                          border: "1px solid #8E13E7",
                          width: "16rem",
                          margin: "1rem 0 0 0",
                          height: "8rem",
                          padding: "1rem 2rem",
                        }}
                      >
                        <h1>{caseStudy.boxTwoNumb}</h1>
                        <span>{caseStudy.boxTwoText}</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                      }}
                    >
                      <div
                        //takeways box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <h4
                          style={{
                            color: "#AEAEAE",
                          }}
                        >
                          Main Takeaways
                        </h4>
                        <span
                          style={{
                            fontSize: "1.2rem",
                          }}
                        >
                          {caseStudy.takeaways}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                        //summary box
                      >
                        <h4
                          style={{
                            color: "#AEAEAE",
                          }}
                        >
                          Summary
                        </h4>
                        <span
                          style={{
                            fontSize: "1.2rem",
                          }}
                        >
                          {caseStudy.summary}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default CaseStudies;

const INDUSTRIES = [
  {
    id: 0,
    title: "All Industries",
  },
  {
    id: 1,
    title: "Manufacturing",
  },
  {
    id: 2,
    title: "Software Development",
  },
  {
    id: 3,
    title: "Information Technology & Services",
  },
  {
    id: 4,
    title: "Banking & Fintech",
  },
  {
    id: 5,
    title: "Computer Software",
  },
  {
    id: 6,
    title: "Construction",
  },
  {
    id: 7,
    title: "Advertising & Marketing",
  },
  {
    id: 8,
    title: "Renewable Energy",
  },
  {
    id: 9,
    title: "SaaS",
  },
  {
    id: 10,
    title: "Non-Profit",
  },
];
