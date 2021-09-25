import React from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import RegisterPageStyles from './register-page.module.css';
import {Link, Redirect} from 'react-router-dom'
import {register} from '../../services/actions/auth.js';
import {useDispatch, useSelector} from "../../services/hooks";

export function RegisterPage() {
  
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [nameValue, setNameValue] = React.useState('')
  const dispatch = useDispatch()
  const inputRef = React.useRef(null)
  const user = useSelector(store => store.auth.user)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  const onRegisterClick = (evt) => {
    evt.preventDefault()
    dispatch(register({
      email: emailValue,
      password: passwordValue,
      name: nameValue
    }))
  }

  if (user.name) return (
    <Redirect to='/' />
  )
  
  return (
    <main className={RegisterPageStyles.main}>
      <form className={`${RegisterPageStyles.form} mb-20`}>
        <h1 className="text text_type_main-medium mb-6">
          Регистрация
        </h1>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setNameValue(e.target.value)}
            value={nameValue}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className='mb-6'>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={e => setEmailValue(e.target.value)}
            value={emailValue}
            name={'email'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className='mb-6'>
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={e => setPasswordValue(e.target.value)}
            icon={'ShowIcon'}
            value={passwordValue}
            name={'password'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>

        <Button onClick={onRegisterClick} type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <nav className={RegisterPageStyles.nav}>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link to='/login' className={`${RegisterPageStyles.link} text text_type_main-default`} >Войти</Link></p>
      </nav>

    </main>
  )
}