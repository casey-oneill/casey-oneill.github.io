export default function Link({ children, internal, ...props }) {
  return (
    <a {...props} target={internal ? null : "_blank"} className="text-accent hover:underline">
      {children}
    </a>
  );
}
