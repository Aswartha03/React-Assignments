export default function Message({ role, text }) {
  return (
    <div
      className={`p-2 my-2 rounded-lg max-w-[75%] ${
        role === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
      }`}
    >
      <p className="text-sm">{text}</p>
    </div>
  );
}
