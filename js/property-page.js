function getPropertySlug() {
    return new URLSearchParams(window.location.search).get('slug') || window.location.hash.replace('#', '') || '3003-n-central';
}

function getAssetBase() {
    return window.location.pathname.includes('/pages/') ? '../' : '';
}

function resolveAssetUrl(path) {
    return getAssetBase() + path.replace(/^\.\.\//, '');
}

function getPropertyPageHref(slug) {
    return window.location.pathname.includes('/pages/') ? `property.html?slug=${slug}` : `pages/property.html?slug=${slug}`;
}

function renderPropertyGrid(container, properties, filter = 'all') {
    let filteredProperties = properties;

    if (filter !== 'all') {
        filteredProperties = properties.filter(property => property.category === filter);
    }

    if (!filteredProperties.length) {
        container.innerHTML = `
            <div class="col-span-full rounded-2xl border border-amber-200 bg-amber-50 p-10 text-center shadow-lg">
                <div class="text-xs font-bold uppercase tracking-widest text-amber-600">No Listings Found</div>
                <h3 class="mt-3 text-3xl font-bold leading-tight text-stone-900">No property matches this category</h3>
                <p class="mx-auto mt-3 max-w-2xl text-base leading-7 text-stone-600">Try selecting a different filter to view available commercial, industrial, retail, or residential listings.</p>
            </div>
        `;

        if (window.observeReveal) {
            window.observeReveal();
        }

        return;
    }

    container.innerHTML = filteredProperties.map(property => `
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

    if (window.observeReveal) {
        window.observeReveal();
    }
}

function renderPropertyDetail(container, property, properties) {
    const galleryId = 'property-gallery-main';
    const thumbsId = 'property-gallery-thumbs';
    const detailId = 'property-detail-panel';
    const docsId = 'property-documents';
    const relatedId = 'property-related';

    container.innerHTML = `
        <section class="property-hero reveal">
            <div class="property-hero-copy">
                <div class="section-label">Property View</div>
                <h1 class="section-title">${property.title}</h1>
                <p class="section-sub" style="max-width: 760px; margin: 18px 0 0;">${property.summary}</p>
                <div class="property-hero-meta">
                    <span class="prop-tag">${property.category}</span>
                    <span class="prop-tag">${property.location}</span>
                </div>
            </div>
            <div class="property-hero-side">
                <div class="property-hero-stat">
                    <div class="stat-num">${property.gallery.length}</div>
                    <div class="stat-label">Gallery Images</div>
                </div>
                <div class="property-hero-stat">
                    <div class="stat-num">${property.documents.length}</div>
                    <div class="stat-label">PDF Documents</div>
                </div>
            </div>
        </section>

        <section class="property-shell">
            <div class="property-gallery reveal">
                <div class="gallery-main">
                    <button class="gallery-arrow gallery-prev" type="button" aria-label="Previous image">‹</button>
                    <img id="${galleryId}" src="${resolveAssetUrl(property.gallery[0])}" alt="${property.title}">
                    <button class="gallery-arrow gallery-next" type="button" aria-label="Next image">›</button>
                </div>
                <div class="gallery-thumbs" id="${thumbsId}"></div>
            </div>

            <aside class="property-sidebar">
                <div class="property-panel reveal" id="${detailId}">
                    <div class="section-label">Property Details</div>
                    <h2 class="section-title" style="font-size: 2rem;">Overview</h2>
                    <p class="property-copy">${property.summary}</p>
                    <div class="property-facts">
                        ${property.stats.map(item => `
                            <div class="property-fact">
                                <span>${item.label}</span>
                                <strong>${item.value}</strong>
                            </div>
                        `).join('')}
                    </div>
                    <ul class="property-highlights">
                        ${property.highlights.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="property-panel reveal" id="${docsId}">
                    <div class="section-label">PDF Files</div>
                    <h2 class="section-title" style="font-size: 1.8rem;">Documents</h2>
                    <div class="doc-list"></div>
                </div>
            </aside>
        </section>

        <section class="section related-section">
            <div class="reveal">
                <div class="section-label">More Listings</div>
                <h2 class="section-title">Other <span class="accent">Properties</span></h2>
                <p class="section-sub">Explore other available listings with the same document-driven format.</p>
            </div>
            <div class="related-grid reveal" id="${relatedId}"></div>
        </section>
    `;

    const thumbs = container.querySelector(`#${thumbsId}`);
    const mainImage = container.querySelector(`#${galleryId}`);
    const prevButton = container.querySelector('.gallery-prev');
    const nextButton = container.querySelector('.gallery-next');
    const docsList = container.querySelector(`#${docsId} .doc-list`);
    const relatedGrid = container.querySelector(`#${relatedId}`);

    let activeIndex = 0;

    function setActiveImage(index) {
        const total = property.gallery.length;
        activeIndex = (index + total) % total;
        mainImage.src = resolveAssetUrl(property.gallery[activeIndex]);
        mainImage.alt = `${property.title} image ${activeIndex + 1}`;

        thumbs.querySelectorAll('.gallery-thumb').forEach((thumb, thumbIndex) => {
            thumb.classList.toggle('active', thumbIndex === activeIndex);
        });
    }

    thumbs.innerHTML = property.gallery.map((src, index) => `
        <button type="button" class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${resolveAssetUrl(src)}" alt="${property.title} thumbnail ${index + 1}">
        </button>
    `).join('');

    thumbs.addEventListener('click', event => {
        const thumb = event.target.closest('.gallery-thumb');
        if (!thumb) {
            return;
        }

        setActiveImage(Number(thumb.dataset.index));
    });

    prevButton.addEventListener('click', () => setActiveImage(activeIndex - 1));
    nextButton.addEventListener('click', () => setActiveImage(activeIndex + 1));

    docsList.innerHTML = property.documents.map(document => `
        <a class="doc-item" href="${resolveAssetUrl(document.href)}" target="_blank" rel="noopener">
            <span>
                <strong>${document.label}</strong>
                <small>${document.href.split('/').pop()}</small>
            </span>
            <span>PDF</span>
        </a>
    `).join('');

    const relatedProperties = properties.filter(item => item.slug !== property.slug).slice(0, 3);
    relatedGrid.innerHTML = relatedProperties.map(item => `
        <a class="related-card reveal" href="${getPropertyPageHref(item.slug)}">
            <img src="${resolveAssetUrl(item.heroImage)}" alt="${item.title}">
            <div class="related-card-body">
                <span class="related-kicker">${item.location}</span>
                <strong>${item.title}</strong>
                <p>${item.summary}</p>
                <div class="related-footer">
                    <span>${item.documents.length} documents</span>
                    <span>Open</span>
                </div>
            </div>
        </a>
    `).join('');

    setActiveImage(0);

    if (window.observeReveal) {
        window.observeReveal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const properties = window.PROPERTY_LISTINGS || [];
    const slug = getPropertySlug();
    const property = window.PROPERTY_LISTINGS_BY_SLUG ? window.PROPERTY_LISTINGS_BY_SLUG[slug] : null;

    const gridContainer = document.getElementById('property-grid-home') || document.getElementById('property-grid');
    if (gridContainer) {
        renderPropertyGrid(gridContainer, properties);

        // Add filter functionality
        const filterButtons = document.querySelectorAll('button[data-category]');
        const activeClasses = ['bg-amber-500', 'text-white', 'border-amber-500', 'font-bold'];
        const inactiveClasses = ['bg-amber-50', 'text-stone-900', 'border-amber-300', 'font-semibold'];

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;

                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', ...activeClasses);
                    btn.classList.add(...inactiveClasses);
                });

                button.classList.add('active');
                button.classList.remove(...inactiveClasses);
                button.classList.add(...activeClasses);

                // Re-render grid with filter
                renderPropertyGrid(gridContainer, properties, category);
            });
        });
    }

    const detailContainer = document.getElementById('property-detail');
    if (detailContainer) {
        renderPropertyDetail(detailContainer, property || properties[0], properties);
    }
});
