type Props = {
  target?: "_blank";
  rel?: "noreferrer";
  href: string;
  title: string;
  spanEl: string | string[];
  classes?: string;
  routerDisabled?: true;
};

const WavyButton = ({ target, rel, href, title, spanEl, classes, routerDisabled }: Props) => {
  return (
    <a
      className={`cta ${classes ? classes : classes}`}
      href={href}
      title={title}
      target={target}
      rel={rel}
      data-router-disabled={routerDisabled ? true : false}
    >
      <span className="cta__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 159.99">
          <path d="M0,10.78S13.82,21.86,37.43,19,94.64-1.2,117,.07s23,4,23,4V160H0Z" />
        </svg>
      </span>

      {typeof spanEl === "string" ? (
        <span className="cta__text">{spanEl}</span>
      ) : (
        <span className="cta__text">
          {spanEl.map((el: string, index: number) => (
            <span key={index}>{el}</span>
          ))}
        </span>
      )}
    </a>
  );
};

export default WavyButton;
