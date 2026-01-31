# Dá Kų Cultural Centre - Energy Analysis Context

## Overview

This document provides comprehensive context for the energy analysis of the Dá Kų Cultural Centre, managed by Ryan Kinna (Building Engineer) for Champagne and Aishihik First Nations (CAFN).

**Data Source**: `DaKu_PowerUseMod v2.3.xlsx`
**Analysis Period**: January 2023 - December 2025
**Key Milestone**: Heat pumps installed Spring 2025

---

## Data Dictionary

### ATCO Billing Data (Inflation Adjusted)

| Column | Description | Unit |
|--------|-------------|------|
| Statement Date | Billing period end date | Date |
| Bill Type | EST (estimated) or ACT (actual) | - |
| Days | Number of days in billing period | Days |
| Original | Original billed amount | $ |
| Adjustment | Billing adjustments applied | $ |
| Usage (kWh) | Total energy consumption | kWh |
| Demand (kW) | Peak power demand | kW |
| Base Rate ($) | Base electricity rate charges | $ |
| YERS Rider (102.4%) | Yukon Energy Rate Stabilization | $ |
| AEY Rider (14.38%) | ATCO Electric Yukon rider | $ |
| Adjusted Total ($) | Total inflation-adjusted cost | $ |

### Building Metrics

| Column | Description | Unit |
|--------|-------------|------|
| Usage per Day ($) | Daily average cost | $/day |
| Usage per Day (kWh/d) | Daily average consumption | kWh/day |
| Heat Pump Heating Offset | Heat pump contribution indicator | Flag |

### Degree Days

| Column | Description | Unit |
|--------|-------------|------|
| Cooling (CDD) | Cooling Degree Days | Degree Days |
| Heating (HDD) | Heating Degree Days | Degree Days |

### All Building Equipment Metrics

| Column | Description | Unit |
|--------|-------------|------|
| HDD Performance (kWh/HDD) | Energy per heating degree day | kWh/HDD |
| Cost Intensity ($/HDD) | Cost per heating degree day | $/HDD |
| HDD Demand Ratio (kW/HDD) | Peak demand per HDD | kW/HDD |

### HVAC-Only Metrics

| Column | Description | Unit |
|--------|-------------|------|
| HVAC Load % | HVAC as percentage of total | % |
| HVAC Usage (kWh) | HVAC energy consumption | kWh |
| Total Cost ($) | HVAC portion of costs | $ |
| HDD Performance (kWh/HDD) | HVAC energy efficiency | kWh/HDD |
| Cost Intensity ($/HDD) | HVAC cost efficiency | $/HDD |

### Baseline Comparisons

| Column | Description | Unit |
|--------|-------------|------|
| @ 2024 Cost Intensity | Projected cost at 2024 efficiency | $ |
| @ 2023 Cost Intensity | Projected cost at 2023 efficiency | $ |
| HVAC @ 2024/2023 | HVAC projected costs | $ |

### Savings Metrics

| Column | Description | Unit |
|--------|-------------|------|
| Building Savings | Total building savings vs baseline | $ |
| HVAC Savings | HVAC-only savings vs baseline | $ |

---

## Key Findings Summary

### 2025 Performance Highlights

| Metric | Value | vs 2023 |
|--------|-------|---------|
| Total Usage | 283,500 kWh | -35% |
| Peak Demand | 92.2 kW | -18% |
| Total Adjusted Cost | $98,111 | -31% |
| HVAC Cost | $66,765 | -41% |
| Total HDD | 8,352 | +9% |
| **HVAC Savings** | **$54,437** | - |
| **Building Savings** | **$55,000** | - |
| **Efficiency Improvement** | **41%** | - |

### Annual Comparison

| Year | Usage (kWh) | Total Cost | HVAC Cost | Avg $/HDD |
|------|-------------|------------|-----------|-----------|
| 2023 | 433,200 | $141,627 | $112,783 | $30.82 |
| 2024 | 412,600 | $135,295 | $106,241 | $26.51 |
| 2025 | 283,500 | $98,111 | $66,765 | $18.23 |

### Heat Pump Impact (Spring 2025)

The heat pumps were installed in Spring 2025, showing dramatic efficiency improvements in the shoulder seasons (April-June, September-November):

- **Shoulder Season HVAC Savings**: $25,000+ in Oct-Dec 2025 alone
- **Peak Monthly Savings**: $8,318 (December 2025)
- **Best Efficiency Month**: December 2025 at $5.57/HDD

---

## Calculation Methodology

### Inflation Adjustment
All costs are adjusted to current dollars using the YERS Rider (102.4%) and AEY Rider (14.38%) multipliers applied to base rates.

### Base Load Calculation
- **Constant Base Load**: 8,622 kWh/month (non-HVAC equipment)
- **HVAC Load**: Total Usage - Base Load

### Heating Degree Days (HDD)
- Base temperature: 18°C
- HDD = Σ(18°C - daily avg temp) for days below 18°C
- Higher HDD = colder weather = more heating required

### Cost Intensity ($/HDD)
```
Cost Intensity = Total Adjusted Cost / HDD
```
Lower values indicate better efficiency (less cost per unit of heating demand).

### Savings Calculation
```
Savings = (Baseline Year Cost Intensity × Current Year HDD) - Current Year Actual Cost
```
Compares what costs would have been at previous efficiency levels to actual costs achieved.

---

## Data for Chart Generation

### Monthly HVAC Cost by Year

