const Loader = ({ fullScreen = false, text = "Loading..." }) => {
  const containerClass = fullScreen
    ? "flex min-h-screen items-center justify-center"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        {text && <p className="text-sm font-medium text-slate-500">{text}</p>}
      </div>
    </div>
  );
};

export default Loader;
