import { string, object, array } from "yup";

const NewEmployeeValidationSchema =  object().shape({
  firstName: string().required("Enter first name"),
  lastName: string().required("Enter last name"),
  summary: string().required("Enter summary information"),
  education: string().required("Enter education"),
  techSkills: array().of(
    object().shape({
      name: string().required("Enter name of tech skill"),
      description: string().required("Enter description of tech skill")
    })
  )
});

export default NewEmployeeValidationSchema;
