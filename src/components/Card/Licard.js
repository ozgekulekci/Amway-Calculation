import React, { useState, useRef } from 'react'

function Licard(props) {
    return (
        <li className="ng-scope">
            <div>
                <h5 className="ng-binding">
                    <span className="text-primary icon-user" aria-hidden="true"></span>
                    <input type="text" value="Input" onChange={props.onChangeName} /><br />
                    <small>Self BV: </small>
                    <input type="number" onChange={props.onChangeNumber} /><br />
                    <small>Total: </small>0<br />
                </h5>
                <a href="#" title="Add a new downline" className="add-button" onClick={props.onClickAdd}><span className="label label-success">+</span></a>
                <a href="#" title="Delete this IBO and its downlines" className="pull-right" onClick={props.onClickDelete}><span className="label label-default">x</span></a>
            </div>

            <ul className="hesap-ul">
                {props.children}
            </ul>
        </li>
    )
}

export default Licard;