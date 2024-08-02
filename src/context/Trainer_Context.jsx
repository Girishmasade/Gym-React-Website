import React, { createContext } from "react";
export const TRAINERS = [
  {
    id: 1,
    image: "src/assets/trainer1.jpg",
    title: "Alex",
  },
  {
    id: 2,
    image: "src/assets/trainer2.jpg",
    title: "Advika",
  },
  {
    id: 3,
    image: "src/assets/trainer3.jpg",
    title: "Alex",
  },
  {
    id: 4,
    image: "src/assets/trainer4.jpg",
    title: "Advika",
  },
  {
    id: 5,
    image: "src/assets/trainer5.jpg",
    title: "Alex",
  },
  {
    id: 6,
    image: "src/assets/trainer6.jpg",
    title: "Advika",
  },
];

export const HIGHLIGHT = [
  {
    identity: 1,
    img: "/Images/location.svg",
    title: "333 Middle,NH 03461",
  },
  {
    identity: 2,
    img: "/Images/phone.svg",
    title: "125-711-811 125-668-886",
  },
  {
    identity: 3,
    img: "/Images/mail.svg",
    title: "Support.gymcenter@gmail.com",
  },
];

export const PRICING = [
  {
    id: "1",
    title: "3 month Pricing",
    price: "$ 39.0",
    text: "SINGLE CLASS",
    para1: "Free riding",
    para2: "Unlimited equipments",
    para3: "Personal trainer",
    para4: "Weight losing classes",
    para5: "Month to month",
    para6: "No time restriction",
  },
  {
    id: "2",
    title: "12 month Pricing",
    price: "$ 99.0",
    text: "SINGLE CLASS",
    para1: "Free riding",
    para2: "Unlimited equipments",
    para3: "Personal trainer",
    para4: "Weight losing classes",
    para5: "Month to month",
    para6: "No time restriction",
  },
  {
    id: "3",
    title: "6 month Pricing",
    price: "$ 59.0",
    text: "SINGLE CLASS",
    para1: "Free riding",
    para2: "Unlimited equipments",
    para3: "Personal trainer",
    para4: "Weight losing classes",
    para5: "Month to month",
    para6: "No time restriction",
  },
];
// Always check your id

export const TrainerContext = createContext({
  TRAINERS,
  HIGHLIGHT,
  PRICING,
});

export const TrainerContextProvider = TrainerContext.Provider;
