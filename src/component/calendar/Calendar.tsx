import React, {useState} from 'react'
import Datetime from 'react-datetime'
// import "react-datetime/css/react-datetime.css";

export default function Calendar() {
  return (
    <>

      <Datetime value={new Date()} input={true} className="w-60 appearance-none shadow border rounded py-3 px-2 text-gray-dar "/>
    </>
  )
}
