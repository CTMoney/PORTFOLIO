import React from "react"
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyApagFlbMBRV0HGngUh5kpVT-fYPYIh3z8",
    authDomain: "whoops-98302.firebaseapp.com",
    databaseURL: "https://whoops-98302.firebaseio.com",
    projectId: "whoops-98302",
    storageBucket: "whoops-98302.appspot.com",
    messagingSenderId: "339120322906"
};
firebase.initializeApp(config);

const database = firebase.database();

const handleSubmit = (e) => {

    const formData = new FormData(e.target)
    const user = {}
    e.preventDefault()
    e.target.reset();

    for (let entry of formData.entries()) {
        user[entry[0]] = entry[1]
    }
    database.ref().push({
        name: user.name,
        email: user.email,
        subject: user.subject,
        message: user.message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
}

const Contact = () => {
  return (
    <form
      className="border mx-auto"
      name="handleSubmit"
      onSubmit={handleSubmit}
      id="contactForm"
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control mx-auto"
          ref="fieldName"
          name="name"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control mx-auto"
          ref="fieldEmail"
          name="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control mx-auto"
          ref="fieldSubject"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control mx-auto"
          ref="fieldMessage"
          name="message"
          rows="3"
          placeholder="Message"
        />
      </div>
      <button type="submit" className="btn btn-lg btn-block mx-auto">
        Submit
      </button>
    </form>
  )
}

export default Contact
