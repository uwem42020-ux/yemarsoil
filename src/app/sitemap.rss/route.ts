// app/sitemap.rss/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://yemars.com";
  const currentDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Yemars Oil and Gas</title>
    <link>${baseUrl}</link>
    <description>Reliable energy and petroleum solutions</description>
    <atom:link href="${baseUrl}/sitemap.rss" rel="self" type="application/rss+xml" />
    <item>
      <title>Home</title>
      <link>${baseUrl}</link>
      <guid>${baseUrl}</guid>
      <pubDate>${currentDate}</pubDate>
    </item>
    <item>
      <title>About</title>
      <link>${baseUrl}/about</link>
      <guid>${baseUrl}/about</guid>
      <pubDate>${currentDate}</pubDate>
    </item>
    <item>
      <title>Contact</title>
      <link>${baseUrl}/contact</link>
      <guid>${baseUrl}/contact</guid>
      <pubDate>${currentDate}</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}