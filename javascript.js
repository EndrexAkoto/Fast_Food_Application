const ctx = document.getElementById("salesChart").getContext("2d");

const salesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales ($)",
        data: [
          6500, 7800, 9200, 8700, 10500, 11200, 12500, 13100, 11800, 12800,
          13500, 12548,
        ],
        backgroundColor: "rgba(255, 107, 53, 0.1)",
        borderColor: "#FF6B35",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "#FF6B35",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#293241",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `$${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6C757D",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#E0E6ED",
        },
        ticks: {
          color: "#6C757D",
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  },
});

// Add interactivity to the filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});