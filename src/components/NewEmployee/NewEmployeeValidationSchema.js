import { string, object, array, boolean, date } from "yup";

const NewEmployeeValidationSchema = object().shape({
  firstName: string().required("Enter first name"),
  lastName: string().required("Enter last name"),
  summary: string().required("Enter summary information"),
  group: object()
    .shape({
      name: string().required("Add group")
    })
    .required("Add group"),
  status: string().required("Enter status"),
  availabilityDate: date(),
  fromNow: boolean().required("Enter age"),
  englishLevel: string().required("Enter english level"),
  birthday: date().required("Enter birthday"),
  education: string().required("Enter education"),
  skills: array()
    .of(
      object().shape({
        title: string().required("Enter name of tech skill"),
        primary: boolean()
      })
    )
    .min(1),
    softSkills: array()
    .of(
      object().shape({
        title: string().required("Enter name of soft skill"),
        primary: boolean()
      })
    )
    .min(1)
});

export default NewEmployeeValidationSchema;
