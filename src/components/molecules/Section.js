export default function Section({ children, name }) {
  return (
    <div>
      <h2 className="pb-2 font-display text-xl font-medium">{name}</h2>
      <div className="px-6">{children}</div>
    </div>
  );
}
