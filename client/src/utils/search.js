const handleSearch = (item, arr) => {
  const queryResult = arr.filter(candy => candy.productName.toLowerCase().includes(item.toLowerCase()))
  // console.log(queryResult)
  return(queryResult)
}

export default handleSearch