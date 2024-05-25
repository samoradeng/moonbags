const cryptoData = [
    {
        "name": "mintlayer",
        "symbol": "ml", // Symbol for Mintlayer
        "baseCaseMcap": "1.7B",
        "baseRank": "Top 170",
        "baseCase":"180",
        "moonCaseMcap": "7B",
        "moonRank": "Top 60",
        "moonCase": "700",
        "tech": "89%",
        "circulatingSupply": "61,540,000",
        "initialMarketCap": "9.6M",
        "initialPrice": "0.170844", // Price of Mintlayer on December 5, 2023

    },
    {
        "name": "connext",
        "symbol": "next", // Symbol for Connext
        "baseCaseMcap": "3.1B",
        "baseRank": "Top 115",
        "baseCase":"160",
        "moonCaseMcap": "15.5B",
        "moonRank": "Top 35",
        "moonCase": "800",
        "tech": "87%",
        "initialMarketCap": "19M",
        "initialPrice": "0.175146", // Price of connext on December 5, 2023
    },
    {
        "name": "hivemapper",
        "symbol": "honey", // Symbol for hivemapper
        "baseCaseMcap": "3.3B",
        "baseRank": "Top 105",
        "baseCase":"145",
        "moonCaseMcap": "22.4B",
        "moonRank": "Top 25",
        "moonCase": "1000",
        "tech": "78%",
        "initialMarketCap": "23M",
        "initialPrice": "0.102578", // Price of hivemapper on December 5, 2023
    },
    {
        "name": "gameswift",
        "symbol": "gswift", // Symbol for gameswift
        "baseCaseMcap": "2.7B",
        "baseRank": "Top 130",
        "baseCase":"110",
        "moonCaseMcap": "13.3B",
        "moonRank": "Top 35",
        "moonCase": "535",
        "tech": "87%",
        "initialMarketCap": "25M",
        "initialPrice": "0.454479", // Price of gameswift on December 5, 2023
    },
    {
        "name": "dimo",
        "symbol": "dimo", // Symbol for dimo
        "baseCaseMcap": "1.9B",
        "baseRank": "Top 100",
        "baseCase":"180",
        "moonCaseMcap": "7.7B",
        "moonRank": "Top 60",
        "moonCase": "400",
        "tech": "89%",
        "initialMarketCap": "19M",
        "initialPrice": "0.123358", // Price of dimo on December 5, 2023
    },
    {
        "name": "alephium",
        "symbol": "alph", // Symbol for alephium
        "baseCaseMcap": "3.1B",
        "baseRank": "Top 110",
        "baseCase":"90",
        "moonCaseMcap": "21B",
        "moonRank": "Top 25",
        "moonCase": "580",
        "tech": "85%",
        "initialMarketCap": "37M",
        "initialPrice": "0.611323", // Price of alephium on December 5, 2023
    },
    {
        "name": "swarm-markets",
        "symbol": "smt", // Symbol for swarmmarkets
        "baseCaseMcap": "1.2B",
        "baseRank": "Top 215",
        "baseCase":"70",
        "moonCaseMcap": "6.1B",
        "moonRank": "Top 65",
        "moonCase": "360",
        "tech": "87%",
        "initialMarketCap": "17M",
        "initialPrice": "0.278039", // Price of swarm-markets on December 5, 2023
    },
    {
        "name": "iron-fish",
        "symbol": "iron", // Symbol for ironfish
        "baseCaseMcap": "1.7B",
        "baseRank": "Top 180",
        "baseCase":"70",
        "moonCaseMcap": "17B",
        "moonRank": "Top 30",
        "moonCase": "660",
        "tech": "81%",
        "circulatingSupply": "18,240,120",
        "initialMarketCap": "25M",
        "initialPrice": "1.41", // Price of iron-fish on December 5, 2023
    },
    {
        "name": "astra-dao-2",
        "symbol": "astradao", // Symbol for astradao
        "baseCaseMcap": "330M",
        "baseRank": "Top 500",
        "baseCase":"60",
        "moonCaseMcap": "1.6B",
        "moonRank": "Top 180",
        "moonCase": "285",
        "tech": "81%",
        "initialMarketCap": "6M",
        "initialPrice": "0.000000070043", // Price of astradao on December 5, 2023
    },
    {
        "name": "suipad",
        "symbol": "suip", // Symbol for suipad
        "baseCaseMcap": "90M",
        "baseRank": "Top 1000",
        "baseCase":"45",
        "moonCaseMcap": "350M",
        "moonRank": "Top 500",
        "moonCase": "180",
        "tech": "N/A",
        "initialMarketCap": "2M",
        "initialPrice": "0.04230363", // Price of suipad on December 5, 2023
    },
    {
        "name": "nexacoin",
        "symbol": "nexa", // Symbol for nexa
        "baseCaseMcap": "2.1B",
        "baseRank": "Top 150",
        "baseCase":"40",
        "moonCaseMcap": "21B",
        "moonRank": "Top 25",
        "moonCase": "370",
        "tech": "N/A",
        "initialMarketCap": "57M",
        "initialPrice": "0.00001374", // Price of nexacoin on December 5, 2023
    },
    {
        "name": "nolus",
        "symbol": "nls", // Symbol for nolus
        "baseCaseMcap": "240M",
        "baseRank": "Top 600",
        "baseCase":"35",
        "moonCaseMcap": "2.4B",
        "moonRank": "Top 130",
        "moonCase": "360",
        "tech": "81%",
        "initialMarketCap": "7M",
        "initialPrice": "0.050746", // Price of nolus on December 5, 2023
    },
    {
        "name": "taraxa",
        "symbol": "tara", // Symbol for taxara
        "baseCaseMcap": "1.5B",
        "baseRank": "Top 160",
        "baseCase":"25",
        "moonCaseMcap": "15B",
        "moonRank": "Top 30",
        "moonCase": "250",
        "tech": "81%",
        "initialMarketCap": "61M",
        "initialPrice": "0.01779119", // Price of taraxa on December 5, 2023
    },
    {
        "name": "joystream",
        "symbol": "joy", // Symbol for joystream
        "baseCaseMcap": "830M",
        "baseRank": "Top 300",
        "baseCase":"25",
        "moonCaseMcap": "5.5B",
        "moonRank": "Top 70",
        "moonCase": "150",
        "tech": "85%",
        "circulatingSupply": "759,809,168",
        "initialMarketCap": "37M",
        "initialPrice": "0.04841677", // Price of joystream on December 5, 2023
    },
    {
        "name": "celer-network",
        "symbol": "celr", // Symbol for celer
        "baseCaseMcap": "2B",
        "baseRank": "Top 150",
        "baseCase":"20",
        "moonCaseMcap": "20B",
        "moonRank": "Top 25",
        "moonCase": "200",
        "tech": "85%",
        "initialMarketCap": "93M",
        "initialPrice": "0.01660950", // Price of celer-network on December 5, 2023
    },
];

