import { Metadata } from "next";
import { BUSINESS_INFO } from "./constants";

const baseUrl = "https://goldstandardcontracting.com"; // Update with actual domain

export function generateMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
