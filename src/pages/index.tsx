import { NextSeo } from "next-seo";
import { HomeTemplate } from "src/templates/Home";

const thumbnail = {
  url: "https://lui7henrique.com/about.png",
  width: 1200,
  height: 630,
  alt: "About me",
};

const defaultMetadata = {
  title: "Cine",
  description: "Movies and TV series recommendations in one click!",
};

export default function Home() {
  return (
    <>
      <NextSeo
        canonical={process.env.VERCEL_URL}
        twitter={{
          ...defaultMetadata,
          cardType: "summary_large_image",
          site: "@lui7henrique",
        }}
        openGraph={{
          ...defaultMetadata,
          url: process.env.VERCEL_URL,
          images: [thumbnail],
        }}
        {...defaultMetadata}
      />

      <HomeTemplate />
    </>
  );
}
