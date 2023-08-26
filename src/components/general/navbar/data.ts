
export interface NavItem {
    label: string;
    triggerActive?: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    isActive?: boolean;
}  

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        triggerActive: "/home",
        href: "/",
    },
    {
        label: "About",
        triggerActive: "/about",
        href: "/",
    },
    {
        label: "Services",
        triggerActive: "/services",
        href: "/",
    },
    {
        label: "Works",
        triggerActive: "/works",
        href: "/",
    },
];
  