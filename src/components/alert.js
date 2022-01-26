const alert = ({ closeArea, color, message }) => {
    return (
        <>
            <div className={`alert alert-${color} d-flex justify-content-between align-items-center`}>
                <p className="m-0">{message} successfully</p>
                <i onClick={closeArea} className="fas fa-window-close"></i>
            </div>
        </>
    )
}

export default alert;