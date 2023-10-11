import ReactApexChart from "react-apexcharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData() ?? [];
  const donateItem = JSON.parse(localStorage.getItem("donate")) ?? [];

  const totalDonate = data?.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    0
  );

  const myDonate = donateItem.reduce(
    (reValue, currentValue) => reValue + currentValue.price,
    0
  );

  const series = [totalDonate, myDonate];
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    colors: ["#FF444A", "#00C49F"],
    labels: ["Total Donation", "Your Donation"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart" className="flex justify-center items-center">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={380}
      />
    </div>
  );
};
export default Statistics;
