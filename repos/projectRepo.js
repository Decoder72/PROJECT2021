const {MongoClient, ObjectID} = require('mongodb')
// this function builds our repo
function projectRepo() {
  const url = 'mongodb://localhost:27017';
   const dbName =  'project';

 
    function loadData(data) {

        return new Promise (async (resolve, reject) =>{

            const client = new MongoClient(url);

            try {
                await client.connect();
                const db = client.db(dbName);

                results = await db.collection('sentences'). insertMany(data);
                resolve(results);
                //client.close();
                
            }catch (error) {
                reject(error)
            }
        })

    }
    return { loadData }


}
module.exports = projectRepo();