// Render childrens
function App({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-full flex flex-col bg-green-200">{children}</div>;
}

export default App;
