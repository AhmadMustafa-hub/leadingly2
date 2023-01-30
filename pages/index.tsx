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
