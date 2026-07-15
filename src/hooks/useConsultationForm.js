import { useCallback, useState } from 'react';
import { sendConsultationEmail, isEmailJsConfigured } from '../services/emailService';

const initialState = {
  name: '',
  phone: '',
  destination: '',
  education: '',
  message: '',
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
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required';
    if (!formData.destination) nextErrors.destination = 'Select a destination';
    if (!formData.education) nextErrors.education = 'Select your education level';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [formData]);

  const submit = useCallback(async () => {
    if (!validate()) return false;
    setStatus('loading');
    try {
      if (isEmailJsConfigured()) {
        await sendConsultationEmail(formData);
      } else {
        await new Promise((r) => setTimeout(r, 1200));
      }
      setStatus('success');
      setFormData({ ...initialState, destination: defaultDestination });
      return true;
    } catch {
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
