import React, {  useRef } from 'react'
import Licard from './Licard'
import "./Card.css"

function Card(props) {

    var children = null
    if (props.main_tree) {
        children = props.main_tree.map((reply, i) => {
            return (
                <Card key={i} id={reply.id} main_tree={reply.children} children={true} />
            )
        })
    }

    const onChangeName = (id) => {
        // change value in main_tree by id
        console.log('id :', id);
    }
    const onChangeNumber = (id) => {
        // change value in main_tree by id
        console.log('id :', id);
    }
    const onClickAdd = (id) => {
        // change value in main_tree by id
        console.log('id :', id);
    }
    const onClickDelete = (id) => {
        // change value in main_tree by id
        console.log('id :', id);
    }

    // const cardRef = useRef()
    return (
        props.children ?
            <Licard children={children} onChangeName={() => onChangeName(props.id)}
                onChangeNumber={() => onChangeNumber(props.id)}
                onClickAdd={() => onClickAdd(props.id)}
                onClickDelete={() => onClickDelete(props.id)}
            />
            :
            <div id="hesap-tree-container">
                <ul id="hesap-ul">
                    <Licard children={children}
                        onChangeName={() => onChangeName(props.id)}
                        onChangeNumber={() => onChangeNumber(props.id)}
                        onClickAdd={() => onClickAdd(props.id)}
                        onClickDelete={() => onClickDelete(props.id)}
                    />
                </ul>
            </div>
    )
}

export default Card;