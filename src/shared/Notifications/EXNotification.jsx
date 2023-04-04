import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheckCircle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

const Toast = props => {
    const { type, index, onDeleteToast, text } = props
    const [title, setTitle] = useState()
    const [message, setMessage] = useState()
    const [background, setBackground] = useState()
    const [icon, setIcon] = useState(faBan)
    const BuildToast = () => {
      switch (type) {
        case 'success':
          setIcon(faCheckCircle)
          setTitle('Success')
          setMessage('Operation Successfull: ' + text)
          setBackground('rgba(13, 172, 21, 0.5)')
          break
        case 'warning':
          setIcon(faInfoCircle)
          setTitle('Warning')
          setMessage('Potensial issues Finded: ' + text)
          setBackground('rgba(231, 28, 214, 0.5)')
          break
        case 'error':
          setIcon(faBan)
          setTitle('Error')
          setMessage('Operation Failure: ' + text)
          setBackground('rgba(255, 0, 0, 0.5)')
          break
      }
    }
  
    useEffect(() => {
      BuildToast()
    }, [])
  
    return (
      <>
        <div id={'toast' + index} className={`notification EXToast top-right`} style={{ backgroundColor: background, boxShadow: "rgb(157 123 123 / 59%) 0px 1px 4px 0px" }}>
          <div className="notification_wrapper">
            <button className="notification_button" onClick={() => onDeleteToast(index)}>
              X
            </button>
            <div className="notification_image">
              <FontAwesomeIcon className="notification_icon" icon={icon} />
            </div>
            <div>
              <p className="notification_title">{title}</p>
              <p className="notification_description">{message}</p>
            </div>
          </div>
          <div className="notificationCountDownContainer">
            <div className="notificationCountDownBar"></div>
          </div>
        </div>
      </>
    )
  }

const EXNotification = (props) => {
    const { toastList, closeToast } = props
    const [list, setList] = useState(toastList)
  
    const deleteToast = id => {
      toastList.splice(id, 1)
      setList([...toastList])
      closeToast(toastList)
    }
  
    const deleteToastAuto = () => {
      toastList.splice(0, 1)
      setList([...toastList])
      closeToast(toastList)
    }
  
    useEffect(() => {
      setList(toastList)
    }, [toastList])
  
    useEffect(() => {
      const interval = setInterval(() => {
        
        if (toastList.length) {
          deleteToast(0)
        }
      }, 4000)
      return () => {
        clearInterval(interval)
      }
    }, [list])
  
    return (
      <>
        <div className={`notification-container top-right`}>
          {toastList && toastList.map((toast, i) => <Toast key={i} index={i} type={toast.type} text={toast.text} onDeleteToast={deleteToast} />)}
        </div>
      </>
    )
}

export default EXNotification