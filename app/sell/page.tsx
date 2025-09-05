// app/sell/page.tsx
import SellForm from '@/components/SellForm';

export default function SellPage() {
  return (
    <main className="container mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Get Your Home’s Value</h1>
      {/* Do NOT pass onSubmit or any function props here */}
      <SellForm />
    </main>
  );
}
