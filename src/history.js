import { useState, useEffect } from "react";
import { Table, Card } from "react-bootstrap";

export default function History({ userEmail }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch all transactions from localStorage
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Filter transactions specific to the logged-in user
    const userTransactions = storedTransactions.filter((t) => t.email === userEmail);
    setTransactions(userTransactions);
  }, [userEmail]);

  return (
    <Card style={{ padding: "20px", marginTop: "20px" }}>
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td style={{ color: transaction.type === "Deposit" ? "green" : "red" }}>
                  {transaction.type}
                </td>
                <td>₹{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No transaction history available.</p>
      )}
    </Card>
  );
}
