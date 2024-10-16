import swal from "sweetalert"

export const GetData = async () => { 
    const URL = "http://localhost:5000/api/computers"
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
       console.error(err) 
       return swal({
            title: "Error",
            text: `Impossivel buscar os dados,
            o servidor local não está ativo.`,
            icon: "error",
            timer: 3000,
            buttons: false
        })
        
    })

    return response
}