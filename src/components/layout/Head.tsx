import React from "react";
import { default as NextHead } from "next/head";

function toTitleCase(str: any) {
  if (str === "/") {
    return "Home";
  }
  const newStr = str.split("-");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === "lead") {
      newStr[i] = "lead";
    } else {
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
    }
  }
  return newStr.join(" ");
}

type HeadProps = {
  title: string;
};
const Head = ({ title }: HeadProps) => {
  let metaContent = `Some meta content`;
  const titlePath = title === "/" ? "Leadingly" : toTitleCase(title.replace("/", ""));
  const pageTitle = titlePath + " - Score the Best Deals";
  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={metaContent} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaContent} />
      <meta property="og:site_name" content="lead template" />
      {/* <meta
        property="og:image"
        content="https://leadg-pl-metadata.s3.us-east-1.amazonaws.com/leadg-banner.png"
      /> */}
      <meta name="twitter:card" content={metaContent} />
      {/* <meta name="twitter:site" content="@worldofwomennft" /> */}
      {/* <meta property="twitter:description" content={metaContent} /> */}
      {/* <meta
        name="twitter:image"
        content="https://leadg-pl-metadata.s3.us-east-1.amazonaws.com/leadg-banner.png"
      /> */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    </NextHead>
  );
};

export default Head;
