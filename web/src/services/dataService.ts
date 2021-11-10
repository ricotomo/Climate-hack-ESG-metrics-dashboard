import { info } from "../data/info";
import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";
import { metrics } from "../data/metrics";
//JSON in a file -> this will be replaced by info from call
import { backenddata } from "../data/backenddata";
import { Allocation, Position, Metric, BackendData } from "../data/models";

function getRandomDelay() {
  // return 0;
  return 500 + (Math.random() * 2000);
  // return 9999999999;
}

export function getFundInfo(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, getRandomDelay());
  })
}

export function getFundAllocation(): Promise<Allocation[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allocation);
    }, getRandomDelay());
  });
}

export function getPerformance(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performance);
    }, getRandomDelay());
  })
}

export function getPositions(): Promise<Position[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(positions);
    }, getRandomDelay());
  });
}

export function getMetrics(): Promise<Metric[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(metrics);
    }, getRandomDelay());
  });
}

export function getBackendData(): Promise<BackendData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(backenddata);
    }, getRandomDelay());
  });
}