const CalculatorHub = {
    init() {
        this.setupEventListeners();
        this.initQuickCalculator();
    },

    setupEventListeners() {
        // Overlay toggle
        const fab = document.getElementById('calcFab');
        const overlay = document.getElementById('calcOverlay');
        const closeBtn = document.getElementById('calcCloseBtn');
        
        if (fab) fab.addEventListener('click', () => this.openHub());
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeHub());
        if (overlay) overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.closeHub();
        });

        // Navigation
        document.querySelectorAll('.calc-back-btn').forEach(btn => {
            btn.addEventListener('click', () => this.showView('calcDashboard'));
        });

        // Toggle Buttons (Years | Months)
        document.querySelectorAll('.calc-toggle span').forEach(span => {
            span.addEventListener('click', (e) => {
                const parent = e.target.closest('.calc-toggle');
                parent.querySelectorAll('span').forEach(s => s.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Prevent non-numbers in number inputs
        document.querySelectorAll('.calc-input[type="number"]').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value < 0) this.value = 0;
            });
        });

        // Format currency inputs with Indian commas
        document.querySelectorAll('.format-currency').forEach(input => {
            input.addEventListener('input', function(e) {
                // Remove all non-digits
                let val = this.value.replace(/\D/g, '');
                if (val !== '') {
                    // Format as Indian Rupee (without symbol)
                    val = Number(val).toLocaleString('en-IN');
                }
                this.value = val;
            });
        });
    },

    openHub() {
        const overlay = document.getElementById('calcOverlay');
        if (overlay) {
            overlay.classList.add('active');
            this.showView('calcDashboard');
        }
    },

    closeHub() {
        const overlay = document.getElementById('calcOverlay');
        if (overlay) overlay.classList.remove('active');
    },

    showView(viewId) {
        document.querySelectorAll('.calc-view').forEach(view => {
            view.classList.remove('active');
        });
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
        }
    },

    openCalculator(calcId) {
        const supported = ['calcMoratorium', 'calcCompare', 'calcBasicEMI', 'calcQuick'];
        if (supported.includes(calcId)) {
            this.showView(calcId);
        } else {
            alert('This calculator is coming soon!');
        }
    },

    formatCurrency(val) {
        return Number(val).toLocaleString('en-IN', { maximumFractionDigits: 1 });
    },

    parseInput(id) {
        const el = document.getElementById(id);
        if (!el || !el.value) return 0;
        // Strip commas before parsing
        const cleanVal = el.value.replace(/,/g, '');
        return parseFloat(cleanVal) || 0;
    },

    // Standard PMT Formula
    calculateEMI(principal, ratePerYear, months) {
        if (ratePerYear === 0) return principal / months;
        const r = (ratePerYear / 12) / 100;
        const pmt = principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
        return pmt;
    },

    // ============== MORATORIUM CALCULATOR ==============
    toggleMoratoriumOption() {
        const option = document.getElementById('morOption').value;
        const instGroup = document.getElementById('morInstallmentsGroup');
        if (option === 'tenure') {
            instGroup.style.display = 'flex';
        } else {
            instGroup.style.display = 'none';
        }
    },

    calculateMoratorium() {
        const principal = this.parseInput('morLoanAmount');
        const rate = this.parseInput('morInterest');
        let period = this.parseInput('morPeriod');
        const isMonths = document.querySelector('#morPeriodToggle .active').textContent.trim() === 'Months';
        if (!isMonths) period = period * 12; // convert years to months
        
        const moratorium = this.parseInput('morMoratorium');
        const option = document.getElementById('morOption').value;
        
        // 1. No Moratorium (Standard)
        const emiStandard = this.calculateEMI(principal, rate, period);
        const totalPaymentStandard = emiStandard * period;
        const totalInterestStandard = totalPaymentStandard - principal;

        // 2. With Moratorium
        const r = (rate / 12) / 100;
        let newPrincipal = 0;
        let newEmi = 0;
        let newTenure = 0;
        let newTotalInterest = 0;
        let newTotalPayment = 0;

        if (option === 'emi') {
            // Option 1: No change in monthly EMI
            newPrincipal = principal * Math.pow(1 + r, moratorium);
            newEmi = emiStandard;
            if (emiStandard > newPrincipal * r) {
                const num = 1 - (newPrincipal * r) / emiStandard;
                if (num > 0) {
                    newTenure = -Math.log(num) / Math.log(1 + r);
                    newTenure = Math.ceil(newTenure); 
                    newTotalPayment = newEmi * newTenure;
                    newTotalInterest = newTotalPayment - newPrincipal;
                }
            }
        } else {
            // Option 2: No change in loan tenure
            const installmentsPaid = this.parseInput('morInstallments');
            const remainingBeforeMorat = period - installmentsPaid;
            let outstanding = principal;
            
            if (installmentsPaid > 0 && remainingBeforeMorat > 0) {
                // PV of remaining payments
                outstanding = emiStandard * (1 - Math.pow(1 + r, -remainingBeforeMorat)) / r;
            }
            
            newPrincipal = outstanding * Math.pow(1 + r, moratorium);
            newTenure = remainingBeforeMorat - moratorium;
            
            if (newTenure > 0) {
                newEmi = this.calculateEMI(newPrincipal, rate, newTenure);
                newTotalPayment = newEmi * newTenure;
                newTotalInterest = newTotalPayment - newPrincipal;
            }
        }

        // Update UI
        document.getElementById('morResNoPrincipal').textContent = this.formatCurrency(principal);
        document.getElementById('morResNoEMI').textContent = this.formatCurrency(emiStandard);
        document.getElementById('morResNoTenure').textContent = period;
        document.getElementById('morResNoInterest').textContent = this.formatCurrency(totalInterestStandard);
        document.getElementById('morResNoPayment').textContent = this.formatCurrency(totalPaymentStandard);

        document.getElementById('morResRevPrincipal').textContent = this.formatCurrency(newPrincipal);
        document.getElementById('morResRevEMI').textContent = this.formatCurrency(newEmi);
        document.getElementById('morResRevTenure').textContent = newTenure;
        document.getElementById('morResRevInterest').textContent = this.formatCurrency(newTotalInterest);
        document.getElementById('morResRevPayment').textContent = this.formatCurrency(newTotalPayment);
    },

    resetMoratorium() {
        document.getElementById('morLoanAmount').value = '';
        document.getElementById('morInterest').value = '';
        document.getElementById('morPeriod').value = '';
        document.getElementById('morMoratorium').value = '';
        document.getElementById('morInstallments').value = '';
        
        document.querySelectorAll('#calcMoratorium .bold').forEach(el => el.textContent = '-');
    },

    // ============== COMPARE LOANS ==============
    calculateCompare() {
        // Loan 1
        const p1 = this.parseInput('compLoan1');
        const r1 = this.parseInput('compInt1');
        let t1 = this.parseInput('compPer1');
        const isMonths1 = document.querySelector('#compPerToggle1 .active').textContent.trim() === 'Months';
        if (!isMonths1) t1 = t1 * 12;

        const emi1 = this.calculateEMI(p1, r1, t1);
        const totalPay1 = emi1 * t1;
        const totalInt1 = totalPay1 - p1;

        // Loan 2
        const p2 = this.parseInput('compLoan2');
        const r2 = this.parseInput('compInt2');
        let t2 = this.parseInput('compPer2');
        const isMonths2 = document.querySelector('#compPerToggle2 .active').textContent.trim() === 'Months';
        if (!isMonths2) t2 = t2 * 12;

        const emi2 = this.calculateEMI(p2, r2, t2);
        const totalPay2 = emi2 * t2;
        const totalInt2 = totalPay2 - p2;

        // Update UI Loan 1
        this.updateCompareSide('1', emi1, totalInt1, totalPay1);
        // Update UI Loan 2
        this.updateCompareSide('2', emi2, totalInt2, totalPay2);

        // Differences
        document.getElementById('compDiffEmi').textContent = this.formatCurrency(Math.abs(emi1 - emi2));
        document.getElementById('compDiffInt').textContent = this.formatCurrency(Math.abs(totalInt1 - totalInt2));
        document.getElementById('compDiffPay').textContent = this.formatCurrency(Math.abs(totalPay1 - totalPay2));

        // Coloring
        this.applyCompareColors('compEmi1', 'compEmi2', emi1, emi2);
        this.applyCompareColors('compIntOut1', 'compIntOut2', totalInt1, totalInt2);
        this.applyCompareColors('compPay1', 'compPay2', totalPay1, totalPay2);
    },

    updateCompareSide(side, emi, int, pay) {
        document.getElementById('compEmi' + side).textContent = this.formatCurrency(emi);
        document.getElementById('compIntOut' + side).textContent = this.formatCurrency(int);
        document.getElementById('compPay' + side).textContent = this.formatCurrency(pay);
    },

    applyCompareColors(id1, id2, val1, val2) {
        const el1 = document.getElementById(id1);
        const el2 = document.getElementById(id2);
        el1.className = 'compare-result-val ' + (val1 < val2 ? 'text-green' : 'text-red');
        el2.className = 'compare-result-val ' + (val2 < val1 ? 'text-green' : 'text-red');
    },

    resetCompare() {
        ['compLoan1', 'compInt1', 'compPer1', 'compLoan2', 'compInt2', 'compPer2'].forEach(id => {
            document.getElementById(id).value = '';
        });
        
        ['compEmi1', 'compIntOut1', 'compPay1', 'compEmi2', 'compIntOut2', 'compPay2'].forEach(id => {
            document.getElementById(id).textContent = '-';
            document.getElementById(id).className = 'compare-result-val';
        });

        ['compDiffEmi', 'compDiffInt', 'compDiffPay'].forEach(id => {
            document.getElementById(id).textContent = '0';
        });
    },

    // ============== BASIC EMI ==============
    calculateBasicEMI() {
        const p = this.parseInput('basicLoan');
        const r = this.parseInput('basicInt');
        let t = this.parseInput('basicPer');
        const isMonths = document.querySelector('#basicPerToggle .active').textContent.trim() === 'Months';
        if (!isMonths) t = t * 12;

        const procFeePercent = this.parseInput('basicProcFee');
        const procFeeAmt = (p * procFeePercent) / 100;

        const emi = this.calculateEMI(p, r, t);
        const totalPay = emi * t;
        const totalInt = totalPay - p;

        // In the screenshot total payment is exactly Principal + Interest (which equals totalPay),
        // we add processing fee as a separate row, but does it add to total payment?
        // Let's assume Total Payment = Total EMI Payments + Processing Fees = totalPay + procFeeAmt.
        const grandTotal = totalPay + procFeeAmt;

        document.getElementById('basicResEmi').textContent = this.formatCurrency(emi);
        document.getElementById('basicResInt').textContent = this.formatCurrency(totalInt);
        document.getElementById('basicResProcFee').textContent = this.formatCurrency(procFeeAmt);
        document.getElementById('basicResPay').textContent = this.formatCurrency(grandTotal);
    },

    resetBasicEMI() {
        document.getElementById('basicLoan').value = '';
        document.getElementById('basicInt').value = '';
        document.getElementById('basicPer').value = '';
        document.getElementById('basicProcFee').value = '';
        document.getElementById('basicResEmi').textContent = '-';
        document.getElementById('basicResInt').textContent = '-';
        document.getElementById('basicResProcFee').textContent = '-';
        document.getElementById('basicResPay').textContent = '-';
    },

    // Number to Indian Words Converter
    numberToWordsIndian(num) {
        if (num === 0) return 'Zero';
        const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
        const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

        if ((num = num.toString()).length > 9) return 'Overflow';
        const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        let str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
        return str.trim();
    },

    // ============== QUICK CALCULATOR ==============
    activeQuickTab: 'emi',

    initQuickCalculator() {
        document.getElementById('quickAmount').value = 100000;
        document.getElementById('quickInterest').value = 8.0;
        document.getElementById('quickPeriod').value = 5;
        document.getElementById('quickEMI').value = 1425; // Random init
        
        // default tab logic handles the rest
    },

    switchQuickTab(tab) {
        this.activeQuickTab = tab;
        
        // Update tab buttons styling
        document.querySelectorAll('.quick-tab').forEach(btn => btn.classList.remove('active'));
        if(event && event.target) {
            event.target.classList.add('active');
        } else {
            document.querySelector(`.quick-tab[onclick*="${tab}"]`).classList.add('active');
        }

        // Toggle inputs visibility
        document.getElementById('quickGroupAmount').style.display = tab === 'amount' ? 'none' : 'block';
        document.getElementById('quickGroupInterest').style.display = tab === 'interest' ? 'none' : 'block';
        document.getElementById('quickGroupPeriod').style.display = tab === 'period' ? 'none' : 'block';
        document.getElementById('quickGroupEMI').style.display = tab === 'emi' ? 'none' : 'block';

        // Update highlight titles
        const titles = {
            'emi': 'Monthly EMI',
            'amount': 'Loan Amount',
            'period': 'Period (Months)',
            'interest': 'Interest'
        };
        document.getElementById('quickResultTitle').textContent = titles[tab];

        this.syncQuickInputs(false);
    },

    syncQuickInputs(fromSlider = false) {
        const fields = ['Amount', 'Interest', 'Period', 'EMI'];
        fields.forEach(f => {
            const input = document.getElementById('quick' + f);
            const slider = document.getElementById('quick' + f + 'Slider');
            if (fromSlider) {
                input.value = slider.value;
            } else {
                if (input.value) slider.value = input.value;
            }
        });

        // Update text translations
        const amt = parseFloat(document.getElementById('quickAmount').value) || 0;
        document.getElementById('quickAmountWords').textContent = amt ? this.numberToWordsIndian(Math.round(amt)) : 'Zero';
        
        const per = parseFloat(document.getElementById('quickPeriod').value) || 0;
        document.getElementById('quickPeriodMonths').textContent = (per * 12) + ' months';

        const emiVal = parseFloat(document.getElementById('quickEMI').value) || 0;
        document.getElementById('quickEMIWords').textContent = emiVal ? this.numberToWordsIndian(Math.round(emiVal)) : 'Zero';

        this.calculateQuick();
    },

    calculateQuick() {
        let p = parseFloat(document.getElementById('quickAmount').value) || 0;
        let r_annual = parseFloat(document.getElementById('quickInterest').value) || 0;
        let r = r_annual / 12 / 100;
        let n = (parseFloat(document.getElementById('quickPeriod').value) || 0) * 12;
        let e = parseFloat(document.getElementById('quickEMI').value) || 0;

        let resultVal = 0;
        let resultWords = '';

        if (this.activeQuickTab === 'emi') {
            if (p && r_annual && n) {
                e = this.calculateEMI(p, r_annual, n);
                resultVal = this.formatCurrency(e);
                resultWords = this.numberToWordsIndian(Math.round(e));
            }
        } 
        else if (this.activeQuickTab === 'amount') {
            if (e && r_annual && n) {
                p = (e * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
                resultVal = this.formatCurrency(p);
                resultWords = this.numberToWordsIndian(Math.round(p));
            }
        }
        else if (this.activeQuickTab === 'period') {
            if (p && e && r_annual) {
                if (e > p * r) {
                    n = Math.log(e / (e - p * r)) / Math.log(1 + r);
                    resultVal = Math.ceil(n) + ' months';
                    resultWords = this.numberToWordsIndian(Math.ceil(n)) + ' months';
                    n = Math.ceil(n);
                } else {
                    resultVal = 'Invalid';
                }
            }
        }
        else if (this.activeQuickTab === 'interest') {
            if (p && e && n) {
                let low = 0.0001;
                let high = 1.0;
                let calc_r = 0;
                for (let i = 0; i < 50; i++) {
                    calc_r = (low + high) / 2;
                    let calc_e = (p * calc_r * Math.pow(1 + calc_r, n)) / (Math.pow(1 + calc_r, n) - 1);
                    if (calc_e > e) {
                        high = calc_r;
                    } else {
                        low = calc_r;
                    }
                }
                r_annual = calc_r * 12 * 100;
                resultVal = r_annual.toFixed(2) + '%';
                resultWords = this.numberToWordsIndian(Math.round(r_annual)) + ' percentage';
                r = calc_r;
            }
        }

        document.getElementById('quickResultValue').innerHTML = resultVal || '0';
        document.getElementById('quickResultWords').textContent = resultWords || 'Zero';

        let totalPayment = e * n;
        let totalInterest = totalPayment - p;

        if (totalPayment > 0 && p > 0 && !isNaN(totalPayment)) {
            document.getElementById('quickTotalInterest').textContent = this.formatCurrency(totalInterest);
            document.getElementById('quickTotalPayment').textContent = this.formatCurrency(totalPayment);

            let interestPercent = (totalInterest / totalPayment) * 100;
            const pie = document.getElementById('quickPie');
            pie.style.background = `conic-gradient(#00d09c 0% ${interestPercent}%, #f7a028 ${interestPercent}% 100%)`;
        }
    },

    // ============== EMI DETAILS VIEW ==============
    emiChartInstance: null,
    amortizationData: null,

    switchDetailsTab(tab) {
        document.querySelectorAll('.details-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.details-tab-content').forEach(c => c.style.display = 'none');
        
        if (event && event.target) {
            event.target.classList.add('active');
        }
        
        if (tab === 'details') {
            document.getElementById('emiDetailsTab').style.display = 'block';
        } else {
            document.getElementById('emiChartTab').style.display = 'block';
            this.renderEMIDetailsChart();
        }
    },

    showEMIDetails() {
        let p = parseFloat(document.getElementById('quickAmount').value) || 0;
        let r_annual = parseFloat(document.getElementById('quickInterest').value) || 0;
        let r = r_annual / 12 / 100;
        let n = (parseFloat(document.getElementById('quickPeriod').value) || 0) * 12;
        let e = parseFloat(document.getElementById('quickEMI').value) || 0;

        if (this.activeQuickTab === 'emi') {
            e = this.calculateEMI(p, r_annual, n);
        } else if (this.activeQuickTab === 'amount') {
            p = (e * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
        } else if (this.activeQuickTab === 'period') {
            if (e > p * r) n = Math.ceil(Math.log(e / (e - p * r)) / Math.log(1 + r));
        } else if (this.activeQuickTab === 'interest') {
            let low = 0.0001, high = 1.0;
            for (let i = 0; i < 50; i++) {
                let calc_r = (low + high) / 2;
                let calc_e = (p * calc_r * Math.pow(1 + calc_r, n)) / (Math.pow(1 + calc_r, n) - 1);
                if (calc_e > e) high = calc_r;
                else low = calc_r;
            }
            r = (low + high) / 2;
            r_annual = r * 12 * 100;
        }

        if (!p || !r || !n || !e || e <= p * r) {
            alert("Invalid calculation parameters. Check your inputs.");
            return;
        }

        let totalPayment = e * n;
        let totalInterest = totalPayment - p;

        document.getElementById('detAmount').textContent = this.formatCurrency(p);
        document.getElementById('detInterest').textContent = r_annual.toFixed(1);
        document.getElementById('detPeriod').textContent = n;
        document.getElementById('detEMI').textContent = this.formatCurrency(e);
        document.getElementById('detTotalInterest').textContent = this.formatCurrency(totalInterest);
        document.getElementById('detProcFees').textContent = '0';
        document.getElementById('detTotalPayment').textContent = this.formatCurrency(totalPayment);

        let balance = p;
        let tbody = '';
        this.amortizationData = { months: [], principals: [], interests: [] };

        for (let i = 1; i <= n; i++) {
            let interestForMonth = balance * r;
            let principalForMonth = e - interestForMonth;
            
            if (i === n) {
                principalForMonth = balance;
                e = principalForMonth + interestForMonth;
                balance = 0;
            } else {
                balance -= principalForMonth;
            }

            this.amortizationData.months.push(i);
            this.amortizationData.principals.push(principalForMonth);
            this.amortizationData.interests.push(interestForMonth);

            tbody += `
                <tr>
                    <td>${i}</td>
                    <td>${this.formatCurrency(principalForMonth)}</td>
                    <td>${this.formatCurrency(interestForMonth)}</td>
                    <td>${this.formatCurrency(Math.max(0, balance))}</td>
                </tr>
            `;
        }
        document.getElementById('amortizationBody').innerHTML = tbody;

        // Switch to details tab initially
        this.switchDetailsTab('details');
        // also set the visual active class correctly
        document.querySelectorAll('.details-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.details-tab[onclick*="details"]').classList.add('active');

        this.showView('calcEMIDetails');
    },

    renderEMIDetailsChart() {
        if (!this.amortizationData) return;

        const ctx = document.getElementById('emiDetailsChart');
        if (!ctx) return;

        if (this.emiChartInstance) {
            this.emiChartInstance.destroy();
        }

        this.emiChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.amortizationData.months,
                datasets: [
                    {
                        label: 'Principal',
                        data: this.amortizationData.principals,
                        backgroundColor: '#f7a028',
                    },
                    {
                        label: 'Interest',
                        data: this.amortizationData.interests,
                        backgroundColor: '#00d09c',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        title: { display: true, text: 'Month' },
                        grid: { display: false }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString('en-IN');
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { usePointStyle: true, boxWidth: 8 }
                    }
                }
            }
        });
    },

    downloadEMIPDF(btn) {
        const detailsTab = document.getElementById('emiDetailsTab');
        const oldDisplay = detailsTab.style.display;
        
        // Ensure the table is visible so it can be captured
        detailsTab.style.display = 'block';

        const opt = {
            margin:       0.3,
            filename:     'EMI_Details.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        let oldHtml = "";
        if (btn) {
            oldHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        }

        html2pdf().set(opt).from(detailsTab).save().then(() => {
            // Restore original display state if needed
            detailsTab.style.display = oldDisplay;
            if (btn) btn.innerHTML = oldHtml;
        });
    }
};

// Expose to window for React integration
window.CalculatorHub = CalculatorHub;

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        CalculatorHub.init();
    });
} else {
    CalculatorHub.init();
}
