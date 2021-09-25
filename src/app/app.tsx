import React from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Location } from 'history';
import AppStyles from './app.module.css';
import { AppHeader } from '../components/app-header/app-header';
import { ProtectedRoute } from '../components/hocs/protected-route';
import { useDispatch, useSelector } from '../services/hooks';
import { getUser } from '../services/actions/auth';
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';
import { Modal } from '../components/modals/modal/modal';
import { getIngredientsList, removeSelectedIngredient } from '../services/actions/index';
import { OrderInfoPage } from '../pages/order-info/order-info-page';
import { OrderInfo } from '../components/order-info/order-info';
import {
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPage,
  ResetPage,
  ProfilePage,
  NotFound,
  IngredientDetailsPage,
  FeedPage,
} from '../pages';
import { removeSelectedOrder } from '../services/actions/order';

interface ICustomLocation extends Location {background: Location;}

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation<ICustomLocation>();
  const history = useHistory();

  const selectedIngredient: any = useSelector((store) => store.index.selectedIngredient);
  const selectedOrder: any = useSelector((store) => store.order.selectedOrder);

  React.useEffect(() => {
    dispatch(getIngredientsList());
    dispatch(getUser());
  }, []);

  function handleCloseIngredientModal() {
    dispatch(removeSelectedIngredient());
    history.goBack();
  }

  function handleCloseOrderModal() {
    dispatch(removeSelectedOrder());
    history.goBack();
  }

  const background = (history.action === 'PUSH' || history.action === 'REPLACE') && location?.state?.background;

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <Switch location={background || location}>

        <Route path="/" exact>
          <ConstructorPage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/register" exact>
          <RegisterPage />
        </Route>

        <Route path="/forgot-password" exact>
          <ForgotPage />
        </Route>

        <Route path="/reset-password" exact>
          <ResetPage />
        </Route>

        <ProtectedRoute exact path="/profile/orders/:id">
          <OrderInfoPage />
        </ProtectedRoute>

        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>

        <Route path="/ingredients/:id">
          <IngredientDetailsPage />
        </Route>

        <Route exact path="/feed">
          <FeedPage />
        </Route>

        <Route exact path="/feed/:id">
          <OrderInfoPage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Switch>
        { background && selectedOrder?._id
          && (
          <Route path={`${background.pathname}/:id`}>
            <Modal isOpen={!!selectedOrder} onClose={handleCloseOrderModal}>
              <OrderInfo />
            </Modal>
          </Route>
          )}

        { background && selectedIngredient?._id
          && (
          <Route path="/ingredients/:id">
            <Modal isOpen={!!selectedIngredient} onClose={handleCloseIngredientModal}>
              <IngredientDetails />
            </Modal>
          </Route>
          )}

      </Switch>

    </div>
  );
};
