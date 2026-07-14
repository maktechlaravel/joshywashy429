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

// ── 1) CIBC retail — local hero (actual building photo) ──
const cibcRetail = find('cibc-building-retail');
if (cibcRetail) {
    cibcRetail.heroImage = '../public/CIBC_Building_main.jpg';
    cibcRetail.summary =
        'A landmark 14-storey Class "A" tower in Windsor\'s city centre with 10,500 sq ft of lobby-level retail and 2,416 sq ft mezzanine, overlooking the Detroit River and Riverfront Park.';
    if (cibcRetail.sections?.[0]?.images?.[0]) {
        cibcRetail.sections[0].images[0].src = '../public/CIBC_Building_main.jpg';
    }
}

// ── 2) CIBC office — local hero ──
const cibcOffice = find('cibc-building-office');
if (cibcOffice) {
    cibcOffice.heroImage = '../public/CIBC_Building_1.jpg';
    cibcOffice.summary =
        'Premium Class "A" office space in Windsor\'s iconic 14-storey CIBC Building — featuring new Kone elevators, JCI automation, panoramic windows, and Detroit River views.';
    if (cibcOffice.sections?.[0]?.images?.[0]) {
        cibcOffice.sections[0].images[0].src = '../public/CIBC_Building_1.jpg';
    }
}

// ── 3) Ouellette retail + office — local actual building photos ──
for (const slug of ['ouellette-commercial-retail', 'ouellette-commercial-office']) {
    const p = find(slug);
    if (!p) continue;
    p.heroImage = '../public/Ouellette_Commercial_main.jpg';
    if (p.sections?.[0]?.images?.[0]) {
        p.sections[0].images[0].src = '../public/Ouellette_Commercial_main.jpg';
    }
}

// ── 5) 34 Foster → Harbourview Townhome development ──
const foster = find('34-foster-avenue');
if (foster) {
    foster.slug = 'harbourview-townhome-development';
    foster.title = 'Harbourview Townhome Development';
    foster.location = '34 Foster Avenue, Leamington, Ontario';
    foster.category = 'Residential / Townhomes';
    foster.summary =
        'Harbourview Townhome Development at 34 Foster Avenue, Leamington — waterfront townhome living between the Marina and Dock, with full architectural plans and site documentation.';
    foster.heroImage = '../public/Harbourview_Foster_building.jpg';
    foster.documents = [
        {
            label: '34 Foster St — Site Map',
            href: '../public/docs/34-Foster-St.pdf',
        },
        {
            label: '34 Foster ST — Architectural Plans (Leslie)',
            href: '../public/docs/34-Foster-ST-leslie.pdf',
        },
    ];
    foster.stats = [
        { label: 'Bedrooms', value: '2–3 Bedrooms' },
        { label: 'Setting', value: 'Waterfront' },
        { label: 'Documents', value: '2 Files' },
    ];
    foster.highlights = [
        'Harbourview Townhome Development',
        'Waterfront Foster Avenue site',
        'Full architectural plan set',
    ];
    foster.sections = [
        {
            label: 'Development Overview',
            layout: 'duo',
            images: [
                {
                    src: '../public/Harbourview_Foster_building.jpg',
                    caption: 'Harbourview Townhome Development — Building Exterior',
                },
                {
                    src: '../public/Harbourview_Foster_site.jpg',
                    caption: '34 Foster St — Site Context Map',
                },
            ],
            body: 'Harbourview Townhome Development at 34 Foster Avenue in Leamington, nestled between the Leamington Marina and the Leamington Dock with lake views. Supported by complete architectural drawings and site documentation.',
        },
        {
            label: 'Architectural Plans',
            layout: 'grid',
            images: [
                {
                    src: '../public/Harbourview_Foster_p1.jpg',
                    caption: 'Floor Plans & Site Plan — Sheet A1',
                },
                {
                    src: '../public/Harbourview_Foster_p2.jpg',
                    caption: 'Architectural Drawing — Sheet 2',
                },
                {
                    src: '../public/Harbourview_Foster_p3.jpg',
                    caption: 'Architectural Drawing — Sheet 3',
                },
                {
                    src: '../public/Harbourview_Foster_p4.jpg',
                    caption: 'Architectural Drawing — Sheet 4',
                },
                {
                    src: '../public/Harbourview_Foster_p5.jpg',
                    caption: 'Architectural Drawing — Sheet 5',
                },
            ],
        },
    ];
}

