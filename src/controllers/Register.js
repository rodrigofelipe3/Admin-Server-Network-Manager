const { RegisterComputerDB } = require("../database/database")
const {logToFile} = require("../utils/LogToFile")

const RegisterComputer = async (req, res)=> { 
    const {host , processor, memory, hard_disk, operating_system, arch, release, monitors, ip, mac_address, network_devices,  powerstatus} = req.body;
    
    const status = "Conectado"
    const lastHB = new Date(Date.now())

    if(!ip){ 
        logToFile("Não foi enviado o IP")
        return
    }
    if(!host){ 
        logToFile("Não foi enviado o Hostname")
        return 
    }
    if(!mac_address){ 
        logToFile("Não foi enviado o MAC")
        return
    }
    
    try{
        const response = await RegisterComputerDB(host , processor, memory, String(hard_disk), operating_system, arch, release, String(monitors), ip, mac_address, JSON.stringify(network_devices),  powerstatus, status, lastHB)  
        return response
    }catch (err){ 
        logToFile("Erro ao registrar " + err)
        return false
    }
}



module.exports= RegisterComputer