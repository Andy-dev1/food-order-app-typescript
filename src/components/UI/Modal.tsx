import classes from './Modal.module.css';
import ReactDom from 'react-dom';

interface IProps{
    children?:JSX.Element|JSX.Element[];
    onClose?:()=>void;
}


const Backdrop = ({onClose}:IProps) => {
    return <div className={classes.backdrop} onClick={onClose}/>
};
const ModalOverlay = ({children}:IProps) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {children}
        </div>
    </div>
};

const portalElement:any=document.getElementById('overlays');

const Modal = ({children,onClose}:IProps) =>{
    return <>
        {ReactDom.createPortal(<Backdrop onClose={onClose}/>,portalElement)}
        {ReactDom.createPortal(<ModalOverlay children={children}/>,portalElement)}
    </>
};

export default Modal;