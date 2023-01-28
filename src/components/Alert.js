import React from 'react'

const Alert = (props) => {
    const Capitalize=(word)=>
    {
 let lower=word.toLowerCase();
 return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (

  props.alert&&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>  

  )
}

export default Alert

/*   <strong>{props.alert.type}</strong>:{props.alert.msg}; */