export const loginData = {
  title: "Login To Continue",
  fields: [
    {
      name: "username",
      type: ["text", "email"],
      label: "Username",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      required: true,
    },
    {
      name: "rememberMe",
      type: "checkbox",
      label: "Remember Me",
      required: false,
    },
  ],
};
export const signupData = {
  title: "Signup To Explore More",
  fields: [
    {
      name: "firstName",
      type: "text",
      label: "First Name",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      label: "Last Name",
      required: true,
    },
    {
      name: "username",
      type: "text",
      label: "Username",
      required: true,
    },
    {
      label: "Gender",
      name: "gender",
      type: "radio",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Others",
          value: "others",
        },
      ],
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
      name: "contact",
      type: "tel",
      label: "Contact",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      required: true,
    },
    {
      name: "confirmPwd",
      type: "password",
      label: "Confirm Password",
      required: true,
    },
    {
      name: "profile",
      type: "file",
      // label: "Upload Your Photo",
    },
    {
      name: "acceptTerms",
      type: "checkbox",
      label: "I agree to the Terms & Conditions and Privacy Policy",
      required: true,
    },
  ],
};
