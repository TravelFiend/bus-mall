import { countsArray } from '../app.js';

const results = document.getElementById('results');

export const findById = (items, id) => {
    let match;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            match = items[i];
        }
    }
    return match;
};

export const makeTotalsStorage = arr => {
    let jsonResults = JSON.stringify(arr);
    localStorage.setItem('totals', jsonResults);
};

export const getResults = () => JSON.parse(localStorage.getItem('totals'));

export const setResults = (theTotals) => {
    const jsonNew = JSON.stringify(theTotals);
    localStorage.setItem('totals', jsonNew);
};

export const renderLines = () => {
    const resultMessage = document.createElement('h2');
    resultMessage.className = 'resultsHeading';
    resultMessage.textContent = 'RESULTS';
    results.appendChild(resultMessage);

    const ul = document.createElement('ul');
    results.appendChild(ul);
    
    const div1 = document.createElement('div');
    div1.className = 'listBox';
    ul.appendChild(div1);
    
    const div2 = document.createElement('div');
    div1.className = 'listBox';
    ul.appendChild(div2);


    countsArray.forEach((object, i) => {
        if (i < 10){
            const li = document.createElement('li');
            li.className = 'listItem';
            li.textContent = `${object.name}: -- Shown count: ${object.showCount} -- Times selected:  ${object.clickCount}`;
            div1.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.className = 'listItem';
            li.textContent = `${object.name}: -- Shown count: ${object.showCount} -- Times selected:  ${object.clickCount}`;
            div2.appendChild(li);
        }
    });
    return ul;
};

export const renderTotalsLines = () => {
    const resultMessage = document.createElement('h2');
    resultMessage.className = 'resultsHeading';
    results.appendChild(resultMessage);

    const ul = document.createElement('ul');
    results.appendChild(ul);

    const div1 = document.createElement('div');
    div1.className = 'listBox';
    ul.appendChild(div1);

    const div2 = document.createElement('div');
    div1.className = 'listBox';
    ul.appendChild(div2);


    getResults().forEach((object, i) => {
        if (i < 10) {
            const li = document.createElement('li');
            li.className = 'listItem';
            li.textContent = `${object.name}: -- Shown count: ${object.showCount} -- Times selected:  ${object.clickCount}`;
            div1.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.className = 'listItem';
            li.textContent = `${object.name}: -- Shown count: ${object.showCount} -- Times selected:  ${object.clickCount}`;
            div2.appendChild(li);
        }
    });
    return ul;
};

export const addToTotals = (theTotals, currentResults) => {
    currentResults.forEach(c => {
        let thisResult = theTotals.find(t => t.id === c.id);
        if (thisResult === undefined) {
            theTotals.push({
                id: c.id,
                showCount: c.showCount,
                clickCount: c.clickCount,
                name: c.name
            });
        } else {
            thisResult.clickCount += c.clickCount;
            thisResult.showCount += c.showCount;
            let index = theTotals.indexOf(thisResult);
            theTotals[index] = thisResult;
        }
    });
};