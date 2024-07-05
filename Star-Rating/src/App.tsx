import { useState } from "react";
import Rating from "./Rating";

function App() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <Rating />
    </main>
  );
}

export default App;
