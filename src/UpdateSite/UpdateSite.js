import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Announcements from '../Announcements/Announcements';
import InputInfo from '../InputInfo/InputInfo';

function UpdateSite(props){

    const [ theme, setTheme ] = useState('')
    const [ date, setDate ] = useState('')
    const [ presiding, setPresiding ] = useState('')
    const [ conducting, setConducting ] = useState('')
    const [ chorister, setChorister ] = useState('')
    const [ pianist, setPianist ] = useState('')
    const [ oPrayer, setOPrayer ] = useState('')
    const [ oHymn, setOHymn ] = useState('')
    const [ sHymn, setSHymn ] = useState('')
    const [ fSpeaker, setFSpeaker ] = useState('')
    const [ sSpeaker, setSSpeaker ] = useState('')
    const [ iHymn, setIHymn ] = useState('')
    const [ tSpeaker, setTSpeaker ] = useState('')
    const [ cPrayer, setCPrayer ] = useState('')
    const [ cHymn, setCHymn ] = useState('')
    const [ announcements, setAnnouncements ] = useState('')
  
    const data = {
        theme,
        date,
        presiding,
        conducting,
        chorister,
        pianist,
        oPrayer,
        oHymn,
        sHymn,
        fSpeaker,
        sSpeaker,
        iHymn,
        tSpeaker,
        cPrayer,
        cHymn,
        announcements
    };



    const submitForm = async (e) =>{
        e.preventDefault();
        const updateUrl = 'https://jthieme.github.io/rms-agenda/update/create';
        await axios.post(updateUrl, data);
        console.log(data)
    }

    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col s10 offset-s3">
        <div className="col m12">
            <h1 className="left">Please fill out form below</h1>
            <form onSubmit={submitForm}>
                <div className="input-field col s6">
                    <input onChange={(e)=>setTheme(e.target.value)} value={theme} type="text" placeholder="Theme: "/>
                    <input onChange={(e)=>setDate(e.target.value)} value={date} type="text" placeholder="Date: (EX: Aug 16)" />
                    <input onChange={(e)=>setPresiding(e.target.value)} value={presiding} type="text" placeholder="Presiding" />
                    <input onChange={(e)=>setConducting(e.target.value)} value={conducting} type="text" placeholder="Conducting" />
                    <input onChange={(e)=>setChorister(e.target.value)} value={chorister} type="text" placeholder="Chorister" />
                    <input onChange={(e)=>setPianist(e.target.value)} value={pianist} type="text" placeholder="Organist / Pianist" />
                    <input onChange={(e)=>setOPrayer(e.target.value)} value={oPrayer} type="text" placeholder="Opening Prayer" />
                    <input onChange={(e)=>setOHymn(e.target.value)} value={oHymn} type="text" placeholder="Opening Hymn" />
                    <input onChange={(e)=>setSHymn(e.target.value)} value={sHymn} type="text" placeholder="Sacrament Hymn" />
                    <input onChange={(e)=>setFSpeaker(e.target.value)} value={fSpeaker} type="text" placeholder="First Speaker" />
                    <input onChange={(e)=>setSSpeaker(e.target.value)} value={sSpeaker} type="text" placeholder="Second Speaker" />
                    <input onChange={(e)=>setIHymn(e.target.value)} value={iHymn} type="text" placeholder="Intermediate Hymn" />
                    <input onChange={(e)=>setTSpeaker(e.target.value)} value={tSpeaker} type="text" placeholder="Third Speaker" />
                    <input onChange={(e)=>setCHymn(e.target.value)} value={cHymn} type="text" placeholder="Closing Hymn" />
                    <input onChange={(e)=>setCPrayer(e.target.value)} value={cPrayer} type="text" placeholder="Closing Prayer" />
                    <input onChange={(e)=>setAnnouncements(e.target.value)} value={announcements} type="text" placeholder="Announcements" />
                    {/* <Link to="/announcements"><button className="waves-effect waves-light btn right">Submit to Website</button></Link> */}
                    <button className="waves-effect waves-light btn right">Submit to Website</button>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default UpdateSite;