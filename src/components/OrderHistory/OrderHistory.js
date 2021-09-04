import OrderCardList from "../orderCardList/OrderCardList";

function OrderHistory() {
  const fetch = {
    "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c8",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733d0",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d2",
        ],
        "_id": "",
        "status": "done",
        "number": 34535,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
    ],
    "total": 1,
    "totalToday": 1
  } 

  const {orders} = fetch
  return (
    <OrderCardList orders={orders} />
  )
}

export default OrderHistory;