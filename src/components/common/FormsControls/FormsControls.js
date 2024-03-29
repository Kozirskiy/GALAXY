import React from "react";
import s from './FormControls.module.css';


const FormControl = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <>
        <div className={s.formControl + " " + ( hasError ? s.error : '' )}>
            {props.children}

        </div>
        { hasError && <span className={s.spanCl}>{meta.error}</span>}
        </>
    )
}

export const Textarea = (props) => {
const {input, meta, child, ...restProps} = props;
    
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};
export const Input = (props) => {
const {input, meta, child, ...restProps} = props;
    
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};




// export const Input = ({input, meta, ...props}) => {

//     const hasError = meta.touched && meta.error;
//     return (
//         <>
//         <div className={s.formControl + " " + ( hasError ? s.error : '' )}>
//             <div>
//               <input  {...input} {...props} />
//             </div>
            
//         </div>
//         {hasError && <span className={s.spanCl}>{meta.error}</span>}
//         </>
       
        
//     )
// };