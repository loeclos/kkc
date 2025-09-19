'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

import useBooksData from '@/hooks/use-books';
import { useParams } from 'next/navigation';

const BookComponent = () => {
    const { request, process } = useBooksData();
    const books = request();
    const { book: bookID } = useParams();
    const book = books.find((book) => book.id == bookID);
    if (!book) return null; // NOTE: This should never happen

    const dummyBook = {
        title: 'The Name of the Wind',
        description:
            'A high fantasy novel written by Patrick Rothfuss, the first book in the Kingkiller Chronicle series.',
        articles: [
            { title: "An Insight into Kvothe's World", url: '#' },
            { title: 'The Art of Storytelling', url: '#' },
        ],
        forums: [
            { title: 'Reddit Discussion', url: '#' },
            { title: 'Goodreads Forum', url: '#' },
        ],
    };

    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 w-full">
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
                                <BreadcrumbLink href="/books">
                                    Tomes
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbPage>{book.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-col lg:flex-row items-start gap-0 p-6">
                {/* Book Cover */}
                <div className="flex items-center justify-center w-full h-full lg:w-1/2">
                    <img
                        src={book.image}
                        alt="Book Cover"
                        className="w-full h-auto object-contain rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl"
                    />
                </div>

                {/* Book Details */}
                <Card className="w-full h-full lg:w-1/2 p-0 pt-5 shadow-md rounded-none rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl font-grotesk">
                    <CardHeader className="text-center mb-4 font-fell-english">
                        <h2 className="text-xl md:text-2xl font-bold">
                            {book.title}
                        </h2>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:font-fell-english first-line:font-fell-english first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase">
                            {book.description}
                        </p>
                        <Separator />
                        <div className="mt-4">
                            {book.articles ? (
                                <>
                                    <h3 className="font-semibold mb-2 text-center">
                                        Articles
                                    </h3>
                                    <ul className="list-disc mb-4">
                                        <Card className="px-5 inset-shadow-xs inset-shadow-zinc-100">
                                            <CardContent>
                                                {book.articles?.map(
                                                    (article, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href={
                                                                    article.url
                                                                }
                                                                className="text-blue-500 hover:underline"
                                                            >
                                                                {article.title}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </CardContent>
                                        </Card>
                                    </ul>
                                </>
                            ) : null}

                            {book.forums ? (
                                <>
                                    <h3 className="font-semibold mb-2 text-center">
                                        Forums
                                    </h3>
                                    <ul className="list-disc mb-4">
                                        <Card className="px-5 inset-shadow-xs inset-shadow-zinc-100">
                                            <CardContent>
                                                {book.forums?.map(
                                                    (forum, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href={forum.url}
                                                                className="text-blue-500 hover:underline"
                                                            >
                                                                {forum.name}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </CardContent>
                                        </Card>
                                    </ul>
                                </>
                            ) : null}
                            </div>
                            {/* Accordion at the bottom of the card */}
                            <div className="mt-6">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            Wanna buy?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex flex-row gap-2">
                                                    <a
                                                        href={book.amazon}
                                                        className="w-full"
                                                    >
                                                        <Button className="w-full text-xs cursor-pointer">
                                                            Buy at Amazon
                                                        </Button>
                                                    </a>
                                                    <a
                                                        href={book.ebay}
                                                        className="w-full"
                                                    >
                                                        <Button className="w-full text-xs cursor-pointer">
                                                            Find on Ebay
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                                
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default BookComponent;
