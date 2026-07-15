import { motion } from 'framer-motion';
import { IoCheckmark } from 'react-icons/io5';
import { cn } from '../../utils/cn';

export const ApprovalStamp = ({ label, rotate = 0, className, index = 0 }) => (
  <motion.div
    className={cn('relative w-[148px] select-none md:w-[160px]', className)}
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
    style={{ rotate }}
    aria-hidden
  >
    <div
      className="relative overflow-hidden rounded-md border-[3px] border-dashed border-red-700/80 bg-[#FBF7F0] px-3 py-3 shadow-brand-md"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(120,40,30,0.015) 2px, rgba(120,40,30,0.015) 3px)',
      }}
    >
      {/* Embossed inner frame */}
      <div className="absolute inset-1 rounded-sm border border-red-800/20 pointer-events-none" />

      <div className="relative flex flex-col items-center text-center">
        {/* Circular seal */}
        <div className="relative mb-2 flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-double border-red-700" />
          <div className="absolute inset-[3px] rounded-full border border-red-600/50" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-white shadow-inner">
            <IoCheckmark className="text-lg" aria-hidden />
          </div>
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-red-800/90">
          Official Seal
        </p>
        <p className="mt-1 text-[10px] font-semibold leading-snug uppercase tracking-wide text-red-900 md:text-[11px]">
          {label}
        </p>
        <p className="mt-1.5 text-[8px] font-medium uppercase tracking-wider text-red-700/70">
          APJ Verified
        </p>
      </div>
    </div>
  </motion.div>
);

export default ApprovalStamp;
