import getCurrentDate from '../App'
function Datenow(separator = '') {

    return (
        <>
            <h2>Date page</h2>
            <span>{new Date().toLocaleString() + ""}</span>
        </>)
}

export default Datenow;