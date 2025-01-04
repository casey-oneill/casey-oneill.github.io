export default function Section({ children, name }) {
  return (
    <div>
      <h2 className="font-display font-medium text-xl">
        {name}
      </h2>
      <div className="px-6">
        {children}
      </div>
    </div>
  );
}