const newCryptoData = [
    
    {
        "name": "botto",
        "symbol": "botto", // Symbol for botto
        "baseCaseMcap": "550M",
        "baseRank": "",
        "baseCase":"10",
        "moonCaseMcap": "2.75B",
        "moonRank": "",
        "moonCase": "50",
        "tech": "85%",
        "initialMarketCap": "55M",
        "initialPrice": "0.995304", // Price of Botto on April 12, 2024
    },
    {
        "name": "marinade",
        "symbol": "mnde", // Symbol for Marinade
        "baseCaseMcap": "1.24B",
        "baseRank": "",
        "baseCase":"20",
        "moonCaseMcap": "6.2B",
        "moonRank": "",
        "moonCase": "100",
        "tech": "87%",
        "initialMarketCap": "62M",
        "initialPrice": "0.203489", // Price of Marinade on April 12, 2024
    },
    {
        "name": "astroport-fi",
        "symbol": "astro", // Symbol for astroport
        "baseCaseMcap": "1.36B",
        "baseRank": "",
        "baseCase":"20",
        "moonCaseMcap": "4.8B",
        "moonRank": "",
        "moonCase": "70",
        "tech": "89%",
        "initialMarketCap": "68M",
        "initialPrice": "0.148095", // Price of astroport on April 12, 2024
    },
    {
        "name": "nibiru",
        "symbol": "nibi", // Symbol for nibiru
        "baseCaseMcap": "1.6B",
        "baseRank": "",
        "baseCase":"20",
        "moonCaseMcap": "8B",
        "moonRank": "",
        "moonCase": "100",
        "tech": "81%",
        "circulatingSupply": "186,694,846",
        "initialMarketCap": "79M",
        "initialPrice": "0.369764", // Price of nibiru on April 12, 2024
    },
    {
        "name": "spacemesh",
        "symbol": "$smh", // Symbol for spacemesh
        "baseCaseMcap": "2B",
        "baseRank": "",
        "baseCase":"20",
        "moonCaseMcap": "21B",
        "moonRank": "",
        "moonCase": "200",
        "tech": "81%",
        "circulatingSupply": "34,954,547.42",
        "initialMarketCap": "104M",
        "initialPrice": "2.88", // Price of spacemesh on April 12, 2024
    },
    {
        "name": "velas",
        "symbol": "vlx", // Symbol for velas
        "baseCaseMcap": "800M",
        "baseRank": "",
        "baseCase":"20",
        "moonCaseMcap": "8B",
        "moonRank": "",
        "moonCase": "200",
        "tech": "90%",
        "initialMarketCap": "40M",
        "initialPrice": "0.01421586", // Price of velas on April 12, 2024
    },
    {
        "name": "boson-protocol",
        "symbol": "boson", // Symbol for boson
        "baseCaseMcap": "2B",
        "baseRank": "",
        "baseCase":"25",
        "moonCaseMcap": "8B",
        "moonRank": "",
        "moonCase": "100",
        "tech": "89%",
        "initialMarketCap": "40M",
        "initialPrice": "0.560449", // Price of boson on April 12, 2024
    },
    {
        "name": "across-protocol",
        "symbol": "acx", // Symbol for across
        "baseCaseMcap": "1B",
        "baseRank": "",
        "baseCase":"25",
        "moonCaseMcap": "4B",
        "moonRank": "",
        "moonCase": "100",
        "tech": "87%",
        "initialMarketCap": "40M",
        "initialPrice": "0.270585", // Price of across on April 12, 2024
    },
    {
        "name": "script-network",
        "symbol": "scpt", // Symbol for script
        "baseCaseMcap": "360M",
        "baseRank": "",
        "baseCase":"40",
        "moonCaseMcap": "900M",
        "moonRank": "",
        "moonCase": "200",
        "tech": "80%",
        "initialMarketCap": "9M",
        "initialPrice": "0.03833633", // Price of script on April 12, 2024
    },
    {
        "name": "subquery-network",
        "symbol": "sqt", // Symbol for SubQuery
        "baseCaseMcap": "1.25B",
        "baseRank": "",
        "baseCase":"50",
        "moonCaseMcap": "5B",
        "moonRank": "",
        "moonCase": "200",
        "tech": "87%",
        "initialMarketCap": "25M",
        "initialPrice": "0.02787945", // Price of SubQuery on April 12, 2024
    },
    
];


