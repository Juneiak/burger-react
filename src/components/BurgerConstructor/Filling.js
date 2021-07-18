import FillingStyles from './Filling.module.css';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from 'react-redux';
import {REMOVE_INGREDIENT_FROM_CONSTRUCTOR, UPDATE_SELECTED_INGREDIENT} from '../../services/actions/index.js';
import {useDrag, useDrop} from "react-dnd";

function Filling({item, index}) {

  const dispatch = useDispatch()

  const [{isFillingDrag}, fillinDragRef] = useDrag({
    type: 'filling',
    item: {index},
    collect: monitor => ({
      isFillingDrag: monitor.isDragging()

    })
  })

  const [{isFillingHover}, fillingDropRef] = useDrop({
    accept: 'filling',
    drop(item) {
      dispatch({
        type: UPDATE_SELECTED_INGREDIENT,
        toRemoveIndex: item.index,
        toInsertIndex: index})
    },
    collect: monitor => ({
      isFillingHover: monitor.isOver()
    })
  })

  

  function handleRemoveClick(index) {
    dispatch({type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, index})
  }

  const paddingTop = isFillingHover ? '90px' : '0';

  return (
    <li ref={fillingDropRef} style={{paddingTop}} className={FillingStyles.ingredient}>
      {!isFillingDrag && (
        <article ref={fillinDragRef}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={() => handleRemoveClick(index)}
          />
        </article>
      )}
      
  </li>    
  )
}

export default Filling;