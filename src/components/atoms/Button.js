export default function Button({ children, onClick, variant = "primary" }) {
  if (variant === "secondary") {
    return (
      <button type="button" onClick={onClick} className="bg-light dark:bg-dark hover:bg-accent border border-dark dark:border-light hover:border-accent text-dark dark:text-light hover:text-light dark:hover:text-dark rounded-full w-[130px] h-[35px] font-medium uppercase transition-colors">
        {children}
      </button>
    );
  }

  return (
    <button type="button" onClick={onClick} className="bg-accent hover:bg-light dark:hover:bg-dark border-2 border-accent text-light dark:text-dark hover:text-dark dark:hover:text-light rounded-full w-[130px] h-[35px] font-medium uppercase transition-colors">
      {children}
    </button>
  );
}
