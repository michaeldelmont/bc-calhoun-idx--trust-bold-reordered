// app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Michael Delmont, Realtor®</h1>
      {/* Do NOT pass onSubmit or any function props here */}
      <ContactForm />
    </main>
  );
}


