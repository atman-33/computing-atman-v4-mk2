export default function Page() {
  return (
    <div className="container m-auto mt-8 grid grid-cols-12 gap-1 text-white">
      <header className="col-span-12 bg-slate-600 p-4">Header</header>
      <aside className="col-span-12 bg-slate-600 p-4 md:col-span-4">aside</aside>
      <main className="col-span-12 bg-slate-600 p-4 md:col-span-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </main>
      <footer className="col-span-12 bg-slate-600 p-4">Footer</footer>
    </div>
  );
}
