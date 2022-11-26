
const adminMenus = [
    {
        element: "<AdminLayout />",
        children: [
            {
                path: "/dashboard",
                name: "Elements",
                icon: "fe fe-box fe-1",
                element: "<Dashboard />",
                layout: "/admin",
                items: [
                    {
                        path: "/table",
                        name: "Modals",
                        icon: "fe fe-credit-card fe-16",
                        element: 'TableList',
                        layout: "/admin",
                    },
                    {
                        path: "/typography",
                        name: "Tabs & Accordion",
                        icon: "fe fe-grid fe-16",
                        element: 'Typography',
                        layout: "/admin",
                    },
                    {
                        path: "/icons",
                        name: "Progress",
                        icon: "fe fe-pie-chart fe-16",
                        element: 'Icons',
                        layout: "/admin",
                    },
                    {
                        path: "/user",
                        name: "User Profile",
                        icon: "fe fe-layers fe-16",
                        element: "<Profile />",
                        layout: "/admin",
                    },
                    {
                        path: "/table",
                        name: "Table List",
                        icon: "fe fe-credit-card fe-16",
                        element: "<Table />",
                        layout: "/admin",
                    }
                ]
            },
            {
                path: "/user",
                name: "User Profile",
                icon: "fe fe-layers fe-16",
                element: "<Profile />",
                layout: "/admin",
            },
            {
                path: "/table",
                name: "Table List",
                icon: "fe fe-credit-card fe-16",
                element: "<Table />",
                layout: "/admin",
            },
            {
                path: "/typography",
                name: "Typography",
                icon: "fe fe-grid fe-16",
                element: "<Typology />",
                layout: "/admin",
            },
            {
                path: "/icons",
                name: "Icons",
                icon: "fe fe-pie-chart fe-16",
                element: 'Icons',
                layout: "/admin",
            },
            {
                path: "/notifications",
                name: "Notifications",
                icon: "fe fe-compass fe-16",
                element: 'Notifications',
                layout: "/admin",
            },
            {
                path: "/user",
                name: "Help Desk",
                icon: "fe fe-layers fe-16",
                element: 'UserProfile',
                layout: "/admin",
            },
            {
                path: "/table",
                name: "File Manager",
                icon: "fe fe-credit-card fe-16",
                element: 'TableList',
                layout: "/admin",
            },
            {
                path: "/typography",
                name: "Calendar",
                icon: "fe fe-grid fe-16",
                element: 'Typography',
                layout: "/admin",
            },
            {
                path: "/notifications",
                name: "Authentication",
                icon: "fe fe-compass fe-16",
                element: 'Notifications',
                layout: "/admin",
            },
        ]
    }
];

export default adminMenus;