import { NextSeo } from "next-seo";
import { HomeTemplate } from "src/templates/Home";

const thumbnail = {
  url: `https://cine-ruby.vercel.app/thumbnail.png`,
  width: 1200,
  height: 630,
  alt: "Cine",
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
