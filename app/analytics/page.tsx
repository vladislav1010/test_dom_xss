"use client";

import React from "react";

// https://portswigger.net/web-security/dom-based/link-manipulation#:~:text=Causing%20the%20user%20to%20be%20redirected%20to%20an%20arbitrary%20external%20URL%2C%20which%20could%20facilitate%20a%20phishing%20attack.

export default function Analytics({
  searchParams,
}: {
  searchParams: { siteUrl: string };
}) {
  const [siteUrlDraft, setSiteUrlDraft] = React.useState("");

  const getSearch = (siteUrl: string) => {
    const result = new URL("", "https://a");
    result.searchParams.set("siteUrl", siteUrl);

    return result.search;
  };

  return (
    <div>
      <input
        value={siteUrlDraft}
        onChange={(e) => {
          setSiteUrlDraft(e.target.value);
        }}
      />
      <a href={getSearch(siteUrlDraft)}>Draft</a>

      <a href={getSearch(searchParams.siteUrl)}>Current</a>
    </div>
  );
}
