import { useCallback, useState } from 'react';
import { sendConsultation, isEmailJsConfigured } from '../services/emailService';

const initialState = {
  name: '',
  phone: '',
  email: '',
  destination: '',
  education: '',
  message: '',
};

const isValidPhone = (phone) => {
  if (phone.startsWith('+')) {
    return phone.length === 12 && /^\+\d{11}$/.test(phone);
  }
  if (phone.startsWith('0')) {
    return phone.length === 10 && /^\d{10}$/.test(phone);
  }
  if (/^[1-9]/.test(phone)) {
    return phone.length === 9 && /^[1-9]\d{8}$/.test(phone);
  }
  return false;
};

export const useConsultationForm = (defaultDestination = '') => {
  const [formData, setFormData] = useState({ ...initialState, destination: defaultDestination });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }, []);

  const validate = useCallback(() => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    const phone = formData.phone.trim();
    if (!phone) {
      nextErrors.phone = 'Phone is required';
    } else if (!isValidPhone(phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.destination) nextErrors.destination = 'Select a destination';
    if (!formData.education) nextErrors.education = 'Select your education level';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [formData]);

  const submit = useCallback(async () => {
    if (!validate()) return false;
    setStatus('loading');
    try {
      await sendConsultation(formData);
      setStatus('success');
      setFormData({ ...initialState, destination: defaultDestination });
      return true;
    } catch (error) {
      if (import.meta.env) {
        console.error('[ConsultationForm] Submission failed:', error);
      }
      setStatus('error');
      return false;
    }
  }, [formData, defaultDestination, validate]);

  const reset = useCallback(() => {
    setStatus('idle');
    setErrors({});
  }, []);

  return { formData, updateField, submit, status, errors, reset, isConfigured: isEmailJsConfigured() };
};
