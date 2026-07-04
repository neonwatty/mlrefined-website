import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Machine Learning Refined second edition social preview with book cover, GitHub notebooks, chapter PDFs, exercises, and slides";

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
          background: "#fbfaf4",
          color: "#0b2545",
          fontFamily: "Georgia, Times New Roman, serif",
          padding: "46px 52px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 700,
            padding: "18px 42px 18px 0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#8a6519",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 74,
                  height: 7,
                  background: "#c79222",
                }}
              />
              Second Edition
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                maxWidth: 660,
                fontSize: 82,
                lineHeight: 0.94,
                fontWeight: 900,
                letterSpacing: 0,
              }}
            >
              Machine Learning Refined
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                width: 332,
                height: 8,
                borderRadius: 8,
                background: "#c79222",
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 640,
                color: "#526070",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 31,
                lineHeight: 1.22,
                fontWeight: 700,
              }}
            >
              The official second-edition home for chapter PDFs, GitHub
              notebooks, exercises, slides, and Python resources.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#0b2545",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 22,
              fontWeight: 900,
            }}
          >
            {["PDFs", "GitHub notebooks", "Exercises", "Slides"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    border: "2px solid #ddcfad",
                    borderRadius: 10,
                    padding: "13px 16px",
                    background: "#ffffff",
                    boxShadow: "0 8px 0 rgba(7, 19, 38, 0.08)",
                  }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 378,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            background: "#0b2545",
            border: "5px solid #071326",
            boxShadow: "18px 18px 0 rgba(11, 37, 69, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 20,
              color: "#f8df73",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            Cambridge textbook resources
          </div>
          <img
            alt=""
            src={coverSrc}
            width={258}
            height={367}
            style={{
              display: "flex",
              boxShadow: "0 22px 0 rgba(0, 0, 0, 0.28)",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 24,
              color: "#fbfaf4",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 26,
              fontWeight: 900,
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
