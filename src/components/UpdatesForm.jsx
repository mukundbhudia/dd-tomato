import React, { useState } from 'react'

const keepUpToDateEndpoint = 'https://mywebsite.com/endpoint/'

const submitFormHandler = (data) => {
  // TODO: Wire up with endpoint & handle post-submission
  fetch(keepUpToDateEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

const validateFrom = (name, email) => {
  // TODO: More advanced email checks & name sanitisation (maybe with regex)
  if (name && name.length <= 100 && email && email.length <= 200) {
    let dataToSubmit = { name, email }
    console.debug(dataToSubmit)
    submitFormHandler(dataToSubmit)
  } else {
    console.error(`Error: From data is invalid`)
  }
}

const UpdatesForm = ({ vegName }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <h3>Keep up to date on the {vegName}</h3>
      <p>
        Enter your name and email address below to receive weekly updates on the
        status of the {vegName}
      </p>
      <form
        onSubmit={() => {
          validateFrom(name, email)
        }}
      >
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            <strong>Name</strong>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              placeholder="Enter your name here"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            <strong>E-mail</strong>
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Enter your E-mail address here"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="inputEmail"
            className="col-sm-2 col-form-label"
          ></label>
          <div className="col-sm-6">
            <button
              type="button"
              className="btn btn-link float-right"
              onClick={() => {
                validateFrom(name, email)
              }}
            >
              Submit &gt;
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdatesForm
