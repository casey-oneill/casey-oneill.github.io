export default function Header() {
  return (
    <div className="bg-light py-6 px-32">
      <header className="flex justify-between">
        <a href="/" className="font-display font-medium text-3xl">
          Casey O'Neill.
        </a>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="#">About Me</a>
          <a href="#">Resume</a>
          <a href="#">Projects</a>
        </div>
      </header>
    </div>
  );
}
