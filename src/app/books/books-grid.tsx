import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Books } from '@/types/books';

const Book = ({ book }: { book: Books }) => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 border-2 rounded-3xl bg-background p-5 cursor-pointer hover:bg-[#ff8163]/10 hover:scale-105 transition-all duration-250">
            {/* Book Image */}
            <Link
                href={`/books/${book.id}`}
                className="px-2 flex justify-center md:justify-start"
            >
                {book.image && (
                    <Image
                        src={book.image}
                        alt={book.title}
                        width={200}
                        height={300}
                        className="w-full md:max-w-[150px] aspect-[2/3] rounded-xl object-cover"
                    />
                )}
            </Link>

            {/* Book Info and Buttons */}
            <div className="flex flex-col justify-between">
                <Link href={`/books/${book.id}`}>
                    <h2 className="text-foreground font-semibold text-sm mb-2">
                        {book.title}
                    </h2>

                    {/* Metadata */}
                    <div className="mb-4 text-xs space-y-1">
                        <p>
                            <strong>Status:</strong> {book.status}
                        </p>
                        <p>
                            <strong>Price:</strong> ~{book.price} USD
                        </p>
                        <p>
                            <strong>Release Date:</strong> {book.date}
                        </p>
                    </div>
                </Link>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <a href={`/books/${book.id}`}>
                        <Button className="w-full cursor-pointer">
                            Details
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function BooksGrid({ books }: { books: Books[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {books.map((book) => (
                <Book key={book.title} book={book} />
            ))}
        </div>
    );
}
