export const transactionHistory = [
  {
    id: 1,
    description: "Sold Ethereum",
    amount: -2.0034,
    currency: "€",
    type: "S",      // S - Sold, B - Bought
    date: "14:20 12 Apr",
  },
  {
    id: 2,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 3,
    description: "Sold Ethereum",
    amount: -2.0034,
    currency: "€",
    type: "S",
    date: "14:20 12 Apr",
  },
  {
    id: 4,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 5,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 6,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 7,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 8,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 9,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "€",
    type: "B",
    date: "14:20 12 Apr",
  },
];

const categories = [
  {
    id: 0,
    title: "Mobile Design",
    thumbnail: require("../assets/images/bg_1.png"),
  },
  {
    id: 1,
    title: "3D Modeling",
    thumbnail: require("../assets/images/bg_2.png"),
  },
  {
    id: 2,
    title: "Web Designing",
    thumbnail: require("../assets/images/bg_3.png"),
  },
  {
    id: 3,
    title: "Illustrations",
    thumbnail: require("../assets/images/bg_4.png"),
  },
  {
    id: 4,
    title: "Drawing",
    thumbnail: require("../assets/images/bg_5.png"),
  },
  {
    id: 5,
    title: "Animation",
    thumbnail: require("../assets/images/bg_6.png"),
  },
  {
    id: 6,
    title: "Mobile Design",
    thumbnail: require("../assets/images/bg_1.png"),
  },
  {
    id: 7,
    title: "3D Modeling",
    thumbnail: require("../assets/images/bg_2.png"),
  },
  {
    id: 8,
    title: "Web Designing",
    thumbnail: require("../assets/images/bg_3.png"),
  },
  {
    id: 9,
    title: "Illustrations",
    thumbnail: require("../assets/images/bg_4.png"),
  },
  {
    id: 10,
    title: "Drawing",
    thumbnail: require("../assets/images/bg_5.png"),
  },
  {
    id: 11,
    title: "Animation",
    thumbnail: require("../assets/images/bg_6.png"),
  },
];


const electronics = [
  {
    text1: "Mobil Pos",
    text2: null,
    text3: null,
    image: require("../assets/images/walletTransaction.jpeg"),
  },
  {
    text1: "Para Transferi",
    text2: null,
    text3: null,
    image: require("../assets/images/transaction.png"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/financialTransaction.jpeg"),
  },
  {
    text1: "Güvenlik",
    text2: null,
    text3: null,
    image: require("../assets/images/payment-gateway.png"),
  },
];

const tecnologies = [
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/image1.jpeg"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/image2.png"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/image3.jpeg"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/image4.png"),
  },
];

const trendler = [
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/trend1.jpeg"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/trend2.jpeg"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/trend3.jpeg"),
  },
  {
    text1: null,
    text2: null,
    text3: null,
    image: require("../assets/images/trend4.jpeg"),
  },
];

const perks = [
  {
    text1: "Turkcell",
    text2: null,
    text3: null,
    image: require("../assets/images/turkcell.jpg"),
  },
  {
    text1: "Vodafone",
    text2: null,
    text3: null,
    image: require("../assets/images/vodafone.jpg"),
  },
  {
    text1: "Kuveyt Türk",
    text2: null,
    text3: null,
    image: require("../assets/images/kuveytturk.png"),
  },
  {
    text1: "Google",
    text2: null,
    text3: null,
    image: require("../assets/images/google.png"),
  },
];

const dummyData = { categories, electronics, tecnologies, trendler, perks, transactionHistory };

export default dummyData;
