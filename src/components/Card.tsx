const Card = ({ id, title, description, activeStep, descriptionScale, titleScale }: any) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        margin: "2.5rem",
      }}
      className={`${activeStep === 0 ? "colorized-on-hover" : "opacity-on-hover"} card-0`}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <h4>{id}</h4>

        <h4
          style={{
            whiteSpace: id === "04" ? "normal" : "nowrap",
            textAlign: "left",
            letterSpacing: "0.7px",
          }}
          className="card-title"
        >
          {id === "04" && activeStep === 1 ? titleScale : title}
        </h4>
      </div>
      <div>
        <p
          style={{
            fontSize: "0.8rem",
            textAlign: "left",

            fontWeight: 600,
          }}
        >
          {id === "04" && activeStep === 1 ? descriptionScale : description}
        </p>
      </div>
    </div>
  );
};

export default Card;
