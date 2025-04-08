import React from "react"
import { FormContext } from "../context/FormContext"


export default function FormComponent() {
  const { state, dispatch } = React.useContext(FormContext)

  const handleChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.username === "Kevin") {
      dispatch({
        type: 'setError',
        field: 'username',
        error: 'Your kind is not welcome!'
      })
    } else {
      dispatch({ type: 'clearErrors' })
      console.log('Form submitted', state)
      dispatch({ type: 'clearForm' })
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          id="username" />
      </div>
      <>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </>
      <button type="submit">Submit</button>
      {JSON.stringify(state)}
    </form>
  )
}