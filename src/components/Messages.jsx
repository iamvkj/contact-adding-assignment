import React, { useState } from "react";
import axios from "axios";

const Messages = () => {

    const [text, setText] = useState("");

    const SendMessage = (e) => {
        axios.post("http://localhost:8000/messages", {
            text, created_at: new Date()
        })
    };

    return (
        <>
            <div className="ui main">
                <h2> Add Contact </h2>
                <form className="ui form" onSubmit={SendMessage}>
                    <div className="filed pt-3 pb-3">
                        <textarea
                            className="form-control"
                            type="text"
                            id="text"
                            name="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows="3"
                            placeholder="Enter your message"
                            required="required"
                            autoComplete="off"
                            disabled="true"
                        />
                    </div>
                    <div className="pt-5">
                        <button className="ui button blue">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Messages;