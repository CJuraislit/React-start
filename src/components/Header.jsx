import { useState } from "react";
import logo from "/vite.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt="Vite" />

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
