const spendingData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const graphBar = document.querySelector(".graph");
const dayBar = graphBar.querySelectorAll(".expenses");
const maxBarHeight = 13;
const maxAmountSpendInWeek = Math.max(
  ...spendingData.map((spending) => spending.amount)
);

dayBar.forEach((day, count) => {
  const barHeight =
    (spendingData[count].amount / maxAmountSpendInWeek) * maxBarHeight;
  day.style.height = barHeight + "rem";

  if (barHeight === maxBarHeight)
    day.style.backgroundColor = "hsl(186, 34%, 60%)";
});
