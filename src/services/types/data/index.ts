export type TIngredient = {
  readonly _id: string,
  readonly name: string,
  readonly type: string,
  readonly proteins: number,
  readonly fat: number,
  readonly carbohydrates: number,
  readonly calories: number,
  readonly price: number,
  readonly image: string,
  readonly image_mobile: string,
  readonly image_large: string,
  readonly __v: number,
};

export type TUser = {
  readonly email: string;
  readonly name: string;
};

export type TOrder = {
  readonly ingredients: string[];
  readonly _id: string;
  readonly status: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type TOrdersInfo = {
  readonly success: string;
  readonly orders: TOrder[];
  readonly total: number;
  readonly totalToday: number;
}

export type TParsedOrder = {
  readonly totalPrice: number;
  readonly selectedIngredients: TIngredient[];
  readonly name: string;
  readonly number: number
  readonly id: string;
  readonly status: string;
  readonly createdTime: string;
}

export type TOrderDetails = {
  readonly name: string;
  readonly order: {number: number};
  readonly success: boolean;
}
