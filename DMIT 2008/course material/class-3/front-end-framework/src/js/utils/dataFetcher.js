

const dataFetcher = async function (url=null){
  
  const data = fetch(url)  
  .then(res=>res.json())
  .then(data=>data)
  // same code
  // const res = await fetch(url)
  // const data = await res.json()

   return data
  }

  
  // if(url === null){
  //   return "error";
  // } else {
  //   const data = fetch(url);
  // }

  // const data = fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>data)

  //   return data;
  // }

export default dataFetcher;
