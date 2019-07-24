import { string, object, array, boolean, date, number } from "yup";

const EditEmployeeValidationSchema =  object().shape({
  firstName: string().required("Enter first name"),
  lastName: string().required("Enter last name"),
  summary: string().required("Enter summary information"),
  group: string().required("Add group"),
  availabilityDate: date(),
  age: number().required("Enter age"),
  fromNow: boolean(),
  onProject: boolean(),
  education: string().required("Enter education"),
  techSkills: array().of(
    object().shape({
      name: string().required("Enter name of tech skill"),
      isPrimary: boolean()
    })
  ).min(1)
});

export default EditEmployeeValidationSchema;