const bitcoinData = {
    "name": "bitcoin",
    "symbol": "btc",
    "initialMarketCap": "820B",
    "initialPrice": "41974",
    "aprilMarketCap": "1,379,324,055,321",
    "aprilPrice": "67252",
};

const upArrow = '▲';
const downArrow = '▼';

let isRoiSinceDescending = true;
let isMoonCaseRoiDescending = true;
let isBaseCaseRoiDescending = true;
let isCurrentMarketCapDescending = true;
let globalApiData = [];
let currentTab = 'existing';
let currentSortCriterion = 'roiSince'; // Define this globally to avoid the ReferenceError
const fetchInterval = 600000; // Set the fetch interval to 10 minutes

document.addEventListener('DOMContentLoaded', function () {
    fetchCryptoData();
    switchTab('existing');

    document.getElementById('roiSinceHeader').addEventListener('click', function() {
        toggleRoiSinceSorting();
    });

    document.getElementById('moonCaseRoiHeader').addEventListener('click', function() {
        toggleMoonCaseRoiSorting();
    });

    document.getElementById('baseCaseRoiHeader').addEventListener('click', function() {
        toggleBaseCaseRoiSorting();
    });

    document.getElementById('currentMarketCapHeader').addEventListener('click', function() {
        toggleCurrentMarketCapSorting();
    });
});

function toggleRoiSinceSorting() {
    isRoiSinceDescending = !isRoiSinceDescending;
    currentSortCriterion = 'roiSince';
    updateCarrotSymbol();
    displaySortedResults();
}

function toggleMoonCaseRoiSorting() {
    isMoonCaseRoiDescending = !isMoonCaseRoiDescending;
    currentSortCriterion = 'moonCaseROI';
    updateCarrotSymbol();
    displaySortedResults();
}

