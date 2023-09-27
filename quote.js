async function getQuotes() {

   
  
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'wuBFtTpzcdxyDa5jzVtVwA==K4eOM2vPlNRaZVGu'
    }
  };
  try {
    const category ="Love";
    
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,options);
    const data = await response.json();
    console.log(data);
    let quoteOutput =   data[0].quote;
    let quotes = document.getElementById("quotesLine").innerHTML =quoteOutput;
    console.log(quotes);
    let authorOutput = data[0].author;
    let author = document.getElementById("authores").innerHTML = authorOutput ;
    console.log(author);
  } 
  catch (error) {
    console.error(error);
  }
  }
  

  getQuotes();
  