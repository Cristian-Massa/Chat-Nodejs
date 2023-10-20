import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function UseRedirect(param) {
    const redirect = useNavigate()
    const user = useSelector((state) => state.user)
    useEffect(() => {
        if (user.userName.length === 0) {
            redirect(param)
        } else {
            redirect(param)
        }
    }, [])
};