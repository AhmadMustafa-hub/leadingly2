const HomeApply = () => {
  return (
    <section className="">
      <div className="sm-pb-5">
        <div className="grid--two-cols  grid__traits  grid ledger__content ">
          <div className="grid__content grid__content--left trait__body--left mt--2">
            <h2
              style={{
                fontWeight: 600,
              }}
            >
              SCORE <span className="number-1">THE BEST DEALS</span> WITH B2B APPOINTMENT SETTING
              SERVICES <span className="number-1">BY LEADINGLY</span>
            </h2>
            <p
              style={{
                margin: "1rem 0 4rem 0",
                fontWeight: 600,
              }}
            >
              Book New Revenue & Get 10+ New Meetings Per Week. <span className="number-1"></span>{" "}
              Leadingly has the best software and experts for advancing your B2B sales strategy.
            </p>
            <a
              style={{
                background: "linear-gradient(90.09deg, #F858E3 -0.79%, #AE5CF5 99.92%)",
                width: "18rem",
                color: "white",
                borderRadius: "5px",
                padding: "1.2rem 1.6rem",
                margin: "2rem 2rem 0rem 0rem",
                fontSize: "1rem",
                fontWeight: 600,
              }}
              href="https://meetings.hubspot.com/oliver294"
              target="_blank"
              rel="noreferrer"
            >
              BOOK A FREE CONSULTATION
            </a>
          </div>
          <div className="grid__content grid__content--right txt-center">
            <div style={{}} className="trait__image--right">
              <img
                src="/images/homepage/hero-phone.png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApply;
