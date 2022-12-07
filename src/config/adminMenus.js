
const adminMenus = [
    {
        element: "<AdminLayout />",
        children: [
            {
                path: "/dashboard",
                name: "Security & Access",
                icon: "fe fe-grid fe-1",
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
                    }
                ]
            },
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
                    }
                ]
            },
            {
                path: "/ur",
                name: "Product",
                icon: "fe fe-layers fe-16",
                layout: "/admin",
            },
            {
                path: "/table",
                name: "Invoice",
                icon: "fe fe-credit-card fe-16",
                layout: "/admin",
            }
        ]
    }
];

export default adminMenus;