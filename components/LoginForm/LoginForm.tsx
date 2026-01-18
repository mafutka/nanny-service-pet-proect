import FormLayout from "../FormLayout/FormLayout";
import TextInput from "../TextInput/TextInput";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <FormLayout
      title="Log in"
      text="Welcome back! Please enter your credentials to access your account."
      onSubmit={handleSubmit}
    >
      <TextInput type="email" placeholder="Email" required />
      <TextInput type="password" placeholder="Password" required />

      <SubmitBtn>Log in</SubmitBtn>
    </FormLayout>
  );
}
