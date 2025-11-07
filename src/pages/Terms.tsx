import { motion } from "motion/react";

export function Terms() {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-16">
        <h1 className="text-4xl mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">These Terms of Service govern your use of Antony Digital Solutions KE's website and services.</p>
        <section className="space-y-4 text-sm text-muted-foreground">
          <p><strong>1. Acceptance of Terms.</strong> By using our website or services you agree to these Terms.</p>
          <p><strong>2. Services.</strong> We provide web and mobile development services. Specific terms for each engagement will be in a separate agreement.</p>
          <p><strong>3. Intellectual Property.</strong> All rights to the website content and source code are retained by Antony Digital Solutions KE unless otherwise agreed in writing.</p>
          <p><strong>4. Liability.</strong> Our liability is limited to the amount paid for the services provided. We are not liable for indirect or consequential damages.</p>
          <p><strong>5. Changes.</strong> We may update these Terms; continued use constitutes acceptance of any changes.</p>
        </section>
      </motion.div>
    </div>
  );
}
