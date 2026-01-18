import FormLayout from "../FormLayout/FormLayout";
import TextInput from "../TextInput/TextInput";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <FormLayout
      title="Registration"
      text="Thank you for your interest in our platform! Please provide the following information."
      onSubmit={handleSubmit}
    >
      <TextInput type="text" placeholder="Name" required />
      <TextInput type="email" placeholder="Email" required />
      <TextInput type="password" placeholder="Password" required />

      <SubmitBtn>Register</SubmitBtn>
    </FormLayout>
  );
}
