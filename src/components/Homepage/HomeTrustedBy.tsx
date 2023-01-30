import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeTrustedBy = () => {
  return (
    <div
      className="grid grid--full-width "
      style={{
        maxWidth: "1440px",
        zIndex: 2,
      }}
    >
      <div className="trusted-0">
        <div className="membership-grid trusted-1-a">
          {trustedBy.map((_, i) => (
            <img
              className="membership-card cards--column"
              key={i}
              src={`/images/homepage/trusted-by/${_}.png`}
            />
          ))}
        </div>
        <div className="trusted-1-b">
          <div className="trusted-1-b-a">
            <h4
              style={{
                color: "#7D0FCC",
                height: "20px",
              }}
            >
              Equip your company for success
            </h4>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
              }}
            >
              In-depth lead generation to deliver the most accurate sales appointments. High email
              deliverability to support powerful outbound marketing campaigns. Strategic steps to
              book appointments, reduce no-shows, and close more deals generated online.
            </p>
            <div className="lead-card__links">
              <a href={"#why-us"} className="a-icon-style">
                <div className="icon-style">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      height: "16px",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                  }}
                >
                  Explore our agency
                </span>
              </a>
            </div>
          </div>
          <div className="trusted-1-b-a">
            <h4
              style={{
                color: "#7D0FCC",
                height: "20px",
              }}
            >
              Close deals that fuel your growth
            </h4>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
              }}
            >
              There is no place for a cookie cutter approach in the world of effective prospecting.
              We custom-tailor strategies, glean exclusive B2B data, and craft bespoke email
              templates for your cold outreac campaigns to enrich your sales funnel with hot
              appointments.
            </p>
            <div className="lead-card__links">
              <a href={"#how-it-works"} className="a-icon-style">
                <div className="icon-style">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      height: "16px",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                  }}
                >
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",

          zIndex: 2,
        }}
        className="trusted-111"
      >
        <div
          style={{
            width: "33%",
            height: "365px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            backgroundColor: "#F359E5",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              height: "100%",
              padding: "2rem 1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="award-winning"
            >
              <p
                style={{
                  color: "white",
                  fontWeight: 800,
                  lineHeight: "1.2px",
                }}
              >
                AWARD-WINNING
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                B2B Appointment Setting Agency Recognized and Certified
              </p>
              <img
                src="/images/homepage/trusted-by/award.png"
                alt=""
                style={{
                  margin: "auto",
                }}
                className="award-winning-img"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "66%",
            height: "365px",
            backgroundColor: "#7D0FCC",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              height: "100%",
              gap: "1rem",
              padding: "2rem 1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p
                style={{
                  color: "white",
                  height: "10px",
                  fontWeight: 800,
                }}
              >
                The best B2B appointments, hand-picked and delivered
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Leadingly will research and validate prospects’ data and generate B2B appointments,
                at a fraction of the cost for an in-house team. Our account managers, sales
                development reps, and copywriters will deliver research, messaging, prospecting, and
                sales tactics so you can go straight to finalizing deals.
              </p>
            </div>
            <div className="lead-card__links">
              <a
                href="https://meetings.hubspot.com/oliver294"
                target="_blank"
                rel="noreferrer"
                className="a-icon-style-alt"
              >
                <div className="icon-style icon-style-alt">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      height: "16px",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  Book a call
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTrustedBy;

//array of 392 to 403
const trustedBy = [
  "392",
  "393",
  "394",
  "395",
  "396",
  "397",
  "398",
  "399",
  "400",
  "401",
  "402",
  "403",
];
