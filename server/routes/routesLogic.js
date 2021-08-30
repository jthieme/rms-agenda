import update from '../MongoDB/schemas.js';
// const update = require('../MongoDB/schemas')
export const uInfo = async (req, res) => {
    // res.status(200).send('Helloo Penguin')
    try {
        // find all the queue inthe DB
        const allInfo = await update.find()
        res.status(200).send(allInfo)

    } catch (error) {
        console.log(error.message)

    }

}


export const newInfo = async (req, res) => {
    // res.status(200).send('Helloo Penguin')

    //whatever request you get, it will be stored
    // this res.body and then into the Penqueue
    const info = req.body

    // we will pass the body request that 
    // came form the client to the database
    const myInfo = update(info);
    try {
        // this will save the info into the database
        await myInfo.save()

        res.status(201).json(myInfo);
    } catch (error) {
        // send an error to the response 
        res.status(401).send({ message: error.message })
    }
}