import Card from "../components/ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from 'react'
export function NewMeetupForm(){
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();
    function submitHandler(event){
        event.preventDefault();
        const meetupData={
            title:titleInputRef.current.value,
            image:imageInputRef.current.value,
            address:addressInputRef.current.value,
            description:descriptionInputRef.current.value
        }
        console.log(meetupData);
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text"required={true} id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup image url</label>
                <input type="url"required={true} id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text"required={true} id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Meetup description</label>
                <textarea type="text"required={true} id="description" rows={5} ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button >Add Meetup</button>
            </div>
        </form>
    </Card>;
}