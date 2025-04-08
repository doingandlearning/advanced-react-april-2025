import React from 'react'


const initialState = {
  "username": "",
  "email": "",
  "errors": {}

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

export const FormContext = React.createContext<{} | { state: typeof initialState, dispatch: () => {} }>({})


export function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [name, setName] = React.useState("")
  return <FormContext.Provider value={{ state, dispatch, name }}>
    {children}
  </FormContext.Provider>
}