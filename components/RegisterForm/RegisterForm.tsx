export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <>
      <h2>Registration</h2>
      <p>Thank you for your interest in our platform! In order to register,
         we need some information. 
         Please provide us with the following information.
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Register</button>
      </form>
    </>
  );
}
