import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    function handelerClick() {
        navigate('/countries')
      }
      return (
        <div>
          <button onClick={handelerClick} >Go To Countries</button>
        </div>
      )
    } 