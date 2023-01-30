import Link from "next/link";
import { Navbar } from "./Navbar";

const Layout = ({
  children,
  templateColor,
  dataColor,
}: {
  children: React.ReactNode;
  templateColor?: string;
  dataColor?: string;
}) => {
  return (
    <div className={`${templateColor} page-wrapper`}>
      <Navbar templateColor={"#008081"} />
      <div className="data-router-wrapper " data-router-wrapper>
        <div className="data-router__view" data-router-view={templateColor} data-color={dataColor}>
          {children}
        </div>
      </div>
      <footer className="home-footer">
        <div className="footer__container footer-height">
          <div className="footer__container__logo">
            <img
              src="/images/layout/logo-lg.png"
              alt="logo"
              style={{
                alignSelf: "center",
                width: "90%",
              }}
            />
          </div>
          <div className="footer__container-flex">
            <div
              className="footer__container__links"
              style={{
                color: "white",
                gap: "2rem",
                fontWeight: 500,
              }}
            >
              <a
                style={{
                  color: "white",
                  opacity: 0.6,
                }}
              >
                Copyright,inc.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
