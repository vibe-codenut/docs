import { ImageResponse } from "next/og";
import type { ReactNode } from "react";
import fs from "node:fs/promises";
import type { ImageResponseOptions } from "next/server";

export interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
}

const font = await fs.readFile("./lib/og/Lato-Regular.ttf");
const fontBold = await fs.readFile("./lib/og/Lato-Bold.ttf");

export async function generateOGImage(
  options: GenerateProps & Partial<ImageResponseOptions>
): Promise<ImageResponse> {
  const { title, description, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Lato",
          data: font,
          weight: 400,
        },
        {
          name: "Lato",
          data: fontBold,
          weight: 600,
        },
      ],
      ...rest,
    }
  );
}

function generate({ title, description }: GenerateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundImage: process.env.NEXT_PUBLIC_VERCEL_URL
          ? `url(https://${process.env.NEXT_PUBLIC_VERCEL_URL}/og-image-bg.png)`
          : "url(http://localhost:3000/og-image-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          padding: "0 115px",
          marginTop: "220px",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            fontSize: "72px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "40px",
            color: "rgba(240,240,240,0.7)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
