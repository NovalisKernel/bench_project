import { string, object, array, boolean, date } from "yup";

const EditEmployeeValidationSchema = object().shape({
  firstName: string().required("Enter first name"),
  lastName: string().required("Enter last name"),
  summary: string().required("Enter summary information"),
  email: string().email(),
  education: string(),
  summary: string(),
  status: string().required("Enter status"),
  availabilityDate: date(),
  englishLevel: string().required("Enter english level"),
  group: object()
    .shape({
      name: string().required("Add group")
    })
    .required("Add group"),
  seniorityLevel: string(),
  seniority: string(),
  technicalSkills: array()
    .of(
      object().shape({
        title: string().required("Enter name of tech skill")
      })
    )
    .min(1),
  softSkills: array()
    .of(
      object().shape({
        title: string().required("Enter name of tech skill")
      })
    )
    .min(1)
});

export default EditEmployeeValidationSchema;
