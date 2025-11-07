import { motion } from "motion/react";

export function Privacy() {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-16">
        <h1 className="text-4xl mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">This Privacy Policy explains how Antony Digital Solutions KE collects and uses personal data.</p>
        <section className="space-y-4 text-sm text-muted-foreground">
          <p><strong>1. Data We Collect.</strong> We collect contact information you provide (name, email, phone) and form submissions.</p>
          <p><strong>2. How We Use Data.</strong> We use data to respond to inquiries, provide services, and improve our offerings.</p>
          <p><strong>3. Data Sharing.</strong> We don't sell personal data. We may share data with contractors who help deliver services under NDA.</p>
          <p><strong>4. Security.</strong> We implement reasonable security measures but cannot guarantee absolute security.</p>
          <p><strong>5. Contact.</strong> For privacy questions contact kipronohantony@gmail.com.</p>
        </section>
      </motion.div>
    </div>
  );
}
