/**
 * Dá Kų Cultural Centre - Charts Module
 * Reusable Chart.js configurations and utilities
 */

const DakuCharts = {

    // ================================================
    // COLOR PALETTE
    // ================================================

    colors: {
        // CAFN Brand
        cafnDark: '#1a1a2e',
        cafnRed: '#c50a27',
        cafnWhite: '#ffffff',

        // Data visualization
        year2023: {
            bg: 'rgba(149, 165, 166, 0.6)',
            border: '#95a5a6',
            light: 'rgba(149, 165, 166, 0.3)'
        },
        year2024: {
            bg: 'rgba(52, 152, 219, 0.6)',
            border: '#3498db',
            light: 'rgba(52, 152, 219, 0.3)'
        },
        year2025: {
            bg: 'rgba(46, 125, 50, 0.8)',
            border: '#2e7d32',
            light: 'rgba(46, 125, 50, 0.3)'
        },

        // Semantic
        success: '#2e7d32',
        warning: '#f57c00',
        danger: '#c62828',
        savings: {
            bg: 'rgba(46, 125, 50, 0.3)',
            border: '#2e7d32'
        },
        hvac: {
            bg: 'rgba(197, 10, 39, 0.7)',
            border: '#c50a27'
        }
    },

    // ================================================
    // DEFAULT OPTIONS
    // ================================================

    defaultOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 15
                }
            },
            tooltip: {
                backgroundColor: 'rgba(26, 26, 46, 0.9)',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                displayColors: true
            },
            datalabels: {
                display: false // Override per chart
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        }
    },

    // ================================================
    // CHART TEMPLATES
    // ================================================

    /**
     * Cumulative savings area chart
     */
    createCumulativeSavings(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.months,
                datasets: [{
                    label: 'Cumulative Savings',
                    data: data.savings.hvacCumulative,
                    borderColor: this.colors.savings.border,
                    backgroundColor: this.colors.savings.bg,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: this.colors.savings.border,
                    pointHoverRadius: 8
                }]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: { display: false },
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: ctx => '$' + ctx.parsed.y.toLocaleString() + ' saved'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: v => '$' + (v/1000) + 'k' },
                        title: { display: true, text: 'Cumulative Savings ($)' }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const month = data.months[index];
                        const savings = data.savings.hvacCumulative[index];
                        DakuComponents.showMetricDetail('savings', month, savings);
                    }
                }
            }
        });
    },

    /**
     * Monthly comparison bar chart
     */
    createMonthlyComparison(canvasId, data, metric = 'hvacCost') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const metricData = data.electricity[metric];

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.months,
                datasets: [
                    {
                        label: '2023',
                        data: metricData[2023],
                        backgroundColor: this.colors.year2023.bg,
                        borderColor: this.colors.year2023.border,
                        borderWidth: 1
                    },
                    {
                        label: '2024',
                        data: metricData[2024],
                        backgroundColor: this.colors.year2024.bg,
                        borderColor: this.colors.year2024.border,
                        borderWidth: 1
                    },
                    {
                        label: '2025',
                        data: metricData[2025],
                        backgroundColor: this.colors.year2025.bg,
                        borderColor: this.colors.year2025.border,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: ctx => ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString()
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: v => '$' + (v/1000) + 'k' },
                        title: { display: true, text: 'Cost ($)' }
                    }
                }
            }
        });
    },

    /**
     * Annual comparison grouped bar
     */
    createAnnualComparison(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2023', '2024', '2025'],
                datasets: [
                    {
                        label: 'Total Building Cost',
                        data: [
                            data.kpis[2023].totalCost,
                            data.kpis[2024].totalCost,
                            data.kpis[2025].totalCost
                        ],
                        backgroundColor: this.colors.year2023.bg,
                        borderColor: this.colors.year2023.border,
                        borderWidth: 1
                    },
                    {
                        label: 'HVAC Cost',
                        data: [
                            data.kpis[2023].hvacCost,
                            data.kpis[2024].hvacCost,
                            data.kpis[2025].hvacCost
                        ],
                        backgroundColor: this.colors.hvac.bg,
                        borderColor: this.colors.hvac.border,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: v => '$' + Math.round(v/1000) + 'k',
                        font: { weight: 'bold' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: v => '$' + (v/1000) + 'k' },
                        title: { display: true, text: 'Annual Cost ($)' }
                    }
                }
            }
        });
    },

    /**
     * Energy vs HDD scatter plot
     */
    createScatterPlot(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const scatterData = { 2023: [], 2024: [], 2025: [] };

        data.years.forEach(year => {
            for (let i = 0; i < 12; i++) {
                scatterData[year].push({
                    x: data.electricity.hdd[year][i],
                    y: data.electricity.usage[year][i],
                    month: data.months[i]
                });
            }
        });

        return new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: '2023',
                        data: scatterData[2023],
                        backgroundColor: this.colors.year2023.bg,
                        borderColor: this.colors.year2023.border,
                        pointRadius: 8,
                        pointHoverRadius: 12
                    },
                    {
                        label: '2024',
                        data: scatterData[2024],
                        backgroundColor: this.colors.year2024.bg,
                        borderColor: this.colors.year2024.border,
                        pointRadius: 8,
                        pointHoverRadius: 12
                    },
                    {
                        label: '2025',
                        data: scatterData[2025],
                        backgroundColor: this.colors.year2025.bg,
                        borderColor: this.colors.year2025.border,
                        pointRadius: 8,
                        pointHoverRadius: 12
                    }
                ]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: ctx => {
                                const point = ctx.raw;
                                return `${point.month}: HDD ${point.x.toFixed(0)}, Usage ${point.y.toLocaleString()} kWh`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Heating Degree Days (HDD)' }
                    },
                    y: {
                        title: { display: true, text: 'Energy Usage (kWh)' },
                        ticks: { callback: v => (v/1000) + 'k' }
                    }
                }
            }
        });
    },

    /**
     * Cost intensity trend line
     */
    createCostIntensityTrend(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.months,
                datasets: [
                    {
                        label: '2023',
                        data: data.electricity.costIntensity[2023],
                        borderColor: this.colors.year2023.border,
                        borderDash: [5, 5],
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 0
                    },
                    {
                        label: '2024',
                        data: data.electricity.costIntensity[2024],
                        borderColor: this.colors.year2024.border,
                        borderDash: [2, 2],
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 0
                    },
                    {
                        label: '2025',
                        data: data.electricity.costIntensity[2025],
                        borderColor: this.colors.year2025.border,
                        backgroundColor: this.colors.year2025.light,
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3
                    }
                ]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    annotation: {
                        annotations: {
                            heatPumpLine: {
                                type: 'line',
                                xMin: 3.5, // Between Apr and May
                                xMax: 3.5,
                                borderColor: this.colors.cafnRed,
                                borderWidth: 2,
                                borderDash: [6, 6],
                                label: {
                                    display: true,
                                    content: 'Heat Pumps Installed',
                                    position: 'start'
                                }
                            }
                        }
                    },
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: ctx => ctx.dataset.label + ': $' + ctx.parsed.y.toFixed(2) + '/HDD'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: '$/HDD (lower is better)' }
                    }
                }
            }
        });
    },

    /**
     * Load breakdown stacked bar
     */
    createLoadBreakdown(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const hvacUsage = {
            2023: data.getHvacUsage(2023),
            2024: data.getHvacUsage(2024),
            2025: data.getHvacUsage(2025)
        };

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.months,
                datasets: [
                    {
                        label: '2023 Base',
                        data: Array(12).fill(data.electricity.baseLoad),
                        backgroundColor: this.colors.year2023.light,
                        stack: '2023'
                    },
                    {
                        label: '2023 HVAC',
                        data: hvacUsage[2023],
                        backgroundColor: this.colors.year2023.bg,
                        stack: '2023'
                    },
                    {
                        label: '2024 Base',
                        data: Array(12).fill(data.electricity.baseLoad),
                        backgroundColor: this.colors.year2024.light,
                        stack: '2024'
                    },
                    {
                        label: '2024 HVAC',
                        data: hvacUsage[2024],
                        backgroundColor: this.colors.year2024.bg,
                        stack: '2024'
                    },
                    {
                        label: '2025 Base',
                        data: Array(12).fill(data.electricity.baseLoad),
                        backgroundColor: this.colors.year2025.light,
                        stack: '2025'
                    },
                    {
                        label: '2025 HVAC',
                        data: hvacUsage[2025],
                        backgroundColor: this.colors.year2025.bg,
                        stack: '2025'
                    }
                ]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: {
                        ...this.defaultOptions.plugins.legend,
                        labels: {
                            filter: item => !item.text.includes('Base')
                        }
                    }
                },
                scales: {
                    x: { stacked: true },
                    y: {
                        stacked: true,
                        title: { display: true, text: 'Energy (kWh)' },
                        ticks: { callback: v => (v/1000) + 'k' }
                    }
                }
            }
        });
    },

    /**
     * 5-year projections chart
     */
    createProjectionsChart(canvasId, data, scenario = 'moderate') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const years = [2025, 2026, 2027, 2028, 2029, 2030];
        const scenarioConfig = data.projections.scenarios[scenario];

        let cumulative = data.savings.annualHvac[2025];
        const projectedCumulative = [cumulative];

        for (let i = 1; i < years.length; i++) {
            const priceMultiplier = Math.pow(1 + scenarioConfig.priceIncrease, i);
            cumulative += Math.round(55000 * priceMultiplier * scenarioConfig.multiplier);
            projectedCumulative.push(cumulative);
        }

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Projected Cumulative Savings',
                    data: projectedCumulative,
                    borderColor: this.colors.success,
                    backgroundColor: 'rgba(46, 125, 50, 0.2)',
                    fill: true,
                    tension: 0.2,
                    pointRadius: 6,
                    pointBackgroundColor: this.colors.success
                }]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: { display: false },
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: v => '$' + Math.round(v/1000) + 'k',
                        font: { weight: 'bold' }
                    },
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: ctx => 'Cumulative: $' + ctx.parsed.y.toLocaleString()
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: v => '$' + (v/1000) + 'k' },
                        title: { display: true, text: 'Cumulative Savings ($)' }
                    },
                    x: {
                        title: { display: true, text: 'Year' }
                    }
                }
            }
        });

        window.projectionsChartInstance = chart;
        return chart;
    },

    // ================================================
    // UTILITY FUNCTIONS
    // ================================================

    /**
     * Destroy all charts to free memory
     */
    destroyAllCharts() {
        Object.values(Chart.instances || {}).forEach(chart => {
            if (chart) chart.destroy();
        });
    },

    /**
     * Resize all charts (useful on window resize)
     */
    resizeAllCharts() {
        Object.values(Chart.instances || {}).forEach(chart => {
            if (chart) chart.resize();
        });
    },

    /**
     * Export chart as PNG
     * @param {string} canvasId - Canvas element ID
     * @param {string} filename - Output filename
     */
    exportChart(canvasId, filename = 'chart.png') {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DakuCharts;
}
