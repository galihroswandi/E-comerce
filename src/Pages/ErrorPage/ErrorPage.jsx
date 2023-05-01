import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl">404 Not Found</h1>
      <Link
        to="/"
        className="mt-5 hover:text-green-500 text-xl flex items-center gap-1"
      >
        <span className="text-4xl -mt-1">&laquo;</span>
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
