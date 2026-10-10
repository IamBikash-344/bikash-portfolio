import { ImageResponse } from "next/og";

export const alt = "Bikash Khiling | Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <div style={{ color: "#ff5a00", fontSize: 22, letterSpacing: 6 }}>FULL-STACK WEB DEVELOPER</div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, marginTop: 16 }}>
          BIKASH <span style={{ color: "#ff5a00" }}>KHILING</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#cfcfcf", maxWidth: 800 }}>
          Building fast, scalable web apps from Kathmandu, Nepal.
        </div>
      </div>
    ),
    { ...size },
  );
}
