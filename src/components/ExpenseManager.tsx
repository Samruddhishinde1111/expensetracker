import React, { useState, useEffect } from "react";
import { message } from "antd";

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  paid: boolean;
}

const ExpenseManager: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
    message.success("Expense added!");
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    message.success("Expense deleted!");
  };

  return (
    <div>
      <h2>Expenses</h2>
      <p>Expense management will be implemented here.</p>
    </div>
  );
};

export default ExpenseManager;
