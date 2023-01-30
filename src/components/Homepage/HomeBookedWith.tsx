const HomeBookedWith = () => {
  return (
    <div
      className="grid grid--full-width "
      style={{
        maxWidth: "1440px",
        zIndex: 5,
      }}
    >
      <p
        style={{
          zIndex: 5,
          letterSpacing: "0.0px",
        }}
      >
        Booked meeting with:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
          flexWrap: "wrap",
        }}
      >
        {BRANDS.map((brand, index) => {
          return (
            <div key={index}>
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  width: "100px",
                  marginTop: "1.8rem",
                  marginRight: "1.2rem",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBookedWith;

const BRANDS = [
  {
    name: "Google",
    logo: "/images/homepage/booked/Google.png",
  },
  {
    name: "Microsoft",
    logo: "/images/homepage/booked/Microsoft.png",
  },
  {
    name: "Spotify",
    logo: "/images/homepage/booked/Spotify.png",
  },
  {
    name: "Mailchimp",
    logo: "/images/homepage/booked/Mailchimp.png",
  },
  {
    name: "Airbnb",
    logo: "/images/homepage/booked/Airbnb.png",
  },

  {
    name: "Uber",
    logo: "/images/homepage/booked/uber.png",
  },
];
