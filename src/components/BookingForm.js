import React,{useState}from 'react'


export const BookingForm = (props) => {
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[occasion, setOccasion] = useState("");
    const[guest, setGuest] = useState("");
    
    const handleChange = (value) =>{
        setDate(value);
        props.dispatch(new Date(value));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submitForm(e);

    }

  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='Book-Date'>Choose the Date</label>
                         <input id = "Book-Date" type="date" value = {date} onChange={(e)=> handleChange(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor='Book-Time'>Choose the Time</label>
                        <select id = "Book-Time" value = {time} onChange={(e)=> setTime(e.target.value)} required>
                            <option value="">Select the Time</option>
                            {
                                props.availableTimes.availableTimes.map((availableTimes)=> {
                                    return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>})
                            }
                            
                        </select>
                    </div>

                    <div>
                    <label htmlFor='Book-Guest'>Number of guests</label>
                    <input required id = "Book-Guest" placeholder="0" min='1' value = {guest} onChange={(e)=> setGuest(e.target.value)} />
                    </div>

                    <div>

                    <label htmlFor='Book-Occasion'>Choose the Occasion</label>

                    <select id = "Book-Occasion" value = {occasion} onChange={(e)=> setOccasion(e.target.value)} required>
                       <option value="">Choose an Occasion</option>
                       <option value="Birthday">Birthday</option>
                       <option value="Anniversary">Anniversary</option>
                       <option value="Other">Other</option>
                            
                    </select>

                    </div>
                    <div className='btnReceive'>
                    <input aria-label = 'On Click' type='submit' value={"Make Your Reservation"}/>
                    </div>


                </fieldset>
            </form>
        </section>
    </header> 
    )
}