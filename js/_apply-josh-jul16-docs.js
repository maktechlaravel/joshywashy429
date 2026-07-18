/**
 * Josh Jul 16 doc cleanup + Walmart updated 2026 site plan
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

function setDocs(property) {
    const n = (property.documents || []).length;
    property.stats = (property.stats || []).map((s) => {
        if (s.label !== 'Documents') return s;
        return {
            label: 'Documents',
            value: n === 0 ? '—' : `${n} File${n === 1 ? '' : 's'}`,
        };
    });
}

// 1) 3003 — remove Offering Memorandum brochure PDF
const central = find('3003-n-central');
if (central) {
    central.documents = (central.documents || []).filter(
        (d) => !/offering|memorandum/i.test(`${d.label} ${d.href}`)
    );
    setDocs(central);
}

// 2) Radius Plaza — remove ALL PDF links
const radius = find('radius-center');
if (radius) {
    radius.documents = [];
    radius.summary =
        "A commercial site along Windsor's Howard Avenue corridor with aerial planning and site coverage views.";
    radius.highlights = [
        'Howard Avenue frontage',
        'Aerial site overview',
        'Commercial site package',
    ];
    setDocs(radius);
}

// 3) Sobeys — remove Concept Site Plan PDF
const sobeys = find('sobeys-plaza-amherstburg');
if (sobeys) {
    sobeys.documents = (sobeys.documents || []).filter(
        (d) => !/concept.?site.?plan|83-sandwich-concept/i.test(`${d.label} ${d.href}`)
    );
    sobeys.summary =
        'Sobeys-anchored retail plaza at 83 Sandwich Street, Amherstburg — architectural site plans and full building addition set.';
    setDocs(sobeys);
}

// 4) Walmart — use updated 2026 WM Centre site plan
const walmart = find('walmart-plaza-amherstburg');
if (walmart) {
    walmart.summary =
        'Wal-Mart Centre at 400 Sandwich Street, Amherstburg — updated 2026 site plan package with LCBO / Walmart documentation.';
    walmart.documents = [
        {
            label: 'WM Centre Amherstburg — Updated Site Plan (2026)',
            href: '../public/docs/walmart-centre-amherstburg-updated-2026.pdf',
        },
        {
            label: 'LCBO / Walmart Site Plan',
            href: '../public/docs/walmart-lcbo-site-plan.pdf',
        },
    ];
    walmart.highlights = [
        'Wal-Mart Centre Amherstburg',
        'Updated 2026 site plan',
        '400 Sandwich Street',
    ];
    setDocs(walmart);
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
                    src: '../public/Walmart_Plaza_updated_2026.jpg',
                    caption: 'Updated site plan — WM Centre Amherstburg (2026)',
                },
            ],
            body: 'Power centre at 400 Sandwich Street in Amherstburg, anchored by Wal-Mart with supporting retail including LCBO. The updated 2026 centre site plan is included in the document package.',
        },
        {
            label: 'Updated Site Plan',
            layout: 'full',
            images: [
                {
                    src: '../public/Walmart_Plaza_updated_2026.jpg',
                    caption: 'See updated site plan for Walmart in Amherstburg',
                },
            ],
        },
    ];
}

const out = `${prefix}window.PROPERTY_LISTINGS = ${JSON.stringify(listings, null, 4)};
${suffix}`;
fs.writeFileSync(filePath, out);

console.log('3003:', find('3003-n-central').documents.map((d) => d.label));
console.log('radius docs:', find('radius-center').documents.length);
console.log('sobeys:', find('sobeys-plaza-amherstburg').documents.map((d) => d.label));
console.log('walmart:', find('walmart-plaza-amherstburg').documents.map((d) => d.label));
