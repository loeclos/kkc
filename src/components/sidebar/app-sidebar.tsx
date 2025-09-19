'use client';

import * as React from 'react';
import {
    Book,
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    BookOpenText,
} from 'lucide-react';

import { NavMain } from '@/components/sidebar/nav-main';
import { NavProjects } from '@/components/sidebar/nav-projects';
import { NavSecondary } from '@/components/sidebar/nav-secondary';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import useBooks from '@/hooks/use-books';
import Link from 'next/link';
import useSites from '@/hooks/useSites';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { request: booksRequest, process: booksProcess } = useBooks();
    const { request: linksRequest, process: linksProcess } = useSites();
    const links = linksRequest();
    const books = booksRequest();
    const data = {
        navMain: [
            {
                title: 'Books',
                url: '/books',
                icon: Book,
                items: books
                    .map((book) => ({
                        title: book.title,
                        url: `/books/${book.id}`,
                    }))
                    .flat(),
            },
            {
                title: 'Pages Ledger',
                url: '/ledger',
                icon: BookOpenText,
                items: links.map((link) => ({
                    title: link.title,
                    url: link.url,
                })),
            },
            {
                title: 'Documentation',
                url: '#',
                icon: BookOpen,
                items: [
                    {
                        title: 'Introduction',
                        url: '#',
                    },
                    {
                        title: 'Get Started',
                        url: '#',
                    },
                    {
                        title: 'Tutorials',
                        url: '#',
                    },
                    {
                        title: 'Changelog',
                        url: '#',
                    },
                ],
            },
            {
                title: 'Settings',
                url: '#',
                icon: Settings2,
                items: [
                    {
                        title: 'General',
                        url: '#',
                    },
                    {
                        title: 'Team',
                        url: '#',
                    },
                    {
                        title: 'Billing',
                        url: '#',
                    },
                    {
                        title: 'Limits',
                        url: '#',
                    },
                ],
            },
        ],
        navSecondary: [
            {
                title: 'Support',
                url: '#',
                icon: LifeBuoy,
            },
            {
                title: 'Feedback',
                url: '#',
                icon: Send,
            },
        ],
        projects: [
            {
                name: 'Design Engineering',
                url: '#',
                icon: Frame,
            },
            {
                name: 'Sales & Marketing',
                url: '#',
                icon: PieChart,
            },
            {
                name: 'Travel',
                url: '#',
                icon: Map,
            },
        ],
    };
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">
                                        Kingkiller Chronicles
                                    </span>
                                    <span className="truncate text-xs">
                                        Fan portal
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
        </Sidebar>
    );
}
