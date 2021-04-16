import css from './footer.module.css'
import emailIcon from './email.svg'

export default function Footer() {
    return (
        <footer className='css.footer'>
            <div className={css.contacts}>
                <p>Contact us: </p>
                <img src={emailIcon} className={css.icon} alt='' />
                <a href="mailto:support@todoapp.com" className={css.link}>support@todoapp.com</a>
            </div>   
        </footer>
    )
}