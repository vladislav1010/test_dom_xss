"use client";

import { useRouter } from "next/navigation";
import React from "react";

const create = async (email: String, refresh: () => void) => {
  await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({ email }),
  });

  refresh();
};

// <script>console.log(document.cookie)</script>
export default function CreateUser() {
  const router = useRouter();

  const [value, setValue] = React.useState("");

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button onClick={() => create(value, router.refresh)}>Submit</button>
    </>
  );
}
