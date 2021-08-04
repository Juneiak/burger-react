import React from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import ResetPageStyles from './ResetPage.module.css';
import {Link} from 'react-router-dom'

function ResetPage() {
  
  const [newPasswordValue, setNewPasswordValue] = React.useState('')
  const [codeValue, setCodeValue] = React.useState('')
  const inputRef = React.useRef(null)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  
  const onResetClick = () => {

  }

  return (
    <main className={ResetPageStyles.main}>
      <form className={`${ResetPageStyles.form} mb-20`}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <div className='mb-6'>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={e => setNewPasswordValue(e.target.value)}
            value={newPasswordValue}
            name={'newPassword'}
            error={false}
            ref={inputRef}
            errorText={'Ошибка'}
            size={'default'}
            icon={'ShowIcon'}
            onIconClick={onIconClick}
          />
        </div>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setCodeValue(e.target.value)}
            value={codeValue}
            name={'code'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>

        <Button onClick={onResetClick} type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <nav className={ResetPageStyles.nav}>
        <p className="text text_type_main-default text_color_inactive">Забыли пароль? <Link to='/login' className={`${ResetPageStyles.link} text text_type_main-default`} >Восстановить пароль</Link></p>
      </nav>

    </main>
  )
}

export default ResetPage;