       
const express = require('express')
       
const app = express()

const WEBport = process.env.WEBport || 3000

async function main() {


    try {

        
        app.get('/', async (req, res) => {
            
            // console.log("Visits: " + (current+1))
            // return all env variables
            res.send(JSON.stringify(process.env))
          })
        
        app.listen(WEBport, () => {
        console.log(`App is listening on port ${WEBport}`)
        })

    } catch (e) {
        console.error(e);
    } finally {
    }
}

main().catch(console.error);