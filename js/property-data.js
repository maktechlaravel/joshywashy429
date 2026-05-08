const MH = 'https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/';
const PC = MH + 'Commercial%20Retail%20Space/Parkway%20Centre/';
const CB = MH + 'Commercial%20Retail%20Space/CIBC%20Building/';
const CC = MH + 'Commercial%20Retail%20Space/College%20Commercial%20Centre/';
const OC = MH + 'Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/';
const WT = MH + 'Commercial%20Retail%20Space/Walker%20Towne%20Centre/';
const RES = MH + 'Residential/';
const DEV = MH + 'Upcoming%20Developments/';

window.PROPERTY_LISTINGS = [

    // ── Existing Portfolio ────────────────────────────────────────────────
    {
        slug: '3003-n-central',
        title: '3003 N Central Ave',
        location: 'Phoenix, AZ 85012',
        category: 'Commercial / Office',
        summary: 'A premier multi-tenant commercial building with a full property info sheet and aerial overview for the North Central corridor.',
        heroImage: '../public/3003_N_Central.webp',
        documents: [
            { label: 'Aerial Overview', href: '../public/3003_N_Central_Aerial_Overview.pdf' },
            { label: 'Arizona Property Listing (LoopNet)', href: 'https://www.loopnet.com/Listing/3003-N-Central-Ave-Phoenix-AZ/15478759', type: 'Link', displayUrl: 'https://www.loopnet.com/Listing/3003-N-Central-Ave-Phoenix-AZ/15478759' }
        ],
        stats: [
            { label: 'Market', value: 'Phoenix' },
            { label: 'Asset Type', value: 'Multi-Tenant' },
            { label: 'Documents', value: '2 Files' }
        ],
        highlights: ['Central corridor frontage', 'Multi-tenant leasing profile', 'Detailed property information'],
        sections: [
            {
                label: 'Property Overview',
                layout: 'duo',
                images: [
                    { src: '../public/3003_N_Central.webp', caption: '3003 N Central Ave — Phoenix, AZ 85012' },
                    { src: '../public/3003_N_Central_Property_Info.png', caption: 'Property Information Sheet' }
                ],
                body: 'A premier multi-tenant commercial building situated along the North Central corridor in Phoenix, Arizona. Full property documentation available including an aerial overview of the site.'
            }
        ]
    },
    {
        slug: 'mikhail-centre',
        title: 'Mikhail Centre / 4450 Walker Road',
        location: 'Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'A major retail destination anchored by national tenants and supported by brochures, site plans, signage and tenant imagery.',
        heroImage: '../public/4450_Walker_Road_Plaza.jpg',
        documents: [
            { label: 'Retail Expansion Package', href: '../public/3051 Legacy PetSmart Expansion Sobey and JM .pdf' },
            { label: 'Exterior Image / Signage', href: '../public/Exterior Image for Sign.pdf' },
            { label: 'Mikhail Centre Brochure', href: '../public/Mikhail_Centre_Windsor_2019_Brochure.pdf' },
            { label: 'Windsor Site Plan', href: '../public/Mikhail_Centre_Windsor_Site_Plan.pdf' },
            { label: 'Walker Road Site Plan', href: '../public/Mikhail_Centre_4450_Walker_Road_Site_Plan_1.pdf' }
        ],
        stats: [
            { label: 'Market', value: 'Windsor' },
            { label: 'Asset Type', value: 'Retail Centre' },
            { label: 'Documents', value: '5 Files' }
        ],
        highlights: ['Anchored retail centre', 'Strong national tenant mix', 'Full document package'],
        sections: [
            {
                label: 'Retail Centre Overview',
                layout: 'duo',
                images: [
                    { src: '../public/4450_Walker_Road_Plaza.jpg', caption: 'Mikhail Centre — 4450 Walker Road, Windsor' },
                    { src: '../public/20210830_094543.jpg', caption: 'Retail Centre Exterior' }
                ],
                body: 'A major retail destination anchored by national tenants along Windsor\'s busiest retail corridor. The centre includes PetSmart, Sobeys, and a strong supporting tenant mix backed by comprehensive site plans and brochures.'
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    { src: '../public/20190607_072155_resized.jpg', caption: 'Tenant Exterior' },
                    { src: '../public/20190712_091114_resized.jpg', caption: 'Retail Storefront' },
                    { src: '../public/image001.png', caption: 'Site Overview' },
                    { src: '../public/image002.png', caption: 'Property View' },
                    { src: '../public/image003.png', caption: 'Property View' },
                    { src: '../public/Image10.jpg', caption: 'Property View' },
                    { src: '../public/Image15.jpg', caption: 'Property View' }
                ]
            }
        ]
    },
    {
        slug: 'j-max-plaza',
        title: 'J Max Plaza',
        location: '2601 Lauzon Rd, Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'A retail plaza package with three gallery images and an offering memorandum for the Lauzon corridor.',
        heroImage: '../public/Jmax_Plaza_1.jpg',
        documents: [
            { label: 'Offering Memorandum', href: '../public/J_Max_Plaza_2601_Lauzon_OM_2025.pdf' }
        ],
        stats: [
            { label: 'Market', value: 'Windsor' },
            { label: 'Asset Type', value: 'Retail Plaza' },
            { label: 'Documents', value: '1 File' }
        ],
        highlights: ['Lauzon Road frontage', 'Retail plaza imagery set', 'Offering memorandum available'],
        sections: [
            {
                label: 'Property Views',
                layout: 'grid',
                images: [
                    { src: '../public/Jmax_Plaza_1.jpg', caption: 'J Max Plaza — 2601 Lauzon Road, Windsor' },
                    { src: '../public/Jmax_Plaza_2.jpg', caption: 'Plaza Exterior View' },
                    { src: '../public/Jmax_Plaza_3.webp', caption: 'Plaza Overview' }
                ],
                body: 'A well-positioned retail plaza along Windsor\'s busy Lauzon Road corridor. Offering memorandum available for qualified parties.'
            }
        ]
    },
    {
        slug: 'radius-center',
        title: 'Radius Center',
        location: '2679 Howard Ave, Windsor, Ontario',
        category: 'Commercial / Industrial',
        summary: 'A commercial site package with aerial planning, site coverage and document support for the Howard Avenue corridor.',
        heroImage: '../public/Radius_Center.png',
        documents: [
            { label: 'Snow / Operations Plan', href: '../public/LCBO_SP-1_corrected metric area_JAN 31-2024.pdf' },
            { label: 'Architectural Sheet A-201-B1', href: '../public/A-201-B1.pdf' },
            { label: 'Site Plan 0029', href: '../public/0029-SPA-07-26-20.pdf' }
        ],
        stats: [
            { label: 'Market', value: 'Windsor' },
            { label: 'Asset Type', value: 'Commercial' },
            { label: 'Documents', value: '3 Files' }
        ],
        highlights: ['Howard Avenue frontage', 'Full plan & operations docs', 'Commercial site package'],
        sections: [
            {
                label: 'Site Views',
                layout: 'duo',
                images: [
                    { src: '../public/Radius center.jpg', caption: 'Radius Center — 2679 Howard Ave, Windsor' },
                    { src: '../public/Radius_Center.png', caption: 'Site Overview & Layout' }
                ],
                body: 'A commercial site along Windsor\'s Howard Avenue corridor with complete architectural, operations, and site planning documentation available.'
            }
        ]
    },
    {
        slug: 'enterprise-way-townhomes',
        title: 'Enterprise Way Townhomes',
        location: 'Windsor, Ontario',
        category: 'Residential / Townhomes',
        summary: 'A modern residential townhome concept supported by rendering views and three architectural site plan documents.',
        heroImage: '../public/Enterprise_Way_Townhomes_1.jpg',
        documents: [
            { label: 'Site Plan 0431', href: '../public/0431- A-00 Site Plan.pdf' },
            { label: 'Typical / Corner Units', href: '../public/Cluster A1 Typical and Corner Units.pdf' },
            { label: 'Architectural Site Plan', href: '../public/SP1_1_Architectural_Site_Plan_V1.pdf' }
        ],
        stats: [
            { label: 'Market', value: 'Windsor' },
            { label: 'Asset Type', value: 'Townhomes' },
            { label: 'Documents', value: '3 Files' }
        ],
        highlights: ['Multi-building residential concept', 'Two render perspectives', 'Three plan documents'],
        sections: [
            {
                label: 'Architectural Renderings',
                layout: 'duo',
                images: [
                    { src: '../public/Enterprise_Way_Townhomes_1.jpg', caption: 'Enterprise Way Townhomes — Front Perspective' },
                    { src: '../public/Enterprise_Way_Townhomes_2.jpg', caption: 'Enterprise Way Townhomes — Side Perspective' }
                ],
                body: 'A modern multi-building residential townhome development in Windsor, Ontario. Supported by full architectural site plans including typical and corner unit layouts.'
            },
            {
                label: 'Property Video',
                layout: 'full',
                images: [
                    { src: '../public/Enterprise Way.mp4', caption: 'Enterprise Way Townhomes — Video Tour', mediaType: 'video' }
                ]
            }
        ]
    },

    // ── Commercial Retail Space ───────────────────────────────────────────
    {
        slug: 'parkway-centre-retail',
        title: 'Parkway Centre',
        location: 'Lauzon Pkwy & Enterprise Way, Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'A premier retail development at Windsor\'s busiest node — Tecumseh Road & Lauzon Parkway — with 1,500–10,000 sq ft available across two brand-new buildings and six vehicular access points.',
        heroImage: PC + 'Parkway%20Centre%201.jpg',
        documents: [],
        stats: [
            { label: 'Available', value: '1,500–10,000 SF' },
            { label: 'Daily Traffic', value: '25,200 Vehicles' },
            { label: 'Population Reach', value: '4.5M within 1 mi' }
        ],
        highlights: ['1 mile from 4.5 million Americans', 'Six vehicular access points', 'Two new buildings under construction', 'Naming rights available'],
        sections: [
            {
                label: 'Property Overview',
                layout: 'duo',
                images: [
                    { src: PC + 'Parkway%20Centre%201.jpg', caption: 'Parkway Centre — Windsor, Ontario' },
                    { src: PC + 'Parkway%20Centre%202.jpg', caption: 'New Commercial Buildings Under Construction' }
                ],
                body: 'Parkway Centre (Naming Rights available for new tenant) is located at the south-western tip of Ontario and the southernmost part of Canada. The Windsor-Essex region extends 685 square miles (1,775 square kilometers) and is home to more than 350,000 people. Only 1 mile away, 4.5 million Americans live within a 1 hour drive, 11 million within 2 hours and 25 million within 6 hours.'
            },
            {
                label: 'Market Overview',
                layout: 'image-left',
                images: [
                    { src: PC + 'Market%20Overview.jpg', caption: 'Windsor-Essex Market Overview' }
                ],
                body: 'Windsor is considered the premier location for advanced automotive manufacturing technology and eastern Canada\'s largest agri-business region. This unique location generates cross-border trade and commerce totaling $400 million daily.\n\nIn 2011, Windsor was rated one of the "Top Ten American Cities of the Future" by FDI Magazine, a publication of the Financial Times of London, placing seventh among \'Large Cities of the Future in North, Central and South America\' and earned second place honours for economic potential.',
                bullets: [
                    {
                        label: 'Windsor\'s Top 5 Employers',
                        items: ['Chrysler Canada', 'Ford Motor Company', 'Caesars Windsor', 'Windsor-Essex County School Board', 'University of Windsor']
                    }
                ],
                stats: [
                    { label: 'Windsor Population', value: '210,891' },
                    { label: 'Daily Traffic (Lauzon Pkwy)', value: '25,200 AADT' }
                ]
            },
            {
                label: 'Local Market Overview',
                layout: 'duo',
                images: [
                    { src: PC + 'Local%20Market%20Map.jpg', caption: 'Local Market Area Map' },
                    { src: PC + 'LocalMarketOverview.gif', caption: 'Local Market Demographics Overview' }
                ]
            },
            {
                label: 'Location & Access',
                layout: 'image-right',
                images: [
                    { src: PC + 'Location.jpg', caption: 'Site Location Map — Southwest Corner of Lauzon Pkwy & Enterprise Way' }
                ],
                body: 'Parkway Centre is located on the southwest corner of Lauzon Parkway and Enterprise Way. Situated off Tecumseh Road, the plaza benefits from the draw of Windsor\'s largest retail node, centered at the intersection of Tecumseh Road and Lauzon Parkway.',
                bullets: [
                    {
                        label: 'Vehicular Access Points',
                        items: [
                            'Three ingress/egress points via Enterprise Way',
                            'Two ingress/egress points via Lauzon Parkway',
                            'One ingress/egress point via Hawthorne Drive'
                        ]
                    }
                ]
            },
            {
                label: 'Development Status',
                layout: 'callout',
                callout: 'Under Construction — Two New Buildings — From 1,500 to 10,000 Sq Ft Available'
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    { src: PC + 'Photography%201a.jpg', caption: 'Exterior View — Building A' },
                    { src: PC + 'Photography%201b.jpg', caption: 'Exterior View — Building B' },
                    { src: PC + 'Photography%201c.jpg', caption: 'Street-Facing Frontage' },
                    { src: PC + 'Arial%20view.jpg', caption: 'Aerial View — Site Overview' },
                    { src: PC + 'Street%20Level%20view%20-northeast.jpg', caption: 'Street Level View — Northeast' },
                    { src: PC + 'Street%20Level%20view%20-northwest.jpg', caption: 'Street Level View — Northwest' },
                    { src: PC + 'Photography%202.jpg', caption: 'On-Site Photography' }
                ]
            },
            {
                label: 'Proposed Site Plan',
                layout: 'full',
                images: [
                    { src: PC + 'Proposed%20Site%20Plan.gif', caption: 'Proposed Site Plan — Parkway Centre, Windsor' }
                ]
            }
        ]
    },
    {
        slug: 'cibc-building-retail',
        title: 'The CIBC Building',
        location: '100 Ouellette Avenue, Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'A landmark 14-storey Class "A" tower in Windsor\'s city centre with 10,500 sq ft of lobby-level retail and 2,416 sq ft mezzanine, overlooking the Detroit River and Riverfront Park.',
        heroImage: CB + 'main.jpg',
        documents: [],
        stats: [
            { label: 'Retail Space', value: '10,500 SF Lobby' },
            { label: 'Mezzanine', value: '2,416 SF' },
            { label: 'Building Class', value: 'Class A — 14 Floors' }
        ],
        highlights: ['14-storey Class A tower', 'Detroit River & skyline views', 'Two blocks from US tunnel', 'Adjacent to 5 km riverfront park'],
        sections: [
            {
                label: 'Building Overview',
                layout: 'image-left',
                images: [
                    { src: CB + 'main.jpg', caption: 'The CIBC Building — 100 Ouellette Avenue, Windsor' }
                ],
                body: 'Located in the heart of downtown Windsor with a beautiful view of Detroit and the Windsor-Detroit River side. A 14-storey Class "A" office building situated at the corner of Ouellette Avenue and Riverside Drive, overlooking Riverfront Park, the Detroit River, and the Detroit skyline. The structure includes one below-grade level, a penthouse, and a mezzanine between the ground and second floors.',
                bullets: [
                    {
                        label: 'Location Highlights',
                        items: [
                            'Two blocks from U.S. tunnel crossing',
                            'Walking distance to restaurants and shopping',
                            'Adjacent to 5 km riverfront park system',
                            'Highway 401 accessible via Ouellette Avenue'
                        ]
                    }
                ]
            },
            {
                label: 'Parking & Elevators',
                layout: 'callout',
                callout: 'Three Brand New Kone High-Speed Elevators — The Newest System in Canada'
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    { src: CB + '01.jpg', caption: 'Lobby Level Interior' },
                    { src: CB + '02.jpg', caption: 'Interior View' },
                    { src: CB + '04.jpg', caption: 'Office Floor' },
                    { src: CB + '05.jpg', caption: 'Interior Space' },
                    { src: CB + '06.jpg', caption: 'Common Area' },
                    { src: CB + '07.jpg', caption: 'Building Interior' },
                    { src: CB + '08.jpg', caption: 'Building Systems' },
                    { src: CB + '09.jpg', caption: 'Building Details' },
                    { src: CB + 'CIBC%201.jpg', caption: 'CIBC Building — Exterior' },
                    { src: CB + 'CIBC%202.jpg', caption: 'CIBC Building' },
                    { src: CB + 'CIBC%203.jpg', caption: 'Building Exterior' },
                    { src: CB + '100-ouellette.jpg', caption: '100 Ouellette Avenue — Street View' }
                ]
            },
            {
                label: 'Space Available at The CIBC Building',
                layout: 'duo',
                images: [
                    { src: CB + 'Space%20Available%201.jpg', caption: 'Available Retail Space — Lobby Level (10,500 SF)' },
                    { src: CB + 'Space%20Available%202.jpg', caption: 'Available Mezzanine Space (2,416 SF)' }
                ],
                body: '10,500 sq ft of retail space available on the lobby level. 2,416 sq ft mezzanine level also available. The building features a JCI building automation control system, perimeter hot water radiant heat with individualized thermostats, card access security, and LED fluorescent lighting throughout.',
                bullets: [
                    {
                        label: 'Building Systems',
                        items: ['JCI building automation control system', 'Perimeter hot water radiant heat', 'Individualized thermostats', 'Card access security system', 'Low voltage LED lighting', 'On-site parking with limited availability']
                    }
                ]
            }
        ]
    },
    {
        slug: 'college-commercial-center',
        title: 'College Commercial Center',
        location: '2970 College Ave, Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'A 30,000 sq ft three-storey building at the Ambassador Bridge entrance with flexible space from 500–20,000 sq ft at $8 NNN, seven truck loading bays, and full handicap accessibility.',
        heroImage: CC + 'college1.jpg',
        documents: [],
        stats: [
            { label: 'Total Area', value: '30,000 SF' },
            { label: 'Available', value: '500 – 20,000 SF' },
            { label: 'Rate', value: 'From $8 NNN' }
        ],
        highlights: ['At Ambassador Bridge entrance', '500–20,000 sq ft units', 'Seven truck loading bays', 'Handicap accessible'],
        sections: [
            {
                label: 'Building Overview',
                layout: 'duo',
                images: [
                    { src: CC + 'college1.jpg', caption: 'College Commercial Center — 2970 College Ave, Windsor' },
                    { src: CC + 'college2.jpg', caption: 'Building Exterior — Ambassador Bridge Entrance' }
                ],
                body: 'A 30,000 square-foot office building positioned at the Ambassador Bridge entrance. The facility features three floors with 15,000 sq ft per level, offering flexible space from 500 to 20,000 sq ft at rates starting from $8 NNN.',
                bullets: [
                    {
                        label: 'Key Features',
                        items: [
                            'Elevator-accessed suites with handicap accessibility',
                            'Seven truck loading bays (convertible to additional offices)',
                            'Proximity to Ambassador Bridge, Highway 401, and Huron Church Road',
                            'On-site parking plus pay lot across the street',
                            'Transit accessible near university campus',
                            'Shipping/receiving/terminal capabilities'
                        ]
                    }
                ]
            },
            {
                label: 'Interior Spaces',
                layout: 'grid',
                images: [
                    { src: CC + 'college3.jpg', caption: 'Office Suite Interior' },
                    { src: CC + 'college4.jpg', caption: 'Office Space' },
                    { src: CC + 'college5.jpg', caption: 'Suite Interior' },
                    { src: CC + 'college6.jpg', caption: 'Office Area' },
                    { src: CC + 'college7.jpg', caption: 'Common Corridor' },
                    { src: CC + 'college8.jpg', caption: 'Interior View' },
                    { src: CC + 'college9.jpg', caption: 'Office Space' },
                    { src: CC + 'college10.jpg', caption: 'Suite Overview' },
                    { src: CC + 'college11.jpg', caption: 'Interior Space' }
                ]
            },
            {
                label: 'Facilities & Loading',
                layout: 'grid',
                images: [
                    { src: CC + 'college12.jpg', caption: 'Loading Bay Area' },
                    { src: CC + 'college13.jpg', caption: 'Truck Loading Dock' },
                    { src: CC + 'college14.jpg', caption: 'Loading Facilities' },
                    { src: CC + 'college15.jpg', caption: 'Building Facilities' },
                    { src: CC + 'college16.jpg', caption: 'Exterior — Side View' },
                    { src: CC + 'college17.jpg', caption: 'Building View' }
                ]
            },
            {
                label: 'Location Map',
                layout: 'full',
                images: [
                    { src: CC + 'collegemap.jpg', caption: 'Location Map — 2970 College Ave, Windsor, Ontario' }
                ]
            }
        ]
    },
    {
        slug: 'ouellette-commercial-retail',
        title: 'Ouellette Commercial Center',
        location: '33 University Ave, Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'A four-storey professional building at Windsor\'s premier corner offering ground-floor retail adjacent to Starbucks and executive office suites from 1,000–15,000 sq ft at $10 NNN.',
        heroImage: OC + 'ouellette.jpg',
        documents: [
            { label: 'Floor Plans', href: 'https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans.pdf' }
        ],
        stats: [
            { label: 'Available', value: '1,000–15,000 SF' },
            { label: 'Rate', value: '$10.00/SF NNN' },
            { label: 'Location', value: 'Windsor\'s Premier Corner' }
        ],
        highlights: ['Windsor\'s premier corner', 'Ground floor retail next to Starbucks', 'Entire floor leasing with naming rights'],
        sections: [
            {
                label: 'Building Overview',
                layout: 'image-left',
                images: [
                    { src: OC + 'ouellette.jpg', caption: 'Ouellette Commercial Center — 33 University Ave, Windsor' }
                ],
                body: 'A professional four-story office building positioned at Windsor\'s premier corner. The facility offers beautifully finished executive office spaces ranging from 1,000 to 15,000 square feet. Tenants can lease entire floors and display their names on the building\'s prominent façade. Ground floor retail space is available adjacent to Starbucks with parking provided.',
                stats: [
                    { label: 'Available Space', value: '1,000–15,000 SF' },
                    { label: 'Lease Rate', value: '$10.00/SF NNN' }
                ]
            },
            {
                label: 'Interior Views',
                layout: 'grid',
                images: [
                    { src: OC + 'ouellette1.jpg', caption: 'Executive Office Interior' },
                    { src: OC + 'ouellette3.jpg', caption: 'Office Suite' },
                    { src: OC + 'ouellette4.jpg', caption: 'Interior View' },
                    { src: OC + 'ouellette5.jpg', caption: 'Office Space' },
                    { src: OC + 'ouellette6.jpg', caption: 'Building Interior' }
                ]
            },
            {
                label: 'Floor Plans',
                layout: 'grid',
                images: [
                    { src: OC + 'floor%20plans_page-0001.jpg', caption: 'Floor Plan — Ground Floor' },
                    { src: OC + 'floor%20plans_page-0002.jpg', caption: 'Floor Plan — Second Floor' },
                    { src: OC + 'floor%20plans_page-0003.jpg', caption: 'Floor Plan — Third Floor' },
                    { src: OC + 'floor%20plans_page-0004.jpg', caption: 'Floor Plan — Fourth Floor' },
                    { src: OC + 'floor%20plans_page-0005.jpg', caption: 'Floor Plan — Detail' }
                ]
            },
            {
                label: 'Location Map',
                layout: 'full',
                images: [
                    { src: OC + 'ouellettemap.jpg', caption: 'Location Map — 33 University Ave, Windsor, Ontario' }
                ]
            }
        ]
    },
    {
        slug: 'riocan-walker-towne-centre',
        title: 'RioCan Centre & Walker Towne Centre',
        location: 'Windsor, Ontario',
        category: 'Retail / Power Centre',
        summary: 'Windsor\'s top power retail destination — 30,000 sq ft next to Giant Tiger at RioCan Centre and 9,000 sq ft former Chuck E. Cheese at Walker Towne Centre, both available for lease or subdivision.',
        heroImage: WT + 'RioCan%201.jpg',
        documents: [],
        stats: [
            { label: 'RioCan Site', value: '30,000 SF' },
            { label: 'Walker Site', value: '9,000 SF' },
            { label: 'Option', value: 'Will Subdivide' }
        ],
        highlights: ['30,000 SF next to Giant Tiger', '9,000 SF former Chuck E. Cheese', 'Will subdivide both sites'],
        sections: [
            {
                label: 'RioCan Centre — Silver City Site',
                layout: 'duo',
                images: [
                    { src: WT + 'RioCan%201.jpg', caption: 'RioCan Centre Windsor — Exterior' },
                    { src: WT + 'RioCan%202.jpg', caption: 'RioCan Centre — Available Space' }
                ],
                body: '30,000 square feet of space available at the Silver City site, located next to Giant Tiger. Will subdivide to accommodate multiple tenants.'
            },
            {
                label: 'Walker Towne Centre',
                layout: 'image-left',
                images: [
                    { src: WT + 'Walker%20Towne%20Centre%201.jpg', caption: 'Walker Towne Centre — Windsor' }
                ],
                body: 'Former Chuck E. Cheese site at Walker Road — 9,000 sq ft available and will be subdivided. Prime opportunity in Windsor\'s established Walker Road retail corridor.'
            },
            {
                label: 'Site Plans',
                layout: 'duo',
                images: [
                    { src: WT + 'RioCan%20Centre%20Windsor%20-%20Site%20Plan.jpg', caption: 'RioCan Centre Windsor — Site Plan' },
                    { src: WT + 'Walker%20Towne%20Centre%20-%20Site%20Plan.jpg', caption: 'Walker Towne Centre — Site Plan' }
                ]
            }
        ]
    },

    // ── Commercial Office Space ───────────────────────────────────────────
    {
        slug: 'parkway-centre-office',
        title: 'Parkway Centre — Naming Rights Available',
        location: 'Lauzon Pkwy & Enterprise Way, Windsor, Ontario',
        category: 'Commercial / Office',
        summary: 'Two brand-new office buildings with naming rights available for the anchor tenant at Windsor\'s prime retail node. From 1,500–10,000 sq ft with 25,200 vehicles passing daily.',
        heroImage: PC + 'Parkway%20Centre%201.jpg',
        documents: [],
        stats: [
            { label: 'Available', value: '1,500–10,000 SF' },
            { label: 'Daily Traffic', value: '25,200 Vehicles' },
            { label: 'Naming Rights', value: 'Available' }
        ],
        highlights: ['Naming rights for anchor tenant', '1 mile from 4.5 million Americans', 'Six vehicular access points'],
        sections: [
            {
                label: 'Property Overview',
                layout: 'duo',
                images: [
                    { src: PC + 'Parkway%20Centre%201.jpg', caption: 'Parkway Centre — Windsor, Ontario' },
                    { src: PC + 'Parkway%20Centre%202.jpg', caption: 'Office Buildings Under Construction — Naming Rights Available' }
                ],
                body: 'Parkway Centre offers naming rights for its new anchor tenant — a rare opportunity to brand a landmark at Windsor\'s most trafficked retail node. Two brand-new office buildings with 1,500 to 10,000 sq ft of flexible space are now under construction at Lauzon Parkway and Enterprise Way.'
            },
            {
                label: 'Market Overview',
                layout: 'image-left',
                images: [
                    { src: PC + 'Market%20Overview.jpg', caption: 'Windsor-Essex Market Overview' }
                ],
                body: 'The Windsor-Essex region extends 685 square miles and is home to more than 350,000 people. Only 1 mile from 4.5 million Americans, 11 million within 2 hours, and 25 million within 6 hours. Windsor generates $400 million in daily cross-border trade.',
                stats: [
                    { label: 'Windsor Population', value: '210,891' },
                    { label: 'Daily Traffic', value: '25,200 AADT' }
                ]
            },
            {
                label: 'Local Market Overview',
                layout: 'duo',
                images: [
                    { src: PC + 'Local%20Market%20Map.jpg', caption: 'Local Market Area Map' },
                    { src: PC + 'LocalMarketOverview.gif', caption: 'Local Market Demographics Overview' }
                ]
            },
            {
                label: 'Location & Access',
                layout: 'image-right',
                images: [
                    { src: PC + 'Location.jpg', caption: 'Site Location Map — Southwest Corner of Lauzon Pkwy & Enterprise Way' }
                ],
                body: 'Located on the southwest corner of Lauzon Parkway and Enterprise Way. Six vehicular access points provide easy ingress and egress via Enterprise Way (3), Lauzon Parkway (2), and Hawthorne Drive (1).'
            },
            {
                label: 'Development Status',
                layout: 'callout',
                callout: 'Under Construction — Two New Buildings — Naming Rights Available for Anchor Tenant — From 1,500 to 10,000 Sq Ft'
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    { src: PC + 'Photography%201a.jpg', caption: 'Exterior View — Building A' },
                    { src: PC + 'Photography%201b.jpg', caption: 'Exterior View — Building B' },
                    { src: PC + 'Photography%201c.jpg', caption: 'Street-Facing Frontage' },
                    { src: PC + 'Arial%20view.jpg', caption: 'Aerial View — Site Overview' },
                    { src: PC + 'Street%20Level%20view%20-northeast.jpg', caption: 'Street Level — Northeast' },
                    { src: PC + 'Street%20Level%20view%20-northwest.jpg', caption: 'Street Level — Northwest' },
                    { src: PC + 'Photography%202.jpg', caption: 'On-Site Photography' }
                ]
            },
            {
                label: 'Proposed Site Plan',
                layout: 'full',
                images: [
                    { src: PC + 'Proposed%20Site%20Plan.gif', caption: 'Proposed Site Plan — Parkway Centre, Windsor' }
                ]
            }
        ]
    },
    {
        slug: 'cibc-building-office',
        title: 'The CIBC Building — Office Space',
        location: '100 Ouellette Avenue, Windsor, Ontario',
        category: 'Commercial / Office',
        summary: 'Premium Class "A" office space in Windsor\'s iconic 14-storey CIBC Building — featuring new Kone elevators, JCI automation, panoramic windows, and Detroit River views.',
        heroImage: CB + 'main.jpg',
        documents: [],
        stats: [
            { label: 'Building Class', value: 'Class A Office' },
            { label: 'Stories', value: '14 Floors' },
            { label: 'Elevators', value: '3 New Kone' }
        ],
        highlights: ['Three new Kone high-speed elevators', 'Detroit River & skyline views', 'JCI building automation', 'Card access security'],
        sections: [
            {
                label: 'Building Overview',
                layout: 'image-left',
                images: [
                    { src: CB + 'main.jpg', caption: 'The CIBC Building — Premium Class A Office Space, Windsor' }
                ],
                body: 'Premium Class "A" office space in Windsor\'s iconic 14-storey CIBC Building at Ouellette Avenue and Riverside Drive. Panoramic windows with Detroit River views, a mezzanine level, and a full basement. The newest Kone high-speed elevator system in Canada.',
                bullets: [
                    {
                        label: 'Building Systems',
                        items: ['Three brand new Kone high-speed elevators', 'JCI building automation control system', 'Perimeter hot water radiant heat', 'Individualized thermostats', 'Card access security system', 'Low voltage LED fluorescent lighting']
                    }
                ]
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    { src: CB + '01.jpg', caption: 'Lobby Level' },
                    { src: CB + '02.jpg', caption: 'Interior View' },
                    { src: CB + '04.jpg', caption: 'Office Floor' },
                    { src: CB + '05.jpg', caption: 'Interior Space' },
                    { src: CB + '06.jpg', caption: 'Common Area' },
                    { src: CB + '07.jpg', caption: 'Office Interior' },
                    { src: CB + '08.jpg', caption: 'Building Detail' },
                    { src: CB + '09.jpg', caption: 'Building Systems' },
                    { src: CB + 'CIBC%201.jpg', caption: 'Exterior View' },
                    { src: CB + 'CIBC%202.jpg', caption: 'CIBC Building' },
                    { src: CB + 'CIBC%203.jpg', caption: 'Building Exterior' },
                    { src: CB + '100-ouellette.jpg', caption: '100 Ouellette Ave — Street View' }
                ]
            },
            {
                label: 'Office Space Available',
                layout: 'duo',
                images: [
                    { src: CB + 'Space%20Available%201.jpg', caption: 'Available Office Space' },
                    { src: CB + 'Space%20Available%202.jpg', caption: 'Space Layout' }
                ],
                body: 'Premium office space available in the heart of Windsor\'s downtown. Two blocks from the U.S. tunnel crossing, walking distance to restaurants and shops, and adjacent to Windsor\'s 5 km riverfront park system.'
            }
        ]
    },
    {
        slug: 'ouellette-commercial-office',
        title: 'Ouellette Commercial Center — Office',
        location: '33 University Ave, Windsor, Ontario',
        category: 'Commercial / Office',
        summary: 'Second and fourth floors available in this four-storey executive building at Windsor\'s premier corner. Tenants can lease full floors with building naming rights. Starting at $10/SF NNN.',
        heroImage: OC + 'ouellette.jpg',
        documents: [
            { label: 'Floor Plans', href: 'https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans.pdf' }
        ],
        stats: [
            { label: 'Floors Available', value: '2nd & 4th' },
            { label: 'Available', value: '1,000–15,000 SF' },
            { label: 'Rate', value: '$10.00/SF NNN' }
        ],
        highlights: ['2nd and 4th floor suites', 'Full floor with naming rights', 'Executive finishes', 'On-site parking'],
        sections: [
            {
                label: 'Building Overview',
                layout: 'image-left',
                images: [
                    { src: OC + 'ouellette.jpg', caption: 'Ouellette Commercial Center — Office Space, 33 University Ave' }
                ],
                body: 'Second and fourth floors available in this professional four-story office building at Windsor\'s premier corner. Beautifully finished executive office spaces from 1,000 to 15,000 sq ft. Tenants may lease an entire floor with building naming rights. Starting at $10.00/SF NNN.',
                stats: [
                    { label: 'Floors Available', value: '2nd & 4th' },
                    { label: 'Rate', value: '$10.00/SF NNN' }
                ]
            },
            {
                label: 'Office Interiors',
                layout: 'grid',
                images: [
                    { src: OC + 'ouellette1.jpg', caption: 'Executive Office Suite' },
                    { src: OC + 'ouellette3.jpg', caption: 'Second Floor Office Space' },
                    { src: OC + 'ouellette4.jpg', caption: 'Interior View' },
                    { src: OC + 'ouellette5.jpg', caption: 'Office Suite' },
                    { src: OC + 'ouellette6.jpg', caption: 'Building Interior' }
                ]
            },
            {
                label: 'Floor Plans — 2nd & 4th Floors',
                layout: 'grid',
                images: [
                    { src: OC + 'floor%20plans_page-0001.jpg', caption: 'Floor Plan — Overview' },
                    { src: OC + 'floor%20plans_page-0002.jpg', caption: 'Second Floor Plan' },
                    { src: OC + 'floor%20plans_page-0003.jpg', caption: 'Third Floor Plan' },
                    { src: OC + 'floor%20plans_page-0004.jpg', caption: 'Fourth Floor Plan — Available' },
                    { src: OC + 'floor%20plans_page-0005.jpg', caption: 'Floor Plan Detail' }
                ]
            },
            {
                label: 'Location Map',
                layout: 'full',
                images: [
                    { src: OC + 'ouellettemap.jpg', caption: 'Location — 33 University Ave, Windsor, Ontario' }
                ]
            }
        ]
    },

    // ── Residential Properties ────────────────────────────────────────────
    {
        slug: 'harbourview-condominiums',
        title: 'Harbourview Condominiums',
        location: 'Leamington, Ontario',
        category: 'Residential / Townhomes',
        summary: 'Premium lakeside condominiums nestled between the Leamington Marina and Lake Erie. One-bedroom from $69,000, two-bedroom from $102,900 — purchase, rent-to-own, or rental.',
        heroImage: RES + 'Harbourview%20Main.jpg',
        documents: [],
        stats: [
            { label: '1-Bedroom From', value: '$69,000' },
            { label: '2-Bedroom From', value: '$102,900' },
            { label: 'Options', value: 'Buy / Rent-to-Own / Rent' }
        ],
        highlights: ['Between Leamington Marina & Lake Erie', 'Glass-railed balconies with lake views', 'Exercise room & oversized elevator', 'Purchase, rent-to-own, or rental'],
        sections: [
            {
                label: 'Property Overview',
                layout: 'image-left',
                images: [
                    { src: RES + 'Harbourview%20Main.jpg', caption: 'Harbourview Condominiums — Leamington, Ontario' }
                ],
                body: 'Located in Leamington near the marina and Lake Erie waterfront. Close to anything you need yet peaceful, with a beautiful view of Lake Erie. One-bedroom units starting from $69,000 CDN and two-bedroom units from $102,900 CDN. Available for purchase, rent-to-own, or rental.',
                stats: [
                    { label: '1-Bedroom From', value: '$69,000 CDN' },
                    { label: '2-Bedroom From', value: '$102,900 CDN' }
                ]
            },
            {
                label: 'Features & Specifications',
                layout: 'callout',
                callout: 'Luxury — Affordability — Lake Erie Waterfront Living'
            },
            {
                label: 'Unit Features',
                layout: 'grid',
                images: [
                    { src: RES + 'Harbourview/01.jpg', caption: 'Building Exterior' },
                    { src: RES + 'Harbourview/02.jpg', caption: 'Exterior View' },
                    { src: RES + 'Harbourview/03.jpg', caption: 'Building Overview' },
                    { src: RES + 'Harbourview/04.jpg', caption: 'Common Area' },
                    { src: RES + 'Harbourview/05.jpg', caption: 'Suite Interior' },
                    { src: RES + 'Harbourview/06.jpg', caption: 'Kitchen — Custom Cabinets' },
                    { src: RES + 'Harbourview/07.jpg', caption: 'Living Area' },
                    { src: RES + 'Harbourview/08.jpg', caption: 'Bedroom' },
                    { src: RES + 'Harbourview/09.jpg', caption: 'Suite Finishes' }
                ],
                bullets: [
                    {
                        label: 'Interior Features',
                        items: ['Custom kitchen cabinets', 'Stainless steel sinks with chrome faucets', 'Thermal double-glazed windows', 'Individual heating/AC controls', 'Pre-wired for cable TV and telephone', 'Storage areas on each unit']
                    },
                    {
                        label: 'Exterior Features',
                        items: ['Glass-railed balconies (upper units)', 'Private patios (main floor units)', '25-year asphalt shingles']
                    }
                ]
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    { src: RES + 'Harbourview/10.jpg', caption: 'View 10' },
                    { src: RES + 'Harbourview/11.jpg', caption: 'View 11' },
                    { src: RES + 'Harbourview/12.jpg', caption: 'View 12' },
                    { src: RES + 'Harbourview/13.jpg', caption: 'View 13' },
                    { src: RES + 'Harbourview/14.jpg', caption: 'View 14' },
                    { src: RES + 'Harbourview/15.jpg', caption: 'View 15' },
                    { src: RES + 'Harbourview/16.jpg', caption: 'View 16' },
                    { src: RES + 'Harbourview/17.jpg', caption: 'View 17' },
                    { src: RES + 'Harbourview/18.jpg', caption: 'View 18' },
                    { src: RES + 'Harbourview/19.jpg', caption: 'View 19' },
                    { src: RES + 'Harbourview/20.jpg', caption: 'View 20' },
                    { src: RES + 'Harbourview/21.jpg', caption: 'View 21' },
                    { src: RES + 'Harbourview/22.jpg', caption: 'View 22' },
                    { src: RES + 'Harbourview/23.jpg', caption: 'View 23' },
                    { src: RES + 'Harbourview/24.jpg', caption: 'View 24' }
                ]
            },
            {
                label: 'Common Areas & Amenities',
                layout: 'callout',
                callout: 'Exercise Room · Oversized Elevator · Visual Security System · Pressurized Corridors · R-20 Wall Insulation · High-Efficiency Heating & Cooling'
            },
            {
                label: 'Location Map',
                layout: 'full',
                images: [
                    { src: RES + 'Harbourview/Harbourviewmap.jpg', caption: 'Location Map — Leamington Marina & Lake Erie, Leamington, Ontario' }
                ]
            }
        ]
    },
    {
        slug: '34-foster-avenue',
        title: '34 Foster Avenue',
        location: '34 Foster Avenue, Leamington, Ontario',
        category: 'Residential / Townhomes',
        summary: 'A 2-bedroom waterfront home nestled between the Leamington Marina and the Leamington Dock with incredible lake views — available for under $900/month.',
        heroImage: RES + '34%20Foster%20Avenue/34-36fostermap.jpg',
        documents: [],
        stats: [
            { label: 'Bedrooms', value: '2 Bedrooms' },
            { label: 'Monthly Rent', value: 'Under $900/mo' },
            { label: 'Setting', value: 'Waterfront' }
        ],
        highlights: ['Waterfront with lake views', 'Between Marina and Dock', 'Affordable under $900/month'],
        sections: [
            {
                label: 'Property Overview',
                layout: 'image-left',
                images: [
                    { src: RES + '34%20Foster%20Avenue/34-36fostermap.jpg', caption: 'Location — 34 Foster Ave, Between Leamington Marina & Dock' }
                ],
                body: 'A 2-bedroom waterfront home nestled in between the Leamington Marina and the Leamington Dock. Incredible lake views for a price under $900 a month. Enjoy peaceful waterfront living in one of Ontario\'s most scenic lakeside communities.'
            }
        ]
    },

    // ── Future Developments ───────────────────────────────────────────────
    {
        slug: 'river-front-towers',
        title: 'River Front Towers',
        location: 'Windsor, Ontario',
        category: 'Future / Developments',
        summary: 'A 14-storey commercial office tower development along Windsor\'s premier riverfront with 10,000 sq ft per floor plate — 7 floors pre-leased.',
        heroImage: DEV + 'riverfronttowers.jpg',
        documents: [],
        stats: [
            { label: 'Stories', value: '14 Floors' },
            { label: 'Floor Plate', value: '10,000 SF' },
            { label: 'Pre-Leased', value: '7 Floors' }
        ],
        highlights: ['7 floors pre-leased', '10,000 sq ft per floor', 'Windsor prime riverfront'],
        sections: [
            {
                label: 'Development Rendering',
                layout: 'full',
                images: [
                    { src: DEV + 'riverfronttowers.jpg', caption: 'River Front Towers — Windsor Riverfront Development' }
                ],
                body: 'A 14-storey commercial office tower development with 10,000 square feet per floor plate, situated along Windsor\'s premier riverfront. Seven floors were pre-leased at time of listing. A landmark commercial development opportunity on the Windsor waterfront.',
                stats: [
                    { label: 'Total Stories', value: '14 Floors' },
                    { label: 'Floor Plate', value: '10,000 SF per floor' }
                ]
            }
        ]
    },
    {
        slug: 'new-banking-center',
        title: 'New Banking Center',
        location: 'Ouellette & Pit St, Windsor, Ontario',
        category: 'Future / Developments',
        summary: 'A 40,000 sq ft purpose-built banking and commercial facility at the corner of Ouellette and Pit Streets in Windsor, with 10,000 sq ft available for occupancy.',
        heroImage: DEV + 'bankingCetnerlg.jpg',
        documents: [],
        stats: [
            { label: 'Total Area', value: '40,000 SF' },
            { label: 'Available', value: '10,000 SF' },
            { label: 'Location', value: 'Ouellette & Pit St' }
        ],
        highlights: ['40,000 SF banking facility', '10,000 SF available', 'Prime Windsor corridor'],
        sections: [
            {
                label: 'Development Overview',
                layout: 'full',
                images: [
                    { src: DEV + 'bankingCetnerlg.jpg', caption: 'New Banking Center — Corner of Ouellette & Pit Streets, Windsor' }
                ],
                body: 'A 40,000 square foot new banking centre located at the corner of Ouellette and Pit Streets in Windsor, Ontario. 10,000 sq ft remains available with occupancy ready. A purpose-built facility designed for financial services tenants in Windsor\'s prime commercial corridor.',
                stats: [
                    { label: 'Total Building Size', value: '40,000 SF' },
                    { label: 'Space Available', value: '10,000 SF' }
                ]
            }
        ]
    },
    {
        slug: 'heritage-towers-amherstburg',
        title: 'Heritage Towers',
        location: 'Amherstburg, Ontario',
        category: 'Future / Developments',
        summary: 'Luxury two-bedroom, two-bathroom condominiums in Amherstburg with underground parking, ensuite laundry, balconies on every unit, and direct corridor access to an adjacent shopping mall, medical clinic and pharmacy.',
        heroImage: DEV + 'heritage-towers.jpg',
        documents: [],
        stats: [
            { label: 'Unit Type', value: '2 Bed / 2 Bath' },
            { label: 'Parking', value: 'Underground' },
            { label: 'Warranty', value: 'ON New Home' }
        ],
        highlights: ['Underground parking with mall access', 'Ensuite laundry on every unit', 'Adjacent medical clinic & pharmacy', 'Ontario New Home Warranty'],
        sections: [
            {
                label: 'Luxury, Affordability and Security',
                layout: 'duo',
                images: [
                    { src: DEV + 'heritage-towers.jpg', caption: 'Heritage Towers — Amherstburg, Ontario' },
                    { src: DEV + 'heritage-towers-logo.jpg', caption: 'Heritage Towers — Project Identity' }
                ],
                body: 'Luxury condominiums at affordable prices in Amherstburg, Ontario. Each two-bedroom, two-bathroom unit features walk-in closets, ensuite laundry, forced air gas furnace, central air conditioning, underground parking with direct mall access, and a private balcony.',
                bullets: [
                    {
                        label: 'Unit Features',
                        items: ['Two bedrooms with walk-in closet in master', 'Two full bathrooms', 'Ensuite laundry room', 'Forced air gas furnace & central AC', 'Individual utility meters', 'Private balcony', 'Underground parking with storage']
                    },
                    {
                        label: 'Building Amenities',
                        items: ['Direct corridor access to adjacent shopping mall', 'On-site medical clinic & pharmacy', 'Dental and banking services on-site', 'Ontario New Home Warranty Program coverage']
                    }
                ]
            },
            {
                label: 'Floor Plan Overview',
                layout: 'full',
                images: [
                    { src: DEV + 'heritage-towers-floor-plans-map%202.jpg', caption: 'Heritage Towers — Floor Plan Overview Map' }
                ]
            },
            {
                label: 'Unit Models',
                layout: 'grid',
                images: [
                    { src: DEV + 'emerald.jpg', caption: 'Emerald Model' },
                    { src: DEV + 'rose.jpg', caption: 'Rose Model' },
                    { src: DEV + 'violet.jpg', caption: 'Violet Model' },
                    { src: DEV + 'daisy.jpg', caption: 'Daisy Model' },
                    { src: DEV + 'ruby.jpg', caption: 'Ruby Model' },
                    { src: DEV + 'sapphire.jpg', caption: 'Sapphire Model' }
                ]
            }
        ]
    }

];

window.PROPERTY_LISTINGS_BY_SLUG = window.PROPERTY_LISTINGS.reduce((lookup, property) => {
    lookup[property.slug] = property;
    return lookup;
}, {});
