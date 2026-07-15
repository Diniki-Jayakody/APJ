import { IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { cn } from '../../utils/cn';

const iconMap = {
  phone: IoCallOutline,
  email: IoMailOutline,
  location: IoLocationOutline,
};

export const ContactCard = ({ title, children, icon, className }) => {
  const Icon = iconMap[icon];
  return (
    <div className={cn('rounded-2xl border border-white/20 bg-white/10 p-5', className)}>
      {Icon && (
        <Icon className="mb-2 text-xl text-sky-100" aria-hidden />
      )}
      {title && <b className="block text-white">{title}</b>}
      <div className="mt-1 text-sm text-sky-100/90">{children}</div>
    </div>
  );
};

export default ContactCard;
