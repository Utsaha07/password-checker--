import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[@$!%*?&]/.test(pwd)) score++;

    switch (score) {
      case 0:
        return "";
      case 1:
      case 2:
        return "Weak";
      case 3:
      case 4:
        return "Medium";
      case 5:
        return "Strong";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  return (
    <div className="container">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      <div className={`strength ${strength.toLowerCase()}`}>
        Strength: {strength}
      </div>
    </div>
  );
}

export default App;
