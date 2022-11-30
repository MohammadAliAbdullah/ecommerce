
const adminMenus = [
    {
        element: "<AdminLayout />",
        children: [
            {
                path: "/dashboard",
                name: "Basic Setup",
                icon: "fe fe-box fe-1",
                layout: "/admin",
                items: [
                    {
                        path: "/user",
                        name: "Users",
                        icon: "fe fe-credit-card fe-16",
                        layout: "/admin",
                    },
                    {
                        path: "/typography",
                        name: "Tabs & Accordion",
                        icon: "fe fe-grid fe-16",
                        layout: "/admin",
                    },
                    {
                        path: "/icons",
                        name: "Progress",
                        icon: "fe fe-pie-chart fe-16",
                        layout: "/admin",
                    },
                    {
                        path: "/user",
                        name: "User Profile",
                        icon: "fe fe-layers fe-16",
                        layout: "/admin",
                    },
                    {
                        path: "/table",
                        name: "Table List",
                        icon: "fe fe-credit-card fe-16",
                        layout: "/admin",
                    }
                ]
            },
            {
                path: "/user",
                name: "User Profile",
                icon: "fe fe-layers fe-16",
                layout: "/admin",
            },
            {
                path: "/table",
                name: "Table List",
                icon: "fe fe-credit-card fe-16",
                layout: "/admin",
            },
            {
                path: "/typography",
                name: "Typography",
                icon: "fe fe-grid fe-16",
                layout: "/admin",
            },
            {
                path: "/icons",
                name: "Icons",
                icon: "fe fe-pie-chart fe-16",
                layout: "/admin",
            },
            {
                path: "/notifications",
                name: "Notifications",
                icon: "fe fe-compass fe-16",
                layout: "/admin",
            },
            {
                path: "/user",
                name: "Help Desk",
                icon: "fe fe-layers fe-16",
                layout: "/admin",
            },
            {
                path: "/table",
                name: "File Manager",
                icon: "fe fe-credit-card fe-16",
                layout: "/admin",
            }
        ]
    }
];

export default adminMenus;