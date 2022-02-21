import { FC } from "react"

interface TabProps {
    name: string;
    issuer: string;
    validForm: string;
    validTill: string;
}

const TabContent: FC<TabProps> = ({ name, issuer, validForm, validTill }) => {

    return (
        <div className="tabContent">
            <p>Common Name: {name}</p>
            <p>Issuer CN: {issuer}</p>
            <p>Valid From: {validForm}</p>
            <p>Valid Till: {validTill}</p>
        </div>
    )
}


export default TabContent