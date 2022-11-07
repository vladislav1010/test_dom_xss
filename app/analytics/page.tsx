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

  const aRef = React.useRef<HTMLAnchorElement>(null);

  React.useLayoutEffect(() => {
    aRef.current!.href = getSearch(searchParams.siteUrl);
  }, []);

  return (
    <div>
      <input
        value={siteUrlDraft}
        onChange={(e) => {
          setSiteUrlDraft(e.target.value);
        }}
      />
      <a href={getSearch(siteUrlDraft)}>Draft</a>

      <a ref={aRef}>Current</a>
    </div>
  );
}

// For each potential source, (location)

// find cases within the page's JavaScript code where the source is being referenced
// Ctrl + Shift + F "searchParams" all over the repo

// where the source is being read
// app/analytics/page.tsx:24

// https://portswigger.net/web-security/cross-site-scripting/dom-based#:~:text=you%20can%20use%20the%20JavaScript%20debugger%20to%20add%20a%20break%20point%20and%20follow%20how%20the%20source%27s%20value%20is%20used.%20You%20might%20find%20that%20the%20source%20gets%20assigned%20to%20other%20variables.%20If%20this%20is%20the%20case%2C%20you%27ll%20need%20to%20use%20the%20search%20function%20again%20to%20track%20these%20variables
// app/analytics/page.tsx:14

// https://portswigger.net/web-security/cross-site-scripting/dom-based#:~:text=When%20you%20find%20a%20sink%20that%20is%20being%20assigned%20data%20that%20originated%20from%20the%20source
// app/analytics/page.tsx:24

// https://portswigger.net/web-security/cross-site-scripting/dom-based#:~:text=you%20can%20use%20the%20debugger%20to%20inspect%20the%20value%20by%20hovering%20over%20the%20variable%20to%20show%20its%20value%20before%20it%20is%20sent%20to%20the%20sink.

// https://portswigger.net/web-security/cross-site-scripting/dom-based#:~:text=Then%2C%20as%20with%20HTML%20sinks%2C%20you%20need%20to%20refine%20your%20input%20to%20see%20if%20you%20can%20deliver%20a%20successful%20XSS%20attack.
