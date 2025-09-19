'use client';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import useSites from '@/hooks/useSites';
import Link from 'next/link';

export default function Page() {
    const { request, process } = useSites();
    const links = request();
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Archives
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Reading Room</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* NOTE: use this for loading */}
            {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div> */}
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-max gap-4 lg:grid-cols-2">
                    <div className="aspect-video rounded-xl bg-muted/50 lg:h-full w-full overflow-auto p-5 shadow-lg">
                        <h4 className="text-lg md:text-2xl font-fell-english">
                            Author run platforms
                        </h4>
                        <Separator className="my-2" />
                        <Table>
                            <TableBody>
                                {links.map((link, index) => {
                                    return link.type === 'official' ? (
                                        <TableRow key={link.id}>
                                            <TableCell className="font-medium">
                                                <Link
                                                    href={`ledger/${link.id}`}
                                                    className="link line-clamp-1"
                                                >
                                                    {link.title}
                                                </Link>
                                            </TableCell>
                                            <TableCell className="text-left">
                                                <Link
                                                    href={link.url}
                                                    className="link line-clamp-1"
                                                >
                                                    {link.url}
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ) : null;
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="aspect-video rounded-xl bg-muted/50 lg:h-full w-full overflow-auto p-5 shadow-lg">
                        <h4 className="text-lg md:text-2xl font-fell-english">
                            Reference and Study Guides
                        </h4>
                        <Separator className="my-2" />
                        <Table>
                            <TableBody>
                                {links.map((link, index) => {
                                    return link.type === 'wiki' ? (
                                        <TableRow key={link.id}>
                                            <TableCell className="font-medium">
                                                <Link
                                                    href={`ledger/${link.id}`}
                                                    className="link line-clamp-1"
                                                >
                                                    {link.title}
                                                </Link>
                                            </TableCell>
                                            <TableCell className="text-left">
                                                <Link
                                                    href={link.url}
                                                    className="link line-clamp-1"
                                                >
                                                    {link.url}
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ) : null;
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min h-full w-full overflow-auto p-5 shadow-lg">
                    <h4 className="text-lg md:text-2xl font-fell-english">
                        Communities
                    </h4>
                    <Separator className="my-2" />
                    <Table>
                        <TableBody>
                            {links.map((link, index) => {
                                return link.type === 'community' ? (
                                    <TableRow key={link.id}>
                                        <TableCell className="font-medium">
                                            <Link
                                                href={`ledger/${link.id}`}
                                                className="link line-clamp-1"
                                            >
                                                {link.title}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <Link
                                                href={link.url}
                                                className="link line-clamp-1"
                                            >
                                                {link.url}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ) : null;
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min h-full w-full overflow-auto p-5 shadow-lg">
                    <h4 className="text-lg md:text-2xl font-fell-english">
                        Other  Resources
                    </h4>
                    <Separator className="my-2" />
                    <Table>
                        <TableBody>
                            {links.map((link, index) => {
                                return link.type !== 'community' && link.type !== 'official' ? (
                                    <TableRow key={link.id}>
                                        <TableCell className="font-medium">
                                            <Link
                                                href={`ledger/${link.id}`}
                                                className="link line-clamp-1"
                                            >
                                                {link.title}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <Link
                                                href={link.url}
                                                className="link line-clamp-1"
                                            >
                                                {link.url}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ) : null;
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}
