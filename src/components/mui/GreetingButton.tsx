// components/GreetingButton.tsx
import React, { useState } from "react";
import { fetchGreeting } from "../../services/greetingService";
type Props = {
  name: string;
  onGreet?: (message: string) => void;
};

const GreetingButton: React.FC<Props> = ({ name, onGreet }) => {
  const [greeting, setGreeting] = useState("");

  const handleClick = async () => {
    const msg = await fetchGreeting(name);
    setGreeting(msg);
    onGreet?.(msg);
  };

  return (
    <div>
      <button onClick={handleClick}>Greet</button>
      {greeting && <p data-testid="greeting">{greeting}</p>}
    </div>
  );
};

export default GreetingButton;