// ── 6) Mikhail Plaza — add missing building / development docs ──
const plaza = find('mikhail-plaza');
if (plaza) {
    plaza.summary =
        'Mikhail Plaza at 2601 Lauzon Road, Windsor — multi-building retail plaza with offering memorandum, Lauzon development plans, and June plaza design package.';
    plaza.documents = [
        {
            label: 'Offering Memorandum',
            href: '../public/J_Max_Plaza_2601_Lauzon_OM_2025.pdf',
        },
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
        { label: 'Documents', value: '3 Files' },
    ];
    plaza.highlights = [
        'Lauzon Road multi-building plaza',
        'Development & design packages',
        'Offering memorandum available',
    ];
    plaza.sections = [
        {
            label: 'Property Views',
            layout: 'grid',
            images: [
                {
                    src: '../public/Jmax_Plaza_1.jpg',
                    caption: 'Mikhail Plaza — 2601 Lauzon Road, Windsor',
                },
                {
                    src: '../public/Jmax_Plaza_2.jpg',
                    caption: 'Plaza Exterior View',
                },
                {
                    src: '../public/Jmax_Plaza_3.webp',
                    caption: 'Plaza Overview',
                },
            ],
            body: 'A multi-building retail plaza along Windsor\'s busy Lauzon Road corridor. Full offering memorandum and development design packages available for qualified parties.',
        },
        {
            label: 'Development & Building Plans',
            layout: 'duo',
            images: [
                {
                    src: '../public/Mikhail_Plaza_june_design.jpg',
                    caption: 'June Plaza Design — Conceptual Site Plan (multi-building)',
                },
                {
                    src: '../public/Mikhail_Plaza_lauzon_dev.jpg',
                    caption: 'Lauzon Development — Building Package',
                },
            ],
            body: 'Additional building and site development documentation covering the broader plaza layout and Lauzon corridor expansion plans.',
        },
    ];
}

// ── 7) Black Canyon Tower — new Phoenix listing ──
const existingBct = find('black-canyon-tower');
if (!existingBct) {
    listings.unshift({
        slug: 'black-canyon-tower',
        title: 'Black Canyon Tower',
        location: '10851 N Black Canyon Hwy, Phoenix, AZ 85029',
        category: 'Commercial / Office',
        summary:
            'Eight-story Class A office tower on Phoenix\'s I-17 corridor — availabilities from ~866 SF with on-site amenities, brochure package, and LoopNet listing.',
        heroImage: '../public/Black_Canyon_Tower_hero.jpg',
        documents: [
            {
                label: 'Black Canyon Tower Brochure',
                href: '../public/docs/BlackCanyonTower_Brochure.pdf',
            },
            {
                label: 'LoopNet Listing',
                href: 'https://www.loopnet.com/Listing/10851-N-Black-Canyon-Hwy-Phoenix-AZ/6711645/',
                type: 'Link',
                displayUrl:
                    'https://www.loopnet.com/Listing/10851-N-Black-Canyon-Hwy-Phoenix-AZ/6711645/',
            },
        ],
        stats: [
            { label: 'Market', value: 'Phoenix' },
            { label: 'Building', value: '8-Story Class A' },
            { label: 'Documents', value: '2 Files' },
        ],
        highlights: [
            'I-17 / Black Canyon Freeway corridor',
            'Class A office tower',
            'Brochure + LoopNet listing',
        ],
        sections: [
            {
                label: 'Property Overview',
                layout: 'duo',
                images: [
                    {
                        src: '../public/Black_Canyon_Tower_hero.jpg',
                        caption: 'Black Canyon Tower — 10851 N. Black Canyon Freeway, Phoenix',
                    },
                    {
                        src: '../public/Black_Canyon_Tower_p2.jpg',
                        caption: 'Building Overview & Floorplate Highlights',
                    },
                ],
                body: 'Black Canyon Tower is an eight-story Class A office building at 10851 N Black Canyon Highway in Phoenix, Arizona. Located in the heart of the I-17 corridor with on-site amenities and flexible suite availabilities.',
            },
            {
                label: 'Marketing Package',
                layout: 'full',
                images: [
                    {
                        src: '../public/Black_Canyon_Tower_p3.jpg',
                        caption: 'Black Canyon Tower — Marketing Brochure',
                    },
                ],
            },
        ],
    });
}

const serialized = JSON.stringify(listings, null, 4)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'")
    .replace(/\\'/g, "\\'");

// JSON.stringify with single quotes is messy for apostrophes in text.
// Use a safer approach: write with JSON and a small runtime wrapper.
const out = `${prefix}window.PROPERTY_LISTINGS = ${JSON.stringify(listings, null, 4)};
${suffix}`;

fs.writeFileSync(filePath, out);
console.log('Updated listings:', listings.length);
console.log(listings.map((p) => p.slug).join('\n'));
