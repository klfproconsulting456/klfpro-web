"use client";

import Script from "next/script";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

export function CalculatorWrapper() {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  
  const isAppRoute = pathname?.startsWith("/admin") || pathname?.startsWith("/portal") || pathname?.startsWith("/login");
  const isHealthcareRoute = segments?.includes("klfpro-healthcare") || pathname?.startsWith("/klfpro-healthcare");

  if (isAppRoute || isHealthcareRoute) {
    return null;
  }

  return (
    <>
      <link rel="stylesheet" href="/css/calculators.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <div dangerouslySetInnerHTML={{ __html: `    <div class="calc-overlay" id="calcOverlay">
        <div class="calc-container">
            
            <!-- MAIN HUB VIEW -->
            <div id="calcDashboard" class="calc-view calc-dashboard active">
                <div class="calc-header">
                    <h2 class="calc-title" style="text-align:center;">Dashboard</h2>
                    <button class="calc-close-btn" id="calcCloseBtn" onclick="CalculatorHub.closeHub()">&times;</button>
                </div>
                <div class="calc-content">
                    
                    <div class="calc-section">
                        <h3 class="calc-section-title">EMI Calculators</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcBasicEMI')">
                                <div class="calc-icon blue">🖩</div>
                                <span class="calc-item-name">EMI Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcQuick')">
                                <div class="calc-icon yellow">⚡</div>
                                <span class="calc-item-name">Quick Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcAdvanceEMI')">
                                <div class="calc-icon green">✨</div>
                                <span class="calc-item-name">Advance EMI</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcCompare')">
                                <div class="calc-icon blue" style="background:#60a5fa;">⚖️</div>
                                <span class="calc-item-name">Compare Loans</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">Loan</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcLoanProfile')">
                                <div class="calc-icon teal">💰</div>
                                <span class="calc-item-name">Loan Profile</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcPrePayment')">
                                <div class="calc-icon purple">⏱️</div>
                                <span class="calc-item-name">PrePayment/ROI Change</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcEligibility')">
                                <div class="calc-icon" style="background:#e879f9;">🏠</div>
                                <span class="calc-item-name">Check Eligibility</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcMoratorium')">
                                <div class="calc-icon indigo">📉</div>
                                <span class="calc-item-name">Moratorium Calculator</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">Banking Calculators</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcFD')">
                                <div class="calc-icon green">🏦</div>
                                <span class="calc-item-name">FD Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcRD')">
                                <div class="calc-icon blue">📅</div>
                                <span class="calc-item-name">RD Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcPPF')">
                                <div class="calc-icon yellow">📈</div>
                                <span class="calc-item-name">PPF Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcInterest')">
                                <div class="calc-icon blue" style="background:#3b82f6;">💵</div>
                                <span class="calc-item-name">Simple & Compound</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">GST & VAT</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcGST')">
                                <div class="calc-icon purple" style="background:#8b5cf6;">🧾</div>
                                <span class="calc-item-name">GST Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcVAT')">
                                <div class="calc-icon teal">📉</div>
                                <span class="calc-item-name">VAT Calculator</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- MORATORIUM CALCULATOR VIEW -->
            <div id="calcMoratorium" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn">&larr;</button>
                    <h2 class="calc-title">Moratorium Calculator</h2>
                </div>
                <div class="calc-content">
                    <div class="calc-form-group">
                        <label>Loan Amount</label>
                        <input type="text" inputmode="numeric" class="calc-input format-currency" id="morLoanAmount" placeholder="2,00,000">
                    </div>
                    <div class="calc-form-group">
                        <label>Interest %</label>
                        <input type="number" step="0.1" class="calc-input" id="morInterest" placeholder="8">
                    </div>
                    <div class="calc-form-group">
                        <label>Period</label>
                        <div class="calc-input-wrapper">
                            <input type="number" class="calc-input" id="morPeriod" placeholder="24">
                            <div class="calc-toggle" id="morPeriodToggle">
                                <span>Years</span> | <span class="active">Months</span>
                            </div>
                        </div>
                    </div>
                    <div class="calc-form-group" id="morInstallmentsGroup" style="display: none;">
                        <label>Installments Paid</label>
                        <input type="number" class="calc-input" id="morInstallments" placeholder="Month">
                    </div>
                    <div class="calc-form-group">
                        <label>Moratorium Period</label>
                        <input type="number" class="calc-input" id="morMoratorium" placeholder="Month">
                    </div>
                    <div class="calc-form-group">
                        <label>Select your option</label>
                        <select class="calc-input" id="morOption" onchange="CalculatorHub.toggleMoratoriumOption()">
                            <option value="emi">No change in monthly EMI</option>
                            <option value="tenure">No change in loan tenure</option>
                        </select>
                    </div>

                    <div class="calc-buttons">
                        <button class="calc-btn primary" onclick="CalculatorHub.calculateMoratorium()">Calculate</button>
                        <button class="calc-btn secondary" onclick="CalculatorHub.resetMoratorium()">Reset</button>
                    </div>

                    <table class="calc-result-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>No Moratorium</th>
                                <th>Moratorium Revise EMI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Principal</td>
                                <td id="morResNoPrincipal">-</td>
                                <td id="morResRevPrincipal">-</td>
                            </tr>
                            <tr>
                                <td>Monthly EMI</td>
                                <td id="morResNoEMI">-</td>
                                <td id="morResRevEMI">-</td>
                            </tr>
                            <tr>
                                <td>Tenure (In Month)</td>
                                <td id="morResNoTenure">-</td>
                                <td id="morResRevTenure" class="bold">-</td>
                            </tr>
                            <tr>
                                <td>Total Interest</td>
                                <td id="morResNoInterest">-</td>
                                <td id="morResRevInterest" class="bold">-</td>
                            </tr>
                            <tr>
                                <td>Total Payment</td>
                                <td id="morResNoPayment">-</td>
                                <td id="morResRevPayment">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 4. Quick Calculator -->
        <div id="calcQuick" class="calc-view">
            <div class="calc-header">
                <button class="calc-back-btn">&larr;</button>
                <h2 class="calc-title">Quick Calculator</h2>
            </div>
            <div class="calc-content">
                <!-- Tabs -->
                <div class="quick-tabs">
                    <button class="quick-tab active" onclick="CalculatorHub.switchQuickTab('emi')">EMI</button>
                    <button class="quick-tab" onclick="CalculatorHub.switchQuickTab('amount')">Amount</button>
                    <button class="quick-tab" onclick="CalculatorHub.switchQuickTab('period')">Period</button>
                    <button class="quick-tab" onclick="CalculatorHub.switchQuickTab('interest')">Interest</button>
                </div>

                <!-- Visualization Area -->
            <div class="quick-visual-area">
                <div class="quick-visual-stats">
                    <div class="stat-group">
                        <label>Total Interest</label>
                        <div id="quickTotalInterest" class="stat-val">0</div>
                    </div>
                    <div class="stat-group">
                        <label>Total Payment</label>
                        <div id="quickTotalPayment" class="stat-val">0</div>
                    </div>
                </div>
                <div class="quick-pie-wrapper">
                    <div id="quickPie" class="quick-pie"></div>
                    <div class="quick-pie-labels">
                        <span class="label-dot loan"></span> Loan Amount
                        <span class="label-dot interest"></span> Total Interest
                    </div>
                </div>
            </div>

            <!-- Result Highlight -->
            <div class="quick-result-highlight">
                <div id="quickResultTitle" class="res-title">Monthly EMI</div>
                <div id="quickResultValue" class="res-value">0</div>
                <div id="quickResultWords" class="res-words">Zero</div>
                <button class="calc-btn secondary outline" style="margin: 10px auto; display: block; width: fit-content; padding: 5px 15px;" onclick="CalculatorHub.showEMIDetails()">VIEW FULL DETAILS</button>
            </div>

            <!-- Dynamic Inputs -->
            <div class="quick-inputs-section">
                <!-- Amount Input -->
                <div class="quick-input-group" id="quickGroupAmount">
                    <div class="quick-input-header">
                        <label>Amount</label>
                        <div class="quick-input-box">
                            <span>₹</span>
                            <input type="number" id="quickAmount" class="quick-num-input" oninput="CalculatorHub.syncQuickInputs(false)">
                        </div>
                    </div>
                    <div class="quick-words" id="quickAmountWords">Zero</div>
                    <input type="range" id="quickAmountSlider" class="quick-slider" min="10000" max="10000000" step="10000" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>

                <!-- Interest Input -->
                <div class="quick-input-group" id="quickGroupInterest">
                    <div class="quick-input-header">
                        <label>Interest %</label>
                        <div class="quick-input-box">
                            <input type="number" id="quickInterest" class="quick-num-input" step="0.1" oninput="CalculatorHub.syncQuickInputs(false)">
                            <span>%</span>
                        </div>
                    </div>
                    <input type="range" id="quickInterestSlider" class="quick-slider" min="1" max="50" step="0.1" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>

                <!-- Period Input -->
                <div class="quick-input-group" id="quickGroupPeriod">
                    <div class="quick-input-header">
                        <label>Period</label>
                        <div class="quick-input-box">
                            <input type="number" id="quickPeriod" class="quick-num-input" oninput="CalculatorHub.syncQuickInputs(false)">
                            <span>Yr</span>
                        </div>
                    </div>
                    <div class="quick-words" id="quickPeriodMonths">0 months</div>
                    <input type="range" id="quickPeriodSlider" class="quick-slider" min="1" max="30" step="1" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>

                <!-- EMI Input -->
                <div class="quick-input-group" id="quickGroupEMI" style="display: none;">
                    <div class="quick-input-header">
                        <label>Monthly EMI</label>
                        <div class="quick-input-box">
                            <span>₹</span>
                            <input type="number" id="quickEMI" class="quick-num-input" oninput="CalculatorHub.syncQuickInputs(false)">
                        </div>
                    </div>
                    <div class="quick-words" id="quickEMIWords">Zero</div>
                    <input type="range" id="quickEMISlider" class="quick-slider" min="1000" max="500000" step="100" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>
            </div>
            </div> <!-- end calc-content -->
        </div>

            <!-- EMI DETAILS VIEW -->
            <div id="calcEMIDetails" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn" onclick="CalculatorHub.showView('calcQuick')">&larr;</button>
                    <h2 class="calc-title" style="flex-grow:1; text-align:center;">EMI Details</h2>
                    <button class="calc-btn secondary" style="padding: 5px 15px; font-size: 14px; margin-left: 10px;" onclick="CalculatorHub.downloadEMIPDF(this)"><i class="fas fa-download"></i> Download PDF</button>
                </div>
                <div class="calc-content" style="padding: 0; background: #fff;">
                    <div class="details-tab-container">
                        <div class="details-tab-wrapper">
                            <button class="details-tab active" onclick="CalculatorHub.switchDetailsTab('details')">Details</button>
                            <button class="details-tab" onclick="CalculatorHub.switchDetailsTab('chart')">Chart</button>
                        </div>
                    </div>

                    <div id="emiDetailsTab" class="details-tab-content active">
                        <!-- Summary Table -->
                        <table class="emi-summary-table">
                            <tbody>
                                <tr><td>Amount</td><td id="detAmount" class="bold-val">0</td></tr>
                                <tr><td>Interest %</td><td id="detInterest" class="bold-val">0</td></tr>
                                <tr><td>Period (Months)</td><td id="detPeriod" class="bold-val">0</td></tr>
                                <tr><td>Monthly EMI</td><td id="detEMI" class="bold-val">0</td></tr>
                                <tr><td>Total Interest</td><td id="detTotalInterest" class="bold-val">0</td></tr>
                                <tr><td>Processing Fees</td><td id="detProcFees" class="bold-val">0</td></tr>
                                <tr><td>Total Payment</td><td id="detTotalPayment" class="bold-val">0</td></tr>
                            </tbody>
                        </table>

                        <!-- Amortization Table -->
                        <div class="table-responsive" style="overflow-x: auto;">
                            <table class="amortization-table">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody id="amortizationBody">
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="emiChartTab" class="details-tab-content" style="display: none; padding: 20px;">
                        <div class="chart-wrapper" style="position: relative; height:400px; width:100%">
                            <canvas id="emiDetailsChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- COMPARE LOANS VIEW -->
            <div id="calcCompare" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn">&larr;</button>
                    <h2 class="calc-title">Compare Loans</h2>
                </div>
                <div class="calc-content">
                    <div class="compare-header">
                        <div>LOAN 1</div>
                        <div>LOAN 2</div>
                    </div>

                    <div class="compare-row">
                        <div class="compare-input-wrapper">
                            <input type="text" inputmode="numeric" class="format-currency" id="compLoan1" placeholder="1,00,000">
                        </div>
                        <div class="compare-arrow">&raquo;</div>
                        <div class="compare-input-wrapper">
                            <input type="text" inputmode="numeric" class="format-currency" id="compLoan2" placeholder="2,00,000">
                        </div>
                    </div>

                    <div class="compare-row">
                        <div class="compare-input-wrapper">
                            <input type="number" step="0.1" id="compInt1" placeholder="8">
                        </div>
                        <div class="compare-arrow">&raquo;</div>
                        <div class="compare-input-wrapper">
                            <input type="number" step="0.1" id="compInt2" placeholder="7">
                        </div>
                    </div>

                    <div class="compare-row">
                        <div class="compare-input-wrapper" style="position:relative; padding-right:60px;">
                            <input type="number" id="compPer1" placeholder="2">
                            <div class="calc-toggle" id="compPerToggle1" style="position:absolute; right:5px; font-size:0.7rem;">
                                <span class="active">Years</span> | <span>Months</span>
                            </div>
                        </div>
                        <div class="compare-arrow">&raquo;</div>
                        <div class="compare-input-wrapper" style="position:relative; padding-right:60px;">
                            <input type="number" id="compPer2" placeholder="2">
                            <div class="calc-toggle" id="compPerToggle2" style="position:absolute; right:5px; font-size:0.7rem;">
                                <span>Years</span> | <span class="active">Months</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-buttons">
                        <button class="calc-btn primary" onclick="CalculatorHub.calculateCompare()">Calculate</button>
                        <button class="calc-btn secondary" onclick="CalculatorHub.resetCompare()">Reset</button>
                    </div>

                    <div class="compare-result-card">
                        <div class="compare-result-title">Monthly EMI</div>
                        <div class="compare-result-values">
                            <div id="compEmi1" class="compare-result-val">-</div>
                            <div class="compare-result-divider"></div>
                            <div id="compEmi2" class="compare-result-val">-</div>
                        </div>
                        <div class="compare-result-diff">Difference: <span id="compDiffEmi">0</span></div>
                    </div>

                    <div class="compare-result-card">
                        <div class="compare-result-title">Total Interest</div>
                        <div class="compare-result-values">
                            <div id="compIntOut1" class="compare-result-val">-</div>
                            <div class="compare-result-divider"></div>
                            <div id="compIntOut2" class="compare-result-val">-</div>
                        </div>
                        <div class="compare-result-diff">Difference: <span id="compDiffInt">0</span></div>
                    </div>

                    <div class="compare-result-card">
                        <div class="compare-result-title">Total Payment</div>
                        <div class="compare-result-values">
                            <div id="compPay1" class="compare-result-val">-</div>
                            <div class="compare-result-divider"></div>
                            <div id="compPay2" class="compare-result-val">-</div>
                        </div>
                        <div class="compare-result-diff">Difference: <span id="compDiffPay">0</span></div>
                    </div>

                </div>
            </div>

            <!-- BASIC EMI CALCULATOR VIEW -->
            <div id="calcBasicEMI" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn">&larr;</button>
                    <h2 class="calc-title">EMI Calculator</h2>
                </div>
                <div class="calc-content">
                    <div class="calc-form-group">
                        <label>Loan Amount</label>
                        <input type="text" inputmode="numeric" class="calc-input format-currency" id="basicLoan" placeholder="1,00,000">
                    </div>
                    <div class="calc-form-group">
                        <label>Interest %</label>
                        <input type="number" step="0.1" class="calc-input" id="basicInt" placeholder="8.5">
                    </div>
                    <div class="calc-form-group">
                        <label>Period</label>
                        <div class="calc-input-wrapper">
                            <input type="number" class="calc-input" id="basicPer" placeholder="10">
                            <div class="calc-toggle" id="basicPerToggle">
                                <span class="active">Years</span> | <span>Months</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-form-group">
                        <label>Processing Fee %</label>
                        <input type="number" step="0.1" class="calc-input" id="basicProcFee" placeholder="Ex: 3">
                    </div>

                    <div class="calc-buttons">
                        <button class="calc-btn primary" onclick="CalculatorHub.calculateBasicEMI()">Calculate</button>
                        <button class="calc-btn secondary" onclick="CalculatorHub.resetBasicEMI()">Reset</button>
                    </div>

                    <table class="calc-result-table">
                        <tbody>
                            <tr>
                                <td>Monthly EMI</td>
                                <td id="basicResEmi" class="bold">-</td>
                            </tr>
                            <tr>
                                <td>Total Interest</td>
                                <td id="basicResInt">-</td>
                            </tr>
                            <tr>
                                <td>Processing Fees</td>
                                <td id="basicResProcFee">-</td>
                            </tr>
                            <tr>
                                <td>Total Payment</td>
                                <td id="basicResPay" class="bold">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
` }} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script src="/js/calculators.js" strategy="afterInteractive" />
    </>
  );
}
