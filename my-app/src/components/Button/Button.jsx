import "./Button.css";

export default function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={`custom-btn ${className}`}>
        {/* Icon Here */}
        {children}
    </button>
  );
}