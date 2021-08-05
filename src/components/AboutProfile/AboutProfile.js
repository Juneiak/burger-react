import React from "react";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import AboutProfileStyles from './AboutProfile.module.css';


function AboutProfile() {

  const [nameValue, setNameValue] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')

  const inputRef = React.useRef(null)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  return (
    <div className={AboutProfileStyles.aboutProfile}>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setNameValue(e.target.value)}
          icon={'EditIcon'}
          value={nameValue}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className='mb-6'>
        <Input
          type={'email'}
          placeholder={'Логин'}
          onChange={e => setEmailValue(e.target.value)}
          icon={'EditIcon'}
          value={emailValue}
          name={'email'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className=''>
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={e => setPasswordValue(e.target.value)}
          icon={'EditIcon'}
          value={passwordValue}
          name={'password'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
    </div>
      
  )
}

export default AboutProfile;
