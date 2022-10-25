import styled from "styled-components";
export const Container=styled.div`
    min-height:692px;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:0;
    overflow:gidden;
    background:linear-gradient(
        108deg,
        rgba(1,147,86,1) 0%,
        rgba(10,201,122,1) 100%
    );
`

export const FormWrap=styled.div`
    hight:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:500px){
        height:80%;
    }
`
export const FormH1=styled.h1`
    color:white;
    font-size:18px;
    font-weight:500;
    text-align:center;
    margin-top:16px;
`
export const Icon =styled.a`
    color:white;
    font-size:24px;
    font-weight:800;
    text-decoration:none;
    cursor:pointer;
`
export const FormContent =styled.div`
    background:black;
    min-height:400px;
    display:flex;
    flex-direction:column;
    justidy-content:space-around;
    width:min(90%,500px);
    margin:auto;
    border-radius:14px;
`
export const Form =styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:80%;
    margin-inline:auto;
    height:360px;
`
export const FormLabel =styled.label`
    color:white;
    font-size:16px;
`
export const FormInput=styled.input`
    height:2.5rem;
    border-radius:6px;
    border:none;
    width:90%;
`
export const FormButton =styled.button`
    color:white;
    font-size:20px;
    font-weight:700;
    background:green;
    border:none;
    width:90%;
    height:2.5rem;
    cursor:pointer;
    border-radius:5px;
`
export const Text =styled.p`
    color:white;
    cursor:pointer;
`

