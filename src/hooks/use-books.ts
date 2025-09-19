import { useCallback, useState } from 'react';
import { Books } from '@/types/books';

const books: Books[] = [
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        title: 'The Name of the Wind',
        status: 'Finished',
        price: '8',
        date: '2007-04-27',
        image: '/notw-cover.png',
        articles: [
            {
                id: 'a1',
                title: 'Exploring the Magic System in The Name of the Wind',
                url: 'https://fantasybookreview.com/articles/magic-system-notw',
                date: '2021-05-10',
            },
            {
                id: 'a2',
                title: 'Patrick Rothfuss: The Art of Storytelling',
                url: 'https://booklovers.com/articles/rothfuss-storytelling',
                date: '2022-01-15',
            },
        ],
        forums: [
            {
                id: 'f1',
                name: 'Kingkiller Chronicle Subreddit',
                url: 'https://www.reddit.com/r/KingkillerChronicle/',
            },
            {
                id: 'f2',
                name: 'Patrick Rothfuss Fans Forum',
                url: 'https://forums.patrickrothfuss.com/',
            },
        ],
        amazon: 'https://www.amazon.com/Name-Wind-Patrick-Rothfuss/dp/0756404746',
        ebay: 'https://www.ebay.com/sch/i.html?_nkw=The+Name+of+the+Wind',
        hook: 'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life…',
        description: `Thus begins the myth—and the man behind it is nothing like the stories. In a quiet inn, a forgotten legend begins to tell his own tale: of magic learned in hunger, of love shadowed by loss, and of a name whispered across kingdoms.

                      Kvothe is gifted, broken, dangerous—and hunted by truths too powerful to stay buried. Beneath the music and mystery lies a question no one dares to ask: What if the greatest hero the world remembers is hiding from the very thing he created?

                      Poetic, gripping, and full of secrets, The Name of the Wind beckons readers into a world where legends walk quietly among us—and truth is a story still being written.`,
    },
    {
        id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
        title: "The Wise Man's Fear",
        status: 'Finished',
        price: '9',
        date: '2011-03-01',
        image: '/wmf-cover.png',
        amazon: 'https://www.amazon.com/Wise-Mans-Fear-Kingkiller-Chronicle/dp/0756407915',
        ebay: "https://www.ebay.com/sch/i.html?_nkw=The+Wise+Man's+Fear",
    },
    {
        id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
        title: 'The Slow Regard of Silent Things',
        status: 'Finished',
        price: '9',
        date: '2014-10-28',
        image: '/srost-cover.png',
        amazon: 'https://www.amazon.com/Regard-Silent-Things-Kingkiller-Chronicle/dp/0756411327',
        ebay: 'https://www.ebay.com/sch/i.html?_nkw=The+Slow+Regard+of+Silent+Things',
    },
    {
        id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
        title: 'The Narrow Road Between Desires',
        status: 'Finished',
        price: '14',
        date: '2023-11-14',
        image: '/nrbd-cover.png',
        amazon: 'https://www.amazon.com/Narrow-Road-Between-Desires/dp/0756419174',
        ebay: 'https://www.ebay.com/sch/i.html?_nkw=The+Narrow+Road+Between+Desires',
    },
    {
        id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
        title: 'The Doors of Stone (unreleased)',
        status: 'In Progress',
        price: '??',
        date: 'TBD',
        image: '/dos-cover.png',
        ebay: 'https://www.ebay.com/sch/i.html?_nkw=The+Doors+of+Stone+(unreleased)',
    },
    {
        id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
        title: 'Novella: The Lightning Tree (published in the Rogues anthology)',
        status: 'Finished',
        price: '17',
        date: '2014-06-17',
        image: '/lt-cover.png',
        amazon: 'https://www.amazon.com/Rogues-George-R-Martin/dp/0345537262',
        ebay: 'https://www.ebay.com/sch/i.html?_nkw=Rogues+anthology',
    },
    {
        id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
        title: 'Short Story: How Old Holly Came to Be (published in the Unfettered anthology)',
        status: 'Finished',
        price: '17',
        date: '2013-06-21',
        image: '/hohctb-cover.png',
        amazon: 'https://www.amazon.com/Unfettered-Tales-Masters-Fantasy/dp/1944145222/ref=tmm_pap_swatch_0',
        ebay: 'https://www.ebay.com/sch/i.html?_nkw=Unfettered+anthology+1',
    },
];

export default function useBooks() {
    const [process, setProcess] = useState<'error' | 'loading' | 'success'>(
        'loading'
    );

    const request = useCallback(() => books, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return {
        request,
        clearError,
        process,
        setProcess,
    };
}