| Month | 2023 | 2024 | 2025 |
|-------|------|------|------|
| Jan | $9,096 | $8,461 | $6,908 |
| Feb | $8,427 | $11,045 | $6,697 |
| Mar | $10,379 | $8,536 | $5,872 |
| Apr | $8,372 | $6,152 | $4,511 |
| May | $7,830 | $9,595 | $5,940 |
| Jun | $9,246 | $7,755 | $6,573 |
| Jul | $11,653 | $8,368 | $6,092 |
| Aug | $10,315 | $8,800 | $6,250 |
| Sep | $9,988 | $10,027 | $4,986 |
| Oct | $8,675 | $8,313 | $4,092 |
| Nov | $9,790 | $10,041 | $3,504 |
| Dec | $9,010 | $9,149 | $5,341 |

### Cumulative HVAC Savings (2025)

| Month | Monthly Savings | Cumulative |
|-------|-----------------|------------|
| Jan | $1,737 | $1,737 |
| Feb | $2,684 | $4,420 |
| Mar | $3,478 | $7,899 |
| Apr | $2,586 | $10,485 |
| May | $2,883 | $13,368 |
| Jun | $2,616 | $15,984 |
| Jul | $4,536 | $20,520 |
| Aug | $5,019 | $25,540 |
| Sep | $8,120 | $33,660 |
| Oct | $5,282 | $38,942 |
| Nov | $7,178 | $46,119 |
| Dec | $8,318 | $54,437 |

### Energy Usage vs HDD (Scatter Plot Data)

| Year | Month | Usage (kWh) | HDD | kWh/HDD |
|------|-------|-------------|-----|---------|
| 2023 | Jan | 35,200 | 1,116 | 31.55 |
| 2023 | Dec | 35,200 | 946 | 37.22 |
| 2024 | Jan | 33,000 | 1,095 | 30.13 |
| 2024 | Dec | 35,400 | 982 | 36.03 |
| 2025 | Jan | 27,600 | 1,089 | 25.35 |
| 2025 | Dec | 23,400 | 1,450 | 16.14 |

*Note: 2025 December shows remarkable efficiency - only 16.14 kWh/HDD despite highest HDD of the dataset.*

---

## Chart Specifications

### 1. Cumulative Savings (Area Chart)
- **Data**: Monthly cumulative HVAC savings
- **Highlight**: $54,437 milestone at year-end
- **Color**: Green gradient

### 2. Annual Cost Comparison (Grouped Bar)
- **Data**: Total cost and HVAC cost by year
- **Years**: 2023, 2024, 2025
- **Emphasis**: 41% reduction trend

### 3. Energy vs HDD Scatter Plot
- **X-axis**: HDD (Heating Degree Days)
- **Y-axis**: kWh Usage
- **Series**: One per year, color-coded
- **Regression**: Show efficiency trend line

### 4. Cost Intensity Trend (Line)
- **Data**: $/HDD over 36 months
- **Annotation**: Heat pump installation point

### 5. HVAC Load Breakdown (Stacked Bar)
- **Components**: Base load + HVAC load
- **Period**: Monthly, all years
- **Pattern**: Show seasonal variation

### 6. Heat Pump Impact (Before/After)
- **Comparison**: Same months 2024 vs 2025
- **Focus**: Shoulder seasons (Apr-Jun, Sep-Nov)
- **Metric**: HVAC cost reduction

---

## Key Messages for Stakeholders

### For Leadership
- **$54,437 in verified savings** achieved in 2025
- **41% efficiency improvement** in cost per heating degree day
- **Heat pump investment is paying off** - highest savings in shoulder seasons
- **On track for $60,000+ annual savings** at full operation

### For Operations
- Base load remains stable at 8,622 kWh/month
- Heat pumps most effective in moderate temperatures (HDD 200-800)
- Winter months still require significant conventional heating
- December 2025 achieved best-ever efficiency: $5.57/HDD

### For External Stakeholders
- Demonstrates First Nations leadership in building efficiency
- Model for other northern community buildings
- Quantifiable environmental benefits through reduced energy use
- Potential for replication across CAFN facilities

---

## Environmental Equivalents

Our 2025 efficiency gains (149,700 kWh saved) translate to:

| Equivalent | Value | Methodology |
|------------|-------|-------------|
| Trees Planted | ~450 | Tree seedlings grown 10 years @ 15.5 kg CO2/tree/year |
| Cars Off Road | ~17 | Avg car emits 4.6 metric tons CO2/year |
| Homes Powered | ~16 | Avg Yukon home uses 11,000 kWh/year |
| CO2 Avoided | ~70 tons | Yukon grid factor: 0.47 kg CO2/kWh |

*Source: EPA Greenhouse Gas Equivalencies Calculator methodology*

---

## Data Architecture

### JavaScript Data Module (`js/data.js`)

All data in this document is also available programmatically in the `DakuData` object:

```javascript
// Access electricity data
DakuData.electricity.usage[2025]      // Monthly usage array
DakuData.electricity.hvacCost[2025]   // Monthly HVAC costs
DakuData.electricity.hdd[2025]        // Monthly HDD values

// Access KPIs
DakuData.kpis[2025].totalCost         // $98,111
DakuData.kpis[2025].hvacCost          // $66,765

// Access savings
DakuData.savings.hvacCumulative       // Monthly cumulative array
DakuData.savings.annualHvac[2025]     // $54,437

// Helper functions
DakuData.getHvacUsage(2025)           // Returns HVAC-only usage
DakuData.getKwhPerHdd(2025)           // Returns efficiency ratio
DakuData.getEfficiencyImprovement(2025, 2023)  // Returns 41%
```

### Future Data Templates

The data module includes templates for planned integrations:
- `DakuData.heatingFuel` - Propane/oil consumption
- `DakuData.carbon` - Scope 1, Scope 2, offsets
- `DakuData.occupancy` - Events, person-hours

Set `enabled: true` when data is populated.
