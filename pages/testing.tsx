import Link from "next/link";
import HomeApply from "../src/components/Homepage/HomeApply";
import HomeBgDecoration from "../src/components/Homepage/HomeBgDecoration";
import HomeBookedWith from "../src/components/Homepage/HomeBookedWith";
import HomeCaseStudies from "../src/components/Homepage/HomeCaseStudies";
import HomeFuelGrowth from "../src/components/Homepage/HomeFuelGrowth";
import HomeHowItWorks from "../src/components/Homepage/HomeHowItWorks";
import HomeMeetTheTeam from "../src/components/Homepage/HomeMeetTheTeam";
import HomeSeenOn from "../src/components/Homepage/HomeSeenOn";
import HomeTrustedBy from "../src/components/Homepage/HomeTrustedBy";
import HomeVideoTestomonials from "../src/components/Homepage/HomeVideoTestomonials";
import HomeWhyLeadingly from "../src/components/Homepage/HomeWhyLeadingly";
import Layout from "../src/components/layout/Layout";

function HomePage() {
  return (
    <Layout templateColor={"home"} dataColor="#008081">
      <HomeBgDecoration />

      <main>
        <HomeApply />
        <Link href="/checkout">
          <a
            style={{
              zIndex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              background: "linear-gradient(90.09deg, #F858E3 -0.79%, #AE5CF5 99.92%)",
              color: "white",
              borderRadius: "5px",
              padding: "1.2rem 1.6rem",
              margin: "2rem 2rem 0rem 0rem",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Checkout
          </a>
        </Link>

        <HomeSeenOn />
        <HomeBookedWith />
        <HomeTrustedBy />
        <HomeHowItWorks />
        <HomeCaseStudies />
        <HomeFuelGrowth />
        <HomeWhyLeadingly />
        <HomeVideoTestomonials />
        <HomeMeetTheTeam />
      </main>
    </Layout>
  );
}

export default HomePage;
