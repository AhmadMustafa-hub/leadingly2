const HomeWhyLeadingly = () => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
      id="why-us"
    >
      <div className="align--center-center mb--2 md-mt-5">
        <h1
          style={{
            zIndex: 1,
            fontWeight: 600,
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          Here’s why Leadingly is <span className="number-1">#1</span>
        </h1>
      </div>
      <img
        src={"/images/homepage/why-leadingly.png"}
        alt="why leadingly"
        style={{
          zIndex: 1,
          margin: "0 auto",
        }}
        className="why-leadingly"
      />
      <img
        src={"/images/homepage/why-leadingly-sm.png"}
        alt="why leadingly"
        style={{
          zIndex: 1,
          margin: "0 auto",
        }}
        className="why-leadingly-sm"
      />
    </div>
  );
};

export default HomeWhyLeadingly;
