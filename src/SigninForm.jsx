import { useFormik } from 'formik';
import * as Yup from 'yup';
import './SigninForm.css';

function SigninForm(props) {
 
  const formik = useFormik({
    initialValues: {

      email: '',
      password:'',
    },
    validationSchema: Yup.object({
      
    
      email: Yup.string().email('Direccion de correo invalida').required('Campo requerido'),

      password: Yup.string()
      .required('Campo requerido')
      .min(6, 'La contraseña debe de contener 8 caracteres minimo')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
         "La contraseña debe de estar compuesta de 8 caracteres donde por lo menos una mayuscula, una minuscula, un numero y un caracter especial"
       ),
      

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div id='SigninForm'>
    <form id="User" onSubmit={formik.handleSubmit}>
      <h1>Inicia sesion</h1>
      
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder='Email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={"errors bounce"}>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder='Contraseña'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="errors bounce">{formik.errors.password}</div>
      ) : null}


      <div className='botones'>
      <button type="submit">Iniciar sesion</button>
      <label htmlFor='newUser'>Eres cliente nuevo?</label>
      <button type="button" onClick={props.onCloseSignIn}>Regístrate</button>
      
      </div>
    </form>
    </div> 
  );
}

export default SigninForm;
