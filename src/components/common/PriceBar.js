import React from "react";
const PriceBar = () => {
  return (
    <section className="img-top veil reveal-lg-block text-center">
      <div className="shell">
        <iframe
          height="75"
          src="https://s.tradingview.com/tickerswidgetembed/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22INDEX%3ASPX%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22INDEX%3AIUXX%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22NYMEX%3ACL1!%22%2C%22title%22%3A%22Crude%20Oil%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AXAUUSD%22%2C%22title%22%3A%22Gold%22%7D%5D%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%7D"
          style={{
            boxSizing: "border-box",
            paddingBottom: "0px",
            border: "none"
          }}
          title="PriceFrame"
        />
      </div>
    </section>
  );
};
export default PriceBar;
