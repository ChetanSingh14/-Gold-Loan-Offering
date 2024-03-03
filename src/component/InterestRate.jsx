import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from "./InterestRate.module.css";

export default function InterestRate() {
  const [loanAmount, setLoanAmount] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateLoan = () => {
    const calculatedMonthlyPayment = (loanAmount * (1 + (interestRate / 100))) / repaymentPeriod;
    setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateLoan();
  };

  return (
    <>
      <NavBar />
      <div className={styles.eligibilityCriteria}>
        <h2>Eligibility Criteria</h2>
        <ul className={styles.criteriaList}>
          <li>
            <strong>Age Requirement:</strong> Applicants must be at least 18 years old to apply for a gold loan.
          </li>
          <li>
            <strong>Documentation Needed:</strong> 
            <ul>
              <li>- Proof of identity (e.g., Aadhar Card, Passport, or Driver's License)</li>
              <li>- Proof of address (e.g., Aadhar Card, Utility Bills, or Rent Agreement)</li>
              <li>- Ownership documents of the gold being pledged</li>
            </ul>
          </li>
          <li>
            <strong>Minimum and Maximum Loan Amounts:</strong> 
            <ul>
              <li>- Minimum loan amount: ₹10,000</li>
              <li>- Maximum loan amount: ₹10,00,000</li>
            </ul>
          </li>
        </ul>
      </div>
      <section id="loanCalculator" className={styles.loancalculatorsection}>
        <div className={styles.container}>
          <h2>Loan Calculator</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="number"
              placeholder="Loan Amount (in grams)"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <input 
              type="number"
              placeholder="Repayment Period (in months)"
              value={repaymentPeriod}
              onChange={(e) => setRepaymentPeriod(e.target.value)}
            />
            <input 
              type="number"
              placeholder="Interest Rate (%)"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            <button type="submit">Calculate</button>
          </form>
          <div className={styles.loandetails}>
            {monthlyPayment && <p>Estimated Monthly Payment: ${monthlyPayment}</p>}
          </div>
        </div>
      </section>
    </>
  );
}
