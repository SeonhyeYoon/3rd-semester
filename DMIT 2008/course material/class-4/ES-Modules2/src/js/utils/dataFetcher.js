/*
    Marking the Function as async
    async wrappter for the Promise API
*/

const dataFetcher = async function (url=null) {
  
  const res = await fetch(url);
  const jsonData = await res.json();
}