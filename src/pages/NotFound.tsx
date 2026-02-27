import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-serif font-light text-gray-900">404</h1>
        <p className="mb-8 text-xl text-gray-500 font-light">Page not found</p>
        <Link
          to="/"
          className="inline-block bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
