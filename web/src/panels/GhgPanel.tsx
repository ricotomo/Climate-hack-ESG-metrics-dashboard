import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip
} from "@progress/kendo-react-charts";

import { getBackendData } from "../services/dataService";
import Loading from "../layout/Loading";
import { BackendData } from "../data/models";

const labelContent = (e: any) => (`${e.value}%`);

const renderTooltip = (e: any) => {
  return <div>{e.point ? e.point.category : ""}</div>;
};

export default function GhgPanel() {
  const [backenddata, setData] = React.useState<BackendData[]>();
  React.useEffect(() => {
    getBackendData().then((data: BackendData[]) => {
      setData(backenddata);
    })
  }, []);
  
  return (
    <>
      {!backenddata && <Loading />}
        <Chart style={{ opacity: backenddata ? "1" : "0" }}>
        <ChartTitle text={"Greenhouse Gas Emissions"}>
        </ChartTitle>
        <ChartSeries>
        {/* <ChartSeriesItem type="donut" data={[backenddata[0].ghgScopeOne, backenddata[0].ghgScopeTwo, backenddata[2].ghgScopeThree]}> */}
          <ChartSeriesItem type="donut" data={backenddata}>
            <ChartSeriesLabels content={labelContent} background="none" color="#fff" />
          </ChartSeriesItem>
        </ChartSeries>
        </Chart>
    </>
  )
}

// <div>
//             {fundInfo && fundInfo.managers.map((item, idx) => (
//               <div className="manager" key={idx}>
//                 <img src={`/team/${item.firstName}${item.lastName}.png`}
//                   alt={item.firstName + ' ' + item.lastName} />
//                 <span className="manager-info">
//                   <h2>{item.firstName + ' ' + item.lastName}</h2>
//                   <p>{item.position}</p>
//                 </span>


// {data.map(ghginfo, idx)
//   {/* {const ghgscores = [data[0], data[1], data[2] ]} */}
//   <Chart style={{ opacity: data ? "1" : "0" }}>
//     <ChartTitle text={"Greenhouse Gas Emissions"}></ChartTitle>
//     <ChartSeries>
//       <ChartSeriesItem type="donut" data={data}>
//         <ChartSeriesLabels content={labelContent} background="none" color="#fff" />
//       </ChartSeriesItem>
//     </ChartSeries>
//     <ChartLegend position={"right"} visible={true} />
//     <ChartTooltip render={renderTooltip} />
//   </Chart>
// </>
// )