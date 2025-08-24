import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    setError("");
    // Simulate API call
    console.log("Registering user:", formData);
    alert("User registered successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="border p-2 rounded"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className="border p-2 rounded"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
}