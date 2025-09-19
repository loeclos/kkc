'use client';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BooksTable from '@/app/books/books-table';
import BooksGrid from '@/app/books/books-grid';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { List, LayoutGrid } from 'lucide-react';
import useBooksData from '@/hooks/use-books';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function Page() {
    const [tab, setTab] = useState('grid');
    const { request, process } = useBooksData();
    const books = request();
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 w-full ">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/">Archives</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbPage>Tomes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <Tabs
                value={tab}
                onValueChange={setTab}
                className="w-full flex items-end px-5 font-grotesk"
            >
                <TabsList>
                    <TabsTrigger value="grid">
                        Grid <LayoutGrid />
                    </TabsTrigger>
                    <TabsTrigger value="list">
                        List <List />
                    </TabsTrigger>
                </TabsList>

                <div className="relative min-h-[300px] w-full">
                    <AnimatePresence mode="wait">
                        {tab === 'list' && (
                            <motion.div
                                key="list"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.25 }}
                                className="absolute w-full"
                            >
                                <div className="flex flex-col gap-4 p-4 pt-0">
                                    <BooksTable books={books} />
                                </div>
                            </motion.div>
                        )}

                        {tab === 'grid' && (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.25 }}
                                className="absolute w-full"
                            >
                                <div className="flex flex-col gap-4 p-4 pt-0">
                                    <BooksGrid books={books} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Tabs>
        </>
    );
}
