const alert = ({ closeArea }) => {
    return (
        <>
            <div className="alert alert-danger d-flex justify-content-between align-items-center">
                <p>Delete successfully</p><i onClick={closeArea} className="fas fa-window-close"></i>
            </div>
        </>
    )
}

export default alert;