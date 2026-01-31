/**
 * Dá Kų Cultural Centre - Configuration Module
 * Settings and toggles for dashboard features
 */

const DakuConfig = {
    // ================================================
    // FEATURE FLAGS
    // ================================================

    features: {
        // Interactive features
        expandableCards: true,
        hoverTooltips: true,
        clickToExpand: true,
        scrollAnimations: true,

        // Content sections
        showEnvironmentalEquivalents: true,
        showFutureProjections: true,
        showCulturalContext: true,

        // Data sources (enable when data available)
        heatingFuelData: false,
        carbonTracking: false,
        occupancyData: false,

        // Export features
        allowChartExport: true,
        printOptimized: true
    },

    // ================================================
    // DISPLAY SETTINGS
    // ================================================

    display: {
        // Default tab on load
        defaultTab: 'executive',

        // Currency formatting
        currency: 'USD',
        locale: 'en-US',

        // Number formatting
        decimals: {
            currency: 0,
            percentage: 1,
            kwhHdd: 2
        },

        // Animation settings
        animation: {
            duration: 1500,
            easing: 'easeOutCubic',
            counterDelay: 200
        }
    },

    // ================================================
    // CHART SETTINGS
    // ================================================

    charts: {
        // Default chart height
        defaultHeight: 300,
        tallHeight: 450,

        // Show data labels on charts
        showDataLabels: true,

        // Chart.js global options
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 750
            }
        }
    },

    // ================================================
    // BRANDING
    // ================================================

    branding: {
        // Organization
        organization: "Champagne and Aishihik First Nations",
        building: "Dá Kų Cultural Centre",
        buildingMeaning: "Our House",
        language: "Southern Tutchone",

        // Contact
        engineer: "Ryan Kinna",
        title: "Building Engineer",

        // Colors (match CSS variables)
        colors: {
            primary: '#1a1a2e',
            accent: '#c50a27',
            success: '#2e7d32'
        },

        // Logo
        logo: 'CAFNLogo25white.svg'
    },

    // ================================================
    // CONTENT STRINGS
    // ================================================

    strings: {
        // Headlines
        headlines: {
            executive: "Executive Summary: Cost Savings Success",
            technical: "Technical Analysis: Energy Performance",
            community: "Community Impact: Building Our Future"
        },

        // Tab labels
        tabs: {
            executive: "Executive Summary",
            technical: "Technical Detail",
            community: "Community Impact"
        },

        // Tooltips for metrics
        tooltips: {
            hdd: "Heating Degree Days - measures how cold the weather is. Higher = colder.",
            kwhHdd: "Energy per heating degree day - lower is better efficiency.",
            costIntensity: "Cost per unit of heating demand - lower means more efficient.",
            hvacCost: "Heating, ventilation, and cooling costs only.",
            baseLoad: "Constant energy use (lights, equipment) regardless of weather."
        },

        // Environmental equivalents labels
        environmental: {
            trees: { label: "Trees Planted", detail: "Tree seedlings grown for 10 years" },
            cars: { label: "Cars Off Road", detail: "Vehicles removed for one year" },
            homes: { label: "Homes Powered", detail: "Average homes for one year" },
            co2: { label: "Tons CO2 Avoided", detail: "Annual carbon reduction" }
        },

        // Cultural context
        cultural: {
            intro: "Dá Kų, meaning 'Our House' in Southern Tutchone, is more than a building—it's where our community gathers, where youth learn traditional practices, and where elders share stories.",
            stewardship: "Our ancestors stewarded this land for over 8,000 years. Today, we steward our resources with the same care, ensuring efficient operations that serve future generations.",
            impact: "Every dollar saved on energy is a dollar invested in our people—supporting language programs, cultural activities, and community gatherings."
        },

        // Projection scenarios
        scenarios: {
            conservative: "Conservative (2% annual energy price increase)",
            moderate: "Moderate (5% annual energy price increase)",
            aggressive: "Aggressive (8% annual energy price increase)"
        }
    },

    // ================================================
    // DATA PERIODS
    // ================================================

    periods: {
        baseline: 2023,
        current: 2025,
        heatPumpInstalled: "Spring 2025",
        analysisRange: [2023, 2024, 2025],
        projectionRange: [2026, 2027, 2028, 2029, 2030]
    },

    // ================================================
    // HELPER FUNCTIONS
    // ================================================

    /**
     * Format currency value
     */
    formatCurrency(value) {
        return new Intl.NumberFormat(this.display.locale, {
            style: 'currency',
            currency: this.display.currency,
            minimumFractionDigits: this.display.decimals.currency,
            maximumFractionDigits: this.display.decimals.currency
        }).format(value);
    },

    /**
     * Format large numbers with k/M suffix
     */
    formatLarge(value) {
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + 'M';
        }
        if (value >= 1000) {
            return (value / 1000).toFixed(0) + 'k';
        }
        return value.toString();
    },

    /**
     * Check if a feature is enabled
     */
    isEnabled(feature) {
        return this.features[feature] === true;
    },

    /**
     * Get tooltip text for a metric
     */
    getTooltip(metric) {
        return this.strings.tooltips[metric] || '';
    },

    /**
     * Initialize configuration (can be overridden)
     */
    init(overrides = {}) {
        // Deep merge overrides
        if (overrides.features) {
            Object.assign(this.features, overrides.features);
        }
        if (overrides.display) {
            Object.assign(this.display, overrides.display);
        }
        if (overrides.branding) {
            Object.assign(this.branding, overrides.branding);
        }
        if (overrides.strings) {
            Object.assign(this.strings, overrides.strings);
        }

        console.log('DakuConfig initialized:', this.features);
        return this;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DakuConfig;
}
