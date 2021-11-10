import React from "react";
import { Grid,  GridColumn } from "@progress/kendo-react-grid";
// GridCellProps,
import { getMetrics } from "../services/dataService";
import Loading from "../layout/Loading";
import { Metric } from "../data/models";

// const NumberCell = (props: GridCellProps) => {
//   const field = props.field || "";
//   const startingValue = props.dataItem[field];
//   let finalValue = (startingValue / 1000000).toFixed(2) + "M";
//   if (startingValue > 1000000000) {
//     finalValue = (startingValue / 1000000000).toFixed(2) + "B";
//   }

//   return <td>{finalValue}</td>
// }

// const ChangeCell = (props: GridCellProps) => {
//   const field = props.field || "";
//   const value = props.dataItem[field];
//   return (
//     <td className={value > 0 ? "change-up" : "change-down"}>
//       {value}%
//     </td>
//   );
// }

export default function MetricsPanel() {
  const [metrics, setMetrics] = React.useState<Metric[]>();

  React.useEffect(() => {
    getMetrics().then((data: Metric[]) => {
      setMetrics(data);
    });
  }, []);

  return (
    <>
      {!metrics && <Loading />}
      <Grid
        data={metrics}
        style={{ opacity: metrics ? "1" : "0" }}
      >
        <GridColumn title="Metrics" field="metric" />
        <GridColumn title="Source" field="source" />
        <GridColumn title="Emissions" field="level"  />
        <GridColumn title="Unit" field="unit" />
        <GridColumn title="Change" field="change" />
        {/* <GridColumn title="Change" field="change" cell={ChangeCell} /> */}
      </Grid>
    </>
  )
}
