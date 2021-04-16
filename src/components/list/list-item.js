import {useState} from 'react'

export default function ListItem(props) {
    const {completed, content} = props
    const [isCompleted, setIsCompleted] = useState(completed)

    function onChange() {
        setIsCompleted(state => {
            return !isCompleted
        })
    }

    return (
        <li>
            <input type="checkbox" checked={isCompleted} onChange={onChange} />
            {isCompleted? (
                <del> {content} </del>
            ):(
                <span>{content}</span>
            )}
        </li>
    )
}