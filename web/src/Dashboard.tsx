import React from "react";

import InfoPanel from "./panels/InfoPanel";
import AllocationPanel from "./panels/AllocationPanel";
// import GhgPanel from "./panels/GhgPanel";
import BarChart from "./panels/BarChart";
import MetricsPanel from "./panels/MetricsPanel";

export default function Dashboard() {
  return (
    <div className="panels">
      <div className="panel-info">
        <InfoPanel />
      </div>
      <div className="panel-allocation">
        <AllocationPanel />
      </div>
      <div className="panel-balance">
        <BarChart />
      </div>
      <div className="panel-positions">
        <MetricsPanel />
      </div>
      {/* <div className="panel-positions">
        <PositionsPanel />
      </div> */}
    </div>
  )
}
