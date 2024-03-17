import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

const withRouterProviderApp = (App) => (props) => {
    return (
        <HashRouter basename="/">
            {<App {...props} />}
        </HashRouter>
    )
}

export default withRouterProviderApp