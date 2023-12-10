const cryptoData = [
    {
        "name": "mintlayer",
        "symbol": "ml", // Symbol for Mintlayer
        "baseCaseMcap": "1.7B",
        "baseRank": "Top 170",
        "moonCaseMcap": "7B",
        "moonRank": "Top 60",
        "tech": "89%",
        "circulatingSupply": "61,540,000",
        "initialMarketCap": "9.6M",

    },
    {
        "name": "connext",
        "symbol": "next", // Symbol for Connext
        "baseCaseMcap": "3.1B",
        "baseRank": "Top 115",
        "moonCaseMcap": "15.5B",
        "moonRank": "Top 35",
        "tech": "87%",
        "initialMarketCap": "19M",
    },
    {
        "name": "hivemapper",
        "symbol": "honey", // Symbol for hivemapper
        "baseCaseMcap": "3.3B",
        "baseRank": "Top 105",
        "moonCaseMcap": "22.4B",
        "moonRank": "Top 25",
        "tech": "78%",
        "initialMarketCap": "23M",
    },
    {
        "name": "gameswift",
        "symbol": "gswift", // Symbol for gameswift
        "baseCaseMcap": "2.7B",
        "baseRank": "Top 130",
        "moonCaseMcap": "13.3B",
        "moonRank": "Top 35",
        "tech": "87%",
        "initialMarketCap": "25M",
    },
    {
        "name": "dimo",
        "symbol": "dimo", // Symbol for dimo
        "baseCaseMcap": "1.9B",
        "baseRank": "Top 160",
        "moonCaseMcap": "7.7B",
        "moonRank": "Top 60",
        "tech": "89%",
        "initialMarketCap": "19M",
    },
    {
        "name": "alephium",
        "symbol": "alph", // Symbol for alephium
        "baseCaseMcap": "3.1B",
        "baseRank": "Top 110",
        "moonCaseMcap": "21B",
        "moonRank": "Top 25",
        "tech": "85%",
        "initialMarketCap": "37M",
    },
    {
        "name": "swarm-markets",
        "symbol": "smt", // Symbol for swarmmarkets
        "baseCaseMcap": "1.2B",
        "baseRank": "Top 215",
        "moonCaseMcap": "6.1B",
        "moonRank": "Top 65",
        "tech": "87%",
        "initialMarketCap": "17M",
    },
    {
        "name": "iron-fish",
        "symbol": "iron", // Symbol for ironfish
        "baseCaseMcap": "1.7B",
        "baseRank": "Top 180",
        "moonCaseMcap": "17B",
        "moonRank": "Top 30",
        "tech": "81%",
        "circulatingSupply": "18,240,120",
        "initialMarketCap": "25M",
    },
    {
        "name": "astra-dao-2",
        "symbol": "astradao", // Symbol for astradao
        "baseCaseMcap": "330M",
        "baseRank": "Top 500",
        "moonCaseMcap": "1.6B",
        "moonRank": "Top 180",
        "tech": "81%",
        "initialMarketCap": "6M",
    },
    {
        "name": "suipad",
        "symbol": "suip", // Symbol for suipad
        "baseCaseMcap": "90M",
        "baseRank": "Top 1000",
        "moonCaseMcap": "350M",
        "moonRank": "Top 500",
        "tech": "N/A",
        "initialMarketCap": "2M",
    },
    {
        "name": "nexacoin",
        "symbol": "nexa", // Symbol for nexa
        "baseCaseMcap": "2.1B",
        "baseRank": "Top 150",
        "moonCaseMcap": "21B",
        "moonRank": "Top 25",
        "tech": "N/A",
        "initialMarketCap": "57M",
    },
    {
        "name": "nolus",
        "symbol": "nls", // Symbol for nolus
        "baseCaseMcap": "240M",
        "baseRank": "Top 600",
        "moonCaseMcap": "2.4B",
        "moonRank": "Top 130",
        "tech": "81%",
        "initialMarketCap": "7M",
    },
    {
        "name": "taraxa",
        "symbol": "tara", // Symbol for taxara
        "baseCaseMcap": "1.5B",
        "baseRank": "Top 160",
        "moonCaseMcap": "15B",
        "moonRank": "Top 30",
        "tech": "81%",
        "initialMarketCap": "61M",
    },
    {
        "name": "joystream",
        "symbol": "joy", // Symbol for joystream
        "baseCaseMcap": "830M",
        "baseRank": "Top 300",
        "moonCaseMcap": "5.5B",
        "moonRank": "Top 70",
        "tech": "85%",
        "circulatingSupply": "759,809,168",
        "initialMarketCap": "37M",
    },
    {
        "name": "celer-network",
        "symbol": "celr", // Symbol for joystream
        "baseCaseMcap": "2B",
        "baseRank": "Top 150",
        "moonCaseMcap": "20B",
        "moonRank": "Top 25",
        "tech": "85%",
        "initialMarketCap": "93M",
    },

];

