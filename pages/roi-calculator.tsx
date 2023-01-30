import Layout from "../src/components/layout/Layout";
import { useState } from "react";
import { NumberFormatValues, NumericFormat } from "react-number-format";

function RoiCalculator() {
  const [avgDealSize, setAvgDealSize] = useState<number | string>(5000);
  const [closeRatio, setCloseRatio] = useState<number | string>(35);
  const [totalTargetAccounts, setTotalTargetAccounts] = useState<number | string>(50000);
  const [costPerMonth, setCostPerMonth] = useState<string>("1");
  console.log("avgDealSize", avgDealSize);
  return (
    <Layout templateColor={"home"} dataColor="#008081">
      <main
        style={{
          paddingBottom: "10rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          className="grid grid--full-width case-studies-page"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "900px",
              margin: "0 auto",
              width: "100%",
            }}
            className="roi-calculator-page"
          >
            <h3>Company Dynamics</h3>
            <div
              className="roi-value-container"
              //row
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  maxWidth: "20rem",
                }}
                //column
              >
                {/* left column - TITLE & DESCRIPTION */}
                <h4>Average Deal Size</h4>
                <span
                  style={{
                    opacity: 0.7,
                  }}
                >
                  Average dollar amount of each won deal, or a year’s worth of subscription revenues
                </span>
              </div>
              {/* right column - INPUT */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "3rem",
                }}
              >
                <div
                  className="range-slider"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <input
                    className="range-slider__range"
                    type="range"
                    min={0}
                    max={100000}
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(e.target.value)}
                    style={{
                      padding: "0",
                    }}
                  />
                  <span className="currencyinput">
                    <NumericFormat
                      prefix="$"
                      type="text"
                      value={avgDealSize}
                      onChange={(e) => {
                        if (Number(e.target.value.replace(/,/g, "")) > 100000) {
                          setAvgDealSize(100000);
                        } else {
                          setAvgDealSize(Number(e.target.value.replace("$", "").replace(/,/g, "")));
                        }
                      }}
                      isAllowed={(values: NumberFormatValues) => {
                        const { value } = values;
                        return Number(value) < 100000;
                      }}
                      thousandsGroupStyle="thousand"
                      thousandSeparator=","
                      className="input--number"
                      max={100000}
                      min={0}
                      id="number"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div
              className="roi-value-container"
              //row
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  minWidth: "20rem",
                }}
                //column
              >
                {/* left column - TITLE & DESCRIPTION */}
                <h4>Close Ratio</h4>
                <span
                  style={{
                    opacity: 0.7,
                  }}
                >
                  Percentage of total appointments your reps can turn into customers
                </span>
              </div>
              {/* right column - INPUT */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "3rem",
                }}
              >
                <div
                  className="range-slider"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <input
                    className="range-slider__range"
                    type="range"
                    min={10}
                    max={100}
                    value={closeRatio}
                    onChange={(e) => setCloseRatio(e.target.value)}
                    style={{
                      padding: "0",
                    }}
                  />

                  <span className="currencyinput">
                    <NumericFormat
                      suffix="%"
                      type="text"
                      min={10}
                      max={100}
                      value={closeRatio}
                      onChange={(e) => {
                        if (Number(e.target.value.replace(/,/g, "")) > 100000) {
                          setCloseRatio(100);
                        } else {
                          setCloseRatio(e.target.value);
                        }
                      }}
                      isAllowed={(values: NumberFormatValues) => {
                        const { value } = values;
                        return Number(value) < 100 && Number(value) > 10;
                      }}
                      thousandsGroupStyle="thousand"
                      thousandSeparator=","
                      className="input--number"
                      id="number"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "900px",
              margin: "2rem auto",
              width: "100%",
            }}
            className="roi-calculator-page"
          >
            <h3>Campaign Inputs</h3>
            <div
              className="roi-value-container"
              //row
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  minWidth: "20rem",
                }}
                //column
              >
                {/* left column - TITLE & DESCRIPTION */}
                <h4>Total Target Accounts</h4>
                <span
                  style={{
                    opacity: 0.7,
                  }}
                >
                  Number of potential accounts to be targeted in the campaign
                </span>
              </div>
              {/* right column - INPUT */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "3rem",
                }}
              >
                <div
                  className="range-slider"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <input
                    className="range-slider__range"
                    type="range"
                    min={50000}
                    max={100000}
                    value={totalTargetAccounts}
                    onChange={(e) => setTotalTargetAccounts(e.target.value)}
                    style={{
                      padding: "0",
                    }}
                  />
                  <span className="currencyinput">
                    <NumericFormat
                      type="text"
                      value={totalTargetAccounts}
                      onChange={(e) => {
                        if (Number(e.target.value.replace(/,/g, "")) > 100000) {
                          setTotalTargetAccounts(100000);
                        } else {
                          setTotalTargetAccounts(e.target.value);
                        }
                      }}
                      isAllowed={(values: NumberFormatValues) => {
                        const { value } = values;
                        return Number(value) < 100000 && Number(value) > 50000;
                      }}
                      thousandsGroupStyle="thousand"
                      thousandSeparator=","
                      className="input--number"
                      max={100000}
                      min={0}
                      id="number"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div
              className="roi-value-container"
              //row
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  minWidth: "20rem",
                }}
                //column
              >
                {/* left column - TITLE & DESCRIPTION */}
                <h4>
                  Cost Per Month {"("}no-commitment{")"}
                </h4>
                <span
                  style={{
                    opacity: 0.7,
                  }}
                >
                  Amount Leadingly charges in each campaign term
                </span>
              </div>
              {/* right column - INPUT */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "3rem",
                }}
              >
                <div
                  className="range-slider"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <select
                    name="pricingPackages"
                    id="pricingPackages"
                    style={{
                      cursor: "pointer",
                      outline: "none",
                    }}
                    value={costPerMonth}
                    onChange={(e) => setCostPerMonth(e.target.value)}
                  >
                    <option value="1">$2,450/mo Growth Package</option>
                    <option value="2">$3,150/mo Scale Package</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}

          <div
            style={{
              textAlign: "center",
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2>Monthly Results</h2>
            <div
              className="grid-roi"
              style={{
                boxShadow:
                  "0px 7.49576px 28.4839px rgba(0, 0, 0, 0.12), inset 0px 1.49915px 0px rgba(255, 255, 255, 0.2)",
              }}
            >
              <div></div>
              <h4>Monthly</h4>
              <h4>ANNUALLY</h4>
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Number of Appointments Generated</h4>
                <span>Increases as campaign progresses and tactics improve</span>
              </div>
              <div className="grid-roi__number">
                <h4>{costPerMonth === "1" ? "30+" : "50+"}</h4>
              </div>
              <div className="grid-roi__number">
                <h4>{costPerMonth === "1" ? "360+" : "600+"}</h4>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Number of Appointments Set</h4>
                <span>
                  Projected number of won deals based on appointments generated and close ratio
                </span>
              </div>
              <div className="grid-roi__number">
                <h4>
                  {costPerMonth === "1"
                    ? Math.round(30 * (Number(closeRatio) / 100)).toString()
                    : Math.round(50 * (Number(closeRatio) / 100)).toString()}
                </h4>
              </div>
              <div className="grid-roi__number">
                <h4>
                  {costPerMonth === "1"
                    ? Math.round(30 * (Number(closeRatio) / 100) * 12).toString()
                    : Math.round(50 * (Number(closeRatio) / 100) * 12).toString()}
                </h4>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Gross Cost Per Appointment</h4>
                <span>
                  Total costs divided by the number of appointments set; decreases as the campaign
                  progresses
                </span>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(2450 / 30).toString()
                    : Math.round(3150 / 50).toString()}
                </h4>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(2450 / 30).toString()
                    : Math.round(3150 / 50).toString()}
                </h4>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Cost Per Customer Added</h4>
                <span>
                  Total costs divided by number of deal conversions; also decreases as the campaign
                  proceeds
                </span>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(2450 / ((30 * Number(closeRatio)) / 100)).toString()
                    : Math.round(3150 / ((50 * Number(closeRatio)) / 100)).toString()}
                </h4>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(2450 / ((30 * Number(closeRatio)) / 100)).toString()
                    : Math.round(3150 / ((50 * Number(closeRatio)) / 100)).toString()}
                </h4>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Gross New Revenue Generated</h4>
                <span>
                  Projected dollar amount of sales from customers acquired in the campaign. This
                  only shows first campaign
                </span>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize)
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize)
                      ).toLocaleString()}
                </h4>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize) * 12
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize) * 12
                      ).toLocaleString()}
                </h4>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Appointment setting Costs</h4>
                <span>Total investment per month</span>
              </div>
              <div className="grid-roi__number">
                <h4>{costPerMonth === "1" ? "$2,450" : "$3,150"}</h4>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(2450 * 12).toLocaleString()
                    : Math.round(3150 * 12).toLocaleString()}
                </h4>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid-roi__item">
                <h4>Net New Revenue Generated</h4>
                <span>The additional sales amount minus the total costs per term</span>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize) - 2450
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize) - 3150
                      ).toLocaleString()}
                </h4>
              </div>
              <div className="grid-roi__number">
                <h4>
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize) * 12 - 2450 * 12
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize) * 12 - 3150 * 12
                      ).toLocaleString()}
                </h4>
              </div>
              {/*  */}
              {/*  */}
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                marginBottom: "2rem",
              }}
            >
              Full Monthly Campaign Results
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "0 auto",
                justifyContent: "center",

                alignItems: "flex-start",
              }}
              className="full-campaign-wrapper"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "20rem",
                  padding: "1rem",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
                className="full-campaign-item"
              >
                <h4>Number of Appointments Generated</h4>
                <span>The total appointments set count at the end of the campaign</span>
                <h2
                  style={{
                    color: "#8E13E7",
                  }}
                >
                  {costPerMonth === "1" ? "30+" : "50+"}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "20rem",
                  padding: "1rem",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
                className="full-campaign-item"
              >
                <h4>Number of Deals Converted</h4>
                <span>
                  The total number of appointments set in the campaign that turned into customers
                </span>
                <h2
                  style={{
                    color: "#8E13E7",
                  }}
                >
                  {costPerMonth === "1"
                    ? Math.round(30 * (Number(closeRatio) / 100)).toString()
                    : Math.round(50 * (Number(closeRatio) / 100)).toString()}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "20rem",
                  padding: "1rem",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
                className="full-campaign-item"
              >
                <h4>Gross Additional Sales Closed</h4>
                <span>The total amount of new business acquired in the campaign</span>
                <h2
                  style={{
                    color: "#8E13E7",
                  }}
                >
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize)
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize)
                      ).toLocaleString()}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "20rem",
                  padding: "1rem",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
                className="full-campaign-item"
              >
                <h4>Net Additional Sales Closed</h4>
                <span>
                  The amount of new business generated by the campaign minus total campaign costs
                </span>
                <h2
                  style={{
                    color: "#8E13E7",
                  }}
                >
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize) - 2450
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize) - 3150
                      ).toLocaleString()}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "20rem",
                  padding: "1rem",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
                className="full-campaign-item"
              >
                <h4>Gross ROI</h4>
                <span>The ratio of gross additional sales closed over total investment</span>
                <h2
                  style={{
                    color: "#8E13E7",
                  }}
                >
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize)
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize)
                      ).toLocaleString()}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "20rem",
                  padding: "1rem",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
                className="full-campaign-item"
              >
                <h4>Net ROI</h4>
                <span>The ratio of net additional sales closed over total investment</span>
                <h2
                  style={{
                    color: "#8E13E7",
                  }}
                >
                  $
                  {costPerMonth === "1"
                    ? Math.round(
                        30 * (Number(closeRatio) / 100) * Number(avgDealSize) - 2450
                      ).toLocaleString()
                    : Math.round(
                        50 * (Number(closeRatio) / 100) * Number(avgDealSize) - 3150
                      ).toLocaleString()}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default RoiCalculator;
