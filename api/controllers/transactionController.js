import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const { amount, description, category, date, source, receiptImage, budget } =
      req.body;
    const Trans = await Transaction.create({ amount, description, category, date, source, receiptImage, budget });
    res.status(201).json({ message: "Transaction saved", Transaction: Trans });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const Trans = await Transaction.find({});
    res.status(200).json({ Transactions: Trans });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
