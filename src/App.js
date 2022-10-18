import "./App.css"
import * as React from "react"
import useSyncQueryParams from "use-sync-query-params"

const Thing = () => {
  const params = useSyncQueryParams({ foo: "bar", foo2: "barz" })

  console.log("render")

  return (
    <div>
      <p>{params.getParam("foo")}</p>      
      <p>{window.location.search}</p>
      <p>Get all params</p>
      <pre>{JSON.stringify(params.getAllParams())}</pre>      
      <p>Get multiple params</p>
      <pre>{JSON.stringify(params.getParams('foo2', 'foo'))}</pre>
      <br />
      <button onClick={() => params.setParam("foo", "baz")}>
        Change bar to baz
      </button>
      <br />
      <button onClick={() => params.setParam("foo", "bar")}>
        Change baz to bar
      </button>
      <br />
      <button onClick={() => params.clearParam("foo")}>
        Clear query param
      </button>
      <br />
      <button onClick={() => params.setParam("foo", null)}>
        Clear query param null
      </button>
      <br />
      <button onClick={() => params.setParam("foo", undefined)}>
        Clear query param undefined
      </button>
      <br />
      <button onClick={() => params.setParam("foo", "")}>
        Clear query param empty string
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Thing />
    </div>
  )
}

export default App
