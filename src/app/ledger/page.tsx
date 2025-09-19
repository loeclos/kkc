'use client';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import useSites from '@/hooks/useSites';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbLink,
    BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function Sites() {
    const { request, process } = useSites();
    const links = request();
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 w-full ">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/">
                                    Archives
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbPage>Ledger</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    
                </div>
            </header>
            <div className="w-full  px-9 font-grotesk">
                <div className="border-2 rounded-xl p-2 ">
                    <Table>
                        <TableCaption className="text-xs italic">
                            Links have been reorginized multiple times and have lost all organization in the process
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px] font-bold">
                                    Where to
                                </TableHead>
                                <TableHead className="text-right font-bold">
                                    URL
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {links.map((link, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        <Link
                                            href={`/ledger/${link.id}`}
                                            className="link"
                                        >
                                            {link.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link className="link" href={link.url}>
                                            {link.url}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}
