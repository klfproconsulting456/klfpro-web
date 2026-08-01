exports.id=5073,exports.ids=[5073],exports.modules={26106:(e,a,t)=>{Promise.resolve().then(t.bind(t,99423)),Promise.resolve().then(t.bind(t,27575))},26141:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,33817,23)),Promise.resolve().then(t.t.bind(t,19323,23)),Promise.resolve().then(t.t.bind(t,52204,23)),Promise.resolve().then(t.t.bind(t,60820,23)),Promise.resolve().then(t.t.bind(t,55915,23)),Promise.resolve().then(t.t.bind(t,81611,23))},99423:(e,a,t)=>{"use strict";t.d(a,{CalculatorWrapper:()=>r});var l=t(19899),s=t(11834),i=t(76153);function r(){let e=(0,i.usePathname)(),a=(0,i.useSelectedLayoutSegments)(),t=e?.startsWith("/admin")||e?.startsWith("/portal")||e?.startsWith("/login"),r=a?.includes("klfpro-healthcare")||e?.startsWith("/klfpro-healthcare");return t||r?null:(0,l.jsxs)(l.Fragment,{children:[l.jsx("link",{rel:"stylesheet",href:"/css/calculators.css"}),l.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"}),l.jsx("div",{dangerouslySetInnerHTML:{__html:`    <div class="calc-overlay" id="calcOverlay">
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
`}}),l.jsx(s.default,{src:"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",strategy:"afterInteractive"}),l.jsx(s.default,{src:"https://cdn.jsdelivr.net/npm/chart.js",strategy:"afterInteractive"}),l.jsx(s.default,{src:"/js/calculators.js",strategy:"afterInteractive"})]})}},27575:(e,a,t)=>{"use strict";t.d(a,{AppChrome:()=>x});var l=t(19899),s=t(76153),i=t(30217);function r(){return l.jsx(i.S,{})}var c=t(54175),n=t(6324),o=t(723),d=t(91648),u=t(5507);function p(e){let a={"Personal Loan":"/loans/personal-loan","Home Loan":"/loans/home","Business Loan":"/loans/business","Loan Against Property":"/loans/loan-against-property","Car Loan":"/loans/car","Used Car Loan":"/loans/used-car","Two Wheeler Loan":"/loans/two-wheeler","Commercial Vehicle Loan":"/loans/commercial-vehicle","Education Loan":"/loans/education"};if(a[e])return a[e];if(e.includes("Calculator")||e.includes("Tax Benefit"))return"/emi-calculator";if("Check Free CIBIL Score"===e)return"/credit-score";let t={"HDFC Credit Card":"/credit-score","ICICI Credit Card":"/credit-score","Axis Credit Card":"/credit-score","SBI Credit Card":"/credit-score"};return t[e]?t[e]:e.includes("Credit Card")?"/credit-score":void 0}var m=t(95641);let h=[{key:"products",label:"Products & Offers"},{key:"tools",label:"Tools & Calculators"},{key:"cibil",label:"CIBIL Score"},{key:"cards",label:"Credit Cards"}],v={products:{eyebrow:"Products & Offers",title:"Loan products",description:"Pick a category — we match you with the right lenders.",columns:[{title:"Personal & business",items:["Personal Loan","Home Loan","Business Loan","Loan Against Property"]},{title:"Vehicle",items:["Car Loan","Used Car Loan","Two Wheeler Loan","Commercial Vehicle Loan"]},{title:"Education",items:["Education Loan"]}]},tools:{eyebrow:"Tools & Calculators",title:"Smart calculators",description:"Plan EMIs, eligibility, and savings before you apply.",columns:[{title:"EMI & eligibility",items:["Personal Loan EMI Calculator","Home Loan EMI Calculator","Personal Loan Eligibility Calculator","Home Loan Eligibility Calculator"]},{title:"Prepay & transfer",items:["Personal Loan Pre Payment Calculator","Home Loan Pre Payment Calculator","Personal Loan Balance Transfer Calculator","Home Loan Balance Transfer Calculator"]},{title:"More tools",items:["Home Loan Tax Benefit Calculator","Bike Loan EMI Calculator","Car Loan EMI Calculator","Used Car Loan EMI Calculator","Education Loan EMI Calculator"]}]},cibil:{eyebrow:"CIBIL Score",title:"Credit health",description:"Check your score and unlock offers tailored to your profile.",columns:[{title:"Get started",items:["Check Free CIBIL Score"]}]},cards:{eyebrow:"Credit Cards",title:"Top issuers",description:"Compare rewards, fees, and limits across partner banks.",columns:[{title:"Popular",items:["HDFC Credit Card","ICICI Credit Card","Yes Pop-Club Credit Card","Axis Credit Card"]},{title:"More banks",items:["IDFC Credit Card","HSBC Credit Card","SBI Credit Card","AU Small Finance Credit Card"]},{title:"Others",items:["IndusInd Bank Credit Card","Bank of Baroda Credit Card","Kiwi Credit Card"]}]}};function b({lightSentinelRef:e,partnerHref:a="/contact"}){let t=(0,s.useRouter)(),i=(0,u.useRef)(null);(0,d.Y)(e??i,{margin:"-72px 0px 0px 0px",amount:.05});let[r,b]=(0,u.useState)(null),[x,f]=(0,u.useState)(!1),[g,y]=(0,u.useState)(!1),C=(0,u.useRef)(null),k=(0,u.useRef)(null),w=(0,u.useRef)(null),j=r?v[r]:null,I=x||null!==r,P=()=>{k.current&&(clearTimeout(k.current),k.current=null),w.current&&(clearTimeout(w.current),w.current=null)},A=e=>{w.current&&(clearTimeout(w.current),w.current=null),k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{y(!1),b(e),k.current=null},45)},N=()=>{P(),b(null),y(!1)},L=e=>{let a=p(e),s="group flex w-full items-center justify-between gap-3 rounded-xl border border-[#0A1128]/15 bg-gradient-to-r from-white/[0.03] to-[#D4AF37]/[0.04] px-3.5 py-2.5 text-left text-[13px] font-medium text-[#0A1128] transition hover:border-[#D4AF37]/35 hover:from-[#D4AF37]/10 hover:to-[#fef3c7]/12 hover:text-[#0A1128] hover:shadow-[0_0_24px_-8px_rgba(212,175,55,0.28)]";return a?(0,l.jsxs)(c.default,{href:a,onMouseEnter:()=>t.prefetch(a),onFocus:()=>t.prefetch(a),onClick:N,className:s,children:[(0,l.jsxs)("span",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#fde68a] opacity-80 transition group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.75)]"}),e]}),l.jsx("span",{className:"text-[#B8972E] opacity-0 transition group-hover:opacity-100","aria-hidden":!0,children:"→"})]}):(0,l.jsxs)("button",{type:"button",className:s,children:[(0,l.jsxs)("span",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"}),e]}),l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-[#1E293B]",children:"Soon"})]})};return l.jsx("div",{ref:C,className:"fixed left-0 right-0 top-0 z-[100]",onMouseEnter:()=>{w.current&&(clearTimeout(w.current),w.current=null)},onMouseLeave:()=>{k.current&&(clearTimeout(k.current),k.current=null),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{b(null),w.current=null},220)},children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)(n.E.header,{className:`relative overflow-hidden border-b text-[#0A1128] backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${I?"border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_12px_40px_-14px_rgba(0,0,0,0.55)]":"border-[#0A1128]/15 bg-[#FAF6EE]/80 shadow-[0_8px_32px_-18px_rgba(0,0,0,0.35)]"}`,initial:!1,children:[l.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.04)_0%,transparent_22%,transparent_78%,rgba(153,27,51,0.04)_100%)] opacity-90","aria-hidden":!0}),(0,l.jsxs)("div",{className:"relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-5 md:gap-4 md:px-6",children:[l.jsx(m.n,{showConsulting:!0,size:"compact",wordmarkClassName:"text-[#0A1128]"}),(0,l.jsxs)("nav",{className:"hidden items-center gap-2 text-[14px] font-medium md:flex",children:[h.map(e=>{let a=r===e.key;return(0,l.jsxs)("button",{type:"button",onMouseEnter:()=>A(e.key),onFocus:()=>{y(!1),b(e.key)},onClick:()=>{y(!1),b(a=>a===e.key?null:e.key)},className:`group relative flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors ${a?"bg-[#0A1128]/15 text-[#0A1128] shadow-[0_0_0_1px_rgba(212,175,55,0.45)]":"text-[#0A1128]/88 hover:bg-[#0A1128]/5 hover:text-[#0A1128]"}`,"aria-expanded":a,children:[(0,l.jsxs)("span",{className:"relative",children:[e.label,l.jsx("span",{className:`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#fef3c7] via-[#D4AF37] to-amber-300 transition-transform duration-300 ease-out group-hover:scale-x-100 ${a?"scale-x-100":""}`,"aria-hidden":!0})]}),l.jsx(n.E.span,{animate:{rotate:a?180:0},transition:{duration:.2},className:"text-[10px] opacity-75","aria-hidden":!0,children:"▾"})]},e.key)}),l.jsx("div",{className:"hidden items-center lg:flex",children:l.jsx(c.default,{href:"https://www.klfprohealthcare.com",className:"group relative flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors text-[#0A1128]/88 hover:bg-[#0A1128]/5 hover:text-[#0A1128]",children:l.jsx("span",{className:"relative font-bold text-[#0A66C2]",children:"KLFPRO Healthcare"})})})]}),(0,l.jsxs)("div",{className:"flex items-center gap-2 md:gap-3",children:[l.jsx("button",{type:"button",className:"inline-flex h-10 items-center justify-center rounded-lg border border-[#0A1128]/25 bg-[#0A1128]/5 px-3 text-xs font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5 md:hidden","aria-expanded":g,"aria-controls":"klf-mobile-nav",onClick:()=>y(e=>!e),children:g?"Close":"Menu"}),l.jsx(c.default,{href:"/login",className:"interactive-lift hidden rounded-full border border-white/35 px-4 py-2 text-[14px] font-semibold text-[#0A1128] transition-colors hover:bg-[#0A1128]/5 md:inline-flex",children:"Login"})]})]})]}),l.jsx(o.M,{initial:!1,children:g?l.jsx(n.E.div,{id:"klf-mobile-nav",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.28,ease:[.22,1,.36,1]},className:"border-b border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden",children:(0,l.jsxs)("div",{className:"max-h-[min(72vh,calc(100dvh-72px))] overflow-y-auto px-5 pb-5 pt-2",children:[h.map(e=>{let a=v[e.key];return(0,l.jsxs)("div",{className:"border-b border-[#0A1128]/15 py-4 last:border-b-0",children:[l.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8972E]/85",children:a.eyebrow}),l.jsx("p",{className:"mt-1 text-base font-semibold text-[#0A1128]",children:a.title}),l.jsx("div",{className:"mt-3 space-y-4",children:a.columns.map(e=>(0,l.jsxs)("div",{children:[l.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-[#1E293B]",children:e.title}),l.jsx("ul",{className:"mt-2 space-y-1",children:e.items.map(e=>{let a=p(e);return l.jsx("li",{children:a?l.jsx(c.default,{href:a,className:"block rounded-lg px-2 py-2 text-[13px] text-[#0A1128] transition hover:bg-[#0A1128]/5 hover:text-[#0A1128]",onClick:N,children:e}):l.jsx("span",{className:"block rounded-lg px-2 py-2 text-[13px] text-[#1E293B]",children:e})},e)})})]},e.title))})]},e.key)}),(0,l.jsxs)("div",{className:"mt-4 flex flex-col gap-2 border-t border-[#0A1128]/15 pt-4",children:[l.jsx(c.default,{href:"https://www.klfprohealthcare.com",className:"inline-flex h-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[14px] font-bold text-[#0A66C2] transition hover:bg-blue-100",onClick:N,children:"KLFPRO Healthcare"}),l.jsx(c.default,{href:"/login",className:"inline-flex h-11 items-center justify-center rounded-full border border-white/35 text-[14px] font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5",onClick:N,children:"Login"})]})]})}):null}),l.jsx(o.M,{initial:!1,children:j&&r?(0,l.jsxs)(n.E.div,{initial:{opacity:0,y:-16,rotateX:-12},animate:{opacity:1,y:0,rotateX:0},exit:{opacity:0,y:-10,rotateX:-8},transition:{type:"spring",damping:32,stiffness:380,mass:.72},style:{transformPerspective:1400,transformOrigin:"top center"},className:"absolute left-0 right-0 top-[72px] z-[110] max-h-[min(78vh,calc(100dvh-72px))] overflow-y-auto overflow-x-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.72)] backdrop-blur-2xl",children:[l.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-[0.28] klf-hero-grid-motion","aria-hidden":!0}),l.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-[#fde68a]/35","aria-hidden":!0}),(0,l.jsxs)("div",{className:"relative mx-auto max-w-[1200px] px-5 pb-8 pt-9 md:px-6",children:[(0,l.jsxs)("div",{className:"mb-8 flex flex-col gap-2 border-b border-[#0A1128]/15 pb-6 md:flex-row md:items-end md:justify-between",children:[(0,l.jsxs)("div",{children:[l.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] to-[#D4AF37]",children:j.eyebrow}),l.jsx("h3",{className:"mt-1 text-2xl font-bold tracking-tight text-[#0A1128] md:text-3xl",children:j.title}),l.jsx("p",{className:"mt-2 max-w-xl text-sm text-[#1E293B]",children:j.description})]}),(0,l.jsxs)(c.default,{href:"tools"===r?"/emi-calculator":"cibil"===r?"/credit-score":"/loans/personal-loan",onClick:N,className:"mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/15 to-[#fde68a]/15 px-5 py-2 text-sm font-semibold text-[#B8972E] transition hover:border-[#D4AF37]/55 hover:from-[#D4AF37]/25 hover:to-[#fde68a]/22 md:mt-0",children:[l.jsx("span",{className:"text-[#B8972E]",children:"✦"})," Quick view",l.jsx("span",{"aria-hidden":!0,children:"→"})]})]}),l.jsx("div",{className:`grid gap-6 md:gap-8 ${j.columns.length>=3?"md:grid-cols-3":2===j.columns.length?"md:grid-cols-2":"md:max-w-md"}`,children:j.columns.map((e,a)=>(0,l.jsxs)(n.E.div,{initial:{opacity:0,y:14,rotateX:6},animate:{opacity:1,y:0,rotateX:0},transition:{type:"spring",damping:28,stiffness:320,delay:.04*a},style:{transformPerspective:1e3},className:"rounded-2xl border border-[#0A1128]/15 bg-gradient-to-b from-white/[0.07] from-10% via-[#D4AF37]/[0.04] to-transparent p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md",children:[(0,l.jsxs)("p",{className:"mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#B8972E]",children:[l.jsx("span",{className:"h-px w-6 bg-gradient-to-r from-[#D4AF37] to-[#fde68a]","aria-hidden":!0}),e.title]}),l.jsx("ul",{className:"flex flex-col gap-2",children:e.items.map((e,t)=>l.jsx(n.E.li,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{type:"spring",damping:34,stiffness:400,delay:.04+.04*a+.018*t},children:L(e)},e))})]},e.title))})]})]},r):null})]})})}function x({children:e}){let a=(0,s.usePathname)(),t=(0,s.useSelectedLayoutSegments)(),i="/"===a,c=a.startsWith("/loans/"),n=a.startsWith("/admin")||a.startsWith("/portal")||a.startsWith("/login"),o=t.includes("klfpro-healthcare")||a.startsWith("/klfpro-healthcare");return n||o?l.jsx(l.Fragment,{children:e}):(0,l.jsxs)(l.Fragment,{children:[l.jsx(b,{partnerHref:i?"#eligibility":"/contact"}),i||c?e:(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{className:"pt-[72px]",children:e}),l.jsx(r,{})]})]})}},95641:(e,a,t)=>{"use strict";t.d(a,{n:()=>i});var l=t(19899),s=t(54175);function i({className:e,wordmarkClassName:a="text-zinc-900",asLink:t=!0,size:i="default",showConsulting:r=!1}){let c=(0,l.jsxs)(l.Fragment,{children:[l.jsx("span",{className:`relative shrink-0 flex items-center ${"compact"===i?"h-8 md:h-10 w-auto":"h-10 md:h-12 w-auto"}`,children:l.jsx("img",{src:"/healthcare-logo.png",alt:"KLFPRO Logo",className:"h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"})}),(0,l.jsxs)("span",{className:`select-none ${"compact"===i?"text-[16px] md:text-[17px] font-medium lowercase leading-none tracking-tight":"text-[18px] font-medium lowercase leading-none tracking-tight md:text-[20px]"} ${a}`,children:["KLFPRO"," ",r&&l.jsx("span",{className:"font-semibold text-[#D4A937]",children:"Consulting"})]})]}),n=`flex items-center gap-2 group ${e??""}`;return t?l.jsx(s.default,{href:"/",className:n,"aria-label":"KLFPRO home",children:c}):l.jsx("span",{className:n,children:c})}},30217:(e,a,t)=>{"use strict";t.d(a,{S:()=>n});var l=t(19899),s=t(54175),i=t(6324);let r=[{name:"Home Loan",href:"/loans/home"},{name:"Personal Loan",href:"/loans/personal-loan"},{name:"Business Loan",href:"/loans/business"},{name:"Loan Against Property",href:"/loans/loan-against-property"},{name:"Car Loan",href:"/loans/car"},{name:"MSME Loan",href:"/loans/msme"},{name:"Commercial Vehicle Loan",href:"/loans/commercial-vehicle"},{name:"Education Loan",href:"/loans/education"}],c=[{name:"Home",href:"/"},{name:"About Us",href:"/about-us"},{name:"Contact Us",href:"/contact"},{name:"Careers",href:"/careers"},{name:"FAQs",href:"/faqs"}];function n(){return(0,l.jsxs)(i.E.footer,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.08},transition:{duration:.55,ease:[.22,1,.36,1]},className:"border-t border-white/10 bg-[#081428] text-white shadow-[0_-24px_80px_-40px_rgba(0,0,0,0.5)]",children:[(0,l.jsxs)("div",{className:"mx-auto grid grid-cols-1 max-w-[1170px] gap-10 px-5 py-10 md:grid-cols-[1.8fr_1fr_1fr] md:px-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center gap-3 group",children:[l.jsx("img",{src:"/healthcare-logo.png",alt:"KLFPRO mark",className:"h-[40px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"}),l.jsx("span",{className:"text-[24px] font-semibold leading-none tracking-tight text-white",children:"klfpro consulting"})]}),l.jsx("p",{className:"mt-4 max-w-[430px] text-[13px] leading-[1.8] text-white/60",children:"KLFPRO Consulting is one of India's trusted and unbiased financial advisory platforms, offering the best deals across a wide range of loan products along with expert guidance. We serve as a one-stop solution for all your lending needs, managing the entire borrowing journey-from helping you choose the right financial product and lender to ensuring smooth and timely loan disbursement."}),l.jsx("h4",{className:"mt-6 text-[16px] font-semibold leading-none text-white",children:"Contact Us"}),(0,l.jsxs)("div",{className:"mt-2 space-y-1 text-[13px] leading-7 text-white/70",children:[l.jsx("p",{children:"OFFICE NO.1142, TOWER B3, SPAZE ITECH PARK, GURUGRAM"}),l.jsx("p",{children:"0124-4068700"}),l.jsx("p",{children:"info@klfpro.in"}),l.jsx("p",{children:"Mon-Sat: 10AM - 7PM"})]}),l.jsx("h4",{className:"mt-8 text-[18px] font-semibold leading-none text-white",children:"Keep in Touch"}),(0,l.jsxs)("div",{className:"mt-4 flex items-center gap-3",children:[l.jsx("a",{href:"#",className:"flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform duration-200 hover:-translate-y-1","aria-label":"LinkedIn",children:l.jsx("svg",{className:"h-3.5 w-3.5",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),l.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:-translate-y-1","aria-label":"X",children:l.jsx("svg",{className:"h-3.5 w-3.5",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),l.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-200 hover:-translate-y-1","aria-label":"Facebook",children:l.jsx("svg",{className:"h-3.5 w-3.5",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"})})}),l.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-transform duration-200 hover:-translate-y-1","aria-label":"Instagram",children:l.jsx("svg",{className:"h-3.5 w-3.5",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})})]}),l.jsx("div",{className:"mt-8",children:l.jsx("p",{className:"text-[11px] lg:text-[14px] font-bold uppercase tracking-wider text-white/50",children:"CIN: U70200HR2025PTC138274"})})]}),(0,l.jsxs)("div",{children:[l.jsx("h4",{className:"text-[16px] font-semibold leading-none tracking-wide text-white/50",children:"PRODUCTS"}),l.jsx("ul",{className:"mt-4 space-y-3 text-[13px] text-white/80",children:r.map(e=>l.jsx("li",{children:l.jsx(s.default,{href:e.href,className:"transition hover:text-[#D4AF37]",children:e.name})},e.name))})]}),(0,l.jsxs)("div",{children:[l.jsx("h4",{className:"text-[16px] font-semibold leading-none tracking-wide text-white/50",children:"COMPANY"}),l.jsx("ul",{className:"mt-4 space-y-3 text-[13px] text-white/80",children:c.map(e=>l.jsx("li",{children:l.jsx(s.default,{href:e.href,className:"transition hover:text-[#D4AF37]",children:e.name})},e.name))})]})]}),l.jsx("div",{className:"border-t border-white/10",children:(0,l.jsxs)("div",{className:"mx-auto flex max-w-[1170px] flex-col justify-between gap-3 px-5 py-4 text-[13px] text-white/50 md:flex-row md:px-6",children:[l.jsx("p",{children:"\xa9 2024 www.klfpro.in. All rights reserved."}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[l.jsx(s.default,{href:"#",className:"transition hover:text-[#D4AF37]",children:"Terms and Conditions"}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsx(s.default,{href:"#",className:"transition hover:text-[#D4AF37]",children:"Policy of Use"})]})]})})]})}},61239:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>u,metadata:()=>d});var l=t(35023),s=t(81695),i=t.n(s);t(40642);var r=t(2772);let c=(0,r.createProxy)(String.raw`D:\Desktop\klfpro-website\frontend\components\layout\AppChrome.tsx#AppChrome`);var n=t(51324);let o=(0,r.createProxy)(String.raw`D:\Desktop\klfpro-website\frontend\components\calculators\CalculatorWrapper.tsx#CalculatorWrapper`),d={metadataBase:new URL(n.JA.domain),title:"KLFPRO Consulting | Your Financial Journey Simplified",description:"Expert financial consulting, loan aggregation, and tailored advisory services by KLFPRO.",openGraph:{title:"KLFPRO Consulting | Your Financial Journey Simplified",description:"Expert financial consulting, loan aggregation, and tailored advisory services by KLFPRO.",url:n.JA.domain,siteName:"KLFPRO Consulting",type:"website"},robots:{index:!0,follow:!0}};function u({children:e}){return(0,l.jsxs)("html",{lang:"en",className:i().variable,children:[(0,l.jsxs)("head",{children:[l.jsx("script",{dangerouslySetInnerHTML:{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`}}),l.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"}),l.jsx("script",{dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX'); // Replace with actual Measurement ID
            `}})]}),(0,l.jsxs)("body",{className:`${i().className} font-sans overflow-x-hidden w-full max-w-[100vw]`,children:[l.jsx("noscript",{children:l.jsx("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),l.jsx(c,{children:e}),l.jsx(o,{})]})]})}},51324:(e,a,t)=>{"use strict";t.d(a,{JA:()=>l,SZ:()=>s});let l={brandName:"KLFPRO Consulting",domain:"https://klfpro.in",phonePrimary:"0124-4068700",phoneSecondary:"+91 9711000680",emailPrimary:"info@klfpro.com",emailSecondary:"klfproconsulting@gmail.com",address:"OFFICE NO.1142, TOWER B3, SPAZE I-TECH PARK, GURUGAON",hours:"Mon-Sat: 9AM - 6PM"},s=["Home Loans","Business Loans","Personal Loans","Loan Against Property","Car Loans","MSME Loan","Loan Against Virtual Unit","Commercial property loan"]},40642:()=>{}};