'use client';

import { Site } from '@/types/sites';
import { useState, useCallback } from 'react';

const links: Site[] = [
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o7p',
        title: 'Patrick Rothfuss\'s Website',
        url: 'https://patrickrothfuss.com',
        description: "Patrick's website",
        type: 'official',
        tags: ['official', 'author', 'news', 'books'],
    },
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5y6p',
        title: 'Patrick Rothfuss\'s Blog',
        url: 'https://blog.patrickrothfuss.com',
        description: 'blog',
        type: 'official',
        tags: ['official', 'author', 'blog', 'essays'],
    },
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        title: 'Patrick Rothfuss\'s Twitter',
        url: 'https://twitter.com/patrickrothfuss',
        description: 'Twitter',
        type: 'official',
        tags: ['official', 'author', 'social', 'twitter'],
    },
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n6o6p',
        title: 'Patrick Rothfuss\'s Instagram',
        url: 'https://instagram.com/patrickrothfuss/',
        description: 'Instagram',
        type: 'official',
        tags: ['official', 'author', 'social', 'instagram'],
    },
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n7o6p',
        title: 'Worldbuilders',
        url: 'https://worldbuilders.org/',
        description: 'Charity non-profit founded by Rothfuss',
        type: 'official',
        tags: ['official', 'charity', 'nonprofit', 'worldbuilders'],
    },
    {
        id: '0987r53hfo374hfoiu3yhofiu3ho4hfo384ho349fh',
        title: 'Official Wiki',
        url: 'https://kingkiller.wiki',
        description: 'Detailed lore encyclopedia',
        type: 'wiki',
        tags: ['wiki', 'lore', 'reference', 'encyclopedia'],
    },
    {
        id: '1234abcd-5678-efgh-ijkl-9012mnopqrst',
        title: 'Fandom Wiki',
        url: 'https://kingkiller.fandom.com',
        description: 'Fan-maintained lore & theories',
        type: 'wiki',
        tags: ['wiki', 'fandom', 'community', 'theories'],
    },
    {
        id: '2345bcd1-6789-efgh-ijkl-1011mnopqrst',
        title: 'Reddit - Kingkiller Chronicle',
        url: 'https://reddit.com/r/KingkillerChronicle',
        description: 'Discussion, theories, fanworks',
        type: 'community',
        tags: ['community', 'forum', 'reddit', 'discussion', 'theories'],
    },
    {
        id: '3456cde2-7890-fghi-jklm-1122mnopqrst',
        title: 'Reddit - Is Book 3 Out Yet?',
        url: 'https://reddit.com/r/isbook3outyet',
        description: 'Updates & memes on Book 3',
        type: 'community',
        tags: ['community', 'reddit', 'book3', 'memes', 'updates'],
    },
    {
        id: '4567def3-8901-ghij-klmn-1234mnopqrst',
        title: 'Goodreads Kingkiller Group',
        url: 'https://www.goodreads.com/group/show/21921-the-name-of-the-wind',
        description: 'Group discussions & polls',
        type: 'community',
        tags: ['community', 'goodreads', 'books', 'discussion', 'poll'],
    },
    {
        id: '5678efg4-9012-hijk-lmno-1345mnopqrst',
        title: "Reactor Reread: Kingkiller Chronicle",
        url: 'https://www.tor.com/tag/kingkiller-chronicle-reread/',
        description: 'Chapter-by-chapter analysis & comments',
        type: 'analysis',
        tags: ['analysis', 'reread', 'community', 'discussion', 'tor'],
    },
    {
        id: '6789fgh5-0123-ijkl-mnop-1456mnopqrst',
        title: 'Sci-Fi StackExchange - Kingkiller',
        url: 'https://scifi.stackexchange.com/questions/tagged/the-kingkiller-chronicle',
        description: 'Community Q&A archive',
        type: 'community',
        tags: ['community', 'Q&A', 'stackexchange', 'fan-theory', 'reference'],
    },
    {
        id: '7890ghi6-1234-jklm-nopq-1567mnopqrst',
        title: 'TV Tropes: The Kingkiller Chronicle',
        url: 'https://tvtropes.org/pmwiki/pmwiki.php/Literature/TheKingkillerChronicle',
        description: 'Narrative devices & motifs',
        type: 'wiki',
        tags: ['wiki', 'tvtropes', 'narrative', 'motifs'],
    },
    {
        id: '8901hij7-2345-klmn-opqr-1678mnopqrst',
        title: 'KKC Boards',
        url: 'https://kkc.boards.net/',
        description: 'Traditional forum for in-depth threads',
        type: 'community',
        tags: ['community', 'forum', 'discussion', 'fan'],
    },
    {
        id: '9012ijk8-3456-lmno-pqrs-1789mnopqrst',
        title: 'King Killer Podcast',
        url: 'https://kingkillerpodcast.podbean.com/',
        description: 'Deep-dive chapter reread podcast',
        type: 'podcast',
        tags: ['podcast', 'audio', 'reread', 'discussion'],
    },
    {
        id: 'a012jkl9-4567-mnop-qrst-1890mnopqrst',
        title: 'Captured in Words (YouTube)',
        url: 'https://www.youtube.com/c/CapturedinWords',
        description: 'Videos about the series',
        type: 'video',
        tags: ['video', 'youtube', 'series', 'commentary'],
    },
    {
        id: 'b123klm0-5678-nopq-rstu-1901mnopqrst',
        title: 'Worldbuilders Market',
        url: 'https://worldbuildersmarket.com',
        description: 'Merchandise store for charity',
        type: 'shop',
        tags: ['shop', 'merchandise', 'charity', 'official'],
    },
    {
        id: 'c234lmn1-6789-opqr-stuv-2012mnopqrst',
        title: 'Subterranean Press',
        url: 'https://subterraneanpress.com/',
        description: 'Limited editions and collectible books',
        type: 'shop',
        tags: ['shop', 'books', 'collectibles', 'editions'],
    },
    {
        id: 'd345mno2-7890-pqrs-tuvw-2123mnopqrst',
        title: "IMDb: The Kingkiller Chronicle TV/Film",
        url: 'https://www.imdb.com/title/tt4642874/',
        description: 'Adaptation project listing',
        type: 'adaptation',
        tags: ['adaptation', 'film', 'TV', 'imdb', 'project'],
    },
    {
        id: 'e456nop3-8901-qrst-vwxy-2234mnopqrst',
        title: "Looper - Kingkiller Chronicle Adaptation Timeline",
        url: 'https://www.looper.com/232796/the-untold-truth-of-the-kingkiller-chronicle-tv-show/',
        description: 'History of adaptation attempts',
        type: 'news',
        tags: ['news', 'adaptation', 'timeline', 'looper'],
    },
    {
        id: 'f567opq4-9012-rstu-wxyz-2345mnopqrst',
        title: "Tor.com: Rothfuss News & Essays",
        url: 'https://www.tor.com/tag/patrick-rothfuss/',
        description: 'Articles and news about Rothfuss',
        type: 'news',
        tags: ['news', 'articles', 'tor', 'updates'],
    },
];


export default function useSites() {
    const [process, setProcess] = useState<'error' | 'loading' | 'success'>(
        'loading'
    );

    const request = useCallback(() => links, []);

    const getById = (id: string): Site | undefined => {
        const book = request().find(book => book.id === id);
        return book;
    };

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return { request, clearError, getById, process, setProcess };
}
