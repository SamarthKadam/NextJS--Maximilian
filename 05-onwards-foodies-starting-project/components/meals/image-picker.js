'use client'
import React, { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({label,name}) {

    const imageinput=useRef()
    const [pickedImage,setPickedImage]=useState()

    function handlePickClick(){
        imageinput.current.click();
    }

    function handleImageChange(event){
        const file=event.target.files[0];

        if(!file)
            {
                return;
            }
       const filereader= new FileReader();
       filereader.onload=()=>{
       setPickedImage(filereader.result)
       }
       filereader.readAsDataURL(file)
    }







  return (
    <div className={classes.picker}>
        <label htmlFor='image'>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage&&<p>No image picked yet</p>}
                {pickedImage&&<Image src={pickedImage} fill alt='Image selected by user'></Image>}
            </div>
            <input onChange={handleImageChange} ref={imageinput} className={classes.input} type="file" id="image" accept='image/png,image/jpeg' name={name}></input>
            <button onClick={handlePickClick} className={classes.button} type='button'>Pick and Image</button>
        </div>
    </div>
  )
}
