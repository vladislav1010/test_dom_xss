"use client";

import React from "react";

// %3Cimg%20src%3D1%20onerror%3D'console.log(document.cookie)'%3E
export default function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: decodeURIComponent(searchParams.search ?? ""),
      }}
    ></div>
  );
}
