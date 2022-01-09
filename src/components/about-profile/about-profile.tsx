import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import AboutProfileStyles from './about-profile.module.css';
import { changeProfileData } from '../../services/actions/auth';
import { useSelector, useDispatch } from '../../services/hooks';

export function AboutProfile() {
  const [nameValue, setNameValue] = React.useState<string>('');
  const [emailValue, setEmailValue] = React.useState<string>('');
  const [passwordValue, setPasswordValue] = React.useState<string>('');
  const user = useSelector((store) => store.auth.user);

  const dispatch = useDispatch();

  const setInitialData = () => {
    setNameValue(user.name);
    setEmailValue(user.email);
  };

  React.useEffect(() => {
    setInitialData();
  }, [user]);

  const handleSaveClick = (evt: any): void => {
    evt.preventDefault();
    dispatch(changeProfileData({
      email: emailValue,
      password: passwordValue,
      name: nameValue,
    }))
      .then(() => setInitialData());
  };

  const handleCancelClick = (evt: any): void => {
    evt.preventDefault();
    setInitialData();
  };

  return (
    <div className={AboutProfileStyles.aboutProfile}>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Имя"
          onChange={(e) => setNameValue(e.target.value)}
          icon="EditIcon"
          value={nameValue}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
        />
      </div>
      <div className="mb-6">
        <Input
          type="email"
          placeholder="Логин"
          onChange={(e) => setEmailValue(e.target.value)}
          icon="EditIcon"
          value={emailValue}
          name="email"
          error={false}
          errorText="Ошибка"
          size="default"
        />
      </div>
      <div className="mb-6">
        <Input
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPasswordValue(e.target.value)}
          icon="EditIcon"
          value={passwordValue}
          name="password"
          error={false}
          errorText="Ошибка"
          size="default"
        />
      </div>
      <div className={AboutProfileStyles.buttons}>
        <Button onClick={handleSaveClick} type="primary" size="large">
          Сохранить
        </Button>
        <Button onClick={handleCancelClick} type="primary" size="large">
          Отмена
        </Button>
      </div>
    </div>

  );
}
