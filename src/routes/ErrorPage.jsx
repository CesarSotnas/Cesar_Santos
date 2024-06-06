import { useRouteError } from "react-router-dom";
import './css/Error.css'

const ErrorPage = () => {
    // eslint-disable-next-line no-unused-vars
    const error = useRouteError();
  
    return (
        <div className="error-page">
            <h1>Ops</h1>
            <p>Temos um problema</p>
        </div>
  )
}

export default ErrorPage