import './Button.css'

const Button = props => {

    const classText = props.type === 'warn' ? 'yellow-button' : 'grey-button'

    return <a href={props.link} className={classText}>{props.text}</a>
}

export default Button