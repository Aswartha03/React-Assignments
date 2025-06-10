// src/pages/FeedbackSummary.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeedback } from './FeedbackContext';

const FeedbackSummary: React.FC = () => {
  const { data } = useFeedback();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.name || !data.email || data.rating === '' || !data.feedback) {
      alert("Please complete the form first.");
      navigate('/');
    }
  }, [data, navigate]);

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Rating:</strong> {data.rating}</p>
      <p><strong>Feedback:</strong> {data.feedback}</p>
    </div>
  );
};

export default FeedbackSummary;
