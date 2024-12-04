import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h3 className="text-4xl mb-10 font-medium"> Flights</h3>
      {/* ---------Tools---------- */}
      <div className="my-6 flex gap-6 justify-between">
        <div className="flex gap-6 items-center">
          <Input
            className="h-auto max-w-72 text-lg"
            type="text"
            placeholder="Search Flights"
          />
          <DatePicker />
          <Button variant={"outlinePrimary"} className="px-6 w-auto">
            Search
          </Button>
        </div>

        <div className="flex gap-6 items-center">
          <Select>
            <SelectTrigger className="w-[180px] h-auto">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Link href={"/dashboard/flights/add-flight"}>
            <Button variant={"submit"}>Add Flight</Button>
          </Link>
        </div>
      </div>

      {/* -----------Table---------- */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
