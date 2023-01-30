import React from "react";
import CASE_COPY from "../../src/utils/case-copy";
import Layout from "../../src/components/layout/Layout";
import Link from "next/link";

const CaseStudyDetailPage = ({ slug }: any) => {
  const [caseStudy, setCaseStudy] = React.useState(
    CASE_COPY.find((caseStudy) => caseStudy.slug === slug)
  );

  return (
    <Layout templateColor={"home"} dataColor="#008081">
      <div
        style={{
          display: "flex",
          marginTop: "-4rem",
          height: "auto",
          width: "100%",
          backgroundColor: "white",
        }}
        className="case-study-detail-main"
      >
        <div
          style={{
            maxWidth: "1400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto 0 auto",
          }}
        >
          <Link href={"/case-studies"}>
            <span
              style={{
                color: "black",
                opacity: "0.5",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                marginTop: "3rem",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            >
              {"<"} Back to Case Studies
            </span>
          </Link>
          <img
            src={caseStudy?.image}
            alt={caseStudy?.title}
            style={{
              width: "fit-content",
              maxWidth: "20rem",
              maxHeight: "6rem",
              margin: "1.5rem 0",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <h2 className="case-study-detail-page__title">{caseStudy?.title}</h2>
          <div
            style={{
              display: "flex",
              // flexDirection: "column",
              color: "#8E13E7",
              alignItems: "baseline",
            }}
          >
            <div
              //appointment box
              style={{
                borderRadius: "5px",
                border: "3px solid #8E13E7",
                width: "16rem",
                margin: "0 1rem 0 0",
                height: "8rem",
                padding: "1rem 2rem",
              }}
            >
              <h1>{caseStudy?.boxOneNumb}</h1>
              <span>{caseStudy?.boxOneText}</span>
            </div>
            <div
              //avg open rate box
              style={{
                borderRadius: "5px",
                border: "3px solid #8E13E7",
                width: "16rem",
                margin: "1rem 0 0 0",
                height: "8rem",
                padding: "1rem 2rem",
              }}
            >
              <h1>{caseStudy?.boxTwoNumb}</h1>
              <span>{caseStudy?.boxTwoText}</span>
            </div>
          </div>
        </div>
      </div>
      <main
        style={{
          paddingBottom: "10rem",
        }}
        className="case-study-detail-page grid grid--full-width"
      >
        <div
          className="grid__content"
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <>{caseStudy?.copy}</>
        </div>
      </main>
    </Layout>
  );
};

export default CaseStudyDetailPage;

export async function getStaticPaths() {
  const paths = CASE_COPY.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return { props: { slug: params.slug } };
}
