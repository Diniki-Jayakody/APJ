import { strings } from '../constants/strings';
import { contact } from '../constants/contact';
import { faqs, trustItems, partnerUniversities } from '../data/siteContent';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import ContactCard from '../components/ui/ContactCard';
import FAQItem from '../components/ui/FAQItem';
import { getServiceIcon } from '../utils/icons';

export const ContactSection = () => (
  <Section id="contact" background="soft">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-secondary p-8 text-white shadow-brand-md">
        <h2 className="text-3xl font-semibold">{strings.sections.contact.title}</h2>
        <p className="mt-2 font-normal leading-relaxed text-sky-100/90">{strings.sections.contact.description}</p>
        <div className="mt-6 space-y-3">
          {contact.branches.map((b) => (
            <ContactCard key={b.id} icon="location">
              <b>{b.name}</b>
              {b.address}<br />
              <a href={b.phoneLink} className="hover:text-white">{b.phone}</a>
            </ContactCard>
          ))}
          <ContactCard icon="email">
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            <br />{contact.website}
          </ContactCard>
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
    <div className="mt-10 rounded-2xl border border-line bg-sky-50 p-6">
      <p className="mb-4 text-center text-sm font-medium uppercase tracking-wide text-muted">Partner Universities</p>
      <div className="flex flex-wrap justify-center gap-3">
        {partnerUniversities.map((uni) => (
          <span key={uni} className="rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-navy-900">
            {uni}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

export default ContactSection;
