"use client";

import React from "react";

// %3Cimg%20src%3D1%20onerror%3D'console.log(document.cookie)'%3E
export default function Home({ searchParams }: any) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: decodeURIComponent(searchParams.search ?? ""),
      }}
    ></div>
  );
}

// available sources - searchParams
// each location where your string appears within the DOM
// identify context
// refine input
// %3Cimg%20src%3D1%20onerror%3D'console.log(1)'%3E
