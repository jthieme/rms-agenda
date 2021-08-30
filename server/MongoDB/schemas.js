
import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const queueSchema = mongoose.Schema({

    theme: String,
    date: String,
    presiding: String,
    conducting: String,
    chorister: String,
    pianist: String,
    oPrayer: String,
    oHymn: String,
    sHymn: String,
    fSpeaker: String,
    sSpeaker: String,
    iHymn: String,
    tSpeaker: String,
    cPrayer: String,
    cHymn: String,
    announcements: String

})

const update = mongoose.model('update', queueSchema);

export default update
