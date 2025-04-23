import React from "react";

const Deals = () => {
  return (
    <div
      className="page"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <div className="">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--color-accent)" }}
        >
          Special Deals
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Deal cards will go here */}
          <div
            className="p-6 rounded-lg shadow-md"
            style={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="font-bold mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              Special Offer
            </div>
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Flash Sale
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Limited time offers on selected items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
