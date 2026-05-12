function getPropertySlug() {
    return new URLSearchParams(window.location.search).get('slug') || window.location.hash.replace('#', '') || '3003-n-central';
}

function getAssetBase() {
    return window.location.pathname.includes('/pages/') ? '../' : '';
}

function resolveAssetUrl(path) {
    if (typeof path !== 'string' || path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    const raw = getAssetBase() + path.replace(/^\.\.\//, '');
    // Drop empty segments so "../public/x" does not become "/../public/x" (breaks subfolder / GitHub Pages hosts)
    const encodedPath = raw
        .split('/')
        .filter((segment) => segment.length > 0)
        .map((segment) => {
            if (segment === '.' || segment === '..') {
                return segment;
            }
            return encodeURIComponent(segment);
        })
        .join('/');

    try {
        const base = typeof document !== 'undefined' ? document.baseURI || window.location.href : window.location.href;
        return new URL(encodedPath, base).href;
    } catch {
        return encodedPath;
    }
}

/** Shipped stock photo in /public when hero or gallery assets are missing or remote load fails */
function listingImageFallbackSrc() {
    return resolveAssetUrl('../public/realstate2-1.jpg');
}

function imgOnErrorFallback() {
    const fallback = listingImageFallbackSrc();
    return ` onerror='this.onerror=null;this.src=${JSON.stringify(fallback)};'`;
}

function getPropertyPageHref(slug) {
    return window.location.pathname.includes('/pages/') ? `property.html?slug=${slug}` : `pages/property.html?slug=${slug}`;
}

// ── Grid renderer (realestate.html cards) ────────────────────────────────
function renderPropertyGrid(container, properties, filter = 'all') {
    const filtered = filter === 'all' ? properties : properties.filter(p => p.category === filter);

    if (!filtered.length) {
        container.innerHTML = `
            <div class="portfolio-empty reveal">
                <div class="portfolio-empty-kicker">No Listings Found</div>
                <h3>No property matches this category</h3>
                <p>Try selecting a different filter to view available listings.</p>
            </div>`;
        if (window.observeReveal) window.observeReveal();
        return;
    }

    container.innerHTML = filtered.map(property => `
        <a class="listing-card reveal" href="${getPropertyPageHref(property.slug)}">
            <div class="listing-media">
                <span class="listing-badge">${property.category}</span>
                <img src="${resolveAssetUrl(property.heroImage)}" alt="${property.title}" loading="lazy"${imgOnErrorFallback()}>
            </div>
            <div class="listing-body">
                <div class="listing-location">${property.location}</div>
                <div class="listing-title">${property.title}</div>
                <p class="listing-desc">${property.summary}</p>
                <div class="listing-foot">
                    <span>${property.documents.length} Doc${property.documents.length !== 1 ? 's' : ''}</span>
                    <span>View
                        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                </div>
            </div>
        </a>
    `).join('');

    if (window.observeReveal) window.observeReveal();
}

// ── Sections renderer helpers ─────────────────────────────────────────────
function renderFigure(img) {
    const isVideo = img.mediaType === 'video' || /\.mp4($|\?)/i.test(img.src);
    const mediaHtml = isVideo
        ? `<video controls preload="metadata" playsinline>
            <source src="${resolveAssetUrl(img.src)}" type="video/mp4">
            Your browser does not support the video tag.
        </video>`
        : `<img src="${resolveAssetUrl(img.src)}" alt="${img.caption}" loading="lazy"${imgOnErrorFallback()}>`;

    return `<figure class="prop-figure">
        ${mediaHtml}
        <figcaption>${img.caption}</figcaption>
    </figure>`;
}

function renderTextBlock(section) {
    let html = '<div class="prop-text-block">';
    if (section.body) {
        const paragraphs = section.body.split('\n\n').map(p => `<p class="prop-body">${p.trim()}</p>`).join('');
        html += paragraphs;
    }
    if (section.bullets && section.bullets.length) {
        section.bullets.forEach(group => {
            html += `<div class="prop-bullets">
                <div class="prop-bullets-label">${group.label}</div>
                <ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>`;
        });
    }
    if (section.stats && section.stats.length) {
        html += `<div class="prop-section-stats">
            ${section.stats.map(s => `
                <div class="prop-section-stat">
                    <span>${s.label}</span>
                    <strong>${s.value}</strong>
                </div>`).join('')}
        </div>`;
    }
    html += '</div>';
    return html;
}

function renderSection(section) {
    const header = `<div class="prop-section-header">
        <div class="section-label">${section.label}</div>
    </div>`;

    const imgs = section.images || [];
    let body = '';

    switch (section.layout) {
        case 'full':
            body = `<div class="prop-layout-full">
                ${imgs[0] ? renderFigure(imgs[0]) : ''}
            </div>
            ${(section.body || section.bullets || section.stats) ? `<div class="prop-layout-below">${renderTextBlock(section)}</div>` : ''}`;
            break;

        case 'duo':
            body = `<div class="prop-layout-duo">
                ${imgs.map(img => renderFigure(img)).join('')}
            </div>
            ${(section.body || section.bullets || section.stats) ? `<div class="prop-layout-below">${renderTextBlock(section)}</div>` : ''}`;
            break;

        case 'grid':
            body = `<div class="prop-layout-grid">
                ${imgs.map(img => renderFigure(img)).join('')}
            </div>
            ${(section.body || section.bullets || section.stats) ? `<div class="prop-layout-below">${renderTextBlock(section)}</div>` : ''}`;
            break;

        case 'image-left':
            body = `<div class="prop-layout-split">
                <div class="prop-split-image">${imgs[0] ? renderFigure(imgs[0]) : ''}</div>
                <div class="prop-split-text">${renderTextBlock(section)}</div>
            </div>`;
            break;

        case 'image-right':
            body = `<div class="prop-layout-split prop-layout-split--reverse">
                <div class="prop-split-image">${imgs[0] ? renderFigure(imgs[0]) : ''}</div>
                <div class="prop-split-text">${renderTextBlock(section)}</div>
            </div>`;
            break;

        case 'callout':
            body = `<div class="prop-callout">
                <div class="prop-callout-text">${section.callout || ''}</div>
            </div>`;
            break;

        default:
            body = imgs.length
                ? `<div class="prop-layout-grid">${imgs.map(img => renderFigure(img)).join('')}</div>`
                : renderTextBlock(section);
    }

    return `<div class="prop-section reveal">${header}${body}</div>`;
}

// ── Related properties strip ──────────────────────────────────────────────
function renderRelated(container, property, properties) {
    const same = properties.filter(p => p.slug !== property.slug && p.category === property.category);
    const others = properties.filter(p => p.slug !== property.slug && p.category !== property.category);
    const related = [...same, ...others].slice(0, 3);

    container.innerHTML = related.map(item => `
        <a class="related-card reveal" href="${getPropertyPageHref(item.slug)}">
            <img src="${resolveAssetUrl(item.heroImage)}" alt="${item.title}" loading="lazy"${imgOnErrorFallback()}>
            <div class="related-card-body">
                <span class="related-kicker">${item.location}</span>
                <strong>${item.title}</strong>
                <p>${item.summary}</p>
                <div class="related-footer">
                    <span class="prop-tag" style="border:none;padding:0;">${item.category}</span>
                    <span>View &rarr;</span>
                </div>
            </div>
        </a>`).join('');
}

// ── Main detail renderer ──────────────────────────────────────────────────
function renderPropertyDetail(container, property, properties) {
    document.title = `${property.title} — Mikhail Holdings Ltd`;

    const heroStats = property.stats.slice(0, 3).map(item => `
        <div class="property-hero-stat">
            <div class="stat-num">${item.value}</div>
            <div class="stat-label">${item.label}</div>
        </div>`).join('');

    const docsHtml = property.documents.length
        ? `<div class="prop-docs-bar reveal">
                <div class="section-label">PDF Documents</div>
                <div class="doc-list">
                    ${property.documents.map(doc => `
                        <a class="doc-item" href="${resolveAssetUrl(doc.href)}" target="_blank" rel="noopener">
                            <span>
                                <strong>${doc.label}</strong>
                                <small>${doc.displayUrl || (doc.href.startsWith('http://') || doc.href.startsWith('https://') ? doc.href : doc.href.split('/').pop())}</small>
                            </span>
                            <span>${doc.type || (doc.href.startsWith('http://') || doc.href.startsWith('https://') ? 'Link' : 'PDF')}</span>
                        </a>`).join('')}
                </div>
           </div>`
        : `<div class="prop-contact-bar reveal">
                <div class="section-label" style="justify-content:center;">Inquire</div>
                <h3>Interested in This Property?</h3>
                <p>Contact us directly for floor plans, availability, pricing, and additional details.</p>
                <a href="mailto:info@mikhailholdings.com" class="btn-primary">
                    <span>Contact Us</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
           </div>`;

    const sectionsHtml = (property.sections && property.sections.length)
        ? `<div class="prop-sections">${property.sections.map(renderSection).join('')}</div>`
        : '';

    container.innerHTML = `
        <section class="property-hero reveal">
            <div class="property-hero-copy">
                <div class="section-label">Property View</div>
                <h1 class="section-title">${property.title}</h1>
                <p class="section-sub" style="max-width:760px;margin:18px 0 0;">${property.summary}</p>
                <div class="property-hero-meta">
                    <span class="prop-tag">${property.category}</span>
                    <span class="prop-tag">${property.location}</span>
                </div>
            </div>
            <div class="property-hero-side">${heroStats}</div>
        </section>

        ${sectionsHtml}

        ${docsHtml}

        <section class="section related-section">
            <div class="reveal">
                <div class="section-label">More Listings</div>
                <h2 class="section-title">Other <span class="accent">Properties</span></h2>
                <p class="section-sub">Browse more available listings across our commercial, industrial and residential portfolio.</p>
            </div>
            <div class="related-grid reveal" id="property-related"></div>
        </section>
    `;

    renderRelated(container.querySelector('#property-related'), property, properties);

    if (window.observeReveal) window.observeReveal();
}

// ── Boot ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const properties = window.PROPERTY_LISTINGS || [];
    const slug = getPropertySlug();
    const property = window.PROPERTY_LISTINGS_BY_SLUG ? window.PROPERTY_LISTINGS_BY_SLUG[slug] : null;

    const gridContainer = document.getElementById('property-grid-home') || document.getElementById('property-grid');
    if (gridContainer) {
        renderPropertyGrid(gridContainer, properties);

        const filterButtons = document.querySelectorAll('button[data-category]');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderPropertyGrid(gridContainer, properties, button.dataset.category);
            });
        });
    }

    const detailContainer = document.getElementById('property-detail');
    if (detailContainer) {
        renderPropertyDetail(detailContainer, property || properties[0], properties);
    }
});
