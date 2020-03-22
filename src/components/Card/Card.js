import React, {  useRef } from 'react'
import Licard from './Licard'
import "./Card.css"
import { addName } from '../../actions/actions';

function Card(props) {
    var reduxdan_gelen_main_tree = [
        {
            maxid: 8,
            id: 1,
            name: "You",
            bv: 300,
            children: [
              { id: 2, name: "DL.1", bv: 300 },
              { id: 3, name: "DL.1", bv: 300 },
              {
                id: 4,
                name: "DL.1",
                bv: 300,
                children: [
                  { id: 5, name: "DL.1", bv: 300 },
                  { id: 6, name: "DL.1", bv: 300 },
                  {
                    id: 7,
                    name: "DL.1",
                    bv: 300,
                    children: [{ id: 8, name: "DL.1", bv: 300 }]
                  }
                ]
              }
            ]
          }
        ];
    
    var children = null
    if (props.main_tree) {
        children = props.main_tree.map((reply, i) => {
            return (
                <Card key={i} id={reply.id} main_tree={reply.children} children={true} 
                                name={reply.name} bv={reply.bv}/>
            )
        })
    }
    const addCard = (arr=reduxdan_gelen_main_tree,parentId)=>{
        const id = reduxdan_gelen_main_tree[0].maxid
        if(Array.isArray(arr)){
            arr.map(el=>{
                if(el.id === parentId){
                    if(el.children === undefined){
                        el["children"]=[]
                    }
                    el.children.push({
                        id:id+1, name: "DL.1", bv:300
                    })
                    reduxdan_gelen_main_tree[0].maxid = id+1
                }
                if (el.children){
                    addCard(el.children, parentId)
                }
            })
        }
    }
    const deleteCard = (arr=reduxdan_gelen_main_tree,parentId)=>{
        if(Array.isArray(arr)){
            arr.map((el,i)=>{
                if(el.id === parentId){
                    arr.splice(i,1)
                    console.log(JSON.stringify(reduxdan_gelen_main_tree));
                }
                if (el.children){
                    deleteCard(el.children, parentId)
                }
            })
        }
    }
    const changeValue = (arr=reduxdan_gelen_main_tree,parentId, key, newValue)=>{
        if(Array.isArray(arr)){
            arr.map(el=>{
                if(el.id === parentId){
                    el[key]=newValue
                    console.log(JSON.stringify(reduxdan_gelen_main_tree));
                }
                if (el.children){
                    changeValue(el.children, parentId, key, newValue)
                }
            })
        }
    }

    const onChangeName = (id) => {
        // change value in reduxdan_gelen_main_tree by id
        changeValue(reduxdan_gelen_main_tree,id, "name", "NewValue")
    }
    const onChangeNumber = (id) => {
        // change value in reduxdan_gelen_main_tree by id
        changeValue(reduxdan_gelen_main_tree, id, "bv", "NewValue")
    }
    const onClickAdd = (id) => {
        // change value in reduxdan_gelen_main_tree by id
        addCard(reduxdan_gelen_main_tree,id)
    }
    const onClickDelete = (id) => {
        // change value in reduxdan_gelen_main_tree by id
        deleteCard(reduxdan_gelen_main_tree, id)
    }

    // const cardRef = useRef()
    return (
        props.children ?
            <Licard children={children} onChangeName={() => onChangeName(props.id)}
                onChangeNumber={() => onChangeNumber(props.id)}
                onClickAdd={() => onClickAdd(props.id)}
                onClickDelete={() => onClickDelete(props.id)}
                name={props.name}
                bv={props.bv}
            />
            :
            <div id="hesap-tree-container" className="deneme">
                <ul id="hesap-ul">
                    <Licard children={children}
                        onChangeName={() => onChangeName(props.id)}
                        onChangeNumber={() => onChangeNumber(props.id)}
                        onClickAdd={() => onClickAdd(props.id)}
                        onClickDelete={() => onClickDelete(props.id)}
                        name={props.name}
                        bv={props.bv}
                    />
                </ul>
            </div>
    )
}

export default Card;