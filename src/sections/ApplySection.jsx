import { motion, AnimatePresence } from 'framer-motion';
import { IoCheckmarkCircle, IoAlertCircle } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { countries } from '../data/countries';
import { useFormContext } from '../context/FormContext';
import { useConsultationForm } from '../hooks/useConsultationForm';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';

export const ApplySection = () => {
  const { selectedDestination } = useFormContext();
  const { formData, updateField, submit, status, errors } = useConsultationForm(selectedDestination);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit();
  };

  return (
    <Section id="apply" background="default" className="!py-12">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-primary-light to-secondary shadow-brand-lg">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-wide text-secondary-light">{strings.sections.apply.kicker}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl leading-snug">{strings.sections.apply.title}</h2>
            <p className="mt-4 font-normal leading-relaxed text-sky-100/90">{strings.sections.apply.description}</p>
            <Button href="/#contact" variant="secondary" className="mt-6">Contact APJ Now</Button>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-3 bg-white/10 p-6 md:p-8" noValidate>
            {selectedDestination && (
              <p className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                Selected destination: {selectedDestination}
              </p>
            )}
            <input
              type="text"
              placeholder={strings.form.name}
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="rounded-xl border-0 px-4 py-3 text-sm text-ink"
              aria-label={strings.form.name}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-xs text-red-200">{errors.name}</p>}
            <input
              type="tel"
              placeholder={strings.form.phone}
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="rounded-xl border-0 px-4 py-3 text-sm text-ink"
              aria-label={strings.form.phone}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="text-xs text-red-200">{errors.phone}</p>}
            <select
              value={formData.destination}
              onChange={(e) => updateField('destination', e.target.value)}
              className="rounded-xl border-0 px-4 py-3 text-sm text-ink"
              aria-label={strings.form.destination}
            >
              <option value="">{strings.form.destination}</option>
              {countries.map((c) => (
                <option key={c.id} value={c.applyName}>{c.applyName}</option>
              ))}
            </select>
            {errors.destination && <p className="text-xs text-red-200">{errors.destination}</p>}
            <select
              value={formData.education}
              onChange={(e) => updateField('education', e.target.value)}
              className="rounded-xl border-0 px-4 py-3 text-sm text-ink"
              aria-label={strings.form.education}
            >
              <option value="">{strings.form.education}</option>
              {strings.form.educationOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.education && <p className="text-xs text-red-200">{errors.education}</p>}
            <textarea
              rows={3}
              placeholder={strings.form.message}
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
              className="rounded-xl border-0 px-4 py-3 text-sm text-ink"
              aria-label={strings.form.message}
            />
            <Button type="submit" variant="secondary" disabled={status === 'loading'}>
              {status === 'loading' ? strings.form.loading : strings.form.submit}
            </Button>
            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm font-bold text-emerald-300"
                >
                  <IoCheckmarkCircle /> {strings.form.success}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-bold text-red-300"
                >
                  <IoAlertCircle /> {strings.form.error}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ApplySection;
