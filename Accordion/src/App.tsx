import data from "./data";
function App() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1>Accordion</h1>
      {data &&
        data.map((item) => (
          <div className="flex">
            <h3>{item.question}</h3>
            <span>+</span>
          </div>
        ))}
    </main>
  );
}

export default App;
