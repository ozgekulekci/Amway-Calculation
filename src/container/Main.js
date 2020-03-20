import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTotal } from "../actions/actions";
import Card  from "../components/Card/Card";

function Main() {
    var main_tree = [{
      id:1, name:"You", bv:300, children:[{
        id:2, name: "DL.1", bv:300
      },{
        id:3, name: "DL.1", bv:300
      },{
        id:4, name: "DL.1", bv:300, children:[{
          id:5, name: "DL.1", bv:300
        },{
          id:6, name: "DL.1", bv:300
        },{
          id:7, name: "DL.1", bv:300
        }]
      }]
    }
      ];
      
    return(
        <React.Fragment>
            <Card main_tree={main_tree} children={false} id={1}/>
        </React.Fragment>
    )
}
export default Main;