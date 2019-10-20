import { makeTotalsChart } from './results.js';
import { getResults, renderLines } from '../src/utils.js';

const results = document.getElementById('results');

renderLines();

makeTotalsChart(getResults());