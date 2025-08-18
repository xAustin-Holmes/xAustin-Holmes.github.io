import "./Button.css";

export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
        {/* Icon Here */}
        {children}
    </button>
  );
}