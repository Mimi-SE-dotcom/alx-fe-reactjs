import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Mock API call can go here
    }
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
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;