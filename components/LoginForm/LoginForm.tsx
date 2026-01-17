export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <>
      <h2>Log in</h2>
      <p>
        Welcome back! Please enter your credentials to access your
        account and continue your babysitter search.
      </p>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Log in</button>
      </form>
    </>
  );
}
