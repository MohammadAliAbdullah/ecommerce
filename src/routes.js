
const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Elements",
        icon: "fe fe-box fe-1",
        component: 'Dashboard',
        layout: "/admin",
        childs: [
            {
                path: "/table",
                name: "Modals",
                icon: "fe fe-credit-card fe-16",
                component: 'TableList',
                layout: "/admin",
            },
            {
                path: "/typography",
                name: "Tabs & Accordion",
                icon: "fe fe-grid fe-16",
                component: 'Typography',
                layout: "/admin",
            },
            {
                path: "/icons",
                name: "Progress",
                icon: "fe fe-pie-chart fe-16",
                component: 'Icons',
                layout: "/admin",
            }
        ]
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "fe fe-layers fe-16",
        component: 'UserProfile',
        layout: "/admin",
    },
    {
        path: "/table",
        name: "Table List",
        icon: "fe fe-credit-card fe-16",
        component: 'TableList',
        layout: "/admin",
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "fe fe-grid fe-16",
        component: 'Typography',
        layout: "/admin",
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "fe fe-pie-chart fe-16",
        component: 'Icons',
        layout: "/admin",
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "fe fe-compass fe-16",
        component: 'Notifications',
        layout: "/admin",
    },
    {
        path: "/user",
        name: "Help Desk",
        icon: "fe fe-layers fe-16",
        component: 'UserProfile',
        layout: "/admin",
    },
    {
        path: "/table",
        name: "File Manager",
        icon: "fe fe-credit-card fe-16",
        component: 'TableList',
        layout: "/admin",
    },
    {
        path: "/typography",
        name: "Calendar",
        icon: "fe fe-grid fe-16",
        component: 'Typography',
        layout: "/admin",
    },
    {
        path: "/notifications",
        name: "Authentication",
        icon: "fe fe-compass fe-16",
        component: 'Notifications',
        layout: "/admin",
    },
];

export default dashboardRoutes;