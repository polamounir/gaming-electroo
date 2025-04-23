import React from "react";

const Profile = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <div className="">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--color-accent)" }}
        >
          Profile
        </h1>
        <div
          className="rounded-lg shadow-md p-6"
          style={{
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="space-y-4">
            <div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Personal Information
              </h2>
              <p style={{ color: "var(--color-text)" }}>
                Manage your account details and preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
