import axios from 'axios';
import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import './Announcements.css';

function Announcements(props){

    const url = 'https://jthieme.github.io/rms-agenda/update/find';

    const [ data, setData ] = useState('');
    var [ prevData, setPrevData ] = useState('')


    axios.get(url).then((res)=>{

        formatData(res);
        
    })

    const formatData = (res) => {
        for (var i = 0; i < res.data.length; i++){
            // checking all of the fields
            if (res.data[i].theme === '' || res.data[i].date === '' || res.data[i].presiding === '' 
                || res.data[i].conducting === '' || res.data[i].chorister === '' || res.data[i].pianist === ''
                || res.data[i].oPrayer === '' || res.data[i].oHymn === '' || res.data[i].sHymn === ''
                || res.data[i].fSpeaker === '' || res.data[i].sSpeaker === '' || res.data[i].iHymn === ''
                || res.data[i].tSpeaker === '' || res.data[i].cPrayer === '' || res.data[i].cHymn === ''
                || res.data[i].announcements === ''){
                // this gets data from the second to last database entry
                prevData = res.data[i-(i%2)];

                setPrevData(prevData)
            }
            setData(res.data[i]);
        }
    }
    return (
        <div>
            <div className="topInfo">
                <div className="container offset-s4">
                    <div className="col m5 offset-m2 white-text">
                        <div className="top" >
                            <h2 className="header">Meeting Agenda</h2>
                            <p className="info">
                                Monthly Theme: <br/>{data.theme !== '' ? data.theme : prevData.theme}<br/><br/>
                                Sacrament Meeting for Sunday, {data.date !== '' ? data.date : prevData.date}<br />
                                Presiding: {data.presiding !== '' ? data.presiding : prevData.presiding}<br />
                                Conducting: {data.conducting !== '' ? data.conducting : prevData.conducting}<br /><br/>
                                Choristor: {data.chorister !== '' ? data.chorister : prevData.chorister}<br />
                                Organist / Pianist: {data.pianist !== '' ? data.pianist : prevData.pianist}<br /><br/>
                                Opening Prayer: {data.oPrayer !== '' ? data.oPrayer : prevData.oPrayer}<br />
                                Opening Hymn: {data.oHymn !== '' ? data.oHymn : prevData.oHymn}<br />
                                Sacrament Hymn: {data.sHymn !== '' ? data.sHymn : prevData.sHymn}<br />
                                First Speaker: {data.fSpeaker !== '' ? data.fSpeaker : prevData.fSpeaker}<br />
                                Second Speaker: {data.sSpeaker !== '' ? data.sSpeaker : prevData.sSpeaker}<br />
                                Intermediate Hymn: {data.iHymn !== '' ? data.iHymn : prevData.iHymn}<br />
                                Third Speaker: {data.tSpeaker !== '' ? data.tSpeaker : prevData.tSpeaker}<br />
                                Closing Hymn: {data.cHymn !== '' ? data.cHymn : prevData.cHymn}<br />
                                Closing Prayer: {data.cPrayer !== '' ? data.cPrayer : prevData.cPrayer}<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                <div className="container col m5">
                    <h2 className="header">Announcements</h2>
                    <p className="white-text anno">
                        Sunday meeting schedule going forward (2nd and 4th Sunday):<br/>
                        Sacrament Meeting - 1:30pm to 2:15pm<br/>
                        All 2nd hour meetings will be held on the East Side of the building.<br/>
                        Relief Society - 2:25pm to 3:10pm <br/>
                        Elder's Quorum - 2:25pm to 3:10pm<br/><br/>

                        Starting next Sunday, the Stake will have a Self Reliance Emotional Resilience training at 6pm in the South Chapel.<br/>
                        This training will be capped at 30 people, so please contact a member of the Bishopric to sign up.<br/><br/>

                        {data.announcements}<br/><br/>

                        For RS announcements, please go to the RS page.<br/>
                        For EQ announcements, please go to the EQ page.<br/>
                        For ward Events, please go to the Events page.<br/>
                    </p>
                </div>
            </div>
 
            </div>
            <div className="container footer col s12">
                    <div className="col s12">
                    <h5>Rexburg Married Student 26<sup>th</sup> Ward</h5>
                    <div className="footer-copyright ">
                        <div className="container left">
                                <ul id="nav-mobile" className="left inline link-color">
                                    <li><a href="https://rms26ward.org">Home</a></li>
                                    <li><Link to="/announcements">Announcements</Link></li>
                                    <li><a href="https://rms26ward.org/relief-society">Relief Society</a></li>
                                    <li><a href="https://rms26ward.org/elders-quorum">Elders Quorum</a></li>
                                    <li><a href="https://rms26ward.org/temple-family-history">Temple & Family History</a></li>
                                    <li><a href="https://rms26ward.org/events">Events</a></li>
                                    <li><a href="https://rms26ward.org/ward-council">Ward Council</a></li>
                                    <li><a href="https://rms26ward.org/location">Location</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="divider left"></div>
                <div className="container left">
                    <h5>Address</h5>
                    <p>454 S 12th W<br/>
                       Rexburg, ID, 83440, US<br/><br/>
                       <a className="email-link" href="mailto:rms26ward@gmail.com">rms26ward@gmail.com</a>
                    </p>
                    <div className="divider"></div>
                    <div className="container col bottom-footer">
                        <div className="left">
                            <p>&copy;2021 Rexburg Married Student 26<span>th</span> Ward</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements;