"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketFrom = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [fromData, setFromData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form>
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={fromData.title}
        />
      </form>
    </div>
  );
};

export default TicketFrom;
