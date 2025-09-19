'use client';
import useSites from "@/hooks/useSites";
import { useParams } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

export default function LedgerPage() {
    const { request, process, getById } = useSites();
    const sites = request();
    const params = useParams();
    const site = getById(params.site as string);

    if (!site) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-gray-500">Site not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-none overflow-hidden">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 font-fell-english">{site.title}</h1>
                    <Separator className='mb-3'/>
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                            <span className="font-semibold w-24">Tags:</span>
                            {site.tags?.map((tag, index) => (
                                <span key={index} className="ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="font-semibold w-24">URL:</span>
                            <a href={site.url} target="_blank" rel="noopener noreferrer" 
                               className="text-blue-600 hover:text-blue-800 truncate">
                                {site.url}
                            </a>
                        </div>
                        {site.description && (
                            <div className="flex text-gray-600">
                                <span className="font-semibold w-24">Description:</span>
                                <p className="flex-1">{site.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
