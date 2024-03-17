import { HashRouter } from "react-router-dom"

const withRouterProviderApp = (App) => (props) => {
    return (
        <HashRouter basename="/">
            {<App {...props} />}
        </HashRouter>
    )
}

export default withRouterProviderApp