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

const bitcoinData = {
    "name": "bitcoin",
    "symbol": "btc", // Symbol for bitcoin
    "initialMarketCap": "820B",
    "initialPrice": "41974" // Correct initial price of Bitcoin without comma
};

const upArrow = '&#x25B2;'; // Unicode for upward-pointing triangle
const downArrow = '&#x25BC;'; // Unicode for downward-pointing triangle

let isRoiSinceDescending = true;
let isMoonCaseRoiDescending = true; // Global variable to track sorting order
let isBaseCaseRoiDescending = true; // Global variable to track sorting order for Base Case ROI
let isCurrentMarketCapDescending = true; // Variable to track sorting order
let globalApiData = []; // Global variable to store API data





document.addEventListener('DOMContentLoaded', function () {
    fetchCryptoData(); // FetccurrentMarketCapHeadercurrentMarketCapHeader data once on page load

    document.getElementById('roiSinceHeader').addEventListener('click', function() {
        toggleRoiSinceSorting();
    });

    // mooncaseROI
    document.getElementById('moonCaseRoiHeader').addEventListener('click', function() {
        toggleMoonCaseRoiSorting();
    });

    // basecaseROI
    document.getElementById('baseCaseRoiHeader').addEventListener('click', function() {
        toggleBaseCaseRoiSorting();
    });

    // current Market Cap
    document.getElementById('currentMarketCapHeader').addEventListener('click', function() {
        toggleCurrentMarketCapSorting();
    });
    
    
});

// Toggle sorting and update display, but don't fetch new data
function toggleRoiSinceSorting() {
    isRoiSinceDescending = !isRoiSinceDescending;
    currentSortCriterion = 'roiSince';
    updateCarrotSymbol();
    displaySortedResults(); // Update display with current data
}

//mooncasesorting
function toggleMoonCaseRoiSorting() {
    isMoonCaseRoiDescending = !isMoonCaseRoiDescending;
    currentSortCriterion = 'moonCaseROI';
    updateCarrotSymbol();
    displaySortedResults(); // Update display with current data
    
}

//basecasesorting
function toggleBaseCaseRoiSorting() {
    isBaseCaseRoiDescending = !isBaseCaseRoiDescending;
    currentSortCriterion = 'baseCaseROI';
    updateCarrotSymbol();
    displaySortedResults(); // Update display with current data
}

//currentmarketcapsorting
function toggleCurrentMarketCapSorting() {
    isCurrentMarketCapDescending = !isCurrentMarketCapDescending;
    currentSortCriterion = 'currentMarketCap';
    updateCarrotSymbol();
    displaySortedResults(); // Update display with current data
}



function updateCarrotSymbol() {
    // Reset headers to default (without carrot symbols)
    document.getElementById('roiSinceHeader').innerHTML = 'ROI Since (12.5.23)';
    document.getElementById('moonCaseRoiHeader').innerHTML = 'Moon Case ROI';
    document.getElementById('baseCaseRoiHeader').innerHTML = 'Base Case ROI';
    document.getElementById('currentMarketCapHeader').innerHTML = 'Current Market Cap';

    // Set data-symbol attribute for active sorting criterion
    if (currentSortCriterion === 'roiSince') {
        document.getElementById('roiSinceHeader').setAttribute('data-symbol', isRoiSinceDescending ? '\u25BC' : '\u25B2');
    } else if (currentSortCriterion === 'moonCaseROI') {
        document.getElementById('moonCaseRoiHeader').setAttribute('data-symbol', isMoonCaseRoiDescending ? '\u25BC' : '\u25B2');
    } else if (currentSortCriterion === 'baseCaseROI') {
        document.getElementById('baseCaseRoiHeader').setAttribute('data-symbol', isBaseCaseRoiDescending ? '\u25BC' : '\u25B2');
    } else if (currentSortCriterion === 'currentMarketCap') {
        document.getElementById('currentMarketCapHeader').setAttribute('data-symbol', isCurrentMarketCapDescending ? '\u25BC' : '\u25B2');
    }

    

    // Remove 'active-sort' class from all headers
document.querySelectorAll('.sortable-header').forEach(header => header.classList.remove('active-sort'));

// Add 'active-sort' class to the active sorting header
if (currentSortCriterion === 'roiSince') {
    document.getElementById('roiSinceHeader').classList.add('active-sort');
} else if (currentSortCriterion === 'moonCaseROI') {
    document.getElementById('moonCaseRoiHeader').classList.add('active-sort');
} else if (currentSortCriterion === 'baseCaseROI') {
    document.getElementById('baseCaseRoiHeader').classList.add('active-sort');
} else if (currentSortCriterion === 'currentMarketCap') {
    document.getElementById('currentMarketCapHeader').classList.add('active-sort');
}

}




