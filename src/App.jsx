import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const msgBoard = document.getElementById('messageBoard');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [msgHistory, setMsgHistory] = useState([
        {
            uId: 'x20D88c1-79a0-d85a-43cd-0c9f6cc219c7',
            user: 'BitsandBytes',
            msg: 'Who is left over?',
            // date.now starts at jan 1 1970 at midnight See bottom of return for Date() current use 
            create_at: Date.now(),
            
        },
        {
            uId: 'A20088c1-79a0-d85a-43cd-0c9f6cc219c7',
            user: 'AllTheKingsHorses',
            msg: 'Peat falls off and into the water',
            create_at: Date.now() - 15000,
        },
        {
            uId: '550088c1-79a0-d85a-43cd-0c9f6cc219c7',
            user: 'HumptyDumpty10',
            msg: 'Peat and Repeat are in a boat together',
            create_at: Date.now() - 100000,
        },
    ]);
    const makePost = () => {
        // how to validate empty string as no action taken
        if(!username || !message) return;

        const newMessage = {
            uId: uuidv4(),
            user: username,
            msg: message,
            create_at: Date.now()
        };

        // how to update array useing useState in replacement for push
        // use the spread operator "..." + val
        setMsgHistory([newMessage, ...msgHistory]);
        // this is the going put the new post on top

        // how to reset to empty stings to prevent no dbl post
        setMessage('');
        setUsername('');
    }

    
    return (
        <div>
            <header>
                <h1 className="row text-center bg-white">Welcome to Chirps</h1>
            </header>
            <main className="">
                <div className='row row-cols-1 row-cols-md-2'>
                    <article className='bg-white'>
                        <div className="form-group m-1">
                            <label htmlFor="my-input">Username</label>
                            {/* controlled react input */}
                            <input
                                id="my-username" 
                                className="form-control" 
                                type="text" 
                                name="" 
                                value={username} 
                                onChange={e => setUsername(e.target.value)} 
                            />
                            <label htmlFor="my-input">Your Message</label>
                            <input 
                                id="my-message" 
                                className="form-control" 
                                type="text" 
                                name="" 
                                value={message} 
                                onChange={e => setMessage(e.target.value)} 
                            />
                        </div>
                        <button className='btn btn-primary' type="button" onClick={e => makePost()}>Submit post</button>
                    </article>
                    <article id='messageBoard' className='row bg-white'>
                        {msgHistory.map(val => (
                            <div className="col-12 border border-primary m-1" id={`${val.uId}`}>
                                <p>@{val.user}</p>
                                <p>{val.msg}</p>
                                <p>{Date(val.create_at).toLocaleString()}</p>
                            </div>
                        ))}
                    </article>
                </div>
            </main>
        </div>
    )
}

export default App

// Instructions

//     Your objective should be to create a "timeline" of Chirps -- short messages that you post on the Chirper platform.

//     Your timeline should load with at least three chirps.

//     Code a form with at least two inputs where users can submit new chirps from.

//     When a new chirp is submitted it should be shown back to the user in the timeline.

//     HINT: Don't try and code multiple components if you don't feel confident yet. Focus on building the entire functionality of this lab in a singular App.jsx file and then break it apart into smaller component files once you do so.

//     HINT: This lab will require array manipulation with React's immutable state. You may need to do some Google detective work to see how React state and arrays work together when "updating" them with new values.

// Advanced (optional)

//     Look into the npm packages of uuid for generating unique keys for each chirp, moment for nicely formatting timestamps for each chirp, and react-icons to add some SVG icons to really add that cool style to your Chirper lab.

//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
    //         setTimeout(() => {
        //             setLoaded(false)
        //         }, 3000);
        //     }, [loaded])
        
        //     if (loaded === false) {
            //         return (
                //             <>
                //                 <h1>"Website loading ..."</h1>
                //                 <button className='btn btn-primary' onClick={e => setLoaded(true)}>Show</button>
                //             </>
                //         )
                //     }

                
                // const [dateStamp, setDateStamp] = useState();
                
                // this got pushed into a useState
                // let msgHistory = [
                //     {
                //         uId: '550088c1-79a0-d85a-43cd-0c9f6cc219c7',
                //         user: '@HumptyDumpty10',
                //         msg: 'Peat and Repeat are in a boat together',
                //     },
                //     {
                //         uId: 'A20088c1-79a0-d85a-43cd-0c9f6cc219c7',
                //         user: '@AllTheKingsHorses',
                //         msg: 'Peat falls off and into the water',
                
                //     },
                //     {
                //         uId: 'x20D88c1-79a0-d85a-43cd-0c9f6cc219c7',
                //         user: '@BitsandBytes',
                //         msg: 'Who is left over?',
                
                //     },
                // ]
                
                
                // function makePost(user, message) {
                //     const div = document.createElement('div');
                //     div.setAttribute('Id', uuid());
                //     div.classList.add('col-12');
                //     div.classList.add('border');
                //     div.classList.add('border-primary');
                //     div.classList.add('m-1');
                //     const u = document.createElement('p');
                //     const m = document.createElement('p');
                //     u.textContent = "@" + user;
                //     m.textContent = '"' + message + '"';
                //     div.appendChild(u);
                //     div.appendChild(m);
                //     msgBoard.appendChild(div);
                //     let arrPush = {
                //         uId: div.id,
                //         user: user,
                //         msg: message
                
                //     };
                //     msgHistory.push(arrPush);
                //     console.log(msgHistory);
                // }