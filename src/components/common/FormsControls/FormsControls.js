import React from "react";
import { Field } from "redux-form";
import s from './FormControls.module.css';


const FormControl = ({input, meta: {touched, error}, children, ...props}) => {

    const hasError = touched && error;
    return (
        <>
        <div className={s.formControl + " " + ( hasError ? s.error : '' )}>
            {children}

        </div>
        { hasError && <span className={s.spanCl}>{error}</span>}
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

export const createField = (placeholder, name, validators, component, props={}, text = '') => (
                                        <div>
                                            <Field placeholder={placeholder} 
                                                    name={name} 
                                                    // type={'email'} 
                                                    component={component}
                                                    validate={validators}
                                                    {...props}
                                            />  {text}
                                        </div>)



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