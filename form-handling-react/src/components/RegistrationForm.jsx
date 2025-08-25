import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Destructure for easier usage
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }
    console.log("Form submitted:", formData);
    // API call can be placed here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;