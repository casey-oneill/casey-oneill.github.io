export default function Link({ children, ...props }) {
  return (
    <a {...props} target="_blank" className="text-accent hover:underline">
      {children}
    </a>
  );
}
