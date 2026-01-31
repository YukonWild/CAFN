# CAFN - Dá Kų Cultural Centre

## Repository
- **GitHub**: git@github.com:YukonWild/CAFN.git
- **Branch**: main

## Project Overview
Building efficiency and energy management resources for the Dá Kų Cultural Centre ("Our House" in Southern Tutchone), managed by Ryan Kinna (Building Engineer) for Champagne and Aishihik First Nations (CAFN).

## Key Metrics (2025)
| Metric | Value |
|--------|-------|
| HVAC Savings | $54,437 |
| Efficiency Improvement | 41% |
| Total Cost | $98,111 |
| HVAC Cost | $66,765 |
| Usage Reduction | 35% |
| CO2 Avoided | 70 tons |

## Project Structure

```
/
├── index.html              # Landing page (enhanced with cultural context)
├── PowerReport.html        # Interactive energy report (3 audience tabs)
│
├── css/
│   └── styles.css          # Shared stylesheet with CSS variables
│
├── js/
│   ├── data.js             # Data module (extensible for heating fuel, carbon, occupancy)
│   ├── charts.js           # Chart.js configurations
│   ├── components.js       # Reusable UI components
│   └── config.js           # Settings and feature flags
│
├── charts/                 # Static PNG charts (1920x1080)
│   ├── 01_cumulative_savings.png
│   ├── 02_monthly_savings.png
│   ├── ... (10 total)
│
├── energy_context.md       # Data documentation & methodology
├── improvement_plan_context.md  # Improvement plan and decisions
├── CLAUDE.md               # This file
│
├── DaKu_PowerUseMod v2.3.xlsx  # Source data (Excel)
├── DaKu_PowerUseMod v2.3.ods   # Source data (LibreOffice)
├── CAFNLogo25white.svg     # CAFN logo
└── daku.jpg                # Building exterior photo
```

## Features

### Landing Page (`index.html`)
- Hero section with CAFN logo and "Dá Kų" meaning
- Highlight banner with $54,437 savings
- **Expandable stat cards** - Click to reveal detailed explanations
- **Environmental equivalents** - Trees, cars, homes, CO2 with icons
- Cultural context section (Dá Kų meaning, three pillars)
- Resources section linking to reports

### Power Report (`PowerReport.html`)
**Three Audience Tabs:**
1. **Executive Summary**
   - KPI banner and cards
   - Environmental equivalents
   - Key charts (cumulative savings, annual comparison)
   - 5-year projections with scenario selector

2. **Technical Detail**
   - Quick facts reference panel
   - 10 interactive charts (all expandable to full-screen)
   - Energy vs weather analysis
   - HVAC system breakdown
   - Annual and monthly data tables

3. **Community Impact**
   - Impact story narrative
   - Program funding equivalents (725+ hours, 200+ learners)
   - Environmental stewardship framing
   - Simplified charts
   - Future outlook projections

**Interactive Features:**
- Click-to-expand charts (full-screen modal)
- Tab lazy-loading (charts initialize on tab switch)
- Scenario selector for projections (conservative/moderate/aggressive)
- Environmental equivalents with methodology modal

### Modular JavaScript Architecture

**`js/data.js`** - Data module with:
- All electricity data (usage, HDD, costs, intensity)
- Savings data (monthly, cumulative)
- KPIs by year
- Environmental equivalents with methodology
- Future projections with scenarios
- **Extensible templates** for:
  - Heating fuel data
  - Carbon tracking (scope 1, scope 2, offsets)
  - Occupancy data (events, person-hours)
- Helper functions (formatting, calculations)

**`js/components.js`** - UI components:
- Environmental equivalents display
- Expandable KPI cards
- Tab navigation system
- Future projections panel with chart
- Tooltip system
- Metric explanation modals
- Scroll animations
- Counter animations

**`js/charts.js`** - Chart configurations:
- Color palette (CAFN brand + data viz)
- Default options
- Template functions for all chart types
- Utility functions (export, resize)

**`js/config.js`** - Settings:
- Feature flags (enable/disable sections)
- Display settings (locale, decimals, animation)
- CAFN branding
- Content strings (headlines, tooltips, cultural messaging)

### Shared Stylesheet (`css/styles.css`)
- CSS custom properties for theming
- CAFN brand colors (#1a1a2e dark, #c50a27 red)
- Responsive breakpoints
- Print optimization

## Data Sources
- **Primary**: `DaKu_PowerUseMod v2.3.xlsx` (ATCO billing data, inflation-adjusted)
- **Period**: January 2023 - December 2025
- **Key Event**: Heat pumps installed Spring 2025
- **Base Load**: 8,622 kWh/month (constant non-HVAC)

## Cultural Context
- **Dá Kų** = "Our House" in Southern Tutchone (Dän k'è)
- **CAFN** = Champagne and Aishihik First Nations
- **Dakwäkäda Dancers** - 20+ year cultural dance troupe
- **Territory**: 41,000 km² spanning Yukon and BC
- **Heritage**: 8,000+ years of continuous habitation

## Narrative Framing
1. **Environmental Stewardship** - Climate action aligned with traditional values
2. **Fiscal Responsibility** - Cost savings, ROI, budget management
3. **Community Pride** - CAFN as model for other First Nations

## Future Data Integration (Planned)
The modular architecture supports adding:
- **Heating Fuel** - Propane/oil consumption (`DakuData.heatingFuel`)
- **Carbon Tracking** - Emissions and offsets (`DakuData.carbon`)
- **Occupancy Data** - Events and usage correlation (`DakuData.occupancy`)

To add new data:
1. Populate the template in `js/data.js`
2. Set `enabled: true` for the data source
3. Add corresponding UI components
4. Update feature flags in `js/config.js`

## Tech Stack
- Static HTML/CSS/JavaScript (no build tools)
- Chart.js + chartjs-plugin-datalabels
- CSS Custom Properties for theming
- CSS Grid/Flexbox for responsive layout
- Intersection Observer for scroll animations

## Recent Changes (January 2026)
- Added modular JavaScript architecture (js/ folder)
- Created audience-specific tabs (Executive, Technical, Community)
- Added click-to-expand chart functionality
- Added environmental equivalents with methodology
- Added 5-year projections with scenario selector
- Enhanced cultural context throughout
- Added expandable stat cards on landing page
- Created shared CSS stylesheet (css/styles.css)
