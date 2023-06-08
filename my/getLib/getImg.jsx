 const getImgs= async ()=> {
    try {
        let res= await fetch(`http://localhost:3000/api/gallery/`,{ cache: 'force-cache' })
        if (!res.ok) {
        throw new Error('failed to fetch data')
    }
      return res.json()
    } catch (error) { console.log(error)}
}
export default getPizzas