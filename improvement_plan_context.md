# Dá Kų Cultural Centre - Website Improvement Plan

## Session Context
**Date**: January 2026
**Status**: IMPLEMENTED
**Goal**: Create a more interactive, culturally-relevant energy presentation
**Target**: Non-HVAC professionals (Leadership, Community, External Stakeholders)

---

## Research Findings

### Energy Presentation Best Practices (For Non-Technical Audiences)

#### Chart Types That Work Best
1. **Cumulative Savings Line/Area** - Shows progress, creates positive emotion
2. **Before/After Column Charts** - Simple, clear comparisons
3. **Waterfall Charts** - Show how different measures contributed
4. **Gauge/Meter Charts** - Visual "speedometer" for quick understanding
5. **Icon-Based Infographics** - Trees planted, cars off road, homes powered

#### Metrics to Emphasize
**Lead with:**
- Dollar savings ($54,437)
- Percentage improvement (41%)
- Payback period

**Support with environmental equivalents:**
- ~450 trees planted
- ~15-20 cars off road
- ~16 homes powered
- ~70 tons CO2 avoided

**Minimize:** Raw kWh, HDD, technical ratios

#### Storytelling Framework
1. **Opening Hook**: Building's cultural importance to community
2. **Challenge**: Energy costs draining resources from programs
3. **Solution**: Heat pump investment honoring stewardship values
4. **Results**: Dollar and environmental wins
5. **Future Vision**: Savings reinvested in cultural programming

---

### CAFN Cultural Context

#### About CAFN
- **Full Name**: Shadhäla yè Äshèyi Kwädǟn (Champagne and Aishihik First Nations)
- **Language**: Dän k'è (Southern Tutchone) - means "our way"
- **Population**: 1,200+ Dän (citizens)
- **Territory**: 41,000 km² spanning Yukon and BC
- **History**: 8,000+ years of continuous habitation
- **Self-Governance**: First Nations to sign land claims (1992-93)

#### About "Dá Kų"
- **Meaning**: "Our House" in Southern Tutchone
- **Purpose**: Teaching, cultural, and community gathering facility
- **Programs**:
  - Dakwäkäda Dancers (20+ years, longest-running First Nation dance group in Yukon)
  - Language revitalization programs
  - Cultural tours and workshops
  - Community events (weddings, meetings, ceremonies)
- **Co-located**: Kluane National Park Visitor Centre

#### CAFN Environmental Leadership
- **Heat Pump Housing Retrofit**: 12 homes, 75% emission reduction, 40% energy savings
- **Climate Research Partnership**: $429K study with Yukon University
- **Water Stewardship**: "Chu äyì ätlʼet" (The Water In Me) program
- **Traditional Knowledge Integration**: Climate adaptation research

#### Current Leadership (2022-2026)
- **Chief**: Barb Joe
- **Council**: Lawrence Joe, Michael Beattie, Margaret Chiblow, Sharmane Jones

#### Cultural Values to Reflect
- Intergenerational responsibility (seven generations thinking)
- Land and resource stewardship
- Self-determination and community empowerment
- Connection to traditional territory
- Language preservation

---

## User Decisions (Finalized January 2026)

### 1. Cultural Integration
**Decision: MODERATE**
- Add cultural context section explaining "Dá Kų" meaning
- Use "Dá Kų" naming prominently throughout
- Keep technical content professional/accessible
- Include CAFN branding and environmental stewardship messaging

### 2. Visual Identity
**Decision: Use existing assets**
- `daku.jpg` - Building exterior (hero background)
- `CAFNLogo25white.svg` - CAFN logo
- `Da-Ku-Cultural-Centre-hours-and-bookings.jpeg` - Available for booking section

### 3. Narrative Framing
**Decision: Three-pillar approach**
1. **Environmental Stewardship** - Climate action aligned with traditional values
2. **Fiscal Responsibility** - Cost savings, ROI, budget management
3. **Community Pride** - CAFN as model for other First Nations

### 4. Interactive Features
**Decision: ALL FOUR priorities**
1. Click-to-expand detail panels
2. Future projections (5-year forecast, scenarios)
3. Environmental equivalents with icons
4. Audience tabs (Executive | Technical | Community)

### 5. Future Data Integration
**Decision: Plan for these data sources**
1. **Heating Fuel** - Propane/oil consumption
2. **Carbon Calculations** - CO2 emissions avoided, tracking
3. **Usage/Occupancy** - Efficiency per event, seasonal correlation

*(Not included: Water usage, solar/renewable, comparison buildings)*

### 6. Environmental Equivalents to Show
Based on research, use these relatable comparisons:
- Trees planted (~450 tree seedlings grown 10 years)
- Cars off road (~15-20 for a year)
- Homes powered (~16 average homes for a year)
- CO2 avoided (~70 tons annually)

---

## Improvement Plan (Implemented)

### Phase 1: Enhanced Landing Page (index.html)
1. **Cultural Context Section**
   - Add "About Dá Kų" section explaining the building's significance
   - Include meaning of name ("Our House")
   - Brief on programs and community use

2. **Impact Storytelling**
   - Add environmental equivalents with icons
   - "What This Means" callout boxes
   - Quote from leadership or Ryan Kinna

3. **Interactive Hero Stats**
   - Click on stat cards to expand detail
   - Show trend indicators (animated counters)
   - Add comparison context

