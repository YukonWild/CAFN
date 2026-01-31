/**
 * Dá Kų Cultural Centre - UI Components Module
 * Reusable interactive components for the dashboard
 */

const DakuComponents = {

    // ================================================
    // ENVIRONMENTAL EQUIVALENTS
    // ================================================

    /**
     * Create environmental equivalents display
     * @param {HTMLElement} container - Container element
     * @param {Object} data - Environmental data from DakuData
     */
    createEnvironmentalEquivalents(container, data) {
        const equivalents = [
            {
                icon: 'tree',
                value: data.treesPlanted,
                label: 'Trees Planted',
                detail: 'Tree seedlings grown for 10 years',
                color: '#27ae60'
            },
            {
                icon: 'car',
                value: data.carsOffRoad,
                label: 'Cars Off Road',
                detail: 'Vehicles removed for one year',
                color: '#3498db'
            },
            {
                icon: 'home',
                value: data.homesPowered,
                label: 'Homes Powered',
                detail: 'Average homes for one year',
                color: '#9b59b6'
            },
            {
                icon: 'cloud',
                value: data.co2AvoidedTons,
                label: 'Tons CO2 Avoided',
                detail: 'Annual carbon reduction',
                color: '#1abc9c'
            }
        ];

        const icons = {
            tree: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 12h3v8h10v-8h3L12 2zm0 3.5l4.5 5.5H14v6h-4v-6H7.5L12 5.5z"/></svg>`,
            car: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
            home: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
            cloud: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`
        };

        container.innerHTML = `
            <div class="env-equivalents">
                <h3 class="env-title">Environmental Impact</h3>
                <p class="env-subtitle">Our 2025 efficiency gains are equivalent to:</p>
                <div class="env-grid">
                    ${equivalents.map(eq => `
                        <div class="env-card" data-detail="${eq.detail}" style="--accent-color: ${eq.color}">
                            <div class="env-icon">${icons[eq.icon]}</div>
                            <div class="env-value">${eq.value}</div>
                            <div class="env-label">${eq.label}</div>
                            <div class="env-detail">${eq.detail}</div>
                        </div>
                    `).join('')}
                </div>
                <button class="env-methodology-btn" onclick="DakuComponents.showMethodology()">
                    How we calculated this
                </button>
            </div>
        `;

        // Add click handlers for expand
        container.querySelectorAll('.env-card').forEach(card => {
            card.addEventListener('click', () => card.classList.toggle('expanded'));
        });
    },

    showMethodology() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
                <h3>Calculation Methodology</h3>
                <div class="methodology-content">
                    <p><strong>Energy Saved:</strong> 149,700 kWh (2023 usage - 2025 usage)</p>
                    <p><strong>CO2 Factor:</strong> 0.47 kg CO2/kWh (Yukon grid average)</p>
                    <p><strong>Trees:</strong> Each tree absorbs ~15.5 kg CO2/year over 10 years</p>
                    <p><strong>Cars:</strong> Average car emits 4.6 metric tons CO2/year</p>
                    <p><strong>Homes:</strong> Average Yukon home uses ~11,000 kWh/year</p>
                    <p class="methodology-source">Source: EPA Greenhouse Gas Equivalencies Calculator</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    },

    // ================================================
    // EXPANDABLE STAT CARDS
    // ================================================

    /**
     * Create expandable KPI card
     * @param {Object} config - Card configuration
     */
    createExpandableCard(config) {
        const { id, title, value, subtitle, expandedContent, color } = config;

        return `
            <div class="kpi-card expandable" id="${id}" style="--card-accent: ${color || 'var(--primary)'}">
                <div class="kpi-header" onclick="DakuComponents.toggleCard('${id}')">
                    <div class="kpi-title">${title}</div>
                    <span class="kpi-expand-icon">+</span>
                </div>
                <div class="kpi-value">${value}</div>
                <div class="kpi-sub">${subtitle}</div>
                <div class="kpi-expanded">
                    ${expandedContent}
                </div>
            </div>
        `;
    },

    toggleCard(id) {
        const card = document.getElementById(id);
        if (card) {
            card.classList.toggle('expanded');
            const icon = card.querySelector('.kpi-expand-icon');
            icon.textContent = card.classList.contains('expanded') ? '−' : '+';
        }
    },

    // ================================================
    // AUDIENCE TABS
    // ================================================

    /**
     * Initialize tab navigation
     * @param {string} containerId - Container element ID
     * @param {Array} tabs - Tab configurations
     */
    initTabs(containerId, tabs) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const tabNav = document.createElement('div');
        tabNav.className = 'tab-nav';
        tabNav.innerHTML = tabs.map((tab, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}"
                    data-tab="${tab.id}"
                    onclick="DakuComponents.switchTab('${containerId}', '${tab.id}')">
                ${tab.label}
            </button>
        `).join('');

        container.insertBefore(tabNav, container.firstChild);

        // Show first tab content
        tabs.forEach((tab, i) => {
            const content = document.getElementById(tab.id);
            if (content) {
                content.classList.add('tab-content');
                content.style.display = i === 0 ? 'block' : 'none';
            }
        });
    },

    switchTab(containerId, tabId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Update buttons
        container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });

        // Update content
        container.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = content.id === tabId ? 'block' : 'none';
        });
    },

    // ================================================
    // FUTURE PROJECTIONS
    // ================================================

    /**
     * Create projections display with scenario selector
     * @param {HTMLElement} container - Container element
     * @param {Object} data - DakuData object
     */
    createProjections(container, data) {
        const years = Object.keys(data.projections.annual);

        container.innerHTML = `
            <div class="projections-panel">
                <h3>5-Year Savings Projection</h3>
                <div class="scenario-selector">
                    <label>Price Scenario:</label>
                    <select id="scenarioSelect" onchange="DakuComponents.updateProjections()">
                        <option value="conservative">Conservative (2% annual increase)</option>
                        <option value="moderate" selected>Moderate (5% annual increase)</option>
                        <option value="aggressive">Aggressive (8% annual increase)</option>
                    </select>
                </div>
                <div class="projections-chart">
                    <canvas id="projectionsChart"></canvas>
                </div>
                <div class="projections-table">
                    <table id="projectionsTable">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Est. Annual Savings</th>
                                <th>Cumulative Savings</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <p class="projections-note">
                    * Projections based on 2025 performance maintained at current efficiency levels
                </p>
            </div>
        `;

        this.updateProjections();
    },

    updateProjections() {
        const scenario = document.getElementById('scenarioSelect')?.value || 'moderate';
        const years = [2026, 2027, 2028, 2029, 2030];
        const scenarioConfig = DakuData.projections.scenarios[scenario];

        let cumulative = DakuData.savings.annualHvac[2025];
        const projectionData = years.map(year => {
            const yearsFromNow = year - 2025;
            const priceMultiplier = Math.pow(1 + scenarioConfig.priceIncrease, yearsFromNow);
            const annualSavings = Math.round(55000 * priceMultiplier * scenarioConfig.multiplier);
            cumulative += annualSavings;
            return { year, annualSavings, cumulative };
        });

        // Update table
        const tbody = document.querySelector('#projectionsTable tbody');
        if (tbody) {
            tbody.innerHTML = projectionData.map(p => `
                <tr>
                    <td>${p.year}</td>
                    <td class="trend-up">$${p.annualSavings.toLocaleString()}</td>
                    <td class="trend-up">$${p.cumulative.toLocaleString()}</td>
                </tr>
            `).join('');
        }

        // Update chart if it exists
        if (window.projectionsChartInstance) {
            window.projectionsChartInstance.data.datasets[0].data = projectionData.map(p => p.cumulative);
            window.projectionsChartInstance.update();
        }
    },

    // ================================================
    // TOOLTIP SYSTEM
    // ================================================

    /**
     * Add explanatory tooltips to elements
     * @param {string} selector - CSS selector for elements to tooltipify
     */
    initTooltips(selector = '[data-tooltip]') {
        document.querySelectorAll(selector).forEach(el => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.dataset.tooltip;

            el.addEventListener('mouseenter', (e) => {
                document.body.appendChild(tooltip);
                const rect = el.getBoundingClientRect();
                tooltip.style.top = rect.bottom + 8 + 'px';
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.classList.add('visible');
            });

            el.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
                setTimeout(() => tooltip.remove(), 200);
            });
        });
    },

    // ================================================
    // METRIC EXPLANATIONS
    // ================================================

    metricExplanations: {
        hdd: {
            title: "Heating Degree Days (HDD)",
            short: "Measures how cold the weather is",
            long: "HDD is calculated as the sum of (18°C - daily average temp) for all days below 18°C. Higher HDD means colder weather and more heating required."
        },
        kwhHdd: {
            title: "kWh per HDD",
            short: "Energy efficiency metric",
            long: "Shows how much energy is used per unit of heating demand. Lower values indicate better efficiency - less energy needed to heat the same amount."
        },
        costIntensity: {
            title: "Cost Intensity ($/HDD)",
            short: "Cost per unit of heating demand",
            long: "Measures cost efficiency by dividing total cost by heating degree days. Lower values mean better efficiency - less cost to meet the same heating demand."
        },
        hvacCost: {
            title: "HVAC Cost",
            short: "Heating, ventilation, cooling costs",
            long: "Total energy costs for climate control. Calculated as total energy cost minus base load (8,622 kWh/month for lights, equipment, etc.)"
        }
    },

    /**
     * Add info icons to metric labels
     * @param {string} metric - Metric key from metricExplanations
     */
    getMetricInfoIcon(metric) {
        const info = this.metricExplanations[metric];
        if (!info) return '';

        return `<span class="info-icon"
                      data-tooltip="${info.short}"
                      onclick="DakuComponents.showMetricInfo('${metric}')">?</span>`;
    },

    showMetricInfo(metric) {
        const info = this.metricExplanations[metric];
        if (!info) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content modal-small">
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
                <h3>${info.title}</h3>
                <p>${info.long}</p>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    },

    // ================================================
    // ANIMATE ON SCROLL
    // ================================================

    /**
     * Initialize intersection observer for scroll animations
     */
    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Animate counters
                    if (entry.target.dataset.counter) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    },

    /**
     * Animate a number counter
     * @param {HTMLElement} element - Element with data-counter attribute
     */
    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = 1500;
        const start = 0;
        const startTime = performance.now();
        const prefix = element.dataset.prefix || '';
        const suffix = element.dataset.suffix || '';

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            const current = Math.round(start + (target - start) * eased);

            element.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DakuComponents;
}