let lastFetchTime = 0;
const fetchInterval = 30000; // 30 seconds

// Fetch data only once on page load, not every time the header is clicked
function fetchCryptoData() {
    const ids = [cryptoData.map(coin => coin.name),bitcoinData.name].join(',');
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`)
        .then(response => response.json())
        .then(apiData => {
            globalApiData = apiData; // Store fetched data globally
            consoleLogBitcoinPrice(apiData);
            processApiData();
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to log Bitcoin's current price
function consoleLogBitcoinPrice(apiData) {
    const bitcoinData = apiData.find(coin => coin.symbol === 'btc');
    if (bitcoinData) {
        console.log(`Current price of Bitcoin: $${bitcoinData.current_price}`);
    } else {
        console.log('Bitcoin data not found');
    }
}




function processApiData() {
    calculateROI(); // Calculates ROI for each coin
    const bitcoinCurrentPrice = getBitcoinCurrentPrice(); // Get the current price of Bitcoin from global API data
    displaySortedResults(); // Display the sorted results on the page
    calculateAverageROI(bitcoinCurrentPrice); // Pass the current price of Bitcoin for ROI calculation
}




function calculateROI() {
    cryptoData.forEach(coin => {
        const apiCoin = globalApiData.find(c => c.symbol === coin.symbol.toLowerCase());
        if (apiCoin) {
            let currentMcap;
            const currentPrice = apiCoin.current_price; // This is the current price from the API
            
            if (coin.circulatingSupply) {
                const circulatingSupply = convertSupplyToNumber(coin.circulatingSupply);
                currentMcap = currentPrice * circulatingSupply; // Calculate the current market cap
            } else {
                currentMcap = apiCoin.market_cap; // Or use the market cap from the API if circulatingSupply is not provided
            }

            const baseCaseMcap = convertToNumber(coin.baseCaseMcap);
            const roiBaseCase = currentMcap ? baseCaseMcap / currentMcap : 0;
            coin.calculatedBaseROI = Math.round(roiBaseCase * 100) / 100; // keeping the precision to two decimal places

            coin.calculatedRoiSince = calculateRoiSince(coin, currentPrice);

            const moonCaseMcap = convertToNumber(coin.moonCaseMcap);
            const roiMoonCase = currentMcap ? moonCaseMcap / currentMcap : 0;
            coin.calculatedMoonROI = Math.round(roiMoonCase * 100) / 100; // keeping the precision to two decimal places
        }
    });
}


function calculateRoiSince(coin, currentPrice) {
    const initialPrice = parseFloat(coin.initialPrice);
    if (initialPrice && currentPrice) {
        // Directly calculate ROI as a percentage
        const roiSince = ((currentPrice - initialPrice) / initialPrice);
        return roiSince; // This should now return the correct percentage
    }
    return 0; // Return 0 if there's no valid data for calculation
}





let currentSortCriterion = 'baseCaseROI'; // Default sorting criterion


function displaySortedResults(apiData) {
    
    // Clear previous results in both table bodies
    const tableBodyFixed = document.getElementById('crypto-table-body-fixed');
    const tableBodyScroll = document.getElementById('crypto-table-body-scroll');
    tableBodyFixed.innerHTML = '';
    tableBodyScroll.innerHTML = '';

    // Determine sorting criterion and sort the cryptoData array accordingly
    if (currentSortCriterion === 'baseCaseROI') {
        cryptoData.sort((a, b) => b.calculatedBaseROI - a.calculatedBaseROI);
    } else if (currentSortCriterion === 'roiSince') {
        if (isRoiSinceDescending) {
            cryptoData.sort((a, b) => b.calculatedRoiSince - a.calculatedRoiSince);
        } else {
            cryptoData.sort((a, b) => a.calculatedRoiSince - b.calculatedRoiSince);
        }
    } else if (currentSortCriterion === 'moonCaseROI') {
        if (isMoonCaseRoiDescending) {
            cryptoData.sort((a, b) => b.calculatedMoonROI - a.calculatedMoonROI);
        } else {
            cryptoData.sort((a, b) => a.calculatedMoonROI - b.calculatedMoonROI);
        }
    } if (currentSortCriterion === 'baseCaseROI') {
        if (isBaseCaseRoiDescending) {
            cryptoData.sort((a, b) => b.calculatedBaseROI - a.calculatedBaseROI);
        } else {
            cryptoData.sort((a, b) => a.calculatedBaseROI - b.calculatedBaseROI);
        }
    } if (currentSortCriterion === 'currentMarketCap') {
        cryptoData.sort((a, b) => {
            const marketCapA = globalApiData.find(c => c.symbol === a.symbol.toLowerCase())?.market_cap || 0;
            const marketCapB = globalApiData.find(c => c.symbol === b.symbol.toLowerCase())?.market_cap || 0;
            return isCurrentMarketCapDescending ? marketCapB - marketCapA : marketCapA - marketCapB;
        });
    }
    

    // Display the sorted results
    cryptoData.forEach((coin, index) => {
        const apiCoin = globalApiData.find(c => c.symbol === coin.symbol.toLowerCase());
        if (apiCoin) {
            displayResult(apiCoin, coin, index + 1);
        }
    });
}

function convertSupplyToNumber(supply) {
    if (!supply) return 0;
    return parseFloat(supply.replace(/,/g, ''));
}




function convertToNumber(value) {
    if (typeof value !== 'string') return 0;  // Check if the value is not a string

    let number = parseFloat(value);
    if (number && value.includes('B')) {
        number *= 1e9;
    } else if (number && value.includes('M')) {
        number *= 1e6;
    } else if (number && value.includes('K')) {
        number *= 1e3;
    }
    return number;
}



function hasUserPaid() {
    // Replace this with actual logic to check payment status
    // For now, it just returns false to simulate unpaid status
    return false;
}

// Add this function to periodically refresh the data
function refreshData() {
    fetchCryptoData();
    console.log("Data refreshed");
}

// Call refreshData() every 30 seconds
setInterval(() => {
    lastFetchTime = 0; // Reset last fetch time every 30 seconds
    fetchCryptoData();
}, fetchInterval);

function displayResult(coin, crypto, rank) {
    const tableBodyFixed = document.getElementById('crypto-table-body-fixed');
    const tableBodyScroll = document.getElementById('crypto-table-body-scroll');
    //console.log(document.getElementById('crypto-table-body-fixed')); // Check if this element is found
    //console.log(document.getElementById('crypto-table-body-scroll')); // Check if this element is found
    const row = document.createElement('tr');

    // Convert initialMarketCap to number for calculation
    const initialMarketCap = convertToNumber(crypto.initialMarketCap);
    const currentMarketCap = coin.market_cap;

    const currentPrice = coin.current_price; // Assume this is the current price from the API
    const roiToDate = crypto.calculatedRoiSince; 



    // Determine the class and arrow symbol based on ROI to Date
    let roiSymbol = '';
    let roiClass = '';

    if (roiToDate >= 0) {
        roiSymbol = upArrow;
        roiClass = 'positive-roi';
    } else {
        roiSymbol = downArrow;
        roiClass = 'negative-roi';
    }

   

     // Create row for fixed columns (Rank and Name)
    const rowFixed = document.createElement('tr');
    rowFixed.innerHTML = `
        <td>${rank}</td>
        <td><img src="${coin.image}" alt="${coin.name}" style="width: 24px; height: 24px;">${coin.name}</td>
    `;
    tableBodyFixed.appendChild(rowFixed);
 
     // Create row for scrollable columns (Rest of the data)
    const rowScroll = document.createElement('tr');
    const isContentBlurred = rank <= 5 && !hasUserPaid();
    rowScroll.innerHTML = `
        <td class="${isContentBlurred ? 'blur-content' : ''}">$${coin.market_cap.toLocaleString()}</td>
        <td>$${crypto.baseCaseMcap} (${crypto.baseRank})</td>
        <td>${Math.round(crypto.calculatedBaseROI)}x</td> <!-- Rounded to nearest whole number -->
        <td>$${crypto.moonCaseMcap} (${crypto.moonRank})</td>
        <td>${Math.round(convertToNumber(crypto.moonCaseMcap) / currentMarketCap)}x</td>
        <td class="${roiClass}">${roiSymbol} ${(Math.abs(roiToDate) * 100).toFixed(1)}%</td>
    `;
    tableBodyScroll.appendChild(rowScroll);
}





function getBitcoinCurrentPrice() {
    const bitcoinApiData = globalApiData.find(coin => coin.symbol === 'btc');
    if (bitcoinApiData) {
        return bitcoinApiData.current_price; // Ensure you are getting a numeric value
    } else {
        console.log('Bitcoin data not found');
        return 0; // Return 0 if Bitcoin data is not found to avoid null in calculations
    }
}


function calculateAverageROI() {
    const nonBitcoinCoins = cryptoData; // Assuming cryptoData already excludes Bitcoin
    const totalROI = nonBitcoinCoins.reduce((acc, coin) => {
        const apiCoin = globalApiData.find(c => c.symbol === coin.symbol.toLowerCase());
        return acc + calculateRoiSince(coin, apiCoin ? apiCoin.current_price : 0);
    }, 0);
    const averageROI = totalROI / nonBitcoinCoins.length ;

    // Assuming you've got the current price for Bitcoin somewhere after fetching data
    const bitcoinCurrentPrice = getBitcoinCurrentPrice(); // Ensure this gets the actual current price
    const bitcoinROI = bitcoinCurrentPrice ? calculateRoiSince(bitcoinData, bitcoinCurrentPrice) : 0;

    // Display the results
    displayROISummary(averageROI, bitcoinROI);
}


function displayROISummary(averageROI, bitcoinROI) {
    const roiSummaryElement = document.getElementById('roi-summary');
    const averageROISymbol = averageROI >= 0 ? upArrow : downArrow; // Determine the symbol based on the ROI
    const bitcoinROISymbol = bitcoinROI >= 0 ? upArrow : downArrow; // Determine the symbol based on the ROI
    const averageROIClass = averageROI >= 0 ? 'positive-roi' : 'negative-roi'; // Determine the class based on the ROI
    const bitcoinROIClass = bitcoinROI >= 0 ? 'positive-roi' : 'negative-roi'; // Determine the class based on the ROI

    // Display the summary with appropriate symbols and coloring
    roiSummaryElement.innerHTML = `
    <p>• Bitcoin ROI (Return on Investment) so far: <span class="${bitcoinROIClass}">${bitcoinROISymbol} ${(Math.abs(bitcoinROI) * 100).toFixed(1)}%</span></p>
        <p>• Average ROI of the 15 selected coins so far: <span class="${averageROIClass}">${averageROISymbol} ${(Math.abs(averageROI) * 100).toFixed(1)}%</span></p>
        
    `;
}


