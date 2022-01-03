export const portfolio = {
  balance: "12,724.33",
  changes: "+2.36%",
};


export const transactionHistory = [
  {
    id: 1,
    description: "Sold Ethereum",
    amount: -2.0034,
    currency: "€",
    type: "S",      // S - Sold, B - Bought
    date: "14:20 12 Apr"
  },
  {
    id: 2,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },
  {
    id: 3,
    description: "Sold Ethereum",
    amount: -2.0034,
    currency: "€",
    type: "S",
    date: "14:20 12 Apr"
  },
  {
    id: 4,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },
  {
    id: 5,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },

  {
    id: 6,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },
  {
    id: 7,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },
  {
    id: 8,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },
  {
    id: 9,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr"
  },
];

const chartOptions = [
  {
    id: 1,
    label: "1 hr"
  },
  {
    id: 2,
    label: "3 Days"
  },
  {
    id: 3,
    label: "1 Week"
  },
  {
    id: 4,
    label: "1 Month"
  },
  {
    id: 5,
    label: "3 Months"
  }
]

const dummyData = { portfolio, transactionHistory };

export default dummyData;
