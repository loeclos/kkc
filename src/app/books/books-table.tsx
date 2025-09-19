import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Books } from '@/types/books';

export default function BooksTable({ books: books }: { books: Books[] }) {
    return (
        <div className="border-2 rounded-xl p-2">
            <Table>
                <TableCaption className="text-xs italic">
                    Books are in chronological order / Prices shown were found
                    on amazon
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Book</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                        <TableHead className="text-right">
                            Price (less if refurbished)
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">
                                <a href={`/books/${book.id}`} className="link">{book.title}</a>
                            </TableCell>
                            <TableCell className={book.status === 'Finished' ? `text-right text-green-700` : `text-right text-amber-500`}>
                                {book.status}
                            </TableCell>
                            <TableCell className="text-right">
                                {book.date}
                            </TableCell>
                            <TableCell className="text-right font-semibold">
                                {book.amazon ? (
                                    <a
                                        href={book.amazon}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link"
                                    >
                                        {book.price}
                                    </a>
                                ) : (
                                    <a
                                        href={book.amazon}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        N/A
                                    </a>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
