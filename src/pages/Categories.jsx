import React from "react";

const Categories = () => {
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
          Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category cards will go here */}
          <div
            className="p-6 rounded-lg shadow-md"
            style={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Electronics
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Browse our electronic products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
