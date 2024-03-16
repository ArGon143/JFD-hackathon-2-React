import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../store/store"

const withRouterProviderApp = (App) => (props) => {
    return (
        <HashRouter basename="/">
            <Provider store={store}>
                {<App {...props} />}
            </Provider>
        </HashRouter>
    )
}

export default withRouterProviderApp