import { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from '@mui/material/Button';
import axios from "axios";

const GoogleCaptcha = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null)

    const onChange = useCallback((value) => {
        console.log(Boolean(value));
        if (value) {
            setDisabled(false)
        }
    }, [])

    useEffect(() => {
        console.log('render')
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const inputVal = await e.target[0].value;
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();


        await axios.post(`http://localhost:5000/api/v1/post`, { token })
            .then(res => console.log(res))
            .catch((err) => {
                console.log(err);
            })
        // e.preventDefault();
        // const token = captchaRef.current.getValue();
        // console.log(token)
        // captchaRef.current.reset();
    }


    return (
        <>
            <ReCAPTCHA
                sitekey="6LeRNJMpAAAAAKyOMpsLMuK-kQM2Ylz3m7cNSdcI"
                ref={captchaRef}
                onChange={onChange}
            />
            <Button disabled={disabled} onClick={handleSubmit} variant="contained">Submit with Captcha</Button>
        </>
    )

}

export default GoogleCaptcha