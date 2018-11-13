import getConfig from "next/config"

export default () => (
  <div>
    <pre>{JSON.stringify(getConfig(), null, " ")}</pre>
  </div>
)
