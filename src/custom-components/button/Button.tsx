const Button = () => {
  return (
    <>
      {/* <style>{`
        @keyframes slide-in {
          0% {
            transform: translateX(100%);
            opacity: 0.5;
            filter: blur(5px);
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            filter: blur(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-in-out forwards;
        }
      `}</style> */}
      <button
        className="fixed top-4 right-10 z-50 p-4 w-64 rounded-md shadow-lg bg-emerald-300 transition animate-slideIn duration-1000"
        // onAnimationEnd={(e) => {
        //   if (e.animationName === "slideOut") removeToast(toast.id);
        // }}
      >
        Save Changes
      </button>
    </>
  );
};

export default Button;
