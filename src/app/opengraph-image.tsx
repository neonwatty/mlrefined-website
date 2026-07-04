import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Machine Learning Refined second edition social preview with book cover, PDFs, notebooks, exercises, and slides";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const coverData = await readFile(
    join(process.cwd(), "public/book-cover-2nd.png"),
    "base64",
  );
  const coverSrc = `data:image/png;base64,${coverData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbfbf8",
          color: "#111111",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "58px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 704,
            paddingRight: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#1e4d59",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 54,
                  height: 8,
                  background: "#f6b91a",
                }}
              />
              Second Edition
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 34,
                fontSize: 72,
                lineHeight: 0.98,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              Machine Learning Refined
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                maxWidth: 620,
                color: "#323232",
                fontSize: 31,
                lineHeight: 1.24,
                fontWeight: 500,
              }}
            >
              Chapter PDFs, GitHub notebooks, exercises, slides, and Python
              resources for the Cambridge textbook.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              color: "#111111",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {["PDFs", "Notebooks", "Exercises", "Slides"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  border: "2px solid #111111",
                  borderRadius: 999,
                  padding: "12px 18px",
                  background: "#ffffff",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 368,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            background: "#153840",
            border: "4px solid #111111",
          }}
        >
          <img
            alt=""
            src={coverSrc}
            width={270}
            height={385}
            style={{
              display: "flex",
              boxShadow: "0 22px 0 rgba(0, 0, 0, 0.22)",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#f7f2da",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            mlrefined.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
