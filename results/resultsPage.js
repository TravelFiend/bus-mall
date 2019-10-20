import { makeTotalsChart } from './results.js';
import { getResults, renderLines } from '../src/utils.js';

renderLines();

makeTotalsChart(getResults());