4. **Program Impact Connection**
   - "$54K could fund X hours of language instruction"
   - "Supporting Dakwäkäda Dancers for Y years"
   - Link savings to community benefit

### Phase 2: Enhanced Power Report (PowerReport.html)
1. **Audience Navigation**
   - Add tabs: Executive | Detailed Analysis | Community Impact
   - Filter/simplify content per audience

2. **Enhanced Interactivity**
   - Hover tooltips explaining metrics (HDD, kWh/HDD, etc.)
   - Click-to-expand chart detail panels
   - Year comparison toggles
   - Print/share functionality

3. **Environmental Equivalents Section**
   - Icon grid (trees, cars, homes)
   - EPA-style calculator integration
   - Local context comparisons

4. **Future Projections**
   - 5-year projection based on 2025 data
   - Scenario sliders (energy price changes)
   - Potential upgrade ROI calculator

5. **Cultural Integration**
   - Add CAFN branding more prominently
   - Optional Southern Tutchone tooltips
   - Connection to CAFN environmental leadership

### Phase 3: Modular Architecture
1. **Separate Data Layer** (`data.js`)
   - Extract data into standalone module
   - Easy to add new data sources (heating fuel, etc.)
   - Support for multiple time periods

2. **Component Library** (`components.js`)
   - Reusable chart configurations
   - Standard card/panel templates
   - Consistent styling

3. **Configuration System** (`config.js`)
   - Toggle features on/off
   - Theme/branding customization
   - Audience-specific settings

4. **Add New Views**
   - Community Impact page
   - Future Scenarios page
   - Historical Trends page (for new data)

---

## File Structure (Implemented)

```
/
├── index.html              # Landing page (enhanced with cultural context)
├── PowerReport.html        # Interactive report (3 audience tabs)
│
├── css/
│   └── styles.css          # Shared stylesheet with CSS variables
│
├── js/
│   ├── data.js             # Data module (extensible for future sources)
│   ├── charts.js           # Chart.js configurations
│   ├── components.js       # Reusable UI components
│   └── config.js           # Feature flags and settings
│
├── charts/                 # Static PNGs (1920x1080)
│
├── energy_context.md       # Data documentation & methodology
├── improvement_plan_context.md  # This file
├── CLAUDE.md               # Project instructions
│
├── DaKu_PowerUseMod v2.3.xlsx  # Source data
├── CAFNLogo25white.svg     # CAFN logo
└── daku.jpg                # Building photo
```

*Note: Community and projections are integrated as tabs in PowerReport.html rather than separate pages.*

---

## Technical Notes

### Current Stack
- Pure HTML/CSS/JavaScript (no build tools)
- Chart.js with datalabels plugin
- Responsive design (CSS Grid/Flexbox)
- Print-optimized CSS

### Recommended Additions
- **chartjs-plugin-annotation** - For milestone markers
- **CSS Custom Properties** - For theming
- **LocalStorage** - Save user preferences
- **Intersection Observer** - Animate on scroll
- **Web Share API** - Native sharing

### Accessibility Considerations
- Ensure 4.5:1 contrast ratio
- Add aria-labels to charts
- Keyboard navigation for interactive elements
- Screen reader announcements for dynamic content

---

## Implementation Status (January 2026)

All phases have been completed:

### Phase 1: Enhanced Landing Page - COMPLETE
- [x] Cultural context section with "Dá Kų" meaning
- [x] Environmental equivalents with icons
- [x] Expandable stat cards with "What This Means"
- [x] Program impact connections (725+ hours, 200 learners)
- [x] Animated counters on scroll

### Phase 2: Enhanced Power Report - COMPLETE
- [x] Three audience tabs (Executive, Technical, Community)
- [x] Click-to-expand chart panels (full-screen modal)
- [x] Environmental equivalents with methodology modal
- [x] 5-year projections with scenario selector
- [x] Quick facts reference panel
- [x] All 10 charts with lazy-loading per tab

### Phase 3: Modular Architecture - COMPLETE
- [x] `js/data.js` - Data module with future templates
- [x] `js/components.js` - Reusable UI components
- [x] `js/charts.js` - Chart.js configurations
- [x] `js/config.js` - Feature flags and settings
- [x] `css/styles.css` - Shared stylesheet with CSS variables

### Files Created/Modified
| File | Status |
|------|--------|
| `index.html` | Enhanced |
| `PowerReport.html` | Rebuilt |
| `js/data.js` | New |
| `js/components.js` | New |
| `js/charts.js` | New |
| `js/config.js` | New |
| `css/styles.css` | New |
| `CLAUDE.md` | Updated |
| `energy_context.md` | Updated |

### Next Steps (Future)
1. Add heating fuel data when available
2. Integrate carbon tracking
3. Add occupancy/event correlation
4. Test with target audiences
5. Iterate based on feedback

---

## References

- CAFN Website: https://cafn.ca/
- Dá Kų Cultural Centre: https://cafn.ca/citizen-services/da-ku-cultural-centre/
- EPA GHG Calculator: https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
- CAFN Climate Research: https://www.yukonu.ca/news/202205/yukon-university-and-champagne-and-aishihik-first-nations-working-together-assess
- CAFN Retrofit Initiative: https://yukon.ca/en/news/government-yukon-and-champagne-and-aishihik-first-nations-partner-187m-retrofit-initiative
