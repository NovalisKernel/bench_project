import { string, object, array, date } from "yup";

const NewEmployeeValidationSchema = object().shape({
  firstName: string().trim().required("Enter first name").matches(/^[a-zA-Z\s]+$/, "Only English letters are allowed"),
  lastName: string().trim().required("Enter last name").matches(/^[a-zA-Z\s]+$/, "Only English letters are allowed"),
  email: string().email("Enter valid email"),
  education: string().trim().matches(/^[a-zA-Z,.\s]+$/, "Only English letters are allowed"),
  summary: string().trim().matches(/^[a-zA-Z,.!?:\s]+$/, "Only English letters are allowed"),
  status: string().required("Enter status"),
  availabilityDate: date(),
  englishLevel: string().required("Enter english level"),
  group: object()
    .shape({
      name: string()
        .required("Enter group")
        .nullable()
    })
    .required("Enter group"),
  seniorityLevel: string().trim().required("Enter seniority level"),
  seniority: string().matches(/^[a-zA-Z0-9,.\s]+$/, "Only English letters and numbers are allowed"),
  technicalSkills: array()
    .of(
      object().shape({
        title: string().required("Enter name of tech skill")
      })
    )
    .min(1, "Technical skills must have at least one items"),
  softSkills: array()
    .of(
      object().shape({
        title: string().required("Enter name of soft skill")
      })
    )
    .min(1, "Soft skills must have at least one items")
});

export default NewEmployeeValidationSchema;
