# Financial Model — Steel Detailing Business

> Three scenarios: solo freelancer, small firm Year 1, small firm Year 3 (mature). Plus sensitivity table. Open the [financial-model.csv](financial-model.csv) in Excel/Sheets to edit assumptions.

---

## Scenario A — Solo Freelancer (working from home)

**Assumptions:** 3 fabricator clients, ~4 small projects each per year, $8K avg project. Plus 200 hrs/yr of side work (RFIs, change orders) at $75/hr.

### Revenue
| Line | Value |
|---|---|
| Active client logos | 3 |
| Avg projects / client / year | 4 |
| Avg revenue / project | $8,000 |
| **Project revenue** | **$96,000** |
| Hourly side work (200 hrs × $75) | $15,000 |
| **TOTAL REVENUE** | **$111,000** |

### Costs
| Line | Value |
|---|---|
| Software (SDS/2 or Tekla, 1 seat) | $3,000 |
| RISA / Descon / Bluebeam / Mathcad | $2,500 |
| Hardware (amortized 3 yr) | $1,000 |
| E&O insurance ($1M) | $3,000 |
| GL + cyber insurance | $1,500 |
| Sub-contracted P.E. stamping (per job) | $8,000 |
| NISD certification + dues | $500 |
| Website + marketing | $3,000 |
| Office (home allocation) | $2,000 |
| Bookkeeping + tax prep | $2,500 |
| Legal / misc | $1,500 |
| **TOTAL COSTS** | **$28,500** |

### Bottom line
| | |
|---|---|
| **Net income (pre-tax)** | **$82,500** |
| **Net margin** | **74.3%** |

> **Reality check:** This is the upside for someone with prior detailing experience and a few warm contacts. Realistic year-1 freelance number for someone starting cold is closer to **$30K–$50K**.

---

## Scenario B — Small Firm with Offshore (Year 1)

**Assumptions:** 5 fabricator clients, 5 projects each at $18K avg. Connection design adds 10%. Premium add-ons (BIM coordination, sequencing) add another $30K. Founder takes a modest salary; 2 offshore modelers + 1 PT US contractor.

### Revenue
| Line | Value |
|---|---|
| Active client logos | 5 |
| Avg projects / client / year | 5 |
| Avg revenue / project | $18,000 |
| **Project revenue** | **$450,000** |
| Connection design (10% add-on) | $45,000 |
| Premium add-ons (BIM / sequencing) | $30,000 |
| **TOTAL REVENUE** | **$525,000** |

### Costs
| Line | Value |
|---|---|
| Founder salary / draw | $80,000 |
| US senior detailer (PT contractor) | $55,000 |
| Offshore modeler #1 (all-in) | $18,000 |
| Offshore modeler #2 (all-in) | $18,000 |
| Offshore senior checker (mo. 9+) | $8,000 |
| Sub-contracted Texas P.E. | $30,000 |
| Software (3 detailing seats) | $9,000 |
| Other software (Revit / RISA / Bluebeam) | $6,000 |
| Hardware (3 seats amortized) | $3,000 |
| Insurance (E&O $2M + GL + cyber) | $7,000 |
| Office / co-working | $9,000 |
| Sales & marketing | $18,000 |
| Legal + accounting | $8,000 |
| NISD + AISC alignment | $4,000 |
| Travel (NASCC + clients) | $8,000 |
| Misc / contingency | $12,000 |
| **TOTAL COSTS** | **$293,000** |

### Bottom line
| | |
|---|---|
| **EBITDA** | **$232,000** |
| **EBITDA margin** | **44.2%** |

---

## Scenario C — Small Firm at Year 3 (mature state)

**Assumptions:** 12 fabricator clients with repeat work, avg 6 projects/yr at $22K. Offshore team scaled to 8 modelers + 2 checkers. Fractional P.E. with Texas + 5 other states. Small training revenue from SDS/2 program.

### Revenue
| Line | Value |
|---|---|
| Active client logos | 12 |
| Avg projects / client / year | 6 |
| Avg revenue / project | $22,000 |
| **Project revenue** | **$1,584,000** |
| Connection design (12% add-on) | $190,080 |
| Premium add-ons | $80,000 |
| Training revenue | $40,000 |
| **TOTAL REVENUE** | **$1,894,080** |

### Costs
| Line | Value |
|---|---|
| Founder salary | $140,000 |
| US team (2 senior detailers + 1 BD) | $260,000 |
| Offshore team (8 modelers + 2 checkers) | $200,000 |
| P.E. engineer (fractional, multi-state) | $90,000 |
| Software (10 seats + tools) | $40,000 |
| Hardware amortized | $12,000 |
| Insurance | $18,000 |
| Office (US + India floor) | $60,000 |
| Sales & marketing | $90,000 |
| Legal + accounting | $18,000 |
| Certifications + memberships | $8,000 |
| Travel + events | $30,000 |
| Misc / contingency | $40,000 |
| **TOTAL COSTS** | **$1,006,000** |

### Bottom line
| | |
|---|---|
| **EBITDA** | **$888,080** |
| **EBITDA margin** | **46.9%** |

---

## Sensitivity — Year 1 Small Firm

| Case | Clients × Projects | Revenue | Costs | EBITDA | Margin |
|---|---|---|---|---|---|
| **Bear** | 3 × 4 | $216,000 | $265,000 | **−$49,000** | −22.7% |
| **Base** | 5 × 5 | $525,000 | $293,000 | **$232,000** | 44.2% |
| **Bull** | 7 × 6 | $882,000 | $335,000 | **$547,000** | 62.0% |

The **bear case loses money** because fixed costs (founder salary, US contractor, software, insurance) don't scale down. Lesson: get to 4+ active clients within 9 months or cut the US contractor and go fully offshore.

---

## Cash flow notes

- **P&L vs cash:** Year 1 cash flow lags the P&L by 60–90 days (clients pay net-30 to net-90). Plan for ~3 months of operating cash on hand before scaling headcount.
- **Founder salary:** In Year 1, expect to draw less than the $80K shown — some founders take $40K–60K Year 1 to accelerate margin.
- **Tax:** Numbers above are pre-tax. For a Texas LLC, no state income tax helps — federal pass-through still applies.

## How to use the CSV

[financial-model.csv](financial-model.csv) opens directly in Excel or Google Sheets. Change any cell in the **Value** column to flex assumptions. Total/EBITDA rows show as static values in the CSV — re-derive in your spreadsheet with `SUM()` formulas if you want it dynamic.

## Key levers (in order of P&L impact)

1. **Number of active clients** — bigger driver than $/ton rate
2. **Offshore vs US labor mix** — every US-side replacement of an offshore seat costs ~$40K–$60K/yr
3. **Connection design attach rate** — biggest margin add-on
4. **Per-project size** — 200-ton vs 800-ton projects have similar overhead
5. **Founder time on selling vs delivery** — if you're 100% delivery you'll plateau

Adjust those five and you can model essentially any version of this business.
