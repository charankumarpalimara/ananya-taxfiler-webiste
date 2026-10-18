"use client";

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import GlobalPagination from './GlobalPagination';

/**
 * Reusable Global Table Component with Integrated Search & Pagination
 */
export default function GlobalTable({
  columns = [],
  data = [],
  getRowKey,
  emptyMessage = "No records found.",
  hoverable = true,
  striped = false,
  compact = false,
  className = "",
  headerBg = "bg-slate-50/70",

  // Integrated Search
  searchable = false,
  searchPlaceholder = "Search records...",
  searchKeys = [],

  // Integrated Pagination
  enablePagination = false,
  defaultPageSize = 10,
  pageSizeOptions = [5, 10, 20, 50],
  currentPage: externalPage,
  onPageChange: externalOnPageChange,
  pageSize: externalPageSize,
  onPageSizeChange: externalOnPageSizeChange,
}) {
  const [internalPage, setInternalPage] = useState(1);
  const [internalPageSize, setInternalPageSize] = useState(defaultPageSize);
  const [searchQuery, setSearchQuery] = useState('');

  const currentPage = externalPage !== undefined ? externalPage : internalPage;
  const pageSize = externalPageSize !== undefined ? externalPageSize : internalPageSize;

  const handlePageChange = (newPage) => {
    if (externalOnPageChange) {
      externalOnPageChange(newPage);
    } else {
      setInternalPage(newPage);
    }
  };

  const handlePageSizeChange = (newSize) => {
    if (externalOnPageSizeChange) {
      externalOnPageSizeChange(newSize);
    } else {
      setInternalPageSize(newSize);
      setInternalPage(1);
    }
  };

  // 1. Search Filter
  const filteredData = useMemo(() => {
    if (!searchable || !searchQuery.trim()) return data;

    const query = searchQuery.toLowerCase().trim();
    return data.filter((row) => {
      if (searchKeys.length > 0) {
        return searchKeys.some((key) => {
          const val = row[key];
          return val !== undefined && val !== null && String(val).toLowerCase().includes(query);
        });
      }
      // Default fallback: search across all primitive values in row
      return Object.values(row).some((val) => {
        if (typeof val === 'string' || typeof val === 'number') {
          return String(val).toLowerCase().includes(query);
        }
        return false;
      });
    });
  }, [data, searchable, searchQuery, searchKeys]);

  // Reset page when search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    handlePageChange(1);
  };

  // 2. Pagination Calculation
  const totalItems = filteredData.length;
  const shouldPaginate = enablePagination && totalItems > 0;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  const displayData = useMemo(() => {
    if (!shouldPaginate) return filteredData;
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, shouldPaginate, currentPage, pageSize]);

  const getCellContent = (col, row, idx) => {
    if (col.cell) {
      return col.cell(row, idx);
    }
    if (typeof col.accessor === 'function') {
      return col.accessor(row, idx);
    }
    if (typeof col.accessor === 'string') {
      return row[col.accessor] ?? '';
    }
    return '';
  };

  const defaultKeyExtractor = (row, idx) => {
    if (getRowKey) return getRowKey(row, idx);
    return row?._id || row?.id || row?.year || idx;
  };

  const getAlignClass = (align) => {
    if (align === 'center') return 'text-center';
    if (align === 'right') return 'text-right';
    return 'text-left';
  };

  return (
    <div className={`rounded-2xl border border-slate-200/80 shadow-sm bg-white overflow-hidden ${className}`}>
      {/* Optional Top Search Bar */}
      {searchable && (
        <div className="p-3.5 px-5 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
            />
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className={`border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider ${headerBg}`}>
              {columns.map((col, idx) => (
                <th
                  key={col.key || idx}
                  className={`py-3.5 px-4 font-bold ${getAlignClass(col.align)} ${col.headerClassName || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {displayData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length || 1}
                  className="py-8 px-4 text-center text-slate-400 italic text-xs"
                >
                  {searchQuery ? `No records matching "${searchQuery}".` : emptyMessage}
                </td>
              </tr>
            ) : (
              displayData.map((row, rowIdx) => (
                <tr
                  key={defaultKeyExtractor(row, rowIdx)}
                  className={`transition-colors ${
                    hoverable ? 'hover:bg-slate-50/80' : ''
                  } ${
                    striped && rowIdx % 2 === 1 ? 'bg-slate-50/40' : ''
                  }`}
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={col.key || colIdx}
                      className={`${compact ? 'py-2.5 px-3' : 'py-4 px-4'} ${getAlignClass(col.align)} ${col.cellClassName || ''}`}
                    >
                      {getCellContent(col, row, rowIdx)}
                    </td>
                  ))}
                </tr>
              )))}
          </tbody>
        </table>
      </div>

      {/* Optional Integrated Pagination */}
      {shouldPaginate && (
        <GlobalPagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          pageSizeOptions={pageSizeOptions}
        />
      )}
    </div>
  );
}
