import React,{Fragment} from "react"
import Card from "./Card"
import Button from "./Button"
import classes from "./ErrorModal.module.css"
import ReactDom from "react-dom"
export default function ErrorModal(props){
  function Bakdrops(props){
    return(<div className={classes.backdrop} onClick={props.onConfirm} />)
  }
  function ModalOverley(props){
    return( <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>)
  }
    return(
        <Fragment>
        {ReactDom.createPortal(<Bakdrops onConfirm={props.onConfirm}/>,document.getElementById("backdrops"))}
        {ReactDom.createPortal(<ModalOverley title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById("ModalOverley"))}
       
      </Fragment>
    )
}