function toggleBaseCaseRoiSorting() {
    isBaseCaseRoiDescending = !isBaseCaseRoiDescending;
    currentSortCriterion = 'baseCaseROI';
    updateCarrotSymbol();
    displaySortedResults();
}

function toggleCurrentMarketCapSorting() {
    isCurrentMarketCapDescending = !isCurrentMarketCapDescending;
    currentSortCriterion = 'currentMarketCap';
    updateCarrotSymbol();
    displaySortedResults();
}

function updateCarrotSymbol() {
    // Set the text content for roiSinceHeader based on the current tab
    const roiSinceHeader = document.getElementById('roiSinceHeader');
    if (currentTab === 'existing') {
        roiSinceHeader.textContent = 'ROI Since (12.5.23)';
    } else if (currentTab === 'new') {
        roiSinceHeader.textContent = 'ROI Since (04.12.24)';
    }

    document.getElementById('moonCaseRoiHeader').innerHTML = 'Moon Case ROI';
    document.getElementById('baseCaseRoiHeader').innerHTML = 'Base Case ROI';
    document.getElementById('currentMarketCapHeader').innerHTML = 'Current Market Cap';

    if (currentSortCriterion === 'roiSince') {
        roiSinceHeader.setAttribute('data-symbol', isRoiSinceDescending ? downArrow : upArrow);
    } else if (currentSortCriterion === 'moonCaseROI') {
        document.getElementById('moonCaseRoiHeader').setAttribute('data-symbol', isMoonCaseRoiDescending ? downArrow : upArrow);
    } else if (currentSortCriterion === 'baseCaseROI') {
        document.getElementById('baseCaseRoiHeader').setAttribute('data-symbol', isBaseCaseRoiDescending ? downArrow : upArrow);
    } else if (currentSortCriterion === 'currentMarketCap') {
        document.getElementById('currentMarketCapHeader').setAttribute('data-symbol', isCurrentMarketCapDescending ? downArrow : upArrow);
    }

    document.querySelectorAll('.sortable-header').forEach(header => header.classList.remove('active-sort'));

    if (currentSortCriterion === 'roiSince') {
        roiSinceHeader.classList.add('active-sort');
    } else if (currentSortCriterion === 'moonCaseROI') {
        document.getElementById('moonCaseRoiHeader').classList.add('active-sort');
    } else if (currentSortCriterion === 'baseCaseROI') {
        document.getElementById('baseCaseRoiHeader').classList.add('active-sort');
    } else if (currentSortCriterion === 'currentMarketCap') {
        document.getElementById('currentMarketCapHeader').classList.add('active-sort');
    }
}


