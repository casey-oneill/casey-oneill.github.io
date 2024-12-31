export default function Section({ children, name, subtext }) {
  return (
    <div>
      <h2 className="font-display font-medium text-xl md:text-2xl">
        {name}
      </h2>
      <h3>
        {subtext}
      </h3>
      <div className="px-6">
        {children}
      </div>
    </div>
  );
}
