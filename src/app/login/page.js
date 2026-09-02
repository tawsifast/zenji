"use client";

import { useState } from "react";
import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };
const RED = { color: "#BC0100" };

const LOGO_CLIP =
  "polygon(0 14%, 9% 0, 100% 0, 100% 86%, 91% 100%, 0 100%)";

export default function LoginPage() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [mode, setMode] = useState("login");

  return (
    <>
      <Splash />
      <Marquee />
      <Nav />
      <main className="flex min-h-screen items-start justify-center bg-black px-6 pb-24 pt-28 md:items-center md:pt-24">
        <div className="w-full max-w-[420px] border border-white/15 p-8 md:p-10">
          <div className="mb-6 flex justify-center">
            <span
              aria-label="ZENJI"
              className="clip-logo inline-block select-none text-4xl uppercase leading-none tracking-[-0.02em] text-white"
              style={{
                fontFamily: "var(--font-anton), 'Anton', sans-serif",
                fontWeight: 400,
                clipPath: LOGO_CLIP,
                WebkitClipPath: LOGO_CLIP,
              }}
            >
              ZENJI
            </span>
          </div>

          <h1
            style={ANTON}
            className="text-center text-2xl uppercase tracking-widest text-white"
          >
            BEGIN YOUR JOURNEY
          </h1>
          <p style={IBM} className="mb-8 mt-3 text-center text-sm text-gray-400">
            Sign in to personalize your experience
          </p>

          <button
            type="button"
            style={{
              fontFamily: "var(--font-ibm-plex), monospace",
              width: "100%",
              padding: "14px 20px",
              background: "#ffffff",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              fontSize: 14,
              border: "none",
              borderRadius: 0,
              fontWeight: 600,
              marginBottom: 12,
              transition: "all 0.2s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 814 1000" fill="black" aria-hidden="true">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-152.5-118.1C46.7 790.7 0 661.4 0 536.2c0-187.8 122.5-287.3 243.1-287.3 63.9 0 117.1 42.2 157.6 42.2 38.6 0 99-44.7 171.4-44.7 27.9 0 108.2 2.6 167.2 99.3zm-120.1-209.5c31.2-37.6 53.4-90.2 53.4-142.8 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 136.8 0 7.8 1.3 15.6 2.5 22.5 45.4 0 102.5-30.4 135.2-68.1z"></path>
            </svg>
            Continue with Apple
          </button>

          <button
            type="button"
            style={{
              fontFamily: "var(--font-ibm-plex), monospace",
              width: "100%",
              padding: "14px 20px",
              background: "transparent",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              fontSize: 14,
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 0,
              fontWeight: 600,
              marginBottom: 24,
              transition: "all 0.2s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
            </svg>
            Continue with Google
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.15)" }}></div>
            <span style={{ ...IBM, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.15)" }}></div>
          </div>

          {!emailOpen ? (
            <button
              type="button"
              onClick={() => setEmailOpen(true)}
              style={{
                fontFamily: "var(--font-ibm-plex), monospace",
                width: "100%",
                padding: "14px 20px",
                background: "transparent",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                fontSize: 14,
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 0,
                marginBottom: 24,
                transition: "all 0.2s ease",
              }}
            >
              → Continue with Email
            </button>
          ) : (
            <div>
              <div className="mb-8 flex border-b border-white/15">
                {[
                  ["login", "LOGIN"],
                  ["signup", "CREATE ACCOUNT"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMode(key)}
                    aria-current={mode === key ? "true" : undefined}
                    data-selected={mode === key}
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    className={`flex min-h-[48px] flex-1 items-center justify-center border-b-2 px-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                      mode === key
                        ? "border-b-[#BC0100] text-white"
                        : "border-b-transparent text-white/40 hover:text-white/70"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                {mode === "signup" && (
                  <label className="block">
                    <span
                      style={ANTON}
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                    >
                      NAME
                    </span>
                    <input
                      type="text"
                      autoComplete="name"
                      style={IBM}
                      className="w-full border border-white/15 bg-white/5 px-3 py-2.5 text-[12px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/50"
                      placeholder="YOUR NAME"
                    />
                  </label>
                )}

                <label className="block">
                  <span
                    style={ANTON}
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                  >
                    EMAIL
                  </span>
                  <input
                    type="email"
                    autoComplete="email"
                    style={IBM}
                    className="w-full border border-white/15 bg-white/5 px-3 py-2.5 text-[12px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/50"
                    placeholder="YOU@EMAIL.COM"
                  />
                </label>

                <label className="block">
                  <span
                    style={ANTON}
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                  >
                    PASSWORD
                  </span>
                  <input
                    type="password"
                    autoComplete={mode === "signup" ? "new-password" : "current-password"}
                    style={IBM}
                    className="w-full border border-white/15 bg-white/5 px-3 py-2.5 text-[12px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/50"
                    placeholder="• • • • • • • •"
                  />
                </label>

                {mode === "signup" && (
                  <label className="block">
                    <span
                      style={ANTON}
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                    >
                      CONFIRM PASSWORD
                    </span>
                    <input
                      type="password"
                      autoComplete="new-password"
                      style={IBM}
                      className="w-full border border-white/15 bg-white/5 px-3 py-2.5 text-[12px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/50"
                      placeholder="• • • • • • • •"
                    />
                  </label>
                )}

                <button
                  type="submit"
                  style={ANTON}
                  className="mt-2 min-h-[52px] w-full rounded-none bg-[#BC0100] px-6 py-4 text-[15px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  {mode === "signup" ? "JOIN ZENJI →" : "ENTER THE ARCHIVE →"}
                </button>

                <p style={{ ...ANTON, ...RED }} className="text-center text-[11px] uppercase tracking-[0.2em]">
                  &nbsp;
                </p>
              </form>

              <p
                style={ANTON}
                className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-white/30"
              >
                {mode === "signup" ? "ALREADY ENLISTED?" : "NEW HERE?"}{" "}
                <button
                  type="button"
                  onClick={() => setMode(mode === "signup" ? "login" : "signup")}
                  className="underline underline-offset-4 transition-colors hover:text-white"
                >
                  {mode === "signup" ? "Log in" : "Sign up"}
                </button>
              </p>
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a
              href="/collection"
              style={{ ...IBM, fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "underline", letterSpacing: "0.1em" }}
            >
              Browse as Guest
            </a>
          </div>
          <p
            style={{
              ...IBM,
              textAlign: "center",
              fontSize: 10,
              color: "rgba(255,255,255,0.3)",
              marginTop: 16,
              letterSpacing: "0.05em",
            }}
          >
            By continuing, you agree to our{" "}
            <a style={{ color: "rgba(255,255,255,0.5)" }} href="/terms">
              Terms
            </a>{" "}
            &amp;{" "}
            <a style={{ color: "rgba(255,255,255,0.5)" }} href="/privacy-policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}