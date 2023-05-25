import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Kitchen Lab`;
    },[title])
};

export default useTitle;