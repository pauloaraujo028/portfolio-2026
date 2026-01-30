"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

const NotFound = () => {
  const location = redirect("/");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">
          Oops! Página não encontrada.
        </p>
        <Link
          href={location}
          className="text-blue-500 underline hover:text-blue-700"
        >
          Voltar para Home!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
