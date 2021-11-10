import React from "react";
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxisItem,
    ChartCategoryAxis,
    ChartLegend
  } from "@progress/kendo-react-charts";

import 'hammerjs';

const [ firstSeries, secondSeries, thirdSeries, fourthSeries ] = [[1, 2, 3, 5], [4, 5, 3, 3], [3,6,2,3], [4,7,7,1]];

export default function BarChart() {
  
    return (
        <Chart >
        <ChartTitle text="Sustainable Performance Benchmark" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={["N. Amer.", "Eur.", "APAC", "LATAM"]} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem type="column" data={firstSeries} />
            <ChartSeriesItem type="column" data={secondSeries} />
            <ChartSeriesItem type="column" data={thirdSeries} />
            <ChartSeriesItem type="column" data={fourthSeries} />
        </ChartSeries>
        <ChartLegend position={"right"} visible={true} />
        </Chart>
    )
}