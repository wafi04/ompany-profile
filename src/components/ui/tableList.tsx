import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./table";
import { Fragment } from "react";
import { Button } from "./button";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";

interface TableBodyProps {
  data: {
    kode: string;
    keterangan: string;
    harga: number;
    status?: string;
  }[];
  showButton: boolean;
}

export function TableList({ data, showButton }: TableBodyProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="px-6 py-4 text-center font-semibold text-gray-700">
              ID
            </TableHead>
            <TableHead className="px-6 py-4 text-center font-semibold text-gray-700">
              Layanan
            </TableHead>
            <TableHead className="px-6 py-4 font-semibold text-gray-700">
              Harga
            </TableHead>
            <TableHead className="px-6 py-4 font-semibold text-gray-700">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <Fragment key={item.kode}>
              <TableRow
                className={cn(
                  "hover:bg-gray-50 transition-colors",
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                )}>
                <TableCell className="px-6 py-4 text-sm">{item.kode}</TableCell>
                <TableCell className="px-6 py-4 text-sm">
                  {item.keterangan}
                </TableCell>
                <TableCell className="px-6 py-4 font-medium">
                  {item.harga}
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      item.status === "Open" && "bg-green-100 text-green-700",
                      item.status === "Gangguan" && "bg-red-100 text-red-700",
                      !item.status && "bg-gray-100 text-gray-700"
                    )}>
                    {item.status || "Unknown"}
                  </span>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
      {showButton && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <Link
            href={"https://vazzuniverse.id/"}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
            Read More
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
