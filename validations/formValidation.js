import * as yup from "yup";

export const ticketRegistrationInfo = yup.object({
  photoAvatar: yup
    .mixed()
    .required("This field is required")
    .test(
      "fileSize",
      "File too large. Please upload a photo under 500KB",
      (value) => value?.[0]?.size <= 500 * 1024,
    )
    .test("fileType", "Unsupported file type (JPG or PNG)", (value) =>
      ["image/jpg", "image/png"].includes(value?.[0]?.type),
    ),
  fullName: yup
    .string()
    .min(3, "Name should be atleast 3 characters long")
    .matches(/^[a-zA-Zа-яА-Я ]*$/, "Name can't contain numbers")
    .required("This field is required"),
  email: yup.string().email().required(),
  githubUserName: yup
    .string()
    .test("starts-with-@", "Username must start with @", (value) =>
      value?.startsWith("@"),
    )
    .required("This field is required"),
});
