import React from "react"

const initialState = {
  "username": "",
  "email": ""
}
// type
interface Action {
  type: string,
  field?: keyof typeof initialState
  value?: string
  error?: string
}

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action!.field as string]: action!.value
      }
    case 'setError':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field as string]: action.error
        }
      }
    case 'clearErrors':
      return {
        ...state,
        errors: {}
      }
    case 'clearForm':
      return { ...initialState }
    default:
      throw new Error("Unknown action type")
  }

}

export default function FormComponent() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

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