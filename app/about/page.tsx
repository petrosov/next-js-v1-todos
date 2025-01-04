// Файл компонента формы
"use client";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Останавливаем перезагрузку страницы при отправке формы

    const formData = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message); // Отображаем сообщение от сервера
    } catch (error) {
      console.error("Error:", error);
      setMessage("Произошла ошибка при отправке данных.");
    }
  };

  return (
    <div>
      <h1>Контактная форма</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Электронная почта:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Телефон:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>

      {message && <div>{message}</div>} {/* Сообщение об успешной отправке или ошибке */}
    </div>
  );
};

export default Form;