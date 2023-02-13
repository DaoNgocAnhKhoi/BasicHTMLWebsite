var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// CHARTS

// BAR CHART
barChartOptions = {
    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            distributed: true, // moi thanh su dung mau khac nhau
            borderRadius: 4,
            horizontal: false, // false: bieu do thang dung, true: bieu doc ngang
            columnWidth: "40%",
        },
    },
    series: [
        {
            data: [10, 8, 6, 4, 2],
        },
    ],
    colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"], // noi dung cot X
    },
    yaxis: {
        title: {
            text: "Count", // noi dung cot Y
        },
    },
};
var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// AREA CHART
var areaChartOptions = {
    series: [{
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: 'Purchase Orders',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
  

