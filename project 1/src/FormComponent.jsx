import { useState } from 'react';
import axios from 'axios';

export default function FormComponent() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => setFormData({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/submit', formData);
      alert('Data successfully submitted to backend!');
      handleReset(); // clears form on success
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Failed to submit. Is the Express server running?');
    }
  };

  // Upgraded High-Contrast Neon Glass Styles
  const styles = {
    card: {
      background: 'linear-gradient(135deg, rgba(30, 30, 46, 0.7) 0%, rgba(20, 20, 30, 0.8) 100%)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(135deg, rgba(30, 30, 46, 0.7), rgba(20, 20, 30, 0.8)), linear-gradient(135deg, #00f2fe, #4facfe)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      padding: '40px',
      borderRadius: '20px',
      maxWidth: '420px',
      margin: '60px auto',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(79, 172, 254, 0.15)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#fff',
    },
    title: {
      textAlign: 'center',
      marginTop: '0',
      marginBottom: '30px',
      color: '#4facfe',
      fontSize: '26px',
      fontWeight: '700',
      letterSpacing: '0.5px',
      textShadow: '0 0 15px rgba(79, 172, 254, 0.4)'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '30px'
    },
    input: {
      padding: '15px 18px',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      backgroundColor: 'rgba(15, 15, 25, 0.6)',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '15px'
    },
    btn: {
      flex: 1,
      padding: '14px 20px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    },
    submitBtn: {
      background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      color: '#000',
      boxShadow: '0 4px 20px rgba(79, 172, 254, 0.4)',
    },
    resetBtn: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: '#a0a0c0',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>User Registration</h3>
      <form onSubmit={handleSubmit}>
        
        <div style={styles.inputGroup}>
          <input 
            style={styles.input}
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter Full Name" 
            required 
          />
          <input 
            style={styles.input}
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter College Email" 
            required 
          />
        </div>

        <div style={styles.buttonContainer}>
          <button type="button" onClick={handleReset} style={{...styles.btn, ...styles.resetBtn}}>
            Clear
          </button>
          <button type="submit" style={{...styles.btn, ...styles.submitBtn}}>
            Submit to API
          </button>
        </div>

      </form>
    </div>
  );
}