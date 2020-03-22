import { makeTotalsChart } from './results.js';
import { getResults, renderTotalsLines } from '../src/utils.js';

renderTotalsLines();

makeTotalsChart(getResults());