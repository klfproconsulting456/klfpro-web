import { NextResponse } from "next/server";

const fallbackNews = [
  {
    title: "RBI keeps repo rate unchanged; home loan EMI outlook stable",
    source: "KLFPRO Desk",
    url: "https://www.rbi.org.in/",
    category: "Policy"
  },
  {
    title: "Top lenders continue offering digital home loan journeys",
    source: "KLFPRO Desk",
    url: "https://www.nhb.org.in/",
    category: "Housing"
  },
  {
    title: "Borrowers advised to compare tenure and processing fees",
    source: "KLFPRO Desk",
    url: "https://www.sebi.gov.in/",
    category: "Advisory"
  }
] as const;

export async function POST() {
  return NextResponse.json(
    {
      success: true,
      news: fallbackNews,
      fetchedAt: new Date().toISOString()
    },
    { status: 200 }
  );
}

