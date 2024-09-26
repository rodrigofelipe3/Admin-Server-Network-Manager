export const getComputerById = async (id) => { 
    const URL = `http://localhost:5000/api/computerbyid/${id}`
    const options = { 
        method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    }
    
    const response = await fetch(URL, options)
    .then((response)=> response.json())
    .then((data)=> { 
        return data
    })
    .catch((err)=> { 
        return console.error(err)
    })

    return response
}