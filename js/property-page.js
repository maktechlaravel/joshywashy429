function getPropertySlug() {
    return new URLSearchParams(window.location.search).get('slug') || window.location.hash.replace('#', '') || '3003-n-central';
}

function getAssetBase() {
    return window.location.pathname.includes('/pages/') ? '../' : '';
}

function resolveAssetUrl(path) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    return getAssetBase() + path.replace(/^\.\.\//, '');
}

function getPropertyPageHref(slug) {
    return window.location.pathname.includes('/pages/') ? `property.html?slug=${slug}` : `pages/property.html?slug=${slug}`;
}

// ── Grid renderer (realestate.html cards) ────────────────────────────────
function renderPropertyGrid(container, properties, filter = 'all') {
    const filtered = filter === 'all' ? properties : properties.filter(p => p.category === filter);

    if (!filtered.length) {
        container.innerHTML = `
            <div class="col-span-full rounded-2xl border border-amber-200 bg-amber-50 p-10 text-center shadow-lg">
                <div class="text-xs font-bold uppercase tracking-widest text-amber-600">No Listings Found</div>
                <h3 class="mt-3 text-3xl font-bold leading-tight text-stone-900">No property matches this category</h3>
                <p class="mx-auto mt-3 max-w-2xl text-base leading-7 text-stone-600">Try selecting a different filter to view available listings.</p>
            </div>`;
        if (window.observeReveal) window.observeReveal();
        return;
    }

    container.innerHTML = filtered.map(property => `
        <a class="reveal group flex flex-col overflow-hidden rounded-2xl shadow-md border border-stone-200 no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl" href="${getPropertyPageHref(property.slug)}">
            <div class="relative overflow-hidden" style="aspect-ratio:4/3;">
                <img class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110" src="${resolveAssetUrl(property.heroImage)}" alt="${property.title}" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
                <div class="absolute left-3 top-3 z-10 rounded bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">${property.category}</div>
                <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-sm leading-snug text-white/90 line-clamp-2">${property.summary}</p>
                </div>
            </div>
            <div class="flex flex-col gap-1 px-5 py-4 bg-white transition-colors duration-300 group-hover:bg-amber-50">
                <div class="text-[11px] font-bold uppercase tracking-widest text-amber-600">${property.location}</div>
                <div class="text-lg font-bold leading-snug text-stone-900 group-hover:text-amber-700 transition-colors duration-300">${property.title}</div>
                <div class="mt-2 flex items-center justify-between border-t border-stone-100 pt-2.5 text-xs font-semibold uppercase tracking-wider">
                    <span class="text-stone-400">${property.documents.length} Doc${property.documents.length !== 1 ? 's' : ''}</span>
                    <span class="flex items-center gap-1 text-amber-600">View
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
        : `<img src="${resolveAssetUrl(img.src)}" alt="${img.caption}" loading="lazy">`;

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
            <img src="${resolveAssetUrl(item.heroImage)}" alt="${item.title}" loading="lazy">
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
        const activeClasses = ['bg-amber-500', 'text-white', 'border-amber-500', 'font-bold'];
        const inactiveClasses = ['bg-amber-50', 'text-stone-900', 'border-amber-300', 'font-semibold'];

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', ...activeClasses);
                    btn.classList.add(...inactiveClasses);
                });
                button.classList.add('active');
                button.classList.remove(...inactiveClasses);
                button.classList.add(...activeClasses);
                renderPropertyGrid(gridContainer, properties, button.dataset.category);
            });
        });
    }

    const detailContainer = document.getElementById('property-detail');
    if (detailContainer) {
        renderPropertyDetail(detailContainer, property || properties[0], properties);
    }
});
