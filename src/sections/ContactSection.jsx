import { IoCallOutline, IoMailOutline, IoLocationOutline, IoGlobeOutline } from 'react-icons/io5';
import { strings } from '../constants/strings';
import { contact } from '../constants/contact';
import { faqs, trustItems, partnerUniversities } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import FAQItem from '../components/ui/FAQItem';
import { getServiceIcon } from '../utils/icons';

const BranchCard = ({ branch }) => (
  <article className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-5 shadow-brand-sm backdrop-blur-sm">
    <div className="mb-3 flex items-start justify-between gap-3">
      <div>
        {/* <p className="text-[11px] font-medium uppercase tracking-wide text-sky-100/80">Branch</p> */}
        <h3 className="mt-1 text-lg font-semibold text-white">{branch.name}</h3>
      </div>
      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-sky-100 transition-colors hover:bg-white/20 hover:text-white"
        aria-label={`Open ${branch.name} on Google Maps`}
      >
        <IoLocationOutline className="text-xl" aria-hidden />
      </a>
    </div>

    <p className="text-sm leading-relaxed text-sky-100/90">{branch.address}</p>

    <div className="mt-4 space-y-2 border-t border-white/15 pt-4">
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-sky-100/70">
        <IoCallOutline aria-hidden /> Contact Numbers
      </p>
      <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-center md:gap-x-4 md:gap-y-1">
        {branch.phones.map((phone, index) => (
          <span key={`${branch.id}-${phone.link}`} className="inline-flex items-center gap-4">
            {index > 0 && (
              <span className="hidden text-white/35 md:inline" aria-hidden>
                |
              </span>
            )}
            <a
              href={phone.link}
              className="text-sm font-medium text-white transition-colors hover:text-secondary-light"
            >
              {phone.display}
            </a>
          </span>
        ))}
      </div>
    </div>

    {/* <div className="mt-4 space-y-1 border-t border-white/15 pt-4">
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-sky-100/70">
        <IoMailOutline aria-hidden /> Email
      </p>
      <a
        href={`mailto:${contact.mailtoEmail}`}
        className="text-sm font-medium text-white transition-colors hover:text-secondary-light"
      >
        {contact.email}
      </a>
    </div> */}

    <a
      href={branch.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-secondary-light hover:text-white"
    >
      <IoLocationOutline aria-hidden />
      Open in Google Maps
    </a>
  </article>
);

const SharedContactCard = () => (
  <article className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-5 shadow-brand-sm backdrop-blur-sm">
    <p className="text-[11px] font-medium uppercase tracking-wide text-sky-100/80">Shared Contact</p>
    <h3 className="mt-1 text-lg font-semibold text-white">APJ Consultancy</h3>
    <p className="mt-2 text-sm leading-relaxed text-sky-100/90">
      Reach our team by email or visit the official website for the latest updates.
    </p>

    <div className="mt-3 space-y-4 border-t border-white/15 pt-4">
      <div>
        <p className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-sky-100/70">
          <IoMailOutline aria-hidden /> Main Email
        </p>
        <a
          href={`mailto:${contact.mailtoEmail}`}
          className="text-sm font-medium text-white transition-colors hover:text-secondary-light"
        >
          {contact.email}
        </a>
      </div>
      <div>
        <p className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-sky-100/70">
          <IoGlobeOutline aria-hidden /> Official Website
        </p>
        <a
          href={contact.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white underline-offset-2 transition-colors hover:text-secondary-light hover:underline"
        >
          {contact.websiteUrl}
        </a>
      </div>
      <div>
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-sky-100/70">WhatsApp</p>
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white transition-colors hover:text-secondary-light"
        >
          {contact.whatsappDisplay}
        </a>
      </div>
    </div>
  </article>
);

export const ContactSection = () => (
  <Section id="contact" background="soft">
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-semibold text-navy-900">{strings.sections.contact.title}</h2>
        <p className="mt-2 max-w-xl font-normal leading-relaxed text-muted">
          {strings.sections.contact.description}
        </p>

        <div className="mt-3 rounded-3xl bg-gradient-to-br from-navy-900 to-secondary p-5 text-white shadow-brand-md sm:p-6">
          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
            {contact.branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
            {/* <SharedContactCard /> */}
          </div>
        </div>
      </div>

      <div>
        <Heading
          align="left"
          kicker={strings.sections.faq.kicker}
          title={strings.sections.faq.title}
          description={strings.sections.faq.description}
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const TrustSection = () => (
  <Section id="trust" background="default">
    <Heading
      kicker={strings.sections.trust.kicker}
      title={strings.sections.trust.title}
      description={strings.sections.trust.description}
    />
    <div className="grid gap-6 md:grid-cols-4">
      {trustItems.map((item) => {
        const Icon = getServiceIcon(item.icon);
        return (
          <div key={item.id} className="rounded-2xl border border-line bg-white p-6 text-center shadow-brand-sm">
            <Icon className="mx-auto mb-3 text-3xl text-secondary" aria-hidden />
            <p className="font-semibold text-navy-900">{item.label}</p>
          </div>
        );
      })}
    </div>
    <div className="mt-10 rounded-3xl border border-secondary/25 bg-gradient-to-br from-sky-100 via-white to-sky-50 p-7 shadow-brand-sm ring-1 ring-secondary/15 sm:p-8">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
        Partner Universities
      </p>
      <p className="mb-5 text-center text-sm font-normal text-muted">
        Trusted academic pathways through recognized partner institutions.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {partnerUniversities.map((uni) => (
          <span
            key={uni}
            className="rounded-full border border-secondary/25 bg-white px-4 py-2 text-xs font-semibold text-navy-900 shadow-brand-sm"
          >
            {uni}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

export default ContactSection;
