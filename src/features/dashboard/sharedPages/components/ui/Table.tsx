import React from "react";
import { TableProps } from "../../utils/types";

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto px-2">
      <table className="table table-xs sm:table-sm md:table-lg bg-white overflow-hidden">
        <thead className="bg-dark text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
