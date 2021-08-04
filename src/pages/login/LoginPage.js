import React from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LoginPageStyles from './LoginPage.module.css';
import {Link} from 'react-router-dom'

function LoginPage() {
  
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const inputRef = React.useRef(null)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  const onEnterClick = () => {

  }

  return (
    <main className={LoginPageStyles.main}>
      <form className={`${LoginPageStyles.form} mb-20`}>
        <h1 className="text text_type_main-medium mb-6">
          Вход
        </h1>
        <div className='mb-6'>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={e => setEmailValue(e.target.value)}
            value={emailValue}
            name={'name'}
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
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>

        <Button onClick={onEnterClick} type="primary" size="medium">
          Войти
        </Button>
      </form>
      <nav className={LoginPageStyles.nav}>
        <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <Link to='/register' className={`${LoginPageStyles.link} text text_type_main-default`} >Зарегистрироваться</Link></p>
        <p className="text text_type_main-default text_color_inactive">Забыли пароль? <Link to='/forgot-password' className={`${LoginPageStyles.link} text text_type_main-default`} >Восстановить пароль</Link></p>
      </nav>

    </main>
  )
}

export default LoginPage;