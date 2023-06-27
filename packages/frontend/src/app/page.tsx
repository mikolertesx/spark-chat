"use client";

import { useEffect } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

// icons
import "primeicons/primeicons.css";

import { Button } from "primereact/button";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:8000/");
      const jsonResponse = await data.json();
      console.log(jsonResponse);
    };

    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button icon={"pi pi-check"} label="Welcome aboard!"></Button>
    </main>
  );
}
