import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className="container max-w-sm mx-auto translate-y-3/4">
            <h1 className="text-black text-5xl text-center font-bold">Oops!</h1>
            <p className="text-xl text-center py-5 font-normal">Sorry, your request has no ending way</p>
            <p className="text-xl text-center py-0 font-semibold">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;