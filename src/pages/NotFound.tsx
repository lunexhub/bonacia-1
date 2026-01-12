import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center bg-muted">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl sm:text-7xl md:text-8xl font-bold text-primary">404</h1>
          <p className="mb-4 text-xl sm:text-2xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-6 text-sm sm:text-base text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block text-primary underline hover:text-primary/90 font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
