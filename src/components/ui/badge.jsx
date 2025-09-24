export function Badge({ children, className }) {
  return (
    <span className={`px-2 py-1 rounded bg-blue-500 text-white ${className}`}>
      {children}
    </span>
  );
}