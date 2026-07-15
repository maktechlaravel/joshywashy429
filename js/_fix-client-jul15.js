/**
 * Apply Jul 15 client feedback fixes to property-data.js
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'property-data.js');
let src = fs.readFileSync(filePath, 'utf8');

const start = src.indexOf('window.PROPERTY_LISTINGS = [');
const end = src.indexOf('];', start) + 2;
const prefix = src.slice(0, start);
const suffix = src.slice(end);

const arraySrc = src.slice(start + 'window.PROPERTY_LISTINGS = '.length, end);
const listings = eval(arraySrc);

function find(slug) {
    return listings.find((p) => p.slug === slug);
}

function removeSlug(slug) {
    const i = listings.findIndex((p) => p.slug === slug);
    if (i >= 0) listings.splice(i, 1);
}

// ── 1) 3003: move Offering Memorandum out of Mikhail Plaza ──
const central = find('3003-n-central');
if (central) {
    const hasOm = (central.documents || []).some((d) =>
        /offering|3003_N_Central_Offering/i.test(d.href + d.label)
    );
    if (!hasOm) {
        central.documents = [
            {
                label: 'Offering Memorandum',
                href: '../public/3003_N_Central_Offering_Memorandum.pdf',
            },
            ...(central.documents || []),
        ];
        central.stats = (central.stats || []).map((s) =>
            s.label === 'Documents'
                ? { label: 'Documents', value: `${central.documents.length} Files` }
                : s
        );
    }
}

// ── 2) Mikhail Plaza: remove wrong 3003 OM; use Lauzon concept imagery ──
const plaza = find('mikhail-plaza');
if (plaza) {
    plaza.summary =
        'Mikhail Plaza at 2601 Lauzon Road, Windsor — multi-building retail plaza with Lauzon development plans and conceptual site design package.';
    plaza.heroImage = '../public/Image10.jpg';
    plaza.documents = [
        {
            label: 'Lauzon Development Plans',
            href: '../public/docs/lauzon-development.pdf',
        },
        {
            label: 'June Plaza Design — Conceptual Site Plan',
            href: '../public/docs/june-plaza-design.pdf',
        },
    ];
    plaza.stats = [
        { label: 'Market', value: 'Windsor' },
        { label: 'Asset Type', value: 'Retail Plaza' },
        { label: 'Documents', value: '2 Files' },
    ];
    plaza.highlights = [
        'Lauzon Road multi-building plaza',
        'Development & design packages',
        'Concept drawings for plaza expansion',
    ];
    plaza.sections = [
        {
            label: 'Plaza Concept',
            layout: 'duo',
            images: [
                {
                    src: '../public/Image10.jpg',
                    caption: 'Mikhail Plaza — Lauzon Road concept drawing',
                },
                {
                    src: '../public/Mikhail_Plaza_june_design.jpg',
                    caption: 'Conceptual site plan — multi-building plaza',
                },
            ],
            body: 'A multi-building retail plaza along Windsor\'s busy Lauzon Road corridor. Development and conceptual design packages are available for qualified parties.',
        },
        {
            label: 'Development Plans',
            layout: 'full',
            images: [
                {
                    src: '../public/Mikhail_Plaza_lauzon_dev.jpg',
                    caption: 'Lauzon Development — Building Package',
                },
            ],
        },
    ];
}

// ── 3) Mikhail Centre (ex RioCan): remove Sobeys claim; remove Lauzon concept image ──
const centre = find('mikhail-centre');
if (centre) {
    centre.title = 'Mikhail Centre';
    centre.location = '4450 Walker Road, Windsor, Ontario';
    centre.summary =
        'A major retail destination at 4450 Walker Road — formerly RioCan Centre — anchored by national tenants with brochures, site plans, and signage packages.';
    centre.sections = [
        {
            label: 'Retail Centre Overview',
            layout: 'duo',
            images: [
                {
                    src: '../public/4450_Walker_Road_Plaza.jpg',
                    caption: 'Mikhail Centre — 4450 Walker Road, Windsor',
                },
                {
                    src: '../public/Walker_Towne_Centre_1.jpg',
                    caption: 'Walker corridor retail view',
                },
            ],
            body: 'A major retail destination anchored by national tenants along Windsor\'s Walker Road corridor, including Staples, Cineplex, Giant Tiger, Dollarama, and a strong supporting mix. Supported by comprehensive site plans and brochures.',
        },
        {
            label: 'Property Photography',
            layout: 'duo',
            images: [
                {
                    src: '../public/20190607_072155_resized.jpg',
                    caption: 'Tenant Exterior',
                },
                {
                    src: '../public/Walker_Towne_Site_Plan_preview.jpg',
                    caption: 'Site plan preview',
                },
            ],
        },
    ];
}

// ── 4) Enterprise Way: remove Sobeys architectural site plan ──
const enterprise = find('enterprise-way-townhomes');
if (enterprise) {
    enterprise.documents = (enterprise.documents || []).filter(
        (d) => !/SP1_1_Architectural|Architectural Site Plan/i.test(d.href + d.label)
    );
    enterprise.summary =
        'A modern residential townhome concept supported by rendering views and architectural site plan documents.';
    const docCount = enterprise.documents.length;
    enterprise.stats = (enterprise.stats || []).map((s) =>
        s.label === 'Documents' ? { label: 'Documents', value: `${docCount} Files` } : s
    );
    enterprise.highlights = [
        'Multi-building residential concept',
        'Two render perspectives',
        `${docCount} plan document${docCount === 1 ? '' : 's'}`,
    ];
}

// ── 5) Add Sobeys Plaza (83 Sandwich) ──
if (!find('sobeys-plaza-amherstburg')) {
    const afterEnterprise = listings.findIndex((p) => p.slug === 'enterprise-way-townhomes');
    const sobeys = {
        slug: 'sobeys-plaza-amherstburg',
        title: 'Sobeys Plaza',
        location: '83 Sandwich Street, Amherstburg, Ontario',
        category: 'Retail / Power Centre',
        summary:
            'Sobeys-anchored retail plaza at 83 Sandwich Street, Amherstburg — architectural site plans, concept drawings, and full building addition set.',
        heroImage: '../public/Sobeys_Plaza_hero.jpg',
        documents: [
            {
                label: 'Architectural Site Plan (Sobeys)',
                href: '../public/SP1_1_Architectural_Site_Plan_V1.pdf',
            },
            {
                label: 'Concept Site Plan',
                href: '../public/docs/83-sandwich-concept-site.pdf',
            },
            {
                label: '83 Sandwich Complete Building Set',
                href: '../public/docs/83-sandwich-sobeys-complete-set.pdf',
            },
        ],
        stats: [
            { label: 'Market', value: 'Amherstburg' },
            { label: 'Asset Type', value: 'Retail Plaza' },
            { label: 'Documents', value: '3 Files' },
        ],
        highlights: [
            'Sobeys-anchored plaza',
            '83 Sandwich Street frontage',
            'Full architectural package',
        ],
        sections: [
            {
                label: 'Plaza Overview',
                layout: 'duo',
                images: [
                    {
                        src: '../public/Sobeys_Plaza_hero.jpg',
                        caption: 'Sobeys Plaza — Amherstburg',
                    },
                    {
                        src: '../public/Sobeys_Plaza_siteplan.jpg',
                        caption: 'Architectural site plan',
                    },
                ],
                body: 'Retail plaza at 83 Sandwich Street in Amherstburg, anchored by Sobeys. Site plans and the complete building addition drawing set are available.',
            },
        ],
    };
    listings.splice(afterEnterprise >= 0 ? afterEnterprise + 1 : listings.length, 0, sobeys);
}

// ── 6) Add Wal-Mart Plaza (400 Sandwich Amherstburg) ──
if (!find('walmart-plaza-amherstburg')) {
    const afterSobeys = listings.findIndex((p) => p.slug === 'sobeys-plaza-amherstburg');
    const walmart = {
        slug: 'walmart-plaza-amherstburg',
        title: 'Wal-Mart Plaza',
        location: '400 Sandwich Street, Amherstburg, Ontario',
        category: 'Retail / Power Centre',
        summary:
            'Wal-Mart Centre at 400 Sandwich Street, Amherstburg — centre brochure map and LCBO / Walmart site plan documentation.',
        heroImage: '../public/Walmart_Plaza_hero.jpg',
        documents: [
            {
                label: 'WM Centre Amherstburg Brochure',
                href: '../public/docs/walmart-centre-amherstburg.pdf',
            },
            {
                label: 'LCBO / Walmart Site Plan',
                href: '../public/docs/walmart-lcbo-site-plan.pdf',
            },
        ],
        stats: [
            { label: 'Market', value: 'Amherstburg' },
            { label: 'Asset Type', value: 'Power Centre' },
            { label: 'Documents', value: '2 Files' },
        ],
        highlights: [
            'Wal-Mart Centre Amherstburg',
            '400 Sandwich Street',
            'LCBO / retail pad plans',
        ],
        sections: [
            {
                label: 'Centre Overview',
                layout: 'duo',
                images: [
                    {
                        src: '../public/Walmart_Plaza_hero.jpg',
                        caption: 'Wal-Mart Centre — Amherstburg Ontario',
                    },
                    {
                        src: '../public/Walmart_Plaza_siteplan.jpg',
                        caption: 'Overall site plan — Walmart / LCBO',
                    },
                ],
                body: 'Power centre at 400 Sandwich Street in Amherstburg, anchored by Wal-Mart with supporting retail including LCBO. Centre brochure and architectural site plans included.',
            },
        ],
    };
    listings.splice(afterSobeys >= 0 ? afterSobeys + 1 : listings.length, 0, walmart);
}

// ── 7) Merge duplicate CIBC listings into one ──
const cibcRetail = find('cibc-building-retail');
const cibcOffice = find('cibc-building-office');
if (cibcRetail && cibcOffice) {
    const merged = {
        slug: 'cibc-building',
        title: 'The CIBC Building',
        location: '100 Ouellette Avenue, Windsor, Ontario',
        category: 'Commercial / Office',
        summary:
            'Landmark 14-storey Class "A" tower in Windsor\'s city centre — lobby-level retail and premium office suites with river views, new Kone elevators, and JCI automation.',
        heroImage: '../public/CIBC_Building_main.jpg',
        documents: [],
        stats: [
            { label: 'Building Class', value: 'Class A' },
            { label: 'Stories', value: '14 Floors' },
            { label: 'Retail Lobby', value: '10,500 SF' },
        ],
        highlights: [
            'Retail lobby + office floors',
            'Detroit River & skyline views',
            'Three new Kone elevators',
        ],
        sections: [
            {
                label: 'Building Overview',
                layout: 'duo',
                images: [
                    {
                        src: '../public/CIBC_Building_main.jpg',
                        caption: 'The CIBC Building — 100 Ouellette Avenue, Windsor',
                    },
                    {
                        src: '../public/CIBC_Building_1.jpg',
                        caption: 'Riverfront setting — Detroit skyline views',
                    },
                ],
                body: 'Located at Ouellette Avenue and Riverside Drive overlooking Riverfront Park and the Detroit River. A 14-storey Class "A" building with lobby-level retail, mezzanine, and premium office floors.',
            },
            {
                label: 'Property Photography',
                layout: 'grid',
                images: [
                    {
                        src: '../public/CIBC_Building_2.jpg',
                        caption: 'CIBC Building exterior',
                    },
                    {
                        src: '../public/CIBC_Building_3.jpg',
                        caption: 'Building exterior detail',
                    },
                    {
                        src: '../public/CIBC_100_Ouellette.jpg',
                        caption: '100 Ouellette Avenue',
                    },
                    {
                        src: '../public/CIBC_dl_CIBC_1.jpg',
                        caption: 'Detroit River view from Windsor',
                    },
                ],
            },
        ],
    };
    removeSlug('cibc-building-retail');
    removeSlug('cibc-building-office');
    listings.push(merged);
} else if (cibcRetail && !find('cibc-building')) {
    cibcRetail.slug = 'cibc-building';
    cibcRetail.category = 'Commercial / Office';
}

// ── 8) Merge duplicate Ouellette listings; remove Starbucks claims; refresh photos ──
const ouRetail = find('ouellette-commercial-retail');
const ouOffice = find('ouellette-commercial-office');
if (ouRetail || ouOffice) {
    const base = ouRetail || ouOffice;
    const mergedOu = {
        slug: 'ouellette-commercial-center',
        title: 'Ouellette Commercial Center',
        location: '33 University Ave, Windsor, Ontario',
        category: 'Commercial / Office',
        summary:
            'A four-storey professional building at Windsor\'s premier corner offering ground-floor retail and executive office suites from 1,000–15,000 sq ft at $10 NNN.',
        heroImage: '../public/Ouellette_src_ouellette1.jpg',
        documents: [
            {
                label: 'Floor Plans',
                href: 'https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/floor%20plans.pdf',
            },
        ],
        stats: [
            { label: 'Available', value: '1,000–15,000 SF' },
            { label: 'Rate', value: '$10.00/SF NNN' },
            { label: 'Location', value: "Windsor's Premier Corner" },
        ],
        highlights: [
            "Windsor's premier corner",
            'Ground-floor retail available',
            'Entire floor leasing with naming rights',
        ],
        sections: [
            {
                label: 'Building Overview',
                layout: 'duo',
                images: [
                    {
                        src: '../public/Ouellette_src_ouellette1.jpg',
                        caption: 'View from Ouellette Commercial Center — Windsor / Detroit',
                    },
                    {
                        src: '../public/Ouellette_src_ouellettemap.jpg',
                        caption: 'Location map — 33 University Ave',
                    },
                ],
                body: 'A professional four-storey building at Windsor\'s premier corner. Beautifully finished executive office spaces from 1,000 to 15,000 square feet, with ground-floor retail opportunity and parking provided. Tenants can lease entire floors with façade naming rights.',
            },
            {
                label: 'Interior Views',
                layout: 'grid',
                images: [
                    {
                        src: '../public/Ouellette_src_ouellette4.jpg',
                        caption: 'Office suite',
                    },
                    {
                        src: '../public/Ouellette_src_ouellette5.jpg',
                        caption: 'Interior workspace',
                    },
                    {
                        src: '../public/Ouellette_src_ouellette6.jpg',
                        caption: 'Building interior',
                    },
                ],
            },
        ],
    };
    removeSlug('ouellette-commercial-retail');
    removeSlug('ouellette-commercial-office');
    listings.push(mergedOu);
}

// ── 9) Harbourview / Foster: add HGS plans; keep Foster-only drawings ──
const harbour = find('harbourview-townhome-development');
if (harbour) {
    const docs = harbour.documents || [];
    const need = [
        { label: 'HGS Plan', href: '../public/docs/hgsplan.pdf' },
        { label: 'HGS Plan 2', href: '../public/docs/hgsplan2.pdf' },
    ];
    for (const d of need) {
        if (!docs.some((x) => x.href === d.href)) docs.push(d);
    }
    harbour.documents = docs;
    harbour.stats = (harbour.stats || []).map((s) =>
        s.label === 'Documents' ? { label: 'Documents', value: `${docs.length} Files` } : s
    );
    // Drop blank/empty sheet 5 if present — keep Foster sheets that identify 34 Foster
    if (harbour.sections) {
        for (const section of harbour.sections) {
            if (!section.images) continue;
            section.images = section.images.filter(
                (img) => !/Harbourview_Foster_p5/i.test(img.src || '')
            );
        }
    }
}

const out = `${prefix}window.PROPERTY_LISTINGS = ${JSON.stringify(listings, null, 4)};
${suffix}`;

fs.writeFileSync(filePath, out);
console.log('Updated listings:', listings.length);
console.log(listings.map((p) => `${p.slug} | ${p.title}`).join('\n'));
