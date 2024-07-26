import { useState, useEffect } from "react"



const useStatus = () => {
    const [onlinestatus, setonlineStatus] = useState(true)

    useEffect(() => {

        window.addEventListener("offline", () => {
            setonlineStatus(false)

        });
        window.addEventListener("online", () => {
            setonlineStatus(true)

        });

    }, [])



    return onlinestatus
}

export default useStatus