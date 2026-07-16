/**
 * Apply remaining client pending website updates (Jul 16).
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'property-data.js');
let src = fs.readFileSync(filePath, 'utf8');

const start = src.indexOf('window.PROPERTY_LISTINGS = [');
const end = src.indexOf('];', start) + 2;
const prefix = src.slice(0, start);
const suffix = src.slice(end);
const listings = eval(src.slice(start + 'window.PROPERTY_LISTINGS = '.length, end));

function find(slug) {
    return listings.find((p) => p.slug === slug);
}

function setDocCount(property) {
    const n = (property.documents || []).length;
    property.stats = (property.stats || []).map((s) =>
        s.label === 'Documents' ? { label: 'Documents', value: `${n} File${n === 1 ? '' : 's'}` } : s
    );
}

// ── 1) Wal-Mart Plaza: stock storefront hero; site plan stays in package ──
const walmart = find('walmart-plaza-amherstburg');
if (walmart) {
    walmart.heroImage = '../public/Walmart_Plaza_storefront.jpg';
    walmart.summary =
        'Wal-Mart Centre at 400 Sandwich Street, Amherstburg — anchored power centre with brochure map and LCBO / Walmart site plan documentation.';
    walmart.sections = [
        {
            label: 'Centre Overview',
            layout: 'duo',
            images: [
                {
                    src: '../public/Walmart_Plaza_storefront.jpg',
                    caption: 'Wal-Mart Centre — Amherstburg (storefront)',
                },
                {
                    src: '../public/Walmart_Plaza_siteplan.jpg',
                    caption: 'Overall site plan — Walmart / LCBO',
                },
            ],
            body: 'Power centre at 400 Sandwich Street in Amherstburg, anchored by Wal-Mart with supporting retail including LCBO. Centre brochure and architectural site plans are included in the document package.',
        },
        {
            label: 'Site Documentation',
            layout: 'full',
            images: [
                {
                    src: '../public/Walmart_Plaza_brochure_map.jpg',
                    caption: 'WM Centre Amherstburg — brochure site map (document package)',
                },
            ],
        },
    ];
}

// ── 2) Mikhail Plaza / Lauzon: John Max photo; remove Stacked restaurant image ──
const plaza = find('mikhail-plaza');
if (plaza) {
    plaza.summary =
        'Mikhail Plaza at 2601 Lauzon Road, Windsor — multi-building retail plaza with John Max and national tenants, plus Lauzon development and conceptual design packages.';
    plaza.heroImage = '../public/Jmax_Plaza_3.webp';
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
    plaza.highlights = [
        'Lauzon Road multi-building plaza',
        'John Max Sports & Wings anchor',
        'Development & design packages',
    ];
    setDocCount(plaza);
    plaza.sections = [
        {
            label: 'Plaza Photography',
            layout: 'duo',
            images: [
                {
                    src: '../public/Jmax_Plaza_3.webp',
                    caption: 'John Max Sports & Wings — Mikhail Plaza, 2601 Lauzon Road',
                },
                {
                    src: '../public/Jmax_Plaza_1.jpg',
                    caption: 'Plaza tenant storefront — Mikhail Plaza',
                },
            ],
            body: 'A multi-building retail plaza along Windsor\'s busy Lauzon Road corridor. Current tenant photography and development design packages are available for qualified parties.',
        },
        {
            label: 'Development Plans',
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
        },
        {
            label: 'Lauzon Building Package',
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

// ── 3) Mikhail Centre / Walker–Provincial: correct imagery; no Sobeys claim ──
const centre = find('mikhail-centre');
if (centre) {
    centre.title = 'Mikhail Centre';
    centre.location = '4450 Walker Road, Windsor, Ontario';
    centre.summary =
        'A major retail destination at 4450 Walker Road / Provincial Road — formerly RioCan Centre — anchored by national tenants with brochures, site plans, and Provincial Landmark pad documentation.';
    // Keep existing docs but ensure Sobeys is not implied in labels
    centre.documents = (centre.documents || []).filter(
        (d) => !/sobeys?/i.test(d.label)
    );
    const hasProvincial = (centre.documents || []).some((d) =>
        /provincial/i.test(d.href + d.label)
    );
    if (!hasProvincial) {
        centre.documents.push({
            label: 'Provincial Landmark Plan',
            href: '../public/docs/provincial-landmark.pdf',
        });
    }
    setDocCount(centre);
    centre.highlights = [
        'Walker & Provincial corridor',
        'Anchored retail centre',
        'Full document package',
    ];
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
                    caption: 'Walker Road retail corridor',
                },
            ],
            body: 'A major retail destination anchored by national tenants along Windsor\'s Walker Road corridor, including Staples, Cineplex, Giant Tiger, Dollarama, and a strong supporting mix. Supported by comprehensive site plans and brochures.',
        },
        {
            label: 'Walker / Provincial Context',
            layout: 'duo',
            images: [
                {
                    src: '../public/Provincial_Landmark_map.jpg',
                    caption: 'Provincial Landmark — Walker Road & Provincial Road',
                },
                {
                    src: '../public/Walker_Towne_Site_Plan_preview.jpg',
                    caption: 'Walker Towne Centre site plan preview',
                },
            ],
            body: 'Site context at the Walker Road and Provincial Road intersection, including Provincial Landmark pad planning. Concept drawings for other plazas (including Lauzon) are not used here.',
        },
    ];
}

// ── 4) CIBC Building: current tower photography; drop generic river/skyline fillers ──
const cibc = find('cibc-building');
if (cibc) {
    cibc.heroImage = '../public/CIBC_Building_current.jpg';
    cibc.summary =
        'Landmark 14-storey Class "A" tower at 100 Ouellette Avenue in Windsor\'s city centre — lobby-level retail and premium office suites with river views, new Kone elevators, and JCI automation.';
    cibc.sections = [
        {
            label: 'Building Overview',
            layout: 'duo',
            images: [
                {
                    src: '../public/CIBC_Building_current.jpg',
                    caption: 'The CIBC Building — 100 Ouellette Avenue, Windsor',
                },
                {
                    src: '../public/CIBC_Building_main.jpg',
                    caption: 'Tower exterior from riverfront park',
                },
            ],
            body: 'Located at Ouellette Avenue and Riverside Drive overlooking Riverfront Park and the Detroit River. A 14-storey Class "A" building with lobby-level retail, mezzanine, and premium office floors.',
        },
        {
            label: 'Location',
            layout: 'full',
            images: [
                {
                    src: '../public/CIBC_100_Ouellette.jpg',
                    caption: 'Location map — 100 Ouellette Avenue',
                },
            ],
        },
    ];
}

// ── 5) Ouellette / University: drop Starbucks exteriors; prefer current-safe assets ──
const ouellette = find('ouellette-commercial-center');
if (ouellette) {
    ouellette.title = 'Ouellette Commercial Center';
    ouellette.location = '33 University Ave, Windsor, Ontario';
    ouellette.summary =
        'A four-storey professional building at Windsor\'s premier corner offering ground-floor retail and executive office suites from 1,000–15,000 sq ft at $10 NNN. Photography reflects available suite and location views (Starbucks is no longer a tenant).';
    // Use river/city view as lead amenity shot rather than Starbucks façade
    ouellette.heroImage = '../public/Ouellette_src_ouellette1.jpg';
    ouellette.highlights = [
        "Windsor's premier corner",
        'Ground-floor retail available',
        'Entire floor leasing with naming rights',
    ];
    ouellette.sections = [
        {
            label: 'Building Overview',
            layout: 'duo',
            images: [
                {
                    src: '../public/Ouellette_src_ouellette1.jpg',
                    caption: 'Views from Ouellette Commercial Center — Windsor / Detroit',
                },
                {
                    src: '../public/Ouellette_src_ouellettemap.jpg',
                    caption: 'Location map — 33 University Ave',
                },
            ],
            body: 'A professional four-storey building at Windsor\'s premier corner. Beautifully finished executive office spaces from 1,000 to 15,000 square feet, with ground-floor retail opportunity and parking provided. Tenants can lease entire floors with façade naming rights. Former Starbucks signage has been removed from marketing photography.',
        },
        {
            label: 'Interior Suites',
            layout: 'duo',
            images: [
                {
                    src: '../public/Ouellette_src_ouellette5.jpg',
                    caption: 'Office suite interior',
                },
                {
                    src: '../public/Ouellette_src_ouellette6.jpg',
                    caption: 'Flexible interior workspace',
                },
            ],
        },
    ];
}

// ── 6) Harbourview / Foster: keep HGS plans; ensure no Huron Church assets ──
const harbour = find('harbourview-townhome-development');
if (harbour) {
    for (const section of harbour.sections || []) {
        if (!section.images) continue;
        section.images = section.images.filter(
            (img) =>
                !/Huron|huron.?church|Radius.?Center|Radius_Center/i.test(
                    `${img.src || ''} ${img.caption || ''}`
                )
        );
    }
    const docs = harbour.documents || [];
    for (const d of [
        { label: 'HGS Plan', href: '../public/docs/hgsplan.pdf' },
        { label: 'HGS Plan 2', href: '../public/docs/hgsplan2.pdf' },
    ]) {
        if (!docs.some((x) => x.href === d.href)) docs.push(d);
    }
    harbour.documents = docs;
    setDocCount(harbour);
}

// ── 7) Enterprise Way: confirm Sobeys plan is not attached ──
const enterprise = find('enterprise-way-townhomes');
if (enterprise) {
    enterprise.documents = (enterprise.documents || []).filter(
        (d) => !/SP1_1_Architectural|Sobeys|83.?Sandwich/i.test(d.href + d.label)
    );
    setDocCount(enterprise);
}

// ── 8) Sobeys Plaza: keep storefront hero (already correct) ──
const sobeys = find('sobeys-plaza-amherstburg');
if (sobeys) {
    sobeys.heroImage = '../public/Sobeys_Plaza_hero.jpg';
}

const out = `${prefix}window.PROPERTY_LISTINGS = ${JSON.stringify(listings, null, 4)};
${suffix}`;
fs.writeFileSync(filePath, out);
console.log('Updated listings:', listings.length);
console.log(
    listings
        .map((p) => `${p.slug} | hero=${path.basename(p.heroImage || '')}`)
        .join('\n')
);
