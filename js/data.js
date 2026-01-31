/**
 * Dá Kų Cultural Centre - Energy Data Module
 * Modular data structure for energy analysis dashboard
 *
 * Future data sources can be added by following the same structure:
 * - heatingFuel: Propane/oil consumption
 * - carbon: CO2 emissions and offsets
 * - occupancy: Events, usage, seasonal patterns
 */

const DakuData = {
    // Metadata
    meta: {
        building: "Dá Kų Cultural Centre",
        buildingMeaning: "Our House (Southern Tutchone)",
        organization: "Champagne and Aishihik First Nations",
        engineer: "Ryan Kinna",
        dataSource: "DaKu_PowerUseMod v2.3",
        lastUpdated: "January 2026",
        analysisYears: [2023, 2024, 2025],
        baselineYear: 2023,
        heatPumpInstalled: "Spring 2025"
    },

    // Time periods
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    years: [2023, 2024, 2025],

    // Electricity Data
    electricity: {
        // Monthly usage in kWh
        usage: {
            2023: [35200, 32800, 39800, 32600, 30600, 35000, 43200, 38400, 38400, 34000, 38000, 35200],
            2024: [33000, 42200, 33200, 25400, 37000, 30400, 32600, 34000, 38400, 32400, 38600, 35400],
            2025: [27600, 27200, 24800, 20200, 25000, 26700, 25300, 25900, 21900, 18700, 16800, 23400]
        },
        // Heating Degree Days
        hdd: {
            2023: [1115.7, 1298.4, 1182.1, 856.9, 534.2, 245.6, 108.9, 112.7, 240.4, 412.5, 610.2, 945.8],
            2024: [1095.3, 1245.2, 1125.6, 798.4, 562.1, 294.5, 138.9, 165.2, 225.8, 445.6, 642.1, 982.4],
            2025: [1088.9, 1221.4, 1142.8, 812.3, 556.2, 288.7, 142.1, 185.2, 316.4, 473.5, 674.3, 1450.0]
        },
        // HVAC costs in $
        hvacCost: {
            2023: [9096, 8427, 10379, 8372, 7830, 9246, 11653, 10315, 9988, 8675, 9790, 9010],
            2024: [8461, 11045, 8536, 6152, 9595, 7755, 8368, 8800, 10027, 8313, 10041, 9149],
            2025: [6908, 6697, 5872, 4511, 5940, 6573, 6092, 6250, 4986, 4092, 3504, 5341]
        },
        // Total costs in $
        totalCost: {
            2023: [11500, 10831, 12782, 10775, 10234, 11649, 14057, 12719, 12392, 11079, 12194, 11414],
            2024: [10864, 13448, 10939, 8765, 11999, 10159, 10772, 11204, 12431, 10716, 12445, 11553],
            2025: [9378, 9193, 8524, 7242, 8580, 9102, 8711, 8831, 7715, 6739, 6028, 8070]
        },
        // Cost intensity ($/HDD)
        costIntensity: {
            2023: [10.31, 8.34, 10.81, 12.57, 19.16, 47.03, 84.12, 71.41, 47.21, 26.81, 19.98, 12.07],
            2024: [9.92, 10.80, 9.72, 10.98, 21.35, 34.49, 61.73, 52.50, 51.54, 24.98, 19.38, 11.76],
            2025: [8.61, 7.53, 7.46, 8.91, 15.43, 31.53, 48.24, 38.85, 23.44, 14.23, 8.94, 5.57]
        },
        // Peak demand in kW
        peakDemand: {
            2023: 112.8,
            2024: 94.8,
            2025: 92.2
        },
        // Base load (constant non-HVAC)
        baseLoad: 8622 // kWh/month
    },

    // Savings data
    savings: {
        // 2025 monthly HVAC savings vs 2023 baseline
        hvacMonthly: [1737, 2684, 3478, 2586, 2883, 2616, 4536, 5019, 8120, 5282, 7178, 8318],
        // Cumulative savings
        hvacCumulative: [1737, 4420, 7899, 10485, 13368, 15984, 20520, 25540, 33660, 38942, 46119, 54437],
        // Annual totals
        annualHvac: {
            2025: 54437
        },
        annualBuilding: {
            2025: 54999
        }
    },

    // Key Performance Indicators
    kpis: {
        2023: {
            totalUsage: 433200,
            totalCost: 141627,
            hvacCost: 112783,
            totalHdd: 7663,
            avgCostPerHdd: 30.82,
            peakDemand: 112.8
        },
        2024: {
            totalUsage: 412600,
            totalCost: 135295,
            hvacCost: 106241,
            totalHdd: 7721,
            avgCostPerHdd: 26.51,
            peakDemand: 94.8
        },
        2025: {
            totalUsage: 283500,
            totalCost: 98111,
            hvacCost: 66765,
            totalHdd: 8352,
            avgCostPerHdd: 18.23,
            peakDemand: 92.2
        }
    },

    // Environmental Equivalents (calculated from 2025 savings)
    environmental: {
        energySaved: 149700, // kWh (433200 - 283500)
        co2AvoidedTons: 70, // Based on Yukon grid factor
        treesPlanted: 450, // Tree seedlings grown 10 years
        carsOffRoad: 17, // Cars removed for one year
        homesPowered: 16, // Average homes for one year
        drivesToWhitehorse: 180, // ~800km round trip equivalent
        methodology: {
            co2Factor: 0.47, // kg CO2/kWh (Yukon grid average)
            treeAbsorption: 15.5, // kg CO2/tree/year over 10 years
            avgCarEmissions: 4.6, // metric tons CO2/year
            avgHomeUsage: 11000 // kWh/year
        }
    },

    // Future projections (based on 2025 performance)
    projections: {
        // 5-year projection at 2025 efficiency
        annual: {
            2026: { estimatedSavings: 55000, cumulativeSavings: 109437 },
            2027: { estimatedSavings: 55000, cumulativeSavings: 164437 },
            2028: { estimatedSavings: 55000, cumulativeSavings: 219437 },
            2029: { estimatedSavings: 55000, cumulativeSavings: 274437 },
            2030: { estimatedSavings: 55000, cumulativeSavings: 329437 }
        },
        // Scenarios with energy price changes
        scenarios: {
            conservative: { priceIncrease: 0.02, multiplier: 1.0 }, // 2% annual
            moderate: { priceIncrease: 0.05, multiplier: 1.1 }, // 5% annual
            aggressive: { priceIncrease: 0.08, multiplier: 1.25 } // 8% annual
        }
    },

    // ================================================
    // FUTURE DATA SOURCES (Templates)
    // ================================================

    // Heating Fuel - To be populated when data available
    heatingFuel: {
        enabled: false,
        unit: "litres", // or gallons
        type: "propane", // or "oil", "natural_gas"
        monthly: {
            2023: [], // [Jan, Feb, Mar, ...]
            2024: [],
            2025: []
        },
        cost: {
            2023: [],
            2024: [],
            2025: []
        },
        pricePerUnit: {
            2023: 0,
            2024: 0,
            2025: 0
        }
    },

    // Carbon Tracking - To be populated
    carbon: {
        enabled: false,
        // Scope 1: Direct emissions (heating fuel)
        scope1: {
            2023: { emissions: 0, unit: "tonnes CO2e" },
            2024: { emissions: 0 },
            2025: { emissions: 0 }
        },
        // Scope 2: Indirect emissions (electricity)
        scope2: {
            2023: { emissions: 0 },
            2024: { emissions: 0 },
            2025: { emissions: 0 }
        },
        // Offsets purchased or generated
        offsets: {
            2023: 0,
            2024: 0,
            2025: 0
        }
    },

    // Occupancy/Usage - To be populated
    occupancy: {
        enabled: false,
        // Events per month
        events: {
            2023: [],
            2024: [],
            2025: []
        },
        // Estimated person-hours
        personHours: {
            2023: [],
            2024: [],
            2025: []
        },
        // Event types
        eventTypes: {
            cultural: 0,
            community: 0,
            visitor: 0,
            rental: 0
        }
    },

    // ================================================
    // HELPER FUNCTIONS
    // ================================================

    // Calculate HVAC usage (total - base load)
    getHvacUsage(year) {
        return this.electricity.usage[year].map(u => Math.max(0, u - this.electricity.baseLoad));
    },

    // Get annual total for any metric
    getAnnualTotal(metric, year) {
        if (this.electricity[metric] && this.electricity[metric][year]) {
            return this.electricity[metric][year].reduce((a, b) => a + b, 0);
        }
        return 0;
    },

    // Calculate kWh per HDD for a year
    getKwhPerHdd(year) {
        const totalUsage = this.getAnnualTotal('usage', year);
        const totalHdd = this.getAnnualTotal('hdd', year);
        return totalHdd > 0 ? totalUsage / totalHdd : 0;
    },

    // Get efficiency improvement vs baseline
    getEfficiencyImprovement(year, baselineYear = 2023) {
        const currentCostPerHdd = this.kpis[year]?.avgCostPerHdd || 0;
        const baselineCostPerHdd = this.kpis[baselineYear]?.avgCostPerHdd || 0;
        if (baselineCostPerHdd === 0) return 0;
        return ((baselineCostPerHdd - currentCostPerHdd) / baselineCostPerHdd) * 100;
    },

    // Calculate projected savings with price scenario
    getProjectedSavings(year, scenario = 'moderate') {
        const baseProjection = this.projections.annual[year];
        if (!baseProjection) return null;

        const scenarioConfig = this.projections.scenarios[scenario];
        const yearsFromNow = year - 2025;
        const priceMultiplier = Math.pow(1 + scenarioConfig.priceIncrease, yearsFromNow);

        return {
            year: year,
            scenario: scenario,
            estimatedSavings: Math.round(baseProjection.estimatedSavings * priceMultiplier * scenarioConfig.multiplier),
            cumulativeSavings: baseProjection.cumulativeSavings
        };
    },

    // Format currency
    formatCurrency(value, decimals = 0) {
        return '$' + value.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    },

    // Format number with k/M suffix
    formatLargeNumber(value) {
        if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
        if (value >= 1000) return (value / 1000).toFixed(0) + 'k';
        return value.toString();
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DakuData;
}
