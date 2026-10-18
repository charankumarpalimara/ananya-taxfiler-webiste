"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Global Pagination Component for Website & User Dashboard
 */
export default function GlobalPagination({
  currentPage = 1,
  totalPages = 1,
  pageSize = 10,
  totalItems = 0,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  className = "",
}) {
  if (totalItems === 0) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className={`p-3.5 px-5 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-sans ${className}`}>
      {/* Items Range Summary & Page Size Selector */}
      <div className="flex items-center gap-4">
        <span>
          Showing <b className="text-slate-900 font-bold">{startItem}</b> to{' '}
          <b className="text-slate-900 font-bold">{endItem}</b> of{' '}
          <b className="text-slate-900 font-bold">{totalItems}</b> records
        </span>

        {onPageSizeChange && (
          <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 pl-4">
            <span className="text-[11px] font-semibold text-slate-500">Per page:</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="px-2 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 cursor-pointer"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Page Navigation Buttons */}
      {totalPages > 1 && (
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange && onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            type="button"
            className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-brand-purple disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {getPageNumbers().map((page, idx) =>
            typeof page === 'number' ? (
              <button
                key={idx}
                onClick={() => onPageChange && onPageChange(page)}
                type="button"
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currentPage === page
                    ? 'bg-brand-purple text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {page}
              </button>
            ) : (
              <span key={idx} className="px-1.5 text-slate-400 font-bold">
                ...
              </span>
            )
          )}

          <button
            onClick={() => onPageChange && onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            type="button"
            className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-brand-purple disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