function fetchCryptoData() {
    const ids = cryptoData.map(coin => coin.name).concat(newCryptoData.map(coin => coin.name)).concat(bitcoinData.name).join(',');
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`)
        .then(response => response.json())
        .then(apiData => {
            globalApiData = apiData;
            processApiData();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function processApiData() {
    calculateROI();
    displaySortedResults();
    const bitcoinCurrentPrice = getBitcoinCurrentPrice();
    calculateAverageROI(bitcoinCurrentPrice);
}

function calculateROI() {
    function processDataSet(dataSet) {
        dataSet.forEach(coin => {
            const apiCoin = globalApiData.find(c => c.symbol === coin.symbol.toLowerCase());
            if (apiCoin) {
                let currentPrice = apiCoin.current_price;

                if (currentPrice === 0 && coin.initialPrice) {
                    currentPrice = parseFloat(coin.initialPrice);
                }

                const initialMarketCap = convertToNumber(coin.initialMarketCap);
                const baseCaseMcap = convertToNumber(coin.baseCaseMcap);
                const moonCaseMcap = convertToNumber(coin.moonCaseMcap);

                const baseCasePrice = parseFloat(coin.initialPrice) * (baseCaseMcap / initialMarketCap);
                const roiBaseCase = currentPrice ? (baseCasePrice / currentPrice) : 0;
                coin.calculatedBaseROI = Math.round(roiBaseCase * 100) / 100;

                const moonCasePrice = parseFloat(coin.initialPrice) * (moonCaseMcap / initialMarketCap);
                const roiMoonCase = currentPrice ? (moonCasePrice / currentPrice) : 0;
                coin.calculatedMoonROI = Math.round(roiMoonCase * 100) / 100;

                coin.calculatedRoiSince = calculateRoiSince(coin, currentPrice);
            }
        });
    }

    processDataSet(cryptoData);
    processDataSet(newCryptoData);
}

function calculateRoiSince(coin, currentPrice) {
    const initialPrice = parseFloat(coin.initialPrice);
    return initialPrice && currentPrice ? ((currentPrice - initialPrice) / initialPrice) : 0;
}

function convertToNumber(value) {
    if (!value) return 0;
    let number = parseFloat(value);
    if (value.includes('B')) {
        number *= 1e9;
    } else if (value.includes('M')) {
        number *= 1e6;
    } else if (value.includes('K')) {
        number *= 1e3;
    }
    return number;
}

function hasUserPaid() {
    return false;
}

function refreshData() {
    fetchCryptoData();
    console.log("Data refreshed");
}

setInterval(() => {
    fetchCryptoData();
}, fetchInterval);

function displaySortedResults() {
    const tableBodyFixed = document.getElementById('crypto-table-body-fixed');
    const tableBodyScroll = document.getElementById('crypto-table-body-scroll');
    tableBodyFixed.innerHTML = '';
    tableBodyScroll.innerHTML = '';

    let dataToDisplay = currentTab === 'existing' ? cryptoData : newCryptoData;

    dataToDisplay.sort((a, b) => {
        let sortValue = 0;
        if (currentSortCriterion === 'baseCaseROI') {
            sortValue = isBaseCaseRoiDescending ? b.calculatedBaseROI - a.calculatedBaseROI : a.calculatedBaseROI - b.calculatedBaseROI;
        } else if (currentSortCriterion === 'moonCaseROI') {
            sortValue = isMoonCaseRoiDescending ? b.calculatedMoonROI - a.calculatedMoonROI : a.calculatedMoonROI - b.calculatedMoonROI;
        } else if (currentSortCriterion === 'roiSince') {
            sortValue = isRoiSinceDescending ? b.calculatedRoiSince - a.calculatedRoiSince : a.calculatedRoiSince - b.calculatedRoiSince;
        } else if (currentSortCriterion === 'currentMarketCap') {
            const marketCapA = globalApiData.find(c => c.symbol === a.symbol.toLowerCase())?.market_cap || 0;
            const marketCapB = globalApiData.find(c => c.symbol === b.symbol.toLowerCase())?.market_cap || 0;
            sortValue = isCurrentMarketCapDescending ? marketCapB - marketCapA : marketCapA - marketCapB;
        }
        return sortValue;
    });

    dataToDisplay.forEach((coin, index) => {
        const apiCoin = globalApiData.find(c => c.symbol === coin.symbol.toLowerCase());
        if (apiCoin) {
            displayResult(apiCoin, coin, index + 1);
        }
    });
}

function displayResult(coin, crypto, rank) {
    const tableBodyFixed = document.getElementById('crypto-table-body-fixed');
    const tableBodyScroll = document.getElementById('crypto-table-body-scroll');

    const currentPrice = coin.current_price;
    const roiToDate = crypto.calculatedRoiSince;

    let roiSymbol = roiToDate >= 0 ? upArrow : downArrow;
    let roiClass = roiToDate >= 0 ? 'positive-roi' : 'negative-roi';

    const rowFixed = document.createElement('tr');
    rowFixed.innerHTML = `<td>${rank}</td><td><img src="${coin.image}" alt="${coin.name}" style="width: 24px; height: 24px;">${coin.name}</td>`;
    tableBodyFixed.appendChild(rowFixed);

    const rowScroll = document.createElement('tr');
    const isContentBlurred = rank <= 5 && !hasUserPaid();
    rowScroll.innerHTML = `
        <td class="${isContentBlurred ? 'blur-content' : ''}">$${coin.market_cap.toLocaleString()}</td>
        <td>$${crypto.baseCaseMcap} (${crypto.baseRank})</td>
        <td>${Math.round(crypto.calculatedBaseROI)}x</td>
        <td>$${crypto.moonCaseMcap} (${crypto.moonRank})</td>
        <td>${Math.round(crypto.calculatedMoonROI)}x</td>
        <td class="${roiClass}">${roiSymbol} ${(Math.abs(roiToDate) * 100).toFixed(1)}%</td>
    `;
    tableBodyScroll.appendChild(rowScroll);
}

function switchTab(tab) {
    currentTab = tab;
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active-tab'));
    document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active-tab');

    // Update the roiSinceHeader text based on the current tab
    if (tab === 'existing') {
        document.getElementById('roiSinceHeader').textContent = 'ROI Since (12.5.23)';
        document.getElementById('homeParagraph').innerHTML = `
            <span>Welcome! <a id="website-link" href="https://www.samoradeng.com/about" target="_blank">I'm a crypto investor</a> looking for hidden gems that can outperform the market. I found these coins and predictions by <a id="website-link" href="https://www.youtube.com/watch?v=iMkuHYJGlzk" target="_blank">Token Metrics.</a> This is not financial advice from me or Token Metrics, just an easy way for me to keep track of these coins. Started Dec 5, 2023.
            <span class="tooltip">
                <img id="caution" src="/images/Caution-Grey.svg" alt="Caution">
                <span class="tooltiptext">These coins are high risk, high reward. Most might fail. I try not to put more than 5% of my portfolio in any of these gems. Please do your own research.</span>
            </span>`;
    } else if (tab === 'new') {
        document.getElementById('roiSinceHeader').textContent = 'ROI Since (04.12.24)';
        document.getElementById('homeParagraph').innerHTML = `
            <span>Welcome! <a id="website-link" href="https://www.samoradeng.com/about" target="_blank">I'm a crypto investor</a> looking for hidden gems that can outperform the market. I found these coins and predictions by <a id="website-link" href="https://www.youtube.com/watch?v=QuRv8uVCnhY" target="_blank">Token Metrics.</a> This is not financial advice from me or Token Metrics, just an easy way for me to keep track of these coins. Started April 12, 2024.
            <span class="tooltip">
                <img id="caution" src="/images/Caution-Grey.svg" alt="Caution">
                <span class="tooltiptext">These coins are high risk, high reward. Most might fail. I try not to put more than 5% of my portfolio in any of these gems. Please do your own research.</span>
            </span>`;
    }

    displaySortedResults();
    const bitcoinCurrentPrice = getBitcoinCurrentPrice();
    calculateAverageROI(bitcoinCurrentPrice);
}


function getBitcoinCurrentPrice() {
    const bitcoinApiData = globalApiData.find(coin => coin.symbol === 'btc');
    if (bitcoinApiData) {
        return bitcoinApiData.current_price;
    } else {
        console.log('Bitcoin data not found');
        return 0;
    }
}

function calculateAverageROI() {
    let dataSet = (currentTab === 'existing') ? cryptoData : newCryptoData;

    const bitcoinInitialPrice = currentTab === 'existing' ? parseFloat(bitcoinData.initialPrice) : parseFloat(bitcoinData.aprilPrice);
    const bitcoinCurrentPrice = getBitcoinCurrentPrice();
    const bitcoinROI = bitcoinCurrentPrice && bitcoinInitialPrice ? ((bitcoinCurrentPrice - bitcoinInitialPrice) / bitcoinInitialPrice) : 0;

    const totalROI = dataSet.reduce((acc, coin) => {
        const apiCoin = globalApiData.find(c => c.symbol === coin.symbol.toLowerCase());
        const currentPrice = apiCoin ? apiCoin.current_price : 0;
        const initialPrice = parseFloat(coin.initialPrice);
        const currentROI = initialPrice && currentPrice ? ((currentPrice - initialPrice) / initialPrice) : 0;
        return acc + currentROI;
    }, 0);

    const averageROI = totalROI / dataSet.length;
    displayROISummary(averageROI, bitcoinROI, dataSet.length);
}

function displayROISummary(averageROI, bitcoinROI, numberOfCoins) {
    const roiSummaryElement = document.getElementById('roi-summary');
    const averageROISymbol = averageROI >= 0 ? upArrow : downArrow;
    const bitcoinROISymbol = bitcoinROI >= 0 ? upArrow : downArrow;
    const averageROIClass = averageROI >= 0 ? 'positive-roi' : 'negative-roi';
    const bitcoinROIClass = bitcoinROI >= 0 ? 'positive-roi' : 'negative-roi';

    roiSummaryElement.innerHTML = `
        <p>• Bitcoin ROI (Return on Investment) so far: <span class="${bitcoinROIClass}">${bitcoinROISymbol} ${(Math.abs(bitcoinROI) * 100).toFixed(1)}%</span></p>
        <p>• Average ROI of the ${numberOfCoins} coins so far: <span class="${averageROIClass}">${averageROISymbol} ${(Math.abs(averageROI) * 100).toFixed(1)}%</span></p>
    `;
}
