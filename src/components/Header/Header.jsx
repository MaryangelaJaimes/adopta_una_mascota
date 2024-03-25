import './Header.css'

const Header = ({ titulo }) => {
    return (
        <header className="container d-flex justify-content-center mt-5">
            <h1 className='titulo'>{titulo}</h1>
        </header>
    )
}

export default Header;