const upArrow = '&#x25B2;'; // Unicode for upward-pointing triangle
const downArrow = '&#x25BC;'; // Unicode for downward-pointing triangle


document.addEventListener('DOMContentLoaded', function () {
    console.log("Document loaded. Fetching crypto data...");
    fetchCryptoData();
});

function fetchCryptoData() {
    //console.log("Fetching data from CoinGecko...");
    const ids = cryptoData.map(coin => coin.name).join(',');
    //console.log(`Requesting these IDs: ${ids}`);
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`)
        .then(response => response.json())
        .then(apiData => {
            console.log("API Response:", apiData);  // Log the entire API response
            calculateROI(apiData);
        })
        .catch(error => console.error('Error fetching data:', error));
}


function calculateROI(apiData) {
    cryptoData.forEach(coin => {
        const apiCoin = apiData.find(c => c.symbol === coin.symbol.toLowerCase());
        if (apiCoin) {
            let currentMcap = apiCoin.market_cap;
            if (currentMcap === 0 && coin.circulatingSupply) {
                // Ensure circulatingSupply is a number
                const circulatingSupply = convertSupplyToNumber(coin.circulatingSupply);
                currentMcap = apiCoin.current_price * circulatingSupply;
                apiCoin.market_cap = currentMcap; // Update market cap in apiCoin
            }

            const baseCaseMcap = convertToNumber(coin.baseCaseMcap);
            const roiBaseCase = baseCaseMcap / currentMcap;
            coin.calculatedBaseROI = Math.round(roiBaseCase); // Store calculated ROI
        }
    });

    // Sort and display results
    displaySortedResults(apiData);
}

function displaySortedResults(apiData) {
    // Sort the cryptoData array based on the calculated Base Case ROI
    cryptoData.sort((a, b) => b.calculatedBaseROI - a.calculatedBaseROI);

    // Clear previous results
    const tableBody = document.getElementById('crypto-table-body-fixed' );
    tableBody.innerHTML = '';

    // Display the sorted results
    cryptoData.forEach((coin, index) => {
        const apiCoin = apiData.find(c => c.symbol === coin.symbol.toLowerCase());
        if (apiCoin) {
            displayResult(apiCoin, coin, index + 1); // Pass the ranking number
        }
    });
}

function convertSupplyToNumber(supply) {
    if (!supply) return 0;
    return parseFloat(supply.replace(/,/g, ''));
}




function convertToNumber(value) {
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
setInterval(refreshData, 60000);

function displayResult(coin, crypto, rank) {
    const tableBodyFixed = document.getElementById('crypto-table-body-fixed');
    const tableBodyScroll = document.getElementById('crypto-table-body-scroll');
    //console.log(document.getElementById('crypto-table-body-fixed')); // Check if this element is found
    //console.log(document.getElementById('crypto-table-body-scroll')); // Check if this element is found
    const row = document.createElement('tr');

    // Convert initialMarketCap to number for calculation
    const initialMarketCap = convertToNumber(crypto.initialMarketCap);
    const currentMarketCap = coin.market_cap;

    // Calculate ROI to Date
    let roiToDate = 0;
    if (initialMarketCap > 0) {
        roiToDate = (currentMarketCap / initialMarketCap) - 1; // ROI in decimal form
    }

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
        <td><img src="${coin.image}" alt="${coin.name}" style="width: 30px; height: 30px;">${coin.name}</td>
    `;
    tableBodyFixed.appendChild(rowFixed);
 
     // Create row for scrollable columns (Rest of the data)
    const rowScroll = document.createElement('tr');
    const isContentBlurred = rank <= 5 && !hasUserPaid();
    rowScroll.innerHTML = `
        <td class="${isContentBlurred ? 'blur-content' : ''}">$${coin.market_cap.toLocaleString()}</td>
        <td>$${crypto.baseCaseMcap} (${crypto.baseRank})</td>
        <td>${crypto.calculatedBaseROI}x</td>
        <td>$${crypto.moonCaseMcap} (${crypto.moonRank})</td>
        <td>${Math.round(convertToNumber(crypto.moonCaseMcap) / currentMarketCap)}x</td>
        <td class="${roiClass}">${roiSymbol} ${(Math.abs(roiToDate) * 100).toFixed(2)}%</td>
    `;
    tableBodyScroll.appendChild(rowScroll);
}


