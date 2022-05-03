import { useFormik } from 'formik';
import * as Yup from 'yup';
import './SignupForm.css';

function SignupForm(props) {

  

  const formik = useFormik({
    initialValues: {
      nickname: '',
      email: '',
      password:'',
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .max(15, 'El usuario debe de consistir de 15 caracteres o menos')
        .required('Campo requerido'),
    
      email: Yup.string().email('Direccion de correo invalida').required('Campo requerido'),

      password: Yup.string()
      .required('Campo requerido')
      .min(6, 'La contraseña debe de contener 8 caracteres minimo')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
         "La contraseña debe de estar compuesta de 8 caracteres donde por lo menos una mayuscula, una minuscula, un numero y un caracter especial"
       ),
      

      verpass: Yup.string()
      .test('passwords-match', 'Las contraseñas deben coincidir', function(value){
        return this.parent.password === value
      })

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div id='SignupForm'>
    <form id="NewUser" onSubmit={formik.handleSubmit}>
      <h1>Crear un usuario nuevo</h1>
      <label htmlFor="nickname">Nickname</label>
      <input
        id="nickname"
        name="nickname"
        type="text"
        placeholder='Nickname'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nickname}
      />
      {formik.touched.nickname && formik.errors.nickname ? (
        <div className="errors bounce">{formik.errors.nickname}</div>
      ) : null}


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

      <label htmlFor="verpass">Verificar Contraseña</label>
      <input
        id="verpass"
        name="verpass"
        type="password"
        placeholder='Comprobar contraseña'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.verpass}
      />
      {formik.touched.verpass && formik.errors.verpass ? (
        <div className="errors bounce">{formik.errors.verpass}</div>
      ) : null}

      <div className='botones'>
      <button type="submit">Regístrate</button>
      <label>Ya tienes cuenta?</label>
      <button type='button' onClick={props.onCloseSignUp}>Iniciar sesion</button>
      </div>
    </form>
    </div> 
  );
}

export default SignupForm;
