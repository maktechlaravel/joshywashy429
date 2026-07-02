const MH = 'https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/';
const CB = MH + 'Commercial%20Retail%20Space/CIBC%20Building/';
const OC = MH + 'Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/';
const WT = MH + 'Commercial%20Retail%20Space/Walker%20Towne%20Centre/';
const RES = MH + 'Residential/';

window.PROPERTY_LISTINGS = [
    {
        slug: "3003-n-central",
        title: "3003 N Central Ave",
        location: "Phoenix, AZ 85012",
        category: "Commercial / Office",
        summary: "A premier multi-tenant commercial building with a full property info sheet and aerial overview for the North Central corridor.",
        heroImage: "../public/3003_N_Central.webp",
        documents: [
            {
                label: "Aerial Overview",
                href: "../public/3003_N_Central_Aerial_Overview.pdf"
            },
            {
                label: "Arizona Property Listing (LoopNet)",
                href: "https://www.loopnet.com/Listing/3003-N-Central-Ave-Phoenix-AZ/15478759",
                type: "Link",
                displayUrl: "https://www.loopnet.com/Listing/3003-N-Central-Ave-Phoenix-AZ/15478759"
            }
        ],
        stats: [
            {
                label: "Market",
                value: "Phoenix"
            },
            {
                label: "Asset Type",
                value: "Multi-Tenant"
            },
            {
                label: "Documents",
                value: "2 Files"
            }
        ],
        highlights: [
            "Central corridor frontage",
            "Multi-tenant leasing profile",
            "Detailed property information"
        ],
        sections: [
            {
                label: "Property Overview",
                layout: "duo",
                images: [
                    {
                        src: "../public/3003_N_Central.webp",
                        caption: "3003 N Central Ave — Phoenix, AZ 85012"
                    },
                    {
                        src: "../public/3003_N_Central_Property_Info.png",
                        caption: "Property Information Sheet"
                    }
                ],
                body: "A premier multi-tenant commercial building situated along the North Central corridor in Phoenix, Arizona. Full property documentation available including an aerial overview of the site."
            }
        ]
    },
    {
        slug: "mikhail-centre",
        title: "Mikhail Centre / 4450 Walker Road",
        location: "Windsor, Ontario",
        category: "Retail / Power Centre",
        summary: "A major retail destination anchored by national tenants and supported by brochures, site plans, signage and tenant imagery.",
        heroImage: "../public/4450_Walker_Road_Plaza.jpg",
        documents: [
            {
                label: "Retail Expansion Package",
                href: "../public/3051 Legacy PetSmart Expansion Sobey and JM .pdf"
            },
            {
                label: "Exterior Image / Signage",
                href: "../public/Exterior Image for Sign.pdf"
            },
            {
                label: "Mikhail Centre Brochure",
                href: "../public/Mikhail_Centre_Windsor_2019_Brochure.pdf"
            },
            {
                label: "Windsor Site Plan",
                href: "../public/Mikhail_Centre_Windsor_Site_Plan.pdf"
            },
            {
                label: "Walker Road Site Plan",
                href: "../public/Mikhail_Centre_4450_Walker_Road_Site_Plan_1.pdf"
            }
        ],
        stats: [
            {
                label: "Market",
                value: "Windsor"
            },
            {
                label: "Asset Type",
                value: "Retail Centre"
            },
            {
                label: "Documents",
                value: "5 Files"
            }
        ],
        highlights: [
            "Anchored retail centre",
            "Strong national tenant mix",
            "Full document package"
        ],
        sections: [
            {
                label: "Retail Centre Overview",
                layout: "duo",
                images: [
                    {
                        src: "../public/4450_Walker_Road_Plaza.jpg",
                        caption: "Mikhail Centre — 4450 Walker Road, Windsor"
                    }
                ],
                body: "A major retail destination anchored by national tenants along Windsor's busiest retail corridor. The centre includes PetSmart, Sobeys, and a strong supporting tenant mix backed by comprehensive site plans and brochures."
            },
            {
                label: "Property Photography",
                layout: "duo",
                images: [
                    {
                        src: "../public/20190607_072155_resized.jpg",
                        caption: "Tenant Exterior"
                    },
                    {
                        src: "../public/Image10.jpg",
                        caption: "Property View"
                    }
                ]
            }
        ]
    },
    {
        slug: "mikhail-plaza",
        title: "Mikhail Plaza",
        location: "2601 Lauzon Rd, Windsor, Ontario",
        category: "Retail / Power Centre",
        summary: "Mikhail Plaza — a retail centre at 2601 Lauzon Road, Windsor, with gallery imagery and an offering memorandum for the Lauzon corridor.",
        heroImage: "../public/Jmax_Plaza_1.jpg",
        documents: [
            {
                label: "Offering Memorandum",
                href: "../public/J_Max_Plaza_2601_Lauzon_OM_2025.pdf"
            }
        ],
        stats: [
            {
                label: "Market",
                value: "Windsor"
            },
            {
                label: "Asset Type",
                value: "Retail Plaza"
            },
            {
                label: "Documents",
                value: "1 File"
            }
        ],
        highlights: [
            "Lauzon Road frontage",
            "Retail plaza imagery set",
            "Offering memorandum available"
        ],
        sections: [
            {
                label: "Property Views",
                layout: "grid",
                images: [
                    {
                        src: "../public/Jmax_Plaza_1.jpg",
                        caption: "Mikhail Plaza — 2601 Lauzon Road, Windsor"
                    },
                    {
                        src: "../public/Jmax_Plaza_2.jpg",
                        caption: "Plaza Exterior View"
                    },
                    {
                        src: "../public/Jmax_Plaza_3.webp",
                        caption: "Plaza Overview"
                    }
                ],
                body: "A well-positioned retail plaza along Windsor's busy Lauzon Road corridor. Offering memorandum available for qualified parties."
            }
        ]
    },
    {
        slug: "radius-center",
        title: "Radius Center",
        location: "2679 Howard Ave, Windsor, Ontario",
        category: "Commercial / Industrial",
        summary: "A commercial site package with aerial planning, site coverage and document support for the Howard Avenue corridor.",
        heroImage: "../public/Radius_Center.png",
        documents: [
            {
                label: "Snow / Operations Plan",
                href: "../public/LCBO_SP-1_corrected metric area_JAN 31-2024.pdf"
            },
            {
                label: "Architectural Sheet A-201-B1",
                href: "../public/A-201-B1.pdf"
            },
            {
                label: "Site Plan 0029",
                href: "../public/0029-SPA-07-26-20.pdf"
            }
        ],
        stats: [
            {
                label: "Market",
                value: "Windsor"
            },
            {
                label: "Asset Type",
                value: "Commercial"
            },
            {
                label: "Documents",
                value: "3 Files"
            }
        ],
        highlights: [
            "Howard Avenue frontage",
            "Full plan & operations docs",
            "Commercial site package"
        ],
        sections: [
            {
                label: "Site Views",
                layout: "duo",
                images: [
                    {
                        src: "../public/Radius center.jpg",
                        caption: "Radius Center — 2679 Howard Ave, Windsor"
                    },
                    {
                        src: "../public/Radius_Center.png",
                        caption: "Site Overview & Layout"
                    }
                ],
                body: "A commercial site along Windsor's Howard Avenue corridor with complete architectural, operations, and site planning documentation available."
            }
        ]
    },
    {
        slug: "enterprise-way-townhomes",
        title: "Enterprise Way Townhomes",
        location: "Windsor, Ontario",
        category: "Residential / Townhomes",
        summary: "A modern residential townhome concept supported by rendering views and three architectural site plan documents.",
        heroImage: "../public/Enterprise_Way_Townhomes_1.jpg",
        documents: [
            {
                label: "Site Plan 0431",
                href: "../public/0431- A-00 Site Plan.pdf"
            },
            {
                label: "Typical / Corner Units",
                href: "../public/Cluster A1 Typical and Corner Units.pdf"
            },
            {
                label: "Architectural Site Plan",
                href: "../public/SP1_1_Architectural_Site_Plan_V1.pdf"
            }
        ],
        stats: [
            {
                label: "Market",
                value: "Windsor"
            },
            {
                label: "Asset Type",
                value: "Townhomes"
            },
            {
                label: "Documents",
                value: "3 Files"
            }
        ],
        highlights: [
            "Multi-building residential concept",
            "Two render perspectives",
            "Three plan documents"
        ],
        sections: [
            {
                label: "Architectural Renderings",
                layout: "duo",
                images: [
                    {
                        src: "../public/Enterprise_Way_Townhomes_1.jpg",
                        caption: "Enterprise Way Townhomes — Front Perspective"
                    },
                    {
                        src: "../public/Enterprise_Way_Townhomes_2.jpg",
                        caption: "Enterprise Way Townhomes — Side Perspective"
                    }
                ],
                body: "A modern multi-building residential townhome development in Windsor, Ontario. Supported by full architectural site plans including typical and corner unit layouts."
            },
            {
                label: "Property Video",
                layout: "full",
                images: [
                    {
                        src: "../public/Enterprise Way.mp4",
                        caption: "Enterprise Way Townhomes — Video Tour",
                        mediaType: "video"
                    }
                ]
            }
        ]
    },
    {
        slug: "cibc-building-retail",
        title: "The CIBC Building",
        location: "100 Ouellette Avenue, Windsor, Ontario",
        category: "Retail / Power Centre",
        summary: "A landmark 14-storey Class \"A\" tower in Windsor's city centre with 10,500 sq ft of lobby-level retail and 2,416 sq ft mezzanine, overlooking the Detroit River and Riverfront Park.",
        heroImage: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/main.jpg",
        documents: [],
        stats: [
            {
                label: "Retail Space",
                value: "10,500 SF Lobby"
            },
            {
                label: "Mezzanine",
                value: "2,416 SF"
            },
            {
                label: "Building Class",
                value: "Class A — 14 Floors"
            }
        ],
        highlights: [
            "14-storey Class A tower",
            "Detroit River & skyline views",
            "Two blocks from US tunnel",
            "Adjacent to 5 km riverfront park"
        ],
        sections: [
            {
                label: "Building Overview",
                layout: "image-left",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/main.jpg",
                        caption: "The CIBC Building — 100 Ouellette Avenue, Windsor"
                    }
                ],
                body: "Located in the heart of downtown Windsor with a beautiful view of Detroit and the Windsor-Detroit River side. A 14-storey Class \"A\" office building situated at the corner of Ouellette Avenue and Riverside Drive, overlooking Riverfront Park, the Detroit River, and the Detroit skyline. The structure includes one below-grade level, a penthouse, and a mezzanine between the ground and second floors.",
                bullets: [
                    {
                        label: "Location Highlights",
                        items: [
                            "Two blocks from U.S. tunnel crossing",
                            "Walking distance to restaurants and shopping",
                            "Adjacent to 5 km riverfront park system",
                            "Highway 401 accessible via Ouellette Avenue"
                        ]
                    }
                ]
            },
            {
                label: "Parking & Elevators",
                layout: "callout",
                callout: "Three Brand New Kone High-Speed Elevators — The Newest System in Canada"
            },
            {
                label: "Property Photography",
                layout: "grid",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/01.jpg",
                        caption: "Lobby Level Interior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/02.jpg",
                        caption: "Interior View"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/04.jpg",
                        caption: "Office Floor"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/05.jpg",
                        caption: "Interior Space"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/06.jpg",
                        caption: "Common Area"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/07.jpg",
                        caption: "Building Interior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/08.jpg",
                        caption: "Building Systems"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/09.jpg",
                        caption: "Building Details"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/CIBC%201.jpg",
                        caption: "CIBC Building — Exterior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/CIBC%202.jpg",
                        caption: "CIBC Building"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/CIBC%203.jpg",
                        caption: "Building Exterior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/100-ouellette.jpg",
                        caption: "100 Ouellette Avenue — Street View"
                    }
                ]
            },
            {
                label: "Space Available at The CIBC Building",
                layout: "duo",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/Space%20Available%201.jpg",
                        caption: "Available Retail Space — Lobby Level (10,500 SF)"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/Space%20Available%202.jpg",
                        caption: "Available Mezzanine Space (2,416 SF)"
                    }
                ],
                body: "10,500 sq ft of retail space available on the lobby level. 2,416 sq ft mezzanine level also available. The building features a JCI building automation control system, perimeter hot water radiant heat with individualized thermostats, card access security, and LED fluorescent lighting throughout.",
                bullets: [
                    {
                        label: "Building Systems",
                        items: [
                            "JCI building automation control system",
                            "Perimeter hot water radiant heat",
                            "Individualized thermostats",
                            "Card access security system",
                            "Low voltage LED lighting",
                            "On-site parking with limited availability"
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "ouellette-commercial-retail",
        title: "Ouellette Commercial Center",
        location: "33 University Ave, Windsor, Ontario",
        category: "Retail / Power Centre",
        summary: "A four-storey professional building at Windsor's premier corner offering ground-floor retail adjacent to Starbucks and executive office suites from 1,000–15,000 sq ft at $10 NNN.",
        heroImage: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette.jpg",
        documents: [
            {
                label: "Floor Plans",
                href: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans.pdf"
            }
        ],
        stats: [
            {
                label: "Available",
                value: "1,000–15,000 SF"
            },
            {
                label: "Rate",
                value: "$10.00/SF NNN"
            },
            {
                label: "Location",
                value: "Windsor's Premier Corner"
            }
        ],
        highlights: [
            "Windsor's premier corner",
            "Ground floor retail next to Starbucks",
            "Entire floor leasing with naming rights"
        ],
        sections: [
            {
                label: "Building Overview",
                layout: "image-left",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette.jpg",
                        caption: "Ouellette Commercial Center — 33 University Ave, Windsor"
                    }
                ],
                body: "A professional four-story office building positioned at Windsor's premier corner. The facility offers beautifully finished executive office spaces ranging from 1,000 to 15,000 square feet. Tenants can lease entire floors and display their names on the building's prominent façade. Ground floor retail space is available adjacent to Starbucks with parking provided.",
                stats: [
                    {
                        label: "Available Space",
                        value: "1,000–15,000 SF"
                    },
                    {
                        label: "Lease Rate",
                        value: "$10.00/SF NNN"
                    }
                ]
            },
            {
                label: "Interior Views",
                layout: "grid",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette1.jpg",
                        caption: "Executive Office Interior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette3.jpg",
                        caption: "Office Suite"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette4.jpg",
                        caption: "Interior View"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette5.jpg",
                        caption: "Office Space"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette6.jpg",
                        caption: "Building Interior"
                    }
                ]
            },
            {
                label: "Floor Plans",
                layout: "grid",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0001.jpg",
                        caption: "Floor Plan — Ground Floor"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0002.jpg",
                        caption: "Floor Plan — Second Floor"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0003.jpg",
                        caption: "Floor Plan — Third Floor"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0004.jpg",
                        caption: "Floor Plan — Fourth Floor"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0005.jpg",
                        caption: "Floor Plan — Detail"
                    }
                ]
            },
            {
                label: "Location Map",
                layout: "full",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellettemap.jpg",
                        caption: "Location Map — 33 University Ave, Windsor, Ontario"
                    }
                ]
            }
        ]
    },
    {
        slug: "riocan-walker-towne-centre",
        title: "RioCan Centre & Walker Towne Centre",
        location: "Windsor, Ontario",
        category: "Retail / Power Centre",
        summary: "Windsor's top power retail destination — 30,000 sq ft next to Giant Tiger at RioCan Centre and 9,000 sq ft former Chuck E. Cheese at Walker Towne Centre, both available for lease or subdivision.",
        heroImage: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Walker%20Towne%20Centre/RioCan%201.jpg",
        documents: [],
        stats: [
            {
                label: "RioCan Site",
                value: "30,000 SF"
            },
            {
                label: "Walker Site",
                value: "9,000 SF"
            },
            {
                label: "Option",
                value: "Will Subdivide"
            }
        ],
        highlights: [
            "30,000 SF next to Giant Tiger",
            "9,000 SF former Chuck E. Cheese",
            "Will subdivide both sites"
        ],
        sections: [
            {
                label: "RioCan Centre — Silver City Site",
                layout: "duo",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Walker%20Towne%20Centre/RioCan%201.jpg",
                        caption: "RioCan Centre Windsor — Exterior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Walker%20Towne%20Centre/RioCan%202.jpg",
                        caption: "RioCan Centre — Available Space"
                    }
                ],
                body: "30,000 square feet of space available at the Silver City site, located next to Giant Tiger. Will subdivide to accommodate multiple tenants."
            },
            {
                label: "Walker Towne Centre",
                layout: "image-left",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Walker%20Towne%20Centre/Walker%20Towne%20Centre%201.jpg",
                        caption: "Walker Towne Centre — Windsor"
                    }
                ],
                body: "Former Chuck E. Cheese site at Walker Road — 9,000 sq ft available and will be subdivided. Prime opportunity in Windsor's established Walker Road retail corridor."
            },
            {
                label: "Site Plans",
                layout: "duo",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Walker%20Towne%20Centre/RioCan%20Centre%20Windsor%20-%20Site%20Plan.jpg",
                        caption: "RioCan Centre Windsor — Site Plan"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Walker%20Towne%20Centre/Walker%20Towne%20Centre%20-%20Site%20Plan.jpg",
                        caption: "Walker Towne Centre — Site Plan"
                    }
                ]
            }
        ]
    },
    {
        slug: "cibc-building-office",
        title: "The CIBC Building — Office Space",
        location: "100 Ouellette Avenue, Windsor, Ontario",
        category: "Commercial / Office",
        summary: "Premium Class \"A\" office space in Windsor's iconic 14-storey CIBC Building — featuring new Kone elevators, JCI automation, panoramic windows, and Detroit River views.",
        heroImage: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/main.jpg",
        documents: [],
        stats: [
            {
                label: "Building Class",
                value: "Class A Office"
            },
            {
                label: "Stories",
                value: "14 Floors"
            },
            {
                label: "Elevators",
                value: "3 New Kone"
            }
        ],
        highlights: [
            "Three new Kone high-speed elevators",
            "Detroit River & skyline views",
            "JCI building automation",
            "Card access security"
        ],
        sections: [
            {
                label: "Building Overview",
                layout: "image-left",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/main.jpg",
                        caption: "The CIBC Building — Premium Class A Office Space, Windsor"
                    }
                ],
                body: "Premium Class \"A\" office space in Windsor's iconic 14-storey CIBC Building at Ouellette Avenue and Riverside Drive. Panoramic windows with Detroit River views, a mezzanine level, and a full basement. The newest Kone high-speed elevator system in Canada.",
                bullets: [
                    {
                        label: "Building Systems",
                        items: [
                            "Three brand new Kone high-speed elevators",
                            "JCI building automation control system",
                            "Perimeter hot water radiant heat",
                            "Individualized thermostats",
                            "Card access security system",
                            "Low voltage LED fluorescent lighting"
                        ]
                    }
                ]
            },
            {
                label: "Property Photography",
                layout: "grid",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/01.jpg",
                        caption: "Lobby Level"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/02.jpg",
                        caption: "Interior View"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/04.jpg",
                        caption: "Office Floor"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/05.jpg",
                        caption: "Interior Space"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/06.jpg",
                        caption: "Common Area"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/07.jpg",
                        caption: "Office Interior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/08.jpg",
                        caption: "Building Detail"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/09.jpg",
                        caption: "Building Systems"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/CIBC%201.jpg",
                        caption: "Exterior View"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/CIBC%202.jpg",
                        caption: "CIBC Building"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/CIBC%203.jpg",
                        caption: "Building Exterior"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/100-ouellette.jpg",
                        caption: "100 Ouellette Ave — Street View"
                    }
                ]
            },
            {
                label: "Office Space Available",
                layout: "duo",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/Space%20Available%201.jpg",
                        caption: "Available Office Space"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/Space%20Available%202.jpg",
                        caption: "Space Layout"
                    }
                ],
                body: "Premium office space available in the heart of Windsor's downtown. Two blocks from the U.S. tunnel crossing, walking distance to restaurants and shops, and adjacent to Windsor's 5 km riverfront park system."
            }
        ]
    },
    {
        slug: "ouellette-commercial-office",
        title: "Ouellette Commercial Center — Office",
        location: "33 University Ave, Windsor, Ontario",
        category: "Commercial / Office",
        summary: "Second and fourth floors available in this four-storey executive building at Windsor's premier corner. Tenants can lease full floors with building naming rights. Starting at $10/SF NNN.",
        heroImage: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette.jpg",
        documents: [
            {
                label: "Floor Plans",
                href: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans.pdf"
            }
        ],
        stats: [
            {
                label: "Floors Available",
                value: "2nd & 4th"
            },
            {
                label: "Available",
                value: "1,000–15,000 SF"
            },
            {
                label: "Rate",
                value: "$10.00/SF NNN"
            }
        ],
        highlights: [
            "2nd and 4th floor suites",
            "Full floor with naming rights",
            "Executive finishes",
            "On-site parking"
        ],
        sections: [
            {
                label: "Building Overview",
                layout: "image-left",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette.jpg",
                        caption: "Ouellette Commercial Center — Office Space, 33 University Ave"
                    }
                ],
                body: "Second and fourth floors available in this professional four-story office building at Windsor's premier corner. Beautifully finished executive office spaces from 1,000 to 15,000 sq ft. Tenants may lease an entire floor with building naming rights. Starting at $10.00/SF NNN.",
                stats: [
                    {
                        label: "Floors Available",
                        value: "2nd & 4th"
                    },
                    {
                        label: "Rate",
                        value: "$10.00/SF NNN"
                    }
                ]
            },
            {
                label: "Office Interiors",
                layout: "grid",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette1.jpg",
                        caption: "Executive Office Suite"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette3.jpg",
                        caption: "Second Floor Office Space"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette4.jpg",
                        caption: "Interior View"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette5.jpg",
                        caption: "Office Suite"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellette6.jpg",
                        caption: "Building Interior"
                    }
                ]
            },
            {
                label: "Floor Plans — 2nd & 4th Floors",
                layout: "grid",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0001.jpg",
                        caption: "Floor Plan — Overview"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0002.jpg",
                        caption: "Second Floor Plan"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0003.jpg",
                        caption: "Third Floor Plan"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0004.jpg",
                        caption: "Fourth Floor Plan — Available"
                    },
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans_page-0005.jpg",
                        caption: "Floor Plan Detail"
                    }
                ]
            },
            {
                label: "Location Map",
                layout: "full",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/ouellettemap.jpg",
                        caption: "Location — 33 University Ave, Windsor, Ontario"
                    }
                ]
            }
        ]
    },
    {
        slug: "34-foster-avenue",
        title: "34 Foster Avenue",
        location: "34 Foster Avenue, Leamington, Ontario",
        category: "Residential / Townhomes",
        summary: "A 2-bedroom waterfront home nestled between the Leamington Marina and the Leamington Dock with incredible lake views — available for under $900/month.",
        heroImage: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Residential/34%20Foster%20Avenue/34-36fostermap.jpg",
        documents: [],
        stats: [
            {
                label: "Bedrooms",
                value: "2 Bedrooms"
            },
            {
                label: "Monthly Rent",
                value: "Under $900/mo"
            },
            {
                label: "Setting",
                value: "Waterfront"
            }
        ],
        highlights: [
            "Waterfront with lake views",
            "Between Marina and Dock",
            "Affordable under $900/month"
        ],
        sections: [
            {
                label: "Property Overview",
                layout: "image-left",
                images: [
                    {
                        src: "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Residential/34%20Foster%20Avenue/34-36fostermap.jpg",
                        caption: "Location — 34 Foster Ave, Between Leamington Marina & Dock"
                    }
                ],
                body: "A 2-bedroom waterfront home nestled in between the Leamington Marina and the Leamington Dock. Incredible lake views for a price under $900 a month. Enjoy peaceful waterfront living in one of Ontario's most scenic lakeside communities."
            }
        ]
    }
];

window.PROPERTY_LISTINGS_BY_SLUG = window.PROPERTY_LISTINGS.reduce((lookup, property) => {
    lookup[property.slug] = property;
    return lookup;
}, {});
