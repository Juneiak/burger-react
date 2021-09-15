import React from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import ForgotPageStyles from './ForgotPage.module.css';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {sendCode} from '../../utils/api.js';
import {useSelector} from "react-redux";

export function ForgotPage() {
  
  const [emailRestoreValue, setEmailRestoreValue] = React.useState('')
  const user = useSelector(store => store.auth.user)
  const history = useHistory()
  const onRestoreClick = (evt) => {
    evt.preventDefault()
    sendCode({email: emailRestoreValue})
      .then(data => {history.push('/reset-password', {codeIsSended: true})})
      .catch(err => console.error(err))
  }

  if (user.name) return (
    <Redirect to='/' />
  )
  
  return (
    <main className={ForgotPageStyles.main}>
      <form className={`${ForgotPageStyles.form} mb-20`}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <div className='mb-6'>
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={e => setEmailRestoreValue(e.target.value)}
            value={emailRestoreValue}
            name={'emailRestore'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>

        <Button onClick={onRestoreClick} type="primary" size="medium">
          Восстановить
        </Button>
        
      </form>
      <nav className={ForgotPageStyles.nav}>
        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to='/login' className={`${ForgotPageStyles.link} text text_type_main-default`} >Войти</Link></p>
      </nav>

    </main>
  )
}