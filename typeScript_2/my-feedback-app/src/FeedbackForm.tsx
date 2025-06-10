import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the shape of the form state
interface FeedbackFormState {
  name: string;
  email: string;
  rating: number | '';
  feedback: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormState>({
    name: '',
    email: '',
    rating: '',
    feedback: '',
  });

  const [submittedData, setSubmittedData] = useState<FeedbackFormState | null>(null);
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    const { name, email, rating, feedback } = formData;
    if (!name || !email || rating === '' || !feedback) {
      setError('Please fill out all fields.');
      return;
    }

    setSubmittedData(formData);
    setFormData({ name: '', email: '', rating: '', feedback: '' });
    setError('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Customer Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Rating (1 to 5):</label><br />
          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="">Select rating</option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Feedback:</label><br />
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Thank you for your feedback!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Rating:</strong> {submittedData.rating}</p>
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
