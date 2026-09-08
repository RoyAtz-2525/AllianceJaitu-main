const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  contacted: "bg-blue-100 text-blue-700",
  new: "bg-purple-100 text-purple-700",
};

const StatusBadge = ({ status }) => {
  const normalizedStatus = status?.toLowerCase() || "pending";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
        statusStyles[normalizedStatus] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status || "Pending"}
    </span>
  );
};

export default StatusBadge;
