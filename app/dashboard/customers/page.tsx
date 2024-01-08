import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
    title: 'Customers',
}

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    }
}) {
    const query = searchParams?.query || '';

    const customers = await fetchFilteredCustomers(query);

    return (
        <CustomersTable customers={customers} />
    );
}