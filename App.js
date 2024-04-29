
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TaskStatusProvider } from './Store/Context/TaskStatusContext';



function App() {

  return (<>
      <ToastContainer />
    <TaskStatusProvider>
      <TaskPage />
    </TaskStatusProvider>
  </>);
}

// const App = () => {


//   const { handleSubmit, formState: { errors }, register } = useForm({ mode: 'all' });

//   const apply = () => {
//     alert("ok");
//   }

//   return <div style={{ padding: 100 }}>
//     <form onSubmit={handleSubmit(apply)}>
//       <div className={errors.firstName ? 'error input-group' : 'input-group'}>
//         <input id="firstName" type="text" {...register("firstName",
//           {
//             required: { value: true, message: "First Name is Required" },
//             maxLength: { value: 10, message: "FirstName Length must be less than 10" },
//             validate:(val)=>{
//               // connect to back end
//               if(val.includes("morteza"))
//               {
//                 return "Alert!!!!! First Name is morteza"
//               }
//               return true;
//             }

//           })} />
//         {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
//       </div>

//       <div className={errors.age ? 'error input-group' : 'input-group'}>
//         <input id="age" type="number" {...register("age",
//           {
//             required: { value: true, message: "Age is Required" },
//             min: { value: 18, message: "Age  must be more than 18" },
//             max: { value: 60, message: "Age  must be less than 60" }
//           })} />
//         {errors.age && <p className='error-message'>{errors.age.message}</p>}
//       </div>
//       <div className={errors.email ? 'error input-group' : 'input-group'}>
//         <input id="email" type="text" {...register("email",
//           {
//             required: { value: true, message: "Email is Required" },
//             pattern: {
//               value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//               message: "Invalid email address"}
//             })} />
//         {errors.email && <p className='error-message'>{errors.email.message}</p>}
//       </div>

//       <button className='btn info'>apply</button>
//     </form>
//   </div>
// }

export default App;
