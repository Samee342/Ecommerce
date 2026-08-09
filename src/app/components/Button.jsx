import Spinner from "./Spinner";
const Button = ({
  label,
  loading = false,
  type = "submit",
  className = "bg-primary w-full hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`relative  text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
    >
      {label}
      {loading && <Spinner className="w-5 h-5 fill-white animate-spin" />}
    </button>
  );
};

export default Button;
