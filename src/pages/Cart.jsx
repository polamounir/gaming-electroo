import React from "react";

const Cart = () => {
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
          Shopping Cart
        </h1>
        <div
          className="rounded-lg shadow-md p-6"
          style={{
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="text-center" style={{ color: "var(--color-text)" }}>
            Your cart is empty
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
