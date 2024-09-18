const Login = () => {
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 bg-secondary p-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text" id="inlineFormInputGroup">@</div>
                                    </div>
                                    <input type="text" placeholder="Email / Phone Number" aria-describedby="inlineFormInputGroup" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;