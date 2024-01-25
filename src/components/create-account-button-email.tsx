import { EmailAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../routes/firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Button = styled.span`
    margin-top: 50px;
    background-color: #1d9bf0;
    font-weight: 500;
    width: 100%;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export default function CreateAccountButton_Email() {
    const navigate = useNavigate();
    const onClick = async() => {
        try {
            const provider = new EmailAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        }
        catch (e) {
            console.error(e);
        }
    }
    return <Button onClick = {onClick}>
        계정 만들기
    </Button>
}