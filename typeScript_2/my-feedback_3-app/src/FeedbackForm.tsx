// src/pages/FeedbackForm.tsx
import React, { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeedback } from './FeedbackContext';

const FeedbackForm: React.FC = () => {
  const { data, setData } = useFeedback();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === 'rating' ? Number(value) : value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.email || data.rating === '' || !data.feedback) {
      alert('Please fill all fields before proceeding.');
      return;
    }
    navigate('/summary');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <label>Name:</label>
      <input name="name" value={data.name} onChange={handleChange} />

      <label>Email:</label>
      <input name="email" type="email" value={data.email} onChange={handleChange} />

      <label>Rating:</label>
      <select name="rating" value={data.rating} onChange={handleChange}>
        <option value="">Select</option>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <label>Feedback:</label>
      <textarea name="feedback" value={data.feedback} onChange={handleChange} />

      <button type="submit">Next</button>
    </form>
  );
};

export default FeedbackForm;
