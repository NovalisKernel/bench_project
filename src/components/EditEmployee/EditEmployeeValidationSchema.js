import { string, object, array, date } from "yup";

const EditEmployeeValidationSchema = object().shape({
  firstName: string().required("Enter first name"),
  lastName: string().required("Enter last name"),
  email: string().email(),
  education: string(),
  summary: string(),
  status: string().required("Enter status"),
  availabilityDate: date(),
  englishLevel: string().required("Enter english level"),
  group: object()
    .shape({
      name: string()
        .required("Add group")
        .nullable()
    })
    .required("Add group"),
  seniorityLevel: string().nullable(),
  seniority: string(),
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

export default EditEmployeeValidationSchema;
