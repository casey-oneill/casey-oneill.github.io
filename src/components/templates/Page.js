export default function Page({name, sections}) {
  return (
    <div className="grid grid-cols-1 gap-4 divide-y divide-accent">
      <h1 className="font-display font-black text-2xl md:text-3xl">
        {name}
      </h1>
      {sections.map(({key, component}) => (
        <div key={key} className="pt-4">
          {component}
        </div>
      ))}
    </div>
  );
}
