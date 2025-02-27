"use client";

import { JSX } from "react";

export function TableSkeleton(): JSX.Element {
  const rows = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="w-full animate-pulse">
      {/* Table header */}
      <div className="flex mb-4">
        <div className="h-8 bg-gray-800 rounded w-1/4 mr-4"></div>
        <div className="h-8 bg-gray-800 rounded w-2/4 mr-4"></div>
        <div className="h-8 bg-gray-800 rounded w-1/4"></div>
      </div>

      {/* Separator */}
      <div className="h-1 bg-gray-100 rounded w-full mb-4"></div>

      {/* Table rows */}
      {rows.map((row) => (
        <div key={row} className="flex mb-3">
          <div className="h-6 bg-gray-100 rounded w-1/4 mr-4"></div>
          <div className="h-6 bg-gray-100 rounded w-2/4 mr-4"></div>
          <div className="h-6 bg-gray-100 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
