import Title from './Title'

const Header = ({ titleText, subtitle }) => {

    return (
        <header>
            <Title text={titleText} />
            <p>{subtitle}</p>
            <hr></hr>
        </header>
    )
}

export